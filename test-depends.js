/**
 * test-depends.js — 校验系统单元测试（统一 fm.xxx 语法）
 *
 * 运行方式: node test-depends.js
 *
 * 所有表达式统一使用 fm.xxx 引用表单值，extra.xxx 引用第三方值
 * 不再使用裸 cell id 自动替换
 */

// ── 与动态合并表格.html 中完全一致的函数 ──

function evalDepends(expr, fm, cellMap, extra) {
  try {
    return new Function('fm', 'extra', '"use strict"; return (' + expr + ')')(fm, extra || {});
  } catch (e) {
    return false;
  }
}

function evalCustom(expr, value, fm, cellMap, extra) {
  try {
    return new Function('value', 'fm', 'extra', '"use strict"; return (' + expr + ')')(value, fm, extra || {});
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

var cellMap = {};
row42Cells.forEach(function (c) { cellMap[c.id] = c; });

// ── 模拟 buildRules 中的 validator 闭包逻辑 ──

function validateWithDepends(rule, fm, cellMap, value, extra) {
  var r = {};
  for (var k in rule) r[k] = rule[k];
  // required 为字符串时 → 转为 depends 条件
  if (typeof r.required === 'string') {
    r.depends = r.required;
    r.required = true;
  }
  // depends 条件检查
  var depExpr = r.depends;
  if (depExpr && !evalDepends(depExpr, fm, cellMap, extra)) {
    return { pass: true, skipped: true };
  }
  // validator 函数体（优先级最高）
  if (r.validator) {
    try {
      var fn = new Function('value', 'fm', 'extra', r.validator);
      var result = fn(value, fm, extra || {});
      if (!result) return { pass: false, skipped: false, error: r.message };
    } catch (ex) {
      return { pass: false, skipped: false, error: r.message };
    }
  }
  // custom 表达式
  if (r.custom) {
    if (!evalCustom(r.custom, value, fm, cellMap, extra)) {
      return { pass: false, skipped: false, error: r.message };
    }
  }
  // required 校验
  if (r.required) {
    var empty = value == null || value === '' ||
      (Array.isArray(value) && value.length === 0);
    if (empty) return { pass: false, skipped: false, error: rule.message };
  }
  // 数值范围校验
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
// 测试1: evalDepends 基础功能（统一 fm.xxx 语法）
// ══════════════════════════════════════════════════
console.log('\n── 测试1: evalDepends 基础功能（fm.xxx 语法）──');

(function () {
  var fm = { bm_r42: 2, bl_r42: 51.1, indval_r42: null };
  assertEqual(evalDepends('fm.bm_r42 != null', fm, cellMap), true,
    'fm.bm_r42=2 时 fm.bm_r42 != null → true');
  assertEqual(evalDepends('fm.indval_r42 != null', fm, cellMap), false,
    'fm.indval_r42=null 时 fm.indval_r42 != null → false');

  var fm2 = { bm_r42: 2, c4: 'has' };
  assertEqual(evalDepends("fm.c4 === 'has'", fm2, cellMap), true,
    "fm.c4='has' 时 fm.c4 === 'has' → true");

  assertEqual(evalDepends('fm.bm_r42 != null && fm.bl_r42 != null', fm, cellMap), true,
    'fm.bm_r42=2, fm.bl_r42=51.1 时 AND → true');

  var fm3 = { bm_r42: null, indval_r42: 100 };
  assertEqual(evalDepends('fm.bm_r42 != null || fm.indval_r42 != null', fm3, cellMap), true,
    'fm.bm_r42=null, fm.indval_r42=100 时 OR → true');

  var fm4 = { bm_r42: 2, bl_r42: 51.1 };
  assertEqual(evalDepends('fm.bm_r42 > 0 && fm.bl_r42 > 50', fm4, cellMap), true,
    'fm.bm_r42=2, fm.bl_r42=51.1 数字比较 → true');

  var fm5 = { bm_r42: null, upload_field: '' };
  assertEqual(evalDepends("fm.bm_r42 != null && fm.upload_field !== ''", fm5, cellMap), false,
    "fm.bm_r42=null 时 AND → false");
})();

// ══════════════════════════════════════════════════
// 测试2: depends 条件校验 — 核心场景
// ══════════════════════════════════════════════════
console.log('\n── 测试2: depends 条件校验 — 核心场景──');

(function () {
  var rule = {
    required: true,
    message: '标杆值已填写，请上传证明材料',
    depends: 'fm.bm_r42 != null'
  };

  var fm1 = { bm_r42: 2, evidence_upload_42: [] };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42);
  assertEqual(r1.pass, false, 'bm=2, 上传空 → 失败');
  assertEqual(r1.skipped, false, '规则未跳过');
  assertEqual(r1.error, '标杆值已填写，请上传证明材料', '错误消息正确');

  var fm2 = { bm_r42: 2, evidence_upload_42: [{ name: 'test.pdf', size: 1024 }] };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42);
  assertEqual(r2.pass, true, 'bm=2, 已上传 → 通过');

  var fm3 = { bm_r42: null, evidence_upload_42: [] };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, 'bm=null, 上传空 → 跳过');
  assertEqual(r3.skipped, true, '规则已跳过');

  var fm4 = { bm_r42: null, evidence_upload_42: [{ name: 'a.pdf', size: 512 }] };
  var r4 = validateWithDepends(rule, fm4, cellMap, fm4.evidence_upload_42);
  assertEqual(r4.pass, true, 'bm=null, 已上传 → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试3: depends + 多条件组合
// ══════════════════════════════════════════════════
console.log('\n── 测试3: depends + 多条件组合──');

(function () {
  var rule = {
    required: true,
    message: '标杆值和基准值已填写，请上传证明材料',
    depends: 'fm.bm_r42 != null && fm.bl_r42 != null'
  };

  var fm1 = { bm_r42: 2, bl_r42: 51.1, evidence_upload_42: [] };
  var r1 = validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42);
  assertEqual(r1.pass, false, '双值都填, 上传空 → 失败');

  var fm2 = { bm_r42: 2, bl_r42: null, evidence_upload_42: [] };
  var r2 = validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42);
  assertEqual(r2.pass, true, '只填标杆值 → 跳过');
  assertEqual(r2.skipped, true, '条件不满足');

  var fm3 = { bm_r42: null, bl_r42: null, evidence_upload_42: [] };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, '两个都 null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试4: depends + 数值范围校验
// ══════════════════════════════════════════════════
console.log('\n── 测试4: depends + 数值范围校验──');

(function () {
  var rule = {
    required: true,
    type: 'number',
    min: 0,
    max: 100,
    message: '标杆值>10时，指标值须在0-100之间',
    depends: 'fm.bm_r42 > 10'
  };

  var fm1 = { bm_r42: 2, indval_r42: -5 };
  assertEqual(validateWithDepends(rule, fm1, cellMap, fm1.indval_r42).pass, true,
    'bm=2 不>10 → 跳过');

  var fm2 = { bm_r42: 50, indval_r42: 80 };
  assertEqual(validateWithDepends(rule, fm2, cellMap, fm2.indval_r42).pass, true,
    'bm=50, 指标=80 → 通过');

  var fm3 = { bm_r42: 50, indval_r42: -1 };
  assertEqual(validateWithDepends(rule, fm3, cellMap, fm3.indval_r42).pass, false,
    'bm=50, 指标=-1 → 失败');

  var fm4 = { bm_r42: 50, indval_r42: 150 };
  assertEqual(validateWithDepends(rule, fm4, cellMap, fm4.indval_r42).pass, false,
    'bm=50, 指标=150 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试5: 边界情况
// ══════════════════════════════════════════════════
console.log('\n── 测试5: 边界情况──');

(function () {
  var fm = { bm_r42: 2 };

  assertEqual(evalDepends('fm.nonexistent_id != null', fm, cellMap), false,
    'fm 上不存在的属性 → undefined != null → false');

  assertEqual(evalDepends('', fm, cellMap), false,
    '空表达式 → false');

  assertEqual(evalDepends('fm.bm_r42 >', fm, cellMap), false,
    '语法错误 → false');

  assertEqual(evalDepends('fm.bm_r42 > 0 ? true : false', fm, cellMap), true,
    '三元表达式 → true');
})();

// ══════════════════════════════════════════════════
// 测试6: depends 与非 required 规则组合
// ══════════════════════════════════════════════════
console.log('\n── 测试6: depends 与非 required 规则组合──');

(function () {
  var rule = {
    type: 'number',
    min: 0,
    message: '指标值不能为负',
    depends: 'fm.bm_r42 > 0'
  };

  var fm1 = { bm_r42: 2, indval_r42: null };
  assertEqual(validateWithDepends(rule, fm1, cellMap, fm1.indval_r42).pass, true,
    '非 required, 指标=null → 通过');

  var fm2 = { bm_r42: 2, indval_r42: -5 };
  assertEqual(validateWithDepends(rule, fm2, cellMap, fm2.indval_r42).pass, false,
    '非 required, 指标=-5 → 失败');

  var fm3 = { bm_r42: null, indval_r42: -5 };
  assertEqual(validateWithDepends(rule, fm3, cellMap, fm3.indval_r42).pass, true,
    'bm=null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试7: validator 范围校验（fm.xxx 统一语法）
// ══════════════════════════════════════════════════
console.log('\n── 测试7: validator 范围校验──');

(function () {
  var rule = {
    message: '指标值必须在标杆值和基准值之间',
    validator: 'return value != null && value >= fm.bm_r42 && value <= fm.bl_r42;'
  };

  var fm = { bm_r42: 2, bl_r42: 51.1 };

  assertEqual(validateWithDepends(rule, fm, cellMap, 30).pass, true,
    'value=30, bm=2, bl=51.1 → 通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 1).pass, false,
    'value=1 < bm=2 → 失败');
  assertEqual(validateWithDepends(rule, fm, cellMap, 60).pass, false,
    'value=60 > bl=51.1 → 失败');
  assertEqual(validateWithDepends(rule, fm, cellMap, 2).pass, true,
    'value=2 = bm → 边界通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 51.1).pass, true,
    'value=51.1 = bl → 边界通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, null).pass, false,
    'value=null → 失败');
})();

// ══════════════════════════════════════════════════
// 测试8: validator + depends 组合
// ══════════════════════════════════════════════════
console.log('\n── 测试8: validator + depends 组合──');

(function () {
  var rule = {
    depends: 'fm.bm_r42 != null && fm.bl_r42 != null',
    message: '指标值必须在标杆值和基准值之间',
    validator: 'return value >= fm.bm_r42 && value <= fm.bl_r42;'
  };

  var fm1 = { bm_r42: 2, bl_r42: 51.1 };
  assertEqual(validateWithDepends(rule, fm1, cellMap, 30).pass, true,
    'bm=2, bl=51.1, value=30 → 通过');

  assertEqual(validateWithDepends(rule, fm1, cellMap, 60).pass, false,
    'bm=2, bl=51.1, value=60 → 失败');

  var fm2 = { bm_r42: 2, bl_r42: null };
  assertEqual(validateWithDepends(rule, fm2, cellMap, 60).pass, true,
    'bl=null → depends 不满足 → 跳过');

  var fm3 = { bm_r42: null, bl_r42: null };
  assertEqual(validateWithDepends(rule, fm3, cellMap, 60).pass, true,
    '两个都 null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试9: validator 独用（无 depends）
// ══════════════════════════════════════════════════
console.log('\n── 测试9: validator 独用（无 depends）──');

(function () {
  var rule = {
    message: '指标值必须大于标杆值',
    validator: 'return value > fm.bm_r42;'
  };

  var fm = { bm_r42: 10 };
  assertEqual(validateWithDepends(rule, fm, cellMap, 20).pass, true,
    'value=20 > bm=10 → 通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 5).pass, false,
    'value=5 < bm=10 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试10: upload accept / maxSize 校验
// ══════════════════════════════════════════════════
console.log('\n── 测试10: upload accept / maxSize 校验──');

(function () {
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

  assertEqual(validateUpload({ name: 'test.pdf', size: 1024 }, cell).pass, true,
    '.pdf → 通过');
  assertEqual(validateUpload({ name: 'photo.PNG', size: 1024 }, cell).pass, true,
    '.PNG 大写 → 通过');
  assertEqual(validateUpload({ name: 'malware.exe', size: 1024 }, cell).pass, false,
    '.exe → 拒绝');
  assertEqual(validateUpload({ name: 'script.js', size: 1024 }, cell).pass, false,
    '.js → 拒绝');
  assertEqual(validateUpload({ name: 'doc.pdf', size: 5 * 1024 * 1024 }, cell).pass, true,
    '5MB → 通过');
  assertEqual(validateUpload({ name: 'big.pdf', size: 15 * 1024 * 1024 }, cell).pass, false,
    '15MB → 拒绝');

  var cellNoRestrict = {};
  assertEqual(validateUpload({ name: 'anything.xyz', size: 999999999 }, cellNoRestrict).pass, true,
    '无限制 → 都通过');
})();

// ══════════════════════════════════════════════════
// 测试11: required 为字符串（统一 fm.xxx 语法）
// ══════════════════════════════════════════════════
console.log('\n── 测试11: required 为字符串（fm.xxx 语法）──');

(function () {
  var rule = {
    required: 'fm.bm_r42 != null',
    message: '标杆值已填写，请上传证明材料'
  };

  var fm1 = { bm_r42: 2, evidence_upload_42: [] };
  assertEqual(validateWithDepends(rule, fm1, cellMap, fm1.evidence_upload_42).pass, false,
    'required=表达式, bm=2, 上传空 → 失败');

  var fm2 = { bm_r42: 2, evidence_upload_42: [{ name: 'a.pdf', size: 512 }] };
  assertEqual(validateWithDepends(rule, fm2, cellMap, fm2.evidence_upload_42).pass, true,
    'required=表达式, bm=2, 已上传 → 通过');

  var fm3 = { bm_r42: null, evidence_upload_42: [] };
  var r3 = validateWithDepends(rule, fm3, cellMap, fm3.evidence_upload_42);
  assertEqual(r3.pass, true, 'required=表达式, bm=null → 跳过');
  assertEqual(r3.skipped, true, '条件不满足 → skipped');

  var ruleBool = { required: true, message: '必填' };
  assertEqual(validateWithDepends(ruleBool, { bm_r42: null }, cellMap, '').pass, false,
    'required=true 布尔值仍正常 → 失败');

  var ruleMulti = { required: 'fm.bm_r42 != null || fm.bl_r42 != null', message: '必填' };
  var fm4 = { bm_r42: null, bl_r42: 51.1 };
  assertEqual(validateWithDepends(ruleMulti, fm4, cellMap, '').pass, false,
    'required=多条件OR, bl有值 → 失败');

  var fm5 = { bm_r42: null, bl_r42: null };
  assertEqual(validateWithDepends(ruleMulti, fm5, cellMap, '').pass, true,
    'required=多条件OR, 都null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试12: validator 函数体（与 mock1.js 一致）
// ══════════════════════════════════════════════════
console.log('\n── 测试12: validator 函数体──');

(function () {
  var rule = {
    message: '指标值必须在标杆值和基准值之间',
    validator: 'return value != null && value >= fm.bm_r42 && value <= fm.bl_r42;'
  };

  var fm = { bm_r42: 2, bl_r42: 51.1 };
  assertEqual(validateWithDepends(rule, fm, cellMap, 30).pass, true,
    'validator: value=30, fm.bm=2, fm.bl=51.1 → 通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 1).pass, false,
    'validator: value=1 < bm=2 → 失败');
  assertEqual(validateWithDepends(rule, fm, cellMap, 60).pass, false,
    'validator: value=60 > bl=51.1 → 失败');
  assertEqual(validateWithDepends(rule, fm, cellMap, 2).pass, true,
    'validator: value=2 = bm → 边界通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, null).pass, false,
    'validator: value=null → 失败');

  var fm2 = { bm_r42: 10, bl_r42: 20 };
  assertEqual(validateWithDepends(rule, fm2, cellMap, 15).pass, true,
    'validator: fm值变化后 value=15 在 10-20 → 通过');
  assertEqual(validateWithDepends(rule, fm2, cellMap, 5).pass, false,
    'validator: fm值变化后 value=5 < 10 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试13: validator + extra 第三方值
// ══════════════════════════════════════════════════
console.log('\n── 测试13: validator + extra 第三方值──');

(function () {
  var rule = {
    message: '低于外部配置的最低阈值',
    validator: 'return value != null && value >= extra.minThreshold;'
  };

  var fm = { indval_r42: 30 };
  var extra1 = { minThreshold: 20 };

  assertEqual(validateWithDepends(rule, fm, cellMap, 30, extra1).pass, true,
    'validator+extra: value=30 >= extra.min=20 → 通过');
  assertEqual(validateWithDepends(rule, fm, cellMap, 10, extra1).pass, false,
    'validator+extra: value=10 < extra.min=20 → 失败');

  var extra2 = { minThreshold: 50 };
  assertEqual(validateWithDepends(rule, fm, cellMap, 30, extra2).pass, false,
    'validator+extra: extra.min=50, value=30 → 失败');

  assertEqual(validateWithDepends(rule, fm, cellMap, 30, {}).pass, false,
    'validator+extra: extra为空 → false');

  var rule2 = {
    message: '必须大于标杆值且大于外部阈值',
    validator: 'return value > fm.bm_r42 && value > extra.minThreshold;'
  };
  var fm2 = { bm_r42: 5 };
  var extra3 = { minThreshold: 10 };
  assertEqual(validateWithDepends(rule2, fm2, cellMap, 15, extra3).pass, true,
    'validator: value=15 > fm.bm=5 && value > extra.min=10 → 通过');
  assertEqual(validateWithDepends(rule2, fm2, cellMap, 8, extra3).pass, false,
    'validator: value=8 > fm.bm=5 但 < extra.min=10 → 失败');
})();

// ══════════════════════════════════════════════════
// 测试14: validator + depends 组合（fm.xxx 统一）
// ══════════════════════════════════════════════════
console.log('\n── 测试14: validator + depends 组合──');

(function () {
  var rule = {
    depends: 'fm.bm_r42 != null',
    message: '标杆值存在时，指标值必须大于标杆值',
    validator: 'return value > fm.bm_r42;'
  };

  var fm1 = { bm_r42: 10 };
  assertEqual(validateWithDepends(rule, fm1, cellMap, 20).pass, true,
    'validator+depends: bm=10, value=20 → 通过');
  assertEqual(validateWithDepends(rule, fm1, cellMap, 5).pass, false,
    'validator+depends: bm=10, value=5 → 失败');

  var fm2 = { bm_r42: null };
  assertEqual(validateWithDepends(rule, fm2, cellMap, 5).pass, true,
    'validator+depends: bm=null → 跳过');
})();

// ══════════════════════════════════════════════════
// 测试15: 语法统一验证 — 所有字段都用 fm.xxx
// ══════════════════════════════════════════════════
console.log('\n── 测试15: 语法统一验证 — depends/required/validator 全部 fm.xxx──');

(function () {
  var fm = { bm_r42: 100, bl_r42: 200, indval_r42: 150 };

  // depends 用 fm.xxx
  assertEqual(evalDepends('fm.bm_r42 > 50', fm, cellMap), true,
    'depends: fm.bm_r42 > 50 → true');

  // required 字符串用 fm.xxx
  var rule1 = { required: 'fm.bm_r42 != null', message: '必填' };
  assertEqual(validateWithDepends(rule1, fm, cellMap, '').pass, false,
    'required=fm.xxx → 失败');

  // validator 用 fm.xxx
  var rule2 = {
    validator: 'return value >= fm.bm_r42 && value <= fm.bl_r42;',
    message: '范围'
  };
  assertEqual(validateWithDepends(rule2, fm, cellMap, 150).pass, true,
    'validator: fm.xxx → 通过');

  // 三者组合
  var rule3 = {
    depends: 'fm.bm_r42 != null',
    required: true,
    validator: 'return value > fm.bm_r42;',
    message: '组合'
  };
  assertEqual(validateWithDepends(rule3, fm, cellMap, 120).pass, true,
    'depends+required+validator 组合 → 通过');
})();

// ── 结果 ──
console.log('\n════════════════════════════════════════');
console.log('总计: ' + passed + ' 通过, ' + failed + ' 失败');
console.log('════════════════════════════════════════');
process.exit(failed > 0 ? 1 : 0);
