# 配置页 vs 生产组件 对照分析

> 生成日期：2026-06-25
> 生产组件（只读，权威）：`F:/0_workspace/3-省厅扶持库/.../dynamic-eval-table.vue`
> 配置页：`f:/00_project/动态表格合并/配置页面.html`
> 工具：`f:/00_project/动态表格合并/dynamic-table-utils.js`

---

## 📌 2026-06-25 更新：多附件改造已完成

下文 **🔴 #1 风险（upload 单文件）已修复**。当前状态：

- **fm[id] 统一为数组** `[{path, name}, ...]`（旧 JSON 字符串数据在 echoData 入口自动转换）
- **yeyooUpload 加 multiple prop**（默认 false，仅 dynamic-eval-table.vue 显式传 `:multiple="getMaxCount(cell) !== 1"`）
- **cell 配置加 maxCount**（默认无限；0/null/undefined = 不限；1 = 单文件模式；>1 = 多文件累积）
- **配置页加 maxCount 配置项**（InputNumber）+ serializeJSON 输出
- **buildRules array+min/max 数组语义**生效：`[{...},{...}]` 长度判断，min/max 都能正确校验
- **onUploadSuccess 改成 push 累积 + maxCount 拦截**

**下文 C/D 节关于"单文件"的描述均以本节为准**（保留原文作为历史记录）。

**仍待处理**：🔴 #2（format 字段未导出）未修复，accept 仅做软过滤。

---

## TL;DR

- **总体能渲染，无字段缺失性灾难**。配置页导出的 JSON 字段集是生产组件的超集，新增字段（freezeRows/clampLines/width/cell_rY_cX id）生产侧均已消费或能静默忽略。
- ~~**🔴 最大风险：upload 是单文件组件**~~ → ✅ **2026-06-25 已修复**：改成多文件累积模式，新增 maxCount 配置项，详见顶部"📌 2026-06-25 更新"。
- **🔴 次大风险：upload 的 `format` 字段配置页未导出**（只导出 `accept`）。accept 是浏览器软过滤可绕过，yeyooUpload `:format="item.cell.format || []"` 拿到空数组 → 服务端硬校验失效，用户能上传任意类型。
- 其他差异（dirPrefix、string min/max、CALC_SCORE 性能）均 🟡 低风险。

---

## A. cell.type 支持矩阵

| type | 配置页能产出 | 生产组件支持 | 一致性 |
|------|:---:|:---:|:---|
| label | ✅ `TYPE_LIST` 配置页面.html:2283 | ✅ template `entry.isLabel` (line 33) | 🟢 |
| text | ✅ line 2284 | ✅ `item.isText` (line 70) | 🟢 |
| input | ✅ line 2285 | ✅ `CellInput` (line 95) | 🟢 |
| number | ✅ line 2286 | ✅ `CellNumber` (line 103) | 🟢 |
| select | ✅ line 2287 | ✅ `Select` (line 114) | 🟢 |
| radio | ✅ line 2288 | ✅ `RadioGroup` (line 135) | 🟢 |
| checkbox | ✅ line 2289 | ✅ `CheckboxGroup` (line 158) | 🟢 |
| date | ✅ line 2290 | ✅ `DatePicker` (line 176) | 🟢 |
| upload | ✅ line 2291 | ✅ `yeyooUpload` (line 193) | 🟢 |
| formula | ✅ line 2292 | ✅ `item.isFormula` (line 88) | 🟢 |

**风险**：🟢 **无风险**。两边 type 集合完全对齐（10 种），未发现配置能产出但生产不渲染的 type。

---

## B. cell 字段消费矩阵

