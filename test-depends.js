/**
 * test-depends.js — evalDepends 条件校验单元测试
 *
 * 运行方式: node test-depends.js
 *
 * 测试场景：使用 mock1.js 第42行数据（bm_r42 标杆值 + evidence_upload_42 上传）
 *   - 当 bm_r42 有值时，上传为必填
 *   - 当 bm_r42 为 null 时，上传非必填
 */

// ── 从 HTML 文件中提取的独立函数（与动态合并表格.html 中完全一致） ──

function parseRange(v) {
  var p = String(v).split(',').map(Number);
  return {
    start: Math.min.apply(null, p),
    end: Math.max.apply(null, p),
    span: Math.max.apply(null, p) - Math.min.apply(null, p) + 1
  };
}

function evalDepends(expr, fm, cellMap) {
  var ids = Object.keys(cellMap).sort(function (a, b) {
    return b.length - a.length;
  });
  ids.forEach(function (id) {
    var v = fm[id];
    var r;
    if (v === null || v === undefined) r = 'null';
    else if (typeof v === 'number') r = String(v);
    else if (typeof v === 'string') r = "'" + v.replace(/'/g, "\\'") + "'";
    else r = 'null';
    expr = expr.replace(
      new RegExp('\\b' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'),
      r
    );
  });
  try {
    return new Function('"use strict"; return (' + expr + ')')();
  } catch (e) {
    return false;
  }
}

function evalCustom(expr, value, fm, cellMap) {
  var e = expr.replace(/\bvalue\b/g, function () {
    if (value === null || value === undefined) return 'null';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') return "'" + value.replace(/'/g, "\\'") + "'";
    return 'null';
  });
  var ids = Object.keys(cellMap).sort(function (a, b) {
    return b.length - a.length;
  });
  ids.forEach(function (id) {
    var v = fm[id];
    var r;
    if (v === null || v === undefined) r = 'null';
    else if (typeof v === 'number') r = String(v);
    else if (typeof v === 'string') r = "'" + v.replace(/'/g, "\\'") + "'";
    else r = 'null';
    e = e.replace(
      new RegExp('\\b' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'),
      r
    );
  });
  try {
    return new Function('"use strict"; return (' + e + ')')();
  } catch (ex) {
    return false;
  }
}

// ── 模拟 mock1.js 第42行的数据 ──

var row42Cells = [
  { id: 'l3_r42', x: '4', y: '42', type: 'text', content: '产品一名称' },
  { id: 'type_r42', x: '5', y: '42', type: 'text', content: '/' },
  { id: 'score_r42', x: '6', y: '42', type: 'text', content: '/', portalHide: true },
  { id: 'unit_r42', x: '7', y: '42', type: 'text', content: '/' },
  { id: 'bm_r42', x: '8', y: '42', type: 'number', value: 2, placeholder: '输入标杆值' },
  { id: 'bl_r42', x: '9', y: '42', type: 'number', value: 51.1, placeholder: '输入基准值' },
  { id: 'weight_r42', x: '10', y: '42', type: 'number', placeholder: '输入加权参数' },
  { id: 'indval_r42', x: '11', y: '42', type: 'number', placeholder: '输入指标值' },
  { id: 'evidence_r42', x: '13', y: '42', type: 'text', content: '/' },
  { id: 'evidence_upload_42', x: '12', y: '42', type: 'upload', content: '' },
  { id: 'rule_r42', x: '15', y: '42', type: 'text', content: '', portalHide: true }
];

// 构建 cellMap
var cellMap = {};
row42Cells.forEach(function (c) { cellMap[c.id] = c; });

// ── 模拟 validator 行为（与 buildRules 中 depends 分支一致） ──

function validateWithDepends(rule, fm, cellMap, value) {
  // required 为字符串时 → 转为 depends 条件
  var r = {};
  for (var k in rule) r[k] = rule[k];
  if (typeof r.required === 'string') {
    r.depends = r.required;
    r.required = true;
  }
  var depExpr = r.depends;
  if (depExpr && !evalDepends(depExpr, fm, cellMap)) {
    return { pass: true, skipped: true };
  }
  // custom 自定义校验
  if (r.custom) {
    if (!evalCustom(r.custom, value, fm, cellMap)) {
      return { pass: false, skipped: false, error: r.message };
    }
  }
  if (r.required) {
    var empty = value == null || value === '' ||
      (Array.isArray(value) && value.length === 0);
    if (empty) return { pass: false, skipped: false, error: rule.message };
  }
  if (r.type === 'number' && value != null && value !== '') {
    var n = Number(value);
    if (isNaN(n)) return { pass: false, skipped: false, error: r.message };
    if (r.min != null && n < r.min) return { pass: false, skipped: false, error: r.message };
    if (r.max != null && n > r.max) return { pass: false, skipped: false, error: r.message };
  }
  return { pass: true, skipped: false };
}

// ── 测试框架 ──

var passed = 0, failed = 0;
function assert(condition, msg) {
  if (condition) {
    passed++;
    console.log('  ✓ ' + msg);
  } else {
    failed++;
    console.log('  ✗ ' + msg);
  }
}

function assertEqual(actual, expected, msg) {
  assert(actual === expected, msg + ' (got: ' + JSON.stringify(actual) + ', expected: ' + JSON.stringify(expected) + ')');
}

// ══════════════════════════════════════════════════
// 测试1: evalDepends 基础功能
// ══════════════════════════════════════════════════
console.log('\n── 测试1: evalDepends 基础功能 ──');

(function () {
  var fm = { bm_r42: 2, bl_r42: 51.1, indval_r42: null };
  // 有值 → true
  assertEqual(evalDepends('bm_r42 != null', fm, cellMap), true,
    'bm_r42=2 时 bm_r42 != null → true');
  // null → false
  assertEqual(evalDepends('indval_r42 != null', fm, cellMap), false,
    'indval_r42=null 时 indval_r42 != null → false');
  // 字符串比较（补充 c4 到 cellMap）
  var cm2 = Object.assign({}, cellMap, { c4: { id: 'c4', type: 'select' } });
  var fm2 = { bm_r42: 2, c4: 'has' };
  assertEqual(evalDepends("c4 === 'has'", fm2, cm2), true,
    "c4='has' 时 c4 === 'has' → true");
  // 多条件 AND
  assertEqual(evalDepends('bm_r42 != null && bl_r42 != null', fm, cellMap), true,
    'bm_r42=2, bl_r42=51.1 时 bm_r42 != null && bl_r42 != null → true');
  // 多条件 OR
  var fm3 = { bm_r42: null, indval_r42: 100 };
  assertEqual(evalDepends('bm_r42 != null || indval_r42 != null', fm3, cellMap), true,
    'bm_r42=null, indval_r42=100 时 bm_r42 != null || indval_r42 != null → true');
  // 数字比较
  var fm4 = { bm_r42: 2, bl_r42: 51.1 };
  assertEqual(evalDepends('bm_r42 > 0 && bl_r42 > 50', fm4, cellMap), true,
    'bm_r42=2, bl_r42=51.1 时 bm_r42 > 0 && bl_r42 > 50 → true');
  // 空字符串
  var fm5 = { bm_r42: null, upload_field: '' };
  assertEqual(evalDepends("bm_r42 != null && upload_field !== ''", fm5, cellMap), false,
    "bm_r42=null 时整个 AND 表达式 → false");
})();

// ══════════════════════════════════════════════════
// 测试2: depends 条件校验 — 核心场景
// ══════════════════════════════════════════════════
console.log('\n── 测试2: depends 条件校验 — 核心场景 ──');

(function () {
  var rule = {
    required: true,
    message: '标杆值已填写，请上传证明材料',
    depends: 'bm_r42 != null'
  };

  // 场景A: bm_r42 有值(2), 上传为空 → 校验失败
  var fm1 = { bm_r42: 2, evidence_upload_42: '' };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42);
  assertEqual(r1.pass, false, '场景A: bm_r42=2, 上传为空 → 校验失败');
  assertEqual(r1.skipped, false, '场景A: 规则未跳过(条件满足)');
  assertEqual(r1.error, '标杆值已填写，请上传证明材料', '场景A: 错误消息正确');

  // 场景B: bm_r42 有值(2), 上传有文件 → 校验通过
  var fm2 = { bm_r42: 2, evidence_upload_42: '{"name":"test.pdf","size":1024}' };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42);
  assertEqual(r2.pass, true, '场景B: bm_r42=2, 已上传 → 校验通过');

  // 场景C: bm_r42 为 null, 上传为空 → 跳过(通过)
  var fm3 = { bm_r42: null, evidence_upload_42: '' };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, '场景C: bm_r42=null, 上传为空 → 跳过(通过)');
  assertEqual(r3.skipped, true, '场景C: 规则已跳过(条件不满足)');

  // 场景D: bm_r42 为 null, 上传有文件 → 跳过(通过)
  var fm4 = { bm_r42: null, evidence_upload_42: '{"name":"a.pdf"}' };
  var r4 = validateWithDepends(rule, fm4, cellMap, fm4.evidence_upload_42);
  assertEqual(r4.pass, true, '场景D: bm_r42=null, 已上传 → 跳过(通过)');
})();

// ══════════════════════════════════════════════════
// 测试3: depends + 多条件组合
// ══════════════════════════════════════════════════
console.log('\n── 测试3: depends + 多条件组合 ──');

(function () {
  // 规则: 标杆值和基准值都填写时，上传必填
  var rule = {
    required: true,
    message: '标杆值和基准值已填写，请上传证明材料',
    depends: 'bm_r42 != null && bl_r42 != null'
  };

  // 两个都有值, 上传为空 → 失败
  var fm1 = { bm_r42: 2, bl_r42: 51.1, evidence_upload_42: '' };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42);
  assertEqual(r1.pass, false, '双值都填, 上传空 → 校验失败');

  // 只有一个有值, 上传为空 → 跳过
  var fm2 = { bm_r42: 2, bl_r42: null, evidence_upload_42: '' };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42);
  assertEqual(r2.pass, true, '只填标杆值, 上传空 → 跳过');
  assertEqual(r2.skipped, true, '只填标杆值 → 条件不满足');

  // 两个都 null → 跳过
  var fm3 = { bm_r42: null, bl_r42: null, evidence_upload_42: '' };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, '两个都 null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试4: depends + 数值范围校验
// ══════════════════════════════════════════════════
console.log('\n── 测试4: depends + 数值范围校验 ──');

(function () {
  // 规则: 当标杆值大于10时，指标值必须在0-100之间
  var rule = {
    required: true,
    type: 'number',
    min: 0,
    max: 100,
    message: '标杆值>10时，指标值须在0-100之间',
    depends: 'bm_r42 > 10'
  };

  // bm_r42=2(不>10), 指标值=-5 → 跳过
  var fm1 = { bm_r42: 2, indval_r42: -5 };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.indval_r42);
  assertEqual(r1.pass, true, 'bm_r42=2 不>10, 指标值=-5 → 跳过');

  // bm_r42=50(>10), 指标值=80 → 通过
  var fm2 = { bm_r42: 50, indval_r42: 80 };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.indval_r42);
  assertEqual(r2.pass, true, 'bm_r42=50, 指标值=80 → 通过');

  // bm_r42=50(>10), 指标值=-1 → 失败
  var fm3 = { bm_r42: 50, indval_r42: -1 };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.indval_r42);
  assertEqual(r3.pass, false, 'bm_r42=50, 指标值=-1 → 失败');

  // bm_r42=50(>10), 指标值=150 → 失败
  var fm4 = { bm_r42: 50, indval_r42: 150 };
  var r4 = validateWithDepends(rule, fm4, cellMap, fm4.indval_r42);
  assertEqual(r4.pass, false, 'bm_r42=50, 指标值=150 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试5: depends 表达式中引用不存在的 cell id
// ══════════════════════════════════════════════════
console.log('\n── 测试5: 边界情况 ──');

(function () {
  var fm = { bm_r42: 2 };

  // 不存在的 cell id → 表达式中保持原样 → eval 失败 → false(跳过规则)
  assertEqual(evalDepends('nonexistent_id != null', fm, cellMap), false,
    '引用不存在的 cell id → false(安全跳过)');

  // 空表达式 → eval('') 失败 → false
  assertEqual(evalDepends('', fm, cellMap), false,
    '空表达式 → false');

  // 语法错误 → false
  assertEqual(evalDepends('bm_r42 >', fm, cellMap), false,
    '语法错误表达式 → false');

  // 三元表达式
  assertEqual(evalDepends('bm_r42 > 0 ? true : false', fm, cellMap), true,
    '三元表达式 bm_r42 > 0 ? true : false → true');
})();

// ══════════════════════════════════════════════════
// 测试6: depends 与非 required 规则组合
// ══════════════════════════════════════════════════
console.log('\n── 测试6: depends 与非 required 规则组合 ──');

(function () {
  // 规则: 当标杆值>0时，指标值如果填了必须>=0（非必填，但有范围限制）
  var rule = {
    type: 'number',
    min: 0,
    message: '指标值不能为负',
    depends: 'bm_r42 > 0'
  };

  // bm_r42=2, 指标值=null → 通过(required 未设置)
  var fm1 = { bm_r42: 2, indval_r42: null };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.indval_r42);
  assertEqual(r1.pass, true, '非 required, 指标值=null → 通过');

  // bm_r42=2, 指标值=-5 → 失败
  var fm2 = { bm_r42: 2, indval_r42: -5 };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.indval_r42);
  assertEqual(r2.pass, false, '非 required, 指标值=-5 → 失败');

  // bm_r42=null, 指标值=-5 → 跳过(条件不满足)
  var fm3 = { bm_r42: null, indval_r42: -5 };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.indval_r42);
  assertEqual(r3.pass, true, 'bm_r42=null, 条件不满足 → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试7: evalCustom 自定义校验表达式
// ══════════════════════════════════════════════════
console.log('\n── 测试7: evalCustom 自定义校验表达式 ──');

(function () {
  var fm = { bm_r42: 2, bl_r42: 51.1, indval_r42: 30 };

  // value 在标杆值和基准值之间
  assertEqual(evalCustom('value >= bm_r42 && value <= bl_r42', 30, fm, cellMap), true,
    'value=30, bm=2, bl=51.1 → 在范围内 → true');
  assertEqual(evalCustom('value >= bm_r42 && value <= bl_r42', 1, fm, cellMap), false,
    'value=1, bm=2 → 小于标杆值 → false');
  assertEqual(evalCustom('value >= bm_r42 && value <= bl_r42', 60, fm, cellMap), false,
    'value=60, bl=51.1 → 大于基准值 → false');
  assertEqual(evalCustom('value >= bm_r42 && value <= bl_r42', 2, fm, cellMap), true,
    'value=2 = bm → 边界值 → true');
  assertEqual(evalCustom('value >= bm_r42 && value <= bl_r42', 51.1, fm, cellMap), true,
    'value=51.1 = bl → 边界值 → true');

  // value 为 null
  assertEqual(evalCustom('value >= bm_r42', null, fm, cellMap), false,
    'value=null → 比较 → false');

  // value 引用自身 fm 值
  assertEqual(evalCustom('value === indval_r42', 30, fm, cellMap), true,
    'value=30, indval_r42=30 → 相等 → true');
})();

// ══════════════════════════════════════════════════
// 测试8: custom + depends 组合
// ══════════════════════════════════════════════════
console.log('\n── 测试8: custom + depends 组合 ──');

(function () {
  var rule = {
    message: '指标值必须在标杆值和基准值之间',
    depends: 'bm_r42 != null && bl_r42 != null',
    custom: 'value >= bm_r42 && value <= bl_r42'
  };

  // 两个都有值, value 在范围内 → 通过
  var fm1 = { bm_r42: 2, bl_r42: 51.1 };
  var r1 = validateWithDepends(rule, fm1, cellMap, 30);
  assertEqual(r1.pass, true, 'bm=2, bl=51.1, value=30 → 通过');

  // 两个都有值, value 超出范围 → 失败
  var r2 = validateWithDepends(rule, fm1, cellMap, 60);
  assertEqual(r2.pass, false, 'bm=2, bl=51.1, value=60 → 失败');
  assertEqual(r2.error, '指标值必须在标杆值和基准值之间', '错误消息正确');

  // 只有标杆值(基准值null) → depends不满足 → 跳过
  var fm2 = { bm_r42: 2, bl_r42: null };
  var r3 = validateWithDepends(rule, fm2, cellMap, 60);
  assertEqual(r3.pass, true, 'bl=null, depends不满足 → 跳过');
  assertEqual(r3.skipped, true, '确认是跳过');

  // 两个都 null → 跳过
  var fm3 = { bm_r42: null, bl_r42: null };
  var r4 = validateWithDepends(rule, fm3, cellMap, 60);
  assertEqual(r4.pass, true, '两个都null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试9: custom 独用（无 depends）
// ══════════════════════════════════════════════════
console.log('\n── 测试9: custom 独用（无 depends）──');

(function () {
  // 无 depends，始终校验：值必须大于标杆值
  var rule = {
    message: '指标值必须大于标杆值',
    custom: 'value > bm_r42'
  };

  var fm = { bm_r42: 10 };
  assertEqual(validateWithDepends(rule, fm, cellMap, 20).pass, true,
    'value=20 > bm=10 → 通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 5).pass, false,
    'value=5 < bm=10 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试11: required 为字符串（简化写法）
// ══════════════════════════════════════════════════
console.log('\n── 测试11: required 为字符串（简化写法）──');

(function () {
  // required: "bm_r42 != null" 等价于 required: true + depends: "bm_r42 != null"
  var rule = {
    required: 'bm_r42 != null',
    message: '标杆值已填写，请上传证明材料'
  };

  // bm_r42 有值, 上传为空 → 失败
  var fm1 = { bm_r42: 2, evidence_upload_42: '' };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42);
  assertEqual(r1.pass, false, 'required=表达式, bm=2, 上传空 → 失败');

  // bm_r42 有值, 上传有文件 → 通过
  var fm2 = { bm_r42: 2, evidence_upload_42: '{"name":"a.pdf"}' };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42);
  assertEqual(r2.pass, true, 'required=表达式, bm=2, 已上传 → 通过');

  // bm_r42 为 null, 上传为空 → 跳过
  var fm3 = { bm_r42: null, evidence_upload_42: '' };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, 'required=表达式, bm=null → 跳过');
  assertEqual(r3.skipped, true, 'required=表达式, 条件不满足 → skipped');

  // required: true (布尔值) 仍然正常工作
  var ruleBool = { required: true, message: '必填' };
  var r4 = validateWithDepends(ruleBool, { bm_r42: null }, cellMap, '');
  assertEqual(r4.pass, false, 'required=true 布尔值仍正常 → 失败');

  // required: "bm_r42 != null || bl_r42 != null" 多条件
  var ruleMulti = { required: 'bm_r42 != null || bl_r42 != null', message: '必填' };
  var fm4 = { bm_r42: null, bl_r42: 51.1 };
  var r5 = validateWithDepends(ruleMulti, fm4, cellMap, '');
  assertEqual(r5.pass, false, 'required=多条件OR, bl有值 → 条件满足 → 失败');
  var fm5 = { bm_r42: null, bl_r42: null };
  var r6 = validateWithDepends(ruleMulti, fm5, cellMap, '');
  assertEqual(r6.pass, true, 'required=多条件OR, 都null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试10: upload accept / maxSize 校验
// ══════════════════════════════════════════════════
console.log('\n── 测试10: upload accept / maxSize 校验 ──');

(function () {
  // 模拟 onUploadFile 中的校验逻辑
  function validateUpload(file, cell) {
    if (cell.accept) {
      var ext = '.' + file.name.split('.').pop().toLowerCase();
      var allowed = cell.accept.toLowerCase().split(',').map(function (s) { return s.trim(); });
      if (allowed.indexOf(ext) < 0) {
        return { pass: false, error: '不支持的文件格式，仅允许: ' + cell.accept };
      }
    }
    if (cell.maxSize) {
      var maxBytes = cell.maxSize * 1024 * 1024;
      if (file.size > maxBytes) {
        return { pass: false, error: '文件大小超过限制，最大 ' + cell.maxSize + 'MB' };
      }
    }
    return { pass: true };
  }

  var cell = { accept: '.pdf,.doc,.docx,.png,.jpg,.jpeg', maxSize: 10 };

  // 合法格式
  assertEqual(validateUpload({ name: 'test.pdf', size: 1024 }, cell).pass, true,
    '.pdf 文件 → 通过');
  assertEqual(validateUpload({ name: 'photo.PNG', size: 1024 }, cell).pass, true,
    '.PNG 大写扩展名 → 通过');

  // 不合法格式
  assertEqual(validateUpload({ name: 'malware.exe', size: 1024 }, cell).pass, false,
    '.exe 文件 → 拒绝');
  assertEqual(validateUpload({ name: 'script.js', size: 1024 }, cell).pass, false,
    '.js 文件 → 拒绝');

  // 大小合法
  assertEqual(validateUpload({ name: 'doc.pdf', size: 5 * 1024 * 1024 }, cell).pass, true,
    '5MB 文件 → 通过');

  // 大小超限
  assertEqual(validateUpload({ name: 'big.pdf', size: 15 * 1024 * 1024 }, cell).pass, false,
    '15MB 文件 → 拒绝');

  // 无 accept/maxSize 配置 → 都通过
  var cellNoRestrict = {};
  assertEqual(validateUpload({ name: 'anything.xyz', size: 999999999 }, cellNoRestrict).pass, true,
    '无限制配置 → 都通过');
})();

// ── 结果 ──
console.log('\n═══════════════════════════════════════');
console.log('总计: ' + passed + ' 通过, ' + failed + ' 失败');
console.log('═══════════════════════════════════════');
process.exit(failed > 0 ? 1 : 0);
