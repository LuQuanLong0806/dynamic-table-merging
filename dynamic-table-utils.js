/*!
 * dynamic-table-utils.js
 * 动态表格工具函数 —— Single Source of Truth
 *
 * 引用方式：
 *   1. 浏览器 <script src>：自动挂载 window.DTUtils
 *   2. CommonJS / ES module：module.exports = DTUtils
 *   3. previewEngineHTML 字符串注入：DTUtilsFactory.toString() + '(window)'
 *
 * 注意：buildFormModel 中 upload 类型走"标量分支"（对齐生产组件 dynamic-eval-table.vue）
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  }
  if (typeof window !== 'undefined') {
    window.DTUtils = factory();
  }
  if (typeof globalThis !== 'undefined' && !globalThis.DTUtils) {
    globalThis.DTUtils = factory();
  }
  // 兼容老调用名（不污染全局，仅当 root 是 window 时挂）
  root.DTUtils = root.DTUtils || factory();
})(typeof self !== 'undefined' ? self : this, function () {
  function parseRange(v) {
    var p = String(v).split(',').map(Number);
    var mn = Math.min.apply(null, p);
    var mx = Math.max.apply(null, p);
    return { start: mn, end: mx, span: mx - mn + 1 };
  }

  // upload cell 值归一化（兼容旧数据格式）
  // 旧：JSON 字符串 '{"path":"x","name":"a.pdf"}' / 单对象 / 数组 / 空字符串
  // 新：统一数组 [{path, name}, ...]
  function normalizeUploadVal(val) {
    if (val == null || val === '') return [];
    if (typeof val === 'string') {
      try {
        var parsed = JSON.parse(val);
        if (Array.isArray(parsed)) return parsed;
        if (parsed && typeof parsed === 'object') return [parsed];
        return [];
      } catch (e) {
        return [];
      }
    }
    if (Array.isArray(val)) return val;
    if (typeof val === 'object') return [val];
    return [];
  }

  function buildFormModel(cells) {
    var m = {};
    (cells || []).forEach(function (c) {
      if (!c || !c.id) return;
      if (c.type === 'number') {
        m[c.id] = c.value != null && c.value !== '' ? Number(c.value) : null;
      } else if (c.type === 'checkbox') {
        m[c.id] = Array.isArray(c.value) ? c.value : [];
      } else if (['input', 'textarea', 'select', 'radio', 'date', 'upload'].indexOf(c.type) >= 0) {
        m[c.id] = c.value != null ? c.value : '';
      }
    });
    return m;
  }

  function buildGrid(cells) {
    var safeCells = cells || [];
    var cellMap = {};
    safeCells.forEach(function (c) { cellMap[c.id] = c; });

    var maxC = 0, maxR = 0;
    safeCells.forEach(function (c) {
      var xr = parseRange(c.x), yr = parseRange(c.y);
      if (xr.end > maxC) maxC = xr.end;
      if (yr.end > maxR) maxR = yr.end;
    });

    var G = [], O = [];
    for (var r = 0; r < maxR; r++) {
      G[r] = []; O[r] = [];
      for (var c = 0; c < maxC; c++) { G[r][c] = null; O[r][c] = false; }
    }

    var sorted = safeCells.slice().sort(function (a, b) {
      return parseRange(b.y).span * parseRange(b.x).span -
             parseRange(a.y).span * parseRange(a.x).span;
    });

    sorted.forEach(function (cell) {
      var xr = parseRange(cell.x), yr = parseRange(cell.y);
      var r0 = yr.start - 1, c0 = xr.start - 1;
      if (r0 < 0 || c0 < 0) return;
      var entry = { cell: cell, rowspan: yr.span, colspan: xr.span, alts: null };
      if (G[r0][c0]) {
        if (!G[r0][c0].alts) G[r0][c0].alts = [];
        G[r0][c0].alts.push(entry);
        return;
      }
      G[r0][c0] = entry;
      for (var r = r0; r < r0 + yr.span && r < maxR; r++) {
        for (var c = c0; c < c0 + xr.span && c < maxC; c++) {
          if (!(r === r0 && c === c0)) O[r][c] = true;
        }
      }
    });

    var rows = [];
    for (var r = 0; r < maxR; r++) {
      var cols = [];
      for (var c = 0; c < maxC; c++) {
        if (O[r][c]) { cols.push({ skip: true }); continue; }
        var e = G[r][c];
        if (!e) { cols.push({ skip: false, cell: null }); continue; }
        var isCtrl = ['input', 'textarea', 'number', 'select', 'radio', 'checkbox', 'date', 'upload']
          .indexOf(e.cell.type) >= 0;
        var cls = [];
        if (e.cell.type === 'text' && (c === 0 || c === 2) && /<b>/.test(e.cell.content || '')) {
          cls.push('cell-group');
        }
        cols.push({
          skip: false,
          cell: e.cell,
          rowspan: e.rowspan,
          colspan: e.colspan,
          alts: e.alts || [],
          isLabel: e.cell.type === 'label',
          isText: e.cell.type === 'text',
          isControl: isCtrl,
          isFormula: e.cell.type === 'formula',
          cls: cls.join(' ')
        });
      }
      rows.push(cols);
    }
    return { rows: rows, cellMap: cellMap, maxC: maxC, maxR: maxR };
  }

  // ---- 表达式求值（带编译缓存，cacheKey = kind + fmKeysSig + expr）----
  var _exprCache = {};

  function _buildLocals(fm) {
    return Object.keys(fm).map(function (k) {
      return 'var ' + k + '=fm[' + JSON.stringify(k) + '];';
    }).join('');
  }

  function _fmKeysSig(fm) {
    return Object.keys(fm).sort().join('|');
  }

  function _compile(kind, expr, fm, argList) {
    var sig = _fmKeysSig(fm);
    var cacheKey = kind + '|' + sig + '|' + expr;
    var fn = _exprCache[cacheKey];
    if (!fn) {
      var locals = _buildLocals(fm);
      fn = new Function(argList, locals + 'return(' + expr + ')');
      _exprCache[cacheKey] = fn;
    }
    return fn;
  }

  function evalDepends(expr, fm, extra) {
    if (!expr || typeof expr !== 'string' || !String(expr).trim()) return false;
    try {
      var fn = _compile('dep', expr, fm, 'fm,extra');
      return fn(fm, extra || {});
    } catch (e) {
      console.error('[evalDepends 失败]', expr, e);
      return false;
    }
  }

  function evalCustom(expr, value, fm, extra) {
    if (!expr || typeof expr !== 'string' || !String(expr).trim()) return false;
    try {
      var fn = _compile('cust', expr, fm, 'value,fm,extra');
      return fn(value, fm, extra || {});
    } catch (ex) {
      console.error('[evalCustom 失败]', expr, ex);
      return false;
    }
  }

  // 数学公式求值（不缓存：scope 经常变）
  function evalMath(expr, scope) {
    if (!expr || typeof expr !== 'string') return null;
    try {
      var locals = Object.keys(scope || {}).map(function (k) {
        return 'var ' + k + '=' + JSON.stringify(scope[k]) + ';';
      }).join('');
      var fn = new Function('Math', locals + 'return(' + expr + ')');
      return fn(Math);
    } catch (e) {
      console.error('[evalMath 失败]', expr, e);
      return null;
    }
  }

  // 事件函数体求值（调用方维护按 eventType+body 的缓存）
  function evalEvent(fnBody, value, fm, extra, rawEvent) {
    if (!fnBody || !String(fnBody).trim()) return undefined;
    try {
      var fn = new Function('value', 'fm', 'extra', 'rawEvent', fnBody);
      return fn(value, fm, extra || {}, rawEvent);
    } catch (e) {
      console.error('[evalEvent 编译失败]', e);
      return undefined;
    }
  }

  // InputNumber 步长派生（按 precision 反推）
  // precision: null/undefined → 1（默认）；0 → 1（整数）；N → 1/10^N（N 位小数）
  function getStep(cell) {
    if (!cell || cell.precision == null) return 1;
    return 1 / Math.pow(10, cell.precision);
  }

  // ---- 列/行批量操作（坐标平移）----
  // 坐标系：cell.x / cell.y 是字符串，单格 "3"，合并范围 "1,3"
  // parseRange("1,3") → { start:1, end:3, span:3 }
  // 所有函数就地修改 cells 数组并返回 cells（链式）

  function _fmtRange(start, end) {
    return start === end ? String(start) : start + ',' + end;
  }

  // 在 beforeCol 列前插入 count 列（beforeCol 从 1 开始）
  // 三种分支：
  //   xr.start >= beforeCol → 整 cell 在插入点后，整体右移
  //   xr.end >= beforeCol   → cell 跨越插入点，扩展范围
  //   其他                  → 完全在插入点前，不动
  function insertColumns(cells, beforeCol, count) {
    if (!Array.isArray(cells) || !beforeCol || !count || count < 1) return cells;
    cells.forEach(function (c) {
      if (!c || !c.x) return;
      var xr = parseRange(c.x);
      var ns, ne;
      if (xr.start >= beforeCol) {
        ns = xr.start + count; ne = xr.end + count;
      } else if (xr.end >= beforeCol) {
        ns = xr.start; ne = xr.end + count;
      } else { return; }
      c.x = _fmtRange(ns, ne);
    });
    return cells;
  }

  function insertRows(cells, beforeRow, count) {
    if (!Array.isArray(cells) || !beforeRow || !count || count < 1) return cells;
    cells.forEach(function (c) {
      if (!c || !c.y) return;
      var yr = parseRange(c.y);
      var ns, ne;
      if (yr.start >= beforeRow) {
        ns = yr.start + count; ne = yr.end + count;
      } else if (yr.end >= beforeRow) {
        ns = yr.start; ne = yr.end + count;
      } else { return; }
      c.y = _fmtRange(ns, ne);
    });
    return cells;
  }

  // 删除第 col 列（col 从 1 开始），返回被完全移除的 cell 数（用于提示）
  // 三种分支：
  //   xr.start === col && xr.end === col → 独占该列，移除整个 cell
  //   xr.start <= col && xr.end >= col   → 合并 cell 跨越该列，范围缩 1
  //   xr.start > col                     → 完全在删除点后，整体左移
  //   其他（完全在前）                    → 不动
  function removeColumn(cells, col) {
    if (!Array.isArray(cells) || !col) return 0;
    var removed = 0;
    for (var i = cells.length - 1; i >= 0; i--) {
      var c = cells[i];
      if (!c || !c.x) continue;
      var xr = parseRange(c.x);
      if (xr.start === col && xr.end === col) {
        cells.splice(i, 1); removed++;
      } else if (xr.start <= col && xr.end >= col) {
        c.x = _fmtRange(xr.start, xr.end - 1);
      } else if (xr.start > col) {
        c.x = _fmtRange(xr.start - 1, xr.end - 1);
      }
    }
    return removed;
  }

  function removeRow(cells, row) {
    if (!Array.isArray(cells) || !row) return 0;
    var removed = 0;
    for (var i = cells.length - 1; i >= 0; i--) {
      var c = cells[i];
      if (!c || !c.y) continue;
      var yr = parseRange(c.y);
      if (yr.start === row && yr.end === row) {
        cells.splice(i, 1); removed++;
      } else if (yr.start <= row && yr.end >= row) {
        c.y = _fmtRange(yr.start, yr.end - 1);
      } else if (yr.start > row) {
        c.y = _fmtRange(yr.start - 1, yr.end - 1);
      }
    }
    return removed;
  }

  // 末尾追加 count 列（基于当前最大列号）
  function appendColumns(cells, count) {
    if (!Array.isArray(cells) || !count || count < 1) return cells;
    var maxC = 0;
    cells.forEach(function (c) {
      if (!c || !c.x) return;
      var xr = parseRange(c.x);
      if (xr.end > maxC) maxC = xr.end;
    });
    return insertColumns(cells, maxC + 1, count);
  }

  function appendRows(cells, count) {
    if (!Array.isArray(cells) || !count || count < 1) return cells;
    var maxR = 0;
    cells.forEach(function (c) {
      if (!c || !c.y) return;
      var yr = parseRange(c.y);
      if (yr.end > maxR) maxR = yr.end;
    });
    return insertRows(cells, maxR + 1, count);
  }

  // 「应用到整列」目标列表生成（纯函数，供配置页 + 单元测试共享）
  // draft: 当前编辑中的 cell draft（含 x/y/type/...）
  // cells: 全部 cells 数组（含 draft 对应的 cur cell）
  // opts: { freezeRows, maxRow, excludeUid }
  //   - freezeRows: 表头行数，y <= freezeRows 的 cell 视为表头
  //   - maxRow: 显式指定扫描到第几行；不传则取 cells maxY + draftRowEnd 较大值
  //   - excludeUid: 排除的 cell __uid（通常是 draft 对应的 cur cell，避免应用到自己）
  // 返回: [{ key, row, col, type: 'existing'|'empty', cellUid?, cellId?, cellType?,
  //         isHeader, isConfigured, label }]
  //   - 合并 cell（跨多行/多列）跳过——批量改会破坏合并结构
  //   - draft 自己占据的矩形位置跳过
  //   - 被任何 cell 覆盖的空位跳过
  function buildApplyTargets(draft, cells, opts) {
    opts = opts || {};
    var freezeRows = opts.freezeRows || 0;
    var excludeUid = opts.excludeUid;
    var CTRL_TYPES = ['input', 'textarea', 'number', 'select', 'radio', 'checkbox', 'date', 'upload'];

    var draftRange = parseRange(draft.x);
    var dStart = draftRange.start, dEnd = draftRange.end;
    var draftRowRange = parseRange(draft.y);
    var draftRowStart = draftRowRange.start, draftRowEnd = draftRowRange.end;

    // maxRow：opts.maxRow 显式传值就用它（含 0）；否则取 cells maxY / draftRowEnd 较大值
    // draft 自己占据的位置由 isCovered 兜底过滤，所以不需要 draftRowEnd 参与 max
    var maxRow;
    if (opts.maxRow != null) {
      maxRow = opts.maxRow;
    } else {
      var cellsMaxY = 0;
      cells.forEach(function (c) {
        if (!c || !c.y) return;
        var r = parseRange(c.y);
        if (r.end > cellsMaxY) cellsMaxY = r.end;
      });
      maxRow = Math.max(cellsMaxY, draftRowEnd);
    }

    function isHeaderCell(c) {
      if (!c) return false;
      if (c.type === 'label') return true;
      if (parseRange(c.y).start <= freezeRows) return true;
      return false;
    }
    function isConfiguredCell(c) {
      if (!c) return false;
      if (CTRL_TYPES.indexOf(c.type) >= 0) return true;
      if (c.validation && c.validation.rules && c.validation.rules.length > 0) return true;
      if (c.content && String(c.content).trim()) return true;
      return false;
    }
    function findCellAt(col, row) {
      for (var k = 0; k < cells.length; k++) {
        var cc = cells[k];
        if (parseRange(cc.x).start === col && parseRange(cc.y).start === row) return cc;
      }
      return null;
    }
    function isCovered(col, row) {
      for (var k = 0; k < cells.length; k++) {
        var cc = cells[k];
        if (excludeUid != null && cc.__uid === excludeUid) continue;
        var cxr = parseRange(cc.x), cyr = parseRange(cc.y);
        if (cxr.start <= col && col <= cxr.end && cyr.start <= row && row <= cyr.end) return true;
      }
      if (dStart <= col && col <= dEnd && draftRowStart <= row && row <= draftRowEnd) return true;
      return false;
    }

    var targets = [];
    for (var col = dStart; col <= dEnd; col++) {
      for (var row = 1; row <= maxRow; row++) {
        // 跳过 draft 自己占据的矩形位置
        if (dStart <= col && col <= dEnd && draftRowStart <= row && row <= draftRowEnd) continue;
        var cAt = findCellAt(col, row);
        if (cAt) {
          if (excludeUid != null && cAt.__uid === excludeUid) continue;
          // 合并 cell 跳过
          var cxr = parseRange(cAt.x), cyr = parseRange(cAt.y);
          if (cxr.start !== cxr.end || cyr.start !== cyr.end) continue;
          targets.push({
            key: 'cell_' + cAt.__uid,
            row: row, col: col,
            type: 'existing',
            cellUid: cAt.__uid,
            cellId: cAt.id,
            cellType: cAt.type,
            isHeader: isHeaderCell(cAt),
            isConfigured: isConfiguredCell(cAt),
            label: 'r' + row + ' ' + (cAt.id || '(无id)') + (cAt.type ? ' (' + cAt.type + ')' : '')
          });
        } else if (!isCovered(col, row)) {
          targets.push({
            key: 'empty_r' + row + '_c' + col,
            row: row, col: col,
            type: 'empty',
            isHeader: row <= freezeRows,
            isConfigured: false,
            label: 'r' + row + ' (空位)'
          });
        }
      }
    }
    return targets;
  }

  // 从 src 中按 fields 列表深拷贝字段，返回 patch 对象（不修改 src）
  // 调用方拿到 patch 后用 Vue.$set 应用到目标 cell
  function pickFields(src, fields) {
    var out = {};
    if (!src || !fields) return out;
    fields.forEach(function (k) {
      if (src[k] != null) {
        out[k] = JSON.parse(JSON.stringify(src[k]));
      }
    });
    return out;
  }

  return {
    parseRange: parseRange,
    normalizeUploadVal: normalizeUploadVal,
    buildFormModel: buildFormModel,
    buildGrid: buildGrid,
    evalDepends: evalDepends,
    evalCustom: evalCustom,
    evalMath: evalMath,
    evalEvent: evalEvent,
    getStep: getStep,
    insertColumns: insertColumns,
    insertRows: insertRows,
    removeColumn: removeColumn,
    removeRow: removeRow,
    appendColumns: appendColumns,
    appendRows: appendRows,
    buildApplyTargets: buildApplyTargets,
    pickFields: pickFields,
    _clearCache: function () { _exprCache = {}; }
  };
});