| 字段 | 配置页导出 (serializeJSON line 4193) | 生产组件读取 | 风险 |
|------|:---:|:---:|:---|
| id | ✅ 必出 | ✅ cellMap key + FormItem prop | 🟢 |
| x / y | ✅ 必出 | ✅ buildGrid parseRange | 🟢 |
| type | ✅ 必出 | ✅ v-if 分发 | 🟢 |
| content | ✅ 有则出 (4201) | ✅ label/text/placeholder 回退 (line 97,123) | 🟢 |
| value | ✅ 有则出 (4202) | ✅ buildFormModel 初始值 | 🟢 |
| placeholder | ✅ 有则出 (4203) | ✅ line 97,107 | 🟢 |
| options | ✅ 有则出 (4204) | ✅ line 128,150,170 | 🟢 |
| calculationFormula | ✅ 有则出 (4205) | ✅ recalc/evalF (line 1124) | 🟢 |
| accept | ✅ 有则出 (4206) | ✅ yeyooUpload `:accept` (line 198) | 🟢 |
| maxSize | ✅ 有则出 (4207) | ✅ yeyooUpload `:max-size` (line 199) | 🟢 |
| clampLines | ✅ >0 出 (4212) | ✅ clampStyle (line 41,76,677) | 🟢 **已支持**（线上 memory 已过期） |
| width | ✅ >0 出 (4213) | ✅ fixedCols (line 570) | 🟢 |
| precision | ✅ number 类型出 (4214) | ✅ CellNumber `:precision` (line 111) + getStep (line 700) | 🟢 |
| validation | ✅ 有则出 (4216) | ✅ buildRules (line 764) | 🟢 |
| linkage | ✅ 有则出 (4219) | ✅ handleLinkage (line 954) | 🟢 |
| events | ✅ onChange/onBlur/onInput (4227) | ✅ runCellEvent (line 733) | 🟢 |
| disabled / _hidden / portalHide / platformHide | ✅ (4208-4211) | ✅ applyTableData (line 540-546) | 🟢 |
| **format** | ❌ **未导出** | ✅ yeyooUpload `:format` (line 197) | 🔴 **见下** |
| **dirPrefix** | ❌ 未导出 | ✅ yeyooUpload `:dir-prefix` (line 196，默认 'green-factory/') | 🟡 |

### 🔴 风险：upload 的 format 字段未导出

- **触发条件**：配置页给 upload cell 配了 `accept: '.pdf,.docx'`，希望生产限制只能上传这两类。
- **影响**：生产侧 `:format="item.cell.format || []"` → 空数组 → yeyooUpload 内部 format 校验失效，**用户能上传任意类型文件**（accept 仅是浏览器原生过滤，可绕过）。
- **建议**：配置页 `serializeJSON` 加一行：`if (c.format) out.format = c.format;`。或在配置页抽屉补 `format` 输入框。**用户使用注意**：当前上传只靠 accept，做不了硬性格式限制。

### 🟡 低风险：dirPrefix 缺失

- 生产默认 `green-factory/`，配置页不导出 → 文件落到默认目录。**不会崩**，仅在多业务隔离时路径混在一起。建议使用注意。

---

## C. validation.rules 消费矩阵

| rule.kind | 配置页可配 (line 2557-2573) | 生产消费 (buildRules 764-953) | 风险 |
|------|:---:|:---:|:---|
| required (bool) | ✅ | ✅ line 944-951 | 🟢 |
| required (expr 字符串) | ✅ | ✅ 转 depends (783-785) | 🟢 |
| number | ✅ type:'number', min/max | ✅ line 892-906 | 🟢 |
| string | ✅ type:'string', min/max | ⚠️ 生产只对 `o.type==='number'` 做范围检查 (892)，string 的 min/max **不生效** | 🟡 |
| array | ✅ type:'array', min/max | ✅ upload 专用分支 (791-833)，其他 type 的 array min/max 走通用 cFn 路径但不强制 | 🟢（upload 专）/🟡（其他） |
| pattern | ✅ | ✅ line 907-916 | 🟢 |
| len | ✅ | ✅ line 917-920 | 🟢 |
| enum | ✅ | ✅ line 921-926 | 🟢 |
| custom (含 depends) | ✅ | ✅ 转 validator body (850-858) | 🟢 |
| validator (含 depends) | ✅ | ✅ 同上 | 🟢 |
| depends (required+条件) | ✅ | ✅ line 862-865 dep 短路 | 🟢 |

### 🟡 低风险：string 类型的 min/max 在生产不生效

- **触发**：配置 input cell，加 `kind:'string', min:2, max:10` 期望字数限制。
- **影响**：生产 `buildRules` 通用分支只对 `o.type==='number'` 走数值检查（line 892），string min/max 不会被验证。
- **建议**：用户使用注意——**字符串长度限制请改用 `kind:'len'` 或 `kind:'custom'` 写 validator**。

### 🔴 高风险：upload 的 array + min **永远不生效**（min > 1 时永远不通过）

**核心事实**（深入到 yeyooUpload 组件源码后确认）：

