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

  function buildFormModel(cells) {
    var m = {};
    (cells || []).forEach(function (c) {
      if (!c || !c.id) return;
      if (c.type === 'number') {
        m[c.id] = c.value != null && c.value !== '' ? Number(c.value) : null;
      } else if (c.type === 'checkbox') {
        m[c.id] = Array.isArray(c.value) ? c.value : [];
      } else if (['input', 'select', 'radio', 'date', 'upload'].indexOf(c.type) >= 0) {
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
        var isCtrl = ['input', 'number', 'select', 'radio', 'checkbox', 'date', 'upload']
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

  return {
    parseRange: parseRange,
    buildFormModel: buildFormModel,
    buildGrid: buildGrid,
    evalDepends: evalDepends,
    evalCustom: evalCustom,
    evalMath: evalMath,
    evalEvent: evalEvent,
    getStep: getStep,
    _clearCache: function () { _exprCache = {}; }
  };
});