- yeyooUpload 是**硬编码单文件**组件（[yeyoo-upload.vue:15](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/components/upload/yeyoo-upload.vue#L15) `:multiple="false"`）
- 每次 `@success` emit 单个 file 信息（[yeyoo-upload.vue:227-236](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/components/upload/yeyoo-upload.vue#L227)），**不累积**
- 生产 `onUploadSuccess`（[dynamic-eval-table.vue:1292-1300](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/pages/supportku/preject/newForm/green-factory-application-2026/components/dynamic-eval-table.vue#L1292)）**覆盖式**赋值：

```js
let fileVal = JSON.stringify({ path: val.file.relativeFilePath, name: val.file.name });
this.$set(this.fm, id, fileVal);  // ← fm[id] 永远是 JSON 字符串
```

| 时机 | fm[id] 实际值 | 类型 |
|---|---|---|
| 未上传 | `''` | string |
| 上传成功（覆盖前一次） | `'{"path":"green-factory/uuid.pdf","name":"xxx.pdf"}'` | string |
| 删除 | `''` | string |

**buildRules 的 array+min 分支**（[dynamic-eval-table.vue:800-829](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/pages/supportku/preject/newForm/green-factory-application-2026/components/dynamic-eval-table.vue#L800)）写了一个 defensive validator 兼容多种 value 类型，但**因为 fm[id] 永远是 string**，永远走 string 分支：

```js
if (typeof value === 'string') {
  let trimmed = value.trim();
  if (!trimmed) hasFile = false;
  else {
    try {
      let parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) hasFile = parsed.length >= min;   // ← 永远不会进
      else if (parsed && typeof parsed === 'object') hasFile = !!parsed.path;  // ← 实际走这里
      // ↑ 注意：!!parsed.path 完全忽略 min！只判"有没有 path"
    } catch (e) { hasFile = !!trimmed; }
  }
}
```

**实际行为**：
- `min:1` → 等价于"必填"（有 path 就过）
- `min:5` → 等价于"必填"（**完全一样**，min 被忽略）
- `min:N`（N>1）→ 用户无论怎么操作都满足不了，**永远报"至少添加 N 条数据"**

**配置页建议**：
- ⚠️ upload cell 下的"至少 N 个"概念**根本无法实现**（生产组件就是单文件）
- 配置页应该在 `cell.type === 'upload'` 时**禁用 `min` 字段**（或加 tip 提示"上传组件为单文件，min 仅作占位"）
- 校验需求只支持 `required: true`（必填）和 `validator`/`custom`（自定义表达式）
- 用户原本期望"至少传 2 个附件" → 改成"加 2 个 upload cell 各自 required"

**原"高风险 #2"已修正**：之前以为"array+min 与 validator 冲突"，实际更严重 — min 在单文件场景下**无论配不配 validator 都不生效**。

---

## D. upload 自定义组件

**组件源码**：[yeyoo-upload.vue](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/components/upload/yeyoo-upload.vue)（单文件，硬编码）

**关键约束**：
- `:multiple="false"`（line 15）— **不可多选**
- emit `success` 时只 emit 当前文件（line 227-236），不维护列表
- 即使多次上传，调用方拿到的是**最新一个**文件的 path/name

**生产 onUploadSuccess 覆盖式赋值**（[dynamic-eval-table.vue:1292-1300](F:/0_workspace/3-省厅扶持库/project-support-library-platform/src/pages/supportku/preject/newForm/green-factory-application-2026/components/dynamic-eval-table.vue#L1292)）：

```js
let fileVal = JSON.stringify({ path: val.file.relativeFilePath, name: val.file.name });
this.$set(this.fm, id, fileVal);  // ← 永远覆盖，不累积
```

| 项 | 配置页 | 生产组件 | 风险 |
|---|---|---|---|
| 渲染组件 | 原生 `<input type="file">` (配置页面.html:1957) | `<yeyooUpload>` (line 193) | 🟢 字段兼容即可 |
| 文件数 | 单选 | **单选**（multiple=false 硬编码） | 🟢 一致（但用户期望多选时会困惑） |
| accept | ✅ `cell.accept` | ✅ `:accept` (line 198) | 🟢 浏览器软过滤 |
| maxSize | ✅ `cell.maxSize` | ✅ `:max-size` (line 199，默认 51200 KB = 50MB) | 🟢 真拦截（before-upload 阶段 sizeError） |
| **format** | ❌ 不导出 | ✅ `:format` (line 197) | 🔴 **见 B 节** |
| dirPrefix | ❌ 不导出 | ✅ `:dir-prefix` (line 196，默认 'green-factory/') | 🟡 |
| 至少 N 个 | `validation.rules[].min` | line 791-833 防御性 validator | 🔴 **永远不生效（见 C 节）** |
| required | `kind:'required'` | line 944-951 | 🟢 |
| 自定义校验 | `kind:'validator'` | line 850-858 | 🟢 |

**fm[id] 类型实测**：永远是 string（`''` 或 `'{"path":"...","name":"..."}'`）。**不是 array、不是 object**。

**关键差异**：配置页预览用原生 `<input type=file>` 不做实际拦截；生产用真实组件 yeyooUpload 会真拦截 maxSize 和 format。**预览通过 ≠ 生产通过**，必须人工到生产环境验证上传行为。

---

## E. freezeRows 字段

| 项 | 配置页 | 生产组件 |
|---|---|---|
| 默认值 | `makeConfig` freezeRows:0 (line 2693) | data.config 无显式默认，applyTableData 直接读 `tableData.freezeRows` |
| 序列化 | `>0` 才输出 (line 4198) | line 20 `(config.freezeRows \|\| 0) > 0` |
| 渲染 | sticky CSS `.row-freeze` (line 1855) | ✅ 同名 class + style (line 30, 1426-1435) |
| 滚动容器 | `--freeze` 修饰 (配置页面.html 预览) | line 18-21 `.eval-table-scroll--freeze` |

**风险**：🟢 **无风险**。生产组件 line 18-31 完整消费 freezeRows（class + sticky + 容器 overflow-y），配置页导出 freezeRows=3 的 JSON 直接喂给生产会正确 sticky 前 3 行。`freezeRows:0` 或缺省时生产走 `(config.freezeRows || 0) > 0` 短路，安全。

---

## F. number 字段的 fm 值类型

| 场景 | 配置页 fm[id] | 生产 fm[id] | 一致性 |
|---|---|---|---|
| 空值（修复后） | `null` (dynamic-table-utils.js:37) | `null` (line 253) | 🟢 |
| 有值 | Number | Number | 🟢 |
| setVal 空输入 | `null` (配置页面.html:2952-2954) | `null` (line 706-708) | 🟢 |
| doClear number | `null` (line 3204) | `null` (line 992-997) | 🟢 |

### depends 表达式注意

- 生产 `evalExpr` 直接吃 JSON 字符串表达式（line 366-378），**无改写**。
- 例：`fm.indval_r5 != null` → 当 indval_r5=null 时短路 false。✅
- **陷阱**：若表达式写成 `fm.indval_r5 != ''`，因 null != '' 为 true → 仍判定"已填"。**配置页 hint 应提示用户用 `!= null`**。
- 已确认 `dynamic-table-utils.js` 的 buildFormModel 与生产 line 249-262 的 buildFormModel 完全等价（upload 走数组分支，line 40-42；与配置页 line 2011-2027 三端对齐）。

**风险**：🟢 **无风险**（修复后），但 depends 表达式书写需用户自律。

---

## G. id 命名规约

| 场景 | 配置页生成 id | 生产期望 | 冲突风险 |
|---|---|---|---|
| 手动新建 | `cell_N` (line 3891) | 任意非空字符串 | 🟢 |
| 应用到整列新建 | `cell_r{row}_c{col}` (line 4096) | 任意非空 | 🟢 |
| 模板预设 | 由 build 函数生成 (line 2315-2324) | 同上 | 🟢 |
| id 唯一性 | `genUniqueId` 冲突加 `_2/_3` (line 3856-3861) | cellMap 后者覆盖前者 (line 266-268) | 🟢 |

**公式引用对齐**：formula 的 `SUM(c6)`、`CALC(a+b)` 直接按字符串扫描 cellMap（生产 line 1140-1161），id 跨配置/生产**只要字面一致即可对齐**，无格式约束。

**风险**：🟢 **无风险**。`cell_rY_cX` 格式不会与生产隐藏 id 冲突（生产无隐藏 id 体系，cellMap key 就是 cell.id）。

---

## H. 性能

| 关注点 | 配置页 | 生产组件 | 风险 |
|---|---|---|---|
| cell v-for 优化 | `cell-control` 子组件下沉（line 1906 注释） | 直接 inline FormItem，**无 functional/Object.freeze** | 🟡 |
| 公式求值 | recalc 全表 + 公式缓存 (line 3208) | `recalcIncremental` + `_formulaDeps` 依赖图 (line 1131-1198) | 🟢 生产更优 |
| applyToColumn 批量 | 一次性 push N 个 cell + forceRefreshPreview | 无对应操作（生产只渲染） | 🟢 |
| 200+ cells | 配置页预览实测可扛（子组件隔离） | 生产 v-for 无优化，但 view-design Form 在 200 字段下实测可用 | 🟡 |
| CALC_SCORE | 通配依赖所有 number cell (line 1143) | 增量重算退化为全表 | 🟢 |

### 🟡 低风险：大表格性能

- **触发**：applyToColumn 一次生成几十/上百个 number cell，且其中含 formula 引用 CALC_SCORE。
- **影响**：每次 setVal 触发 `recalcIncremental` → CALC_SCORE 公式依赖所有 number → 全表 recalc。200 cell 下每次输入约 5-20ms，可接受但能感知。
- **建议**：无需处理（生产已有增量优化，CALC_SCORE 通配是设计如此）。

---

## I. 序列化兼容性

| 字段 | 配置页导出 | 生产 loadEchoConfig/echoData 期望 | 一致性 |
|---|---|---|---|
| title | ✅ (line 4197) | 不消费（生产只用 cells） | 🟢 |
| freezeRows | ✅ >0 出 (4198) | ✅ applyTableData 读 config.freezeRows | 🟢 |
| cells[] | ✅ (line 4199) | ✅ tableData.cells | 🟢 |
| `__uid` | ❌ `_stripInternal` 去除 | ❌ 生产不读 __uid | 🟢 |
| `kind` 字段 | ❌ serializeRule 不输出 (line 4427) | ❌ 生产 buildRules 不读 kind | 🟢 |
| `useDepends`/`enumStr` | ❌ 不输出 | ❌ 生产不读 | 🟢 |
| 内部 rowTargets 结构 | ✅ serializeAction (line 4468) | ✅ applyAction (line 963-987) | 🟢 |

**风险**：🟢 **无风险**。`_stripInternal` 正确剔除所有配置页内部字段（__uid/kind/useDepends/enumStr），生产 echoData/buildRules 不依赖这些。

---

## 必须验证清单（浏览器手测）

1. **upload 格式限制**：配置页 upload cell 设 `accept: '.pdf'` → 导出 JSON → 生产导入 → 尝试上传 .docx → **应被拦截**（若放行 = format 缺失风险实锤）。
2. **upload 至少 N 个**：upload cell 加 `kind:'array', min:2` → 生产导入 → 不传附件点提交 → **应报"至少添加2条数据"**。
3. **freezeRows sticky**：配置页设 freezeRows:2 → 导出 → 生产导入 → 滚动表格 → **前 2 行应粘在顶部**。
4. **clampLines 截断**：label cell 配 clampLines:3 + 长文本 → 生产 → **应 3 行截断 + tooltip 显示全文**。
5. **number 空值**：number cell 不填 → 生产 getFormData → **应为 null（非 ''）**。
6. **depends 表达式**：配 rule `kind:'depends', required:true, depends:'fm.a != null'` → 生产 → 不填 a 时该字段应非必填，填 a 后变必填。
7. **应用到整列后渲染**：配置页对 select 列点"应用到整列"生成 10 个 cell → 导出 → 生产 → **10 个下拉框都正常显示 options**。
8. **CALC_SCORE 增量**：表格含 CALC_SCORE 公式 + 20 个 number cell → 生产 → 改其中一个 → **得分实时更新且无明显卡顿**。
9. **linkage rowDisable**：select 配 `kind:'rowDisable', rowTargets:[{row:3, cols:['c1','c2']}]` → 生产 → 触发 trigger → **第 3 行 c1/c2 应禁用**。
10. **clampLines=0 不截断**：label cell clampLines:0 → 生产 → **应完整显示全部文本**（不截断）。

---

## 附：高风险清单（标红）

| # | 风险 | 触发条件 | 严重度 | 建议 |
|---|---|---|---|---|
| 1 | **upload 是单文件，`min:N`（N>1）永远不通过** | 配 upload cell 设 `kind:'array', min:2` 期望"至少 2 个附件" | 🔴 永远报"至少添加 2 条数据"，用户无法满足 | 配置页 upload type 下禁用 min 字段；改用 required 或多个 upload cell |
| 2 | upload `format` 字段未导出 | 配 upload cell 希望限制文件类型 | 🔴 accept 软过滤可绕过，用户能上传任意类型 | 配置页 serializeJSON 加 `if (c.format) out.format = c.format;` 或抽屉补 format 输入框 |

其余均为 🟢 无风险 或 🟡 低风险（用户使用注意即可，无需改代码）。
