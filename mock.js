// mock 数据 — 能源系统优化评分表
var MOCK_DATA = {
  title: '能源系统优化评分表',
  cells: [
    // ── 表头（第1行）──
    {id:'h1',  x:'1',  y:'1', type:'label', content:'一级指标'},
    {id:'h2',  x:'2',  y:'1', type:'label', content:'序号'},
    {id:'h3',  x:'3',  y:'1', type:'label', content:'二级指标'},
    {id:'h4',  x:'4',  y:'1', type:'label', content:'三级指标'},
    {id:'h5',  x:'5',  y:'1', type:'label', content:'指标类型'},
    {id:'h6',  x:'6',  y:'1', type:'label', content:'分值'},
    {id:'h7',  x:'7',  y:'1', type:'label', content:'单位'},
    {id:'h8',  x:'8',  y:'1', type:'label', content:'标杆值'},
    {id:'h9',  x:'9',  y:'1', type:'label', content:'基准值'},
    {id:'h10', x:'10', y:'1', type:'label', content:'加权参数'},
    {id:'h11', x:'11', y:'1', type:'label', content:'2025年指标值'},
    {id:'h12', x:'12', y:'1', type:'label', content:'证明材料要求'},
    {id:'h13', x:'13', y:'1', type:'label', content:'评分规则'},

    // ══ 能源系统优化（第2~5行，第一列纵向合并）══
    {id:'energy_lv1', x:'1', y:'2,5', type:'text', content:'<b>能源系统优化</b>'},

    // ── 第2行：序号4 能源消耗强度 ──
    {id:'row4_no',  x:'2',  y:'2', type:'text', content:'4'},
    {id:'row4_lv2', x:'3',  y:'2', type:'text', content:'能源消耗强度'},
    {id:'row4_lv3', x:'4',  y:'2', type:'text', content:'单位产品综合能耗<br>□ 有适用国家强制性能源消耗限额标准<br>□ 无适用国家强制性能源消耗限额标准<br>产品一名称：____<br>产品二名称：____<br>产品三名称：____<br><br>单位产值综合能耗'},
    {id:'row4_type', x:'5',  y:'2', type:'text', content:'逆向定量'},
    {id:'row4_score',x:'6',  y:'2', type:'text', content:'11'},
    {id:'row4_unit', x:'7',  y:'2', type:'text', content:'tce/产品单位 或 kgce/万元'},
    {id:'row4_std',  x:'8',  y:'2', type:'text', content:'能耗限额标准1级'},
    {id:'row4_base', x:'9',  y:'2', type:'text', content:'能耗限额标准2级'},
    {id:'row4_wt',   x:'10', y:'2', type:'text', content:'/'},
    {id:'row4_val',  x:'11', y:'2', type:'number', value:null, placeholder:'请填写2025年指标值',
      validation:{rules:[{required:true,message:'请输入指标值'},{type:'number',min:0,message:'不能为负'}]}},
    {id:'row4_mat',  x:'12', y:'2', type:'text', content:'1 指标计算过程表<br>2 205-1/205-2/205-3表<br>3 能源利用状况报告'},
    {id:'row4_rule', x:'13', y:'2', type:'text', content:'得分=min(×1)×11，负记0'},

    // ── 第3行：序号5 碳排放强度 ──
    {id:'row5_no',  x:'2',  y:'3', type:'text', content:'5'},
    {id:'row5_lv2', x:'3',  y:'3', type:'text', content:'碳排放强度'},
    {id:'row5_lv3', x:'4',  y:'3', type:'text', content:'单位产值碳排放量'},
    {id:'row5_type', x:'5',  y:'3', type:'text', content:'逆向定量'},
    {id:'row5_score',x:'6',  y:'3', type:'text', content:'11'},
    {id:'row5_unit', x:'7',  y:'3', type:'text', content:'kgCO₂/万元'},
    {id:'row5_std',  x:'8',  y:'3', type:'text', content:'/'},
    {id:'row5_base', x:'9',  y:'3', type:'text', content:'/'},
    {id:'row5_wt',   x:'10', y:'3', type:'text', content:'/'},
    {id:'row5_val',  x:'11', y:'3', type:'number', value:null, placeholder:'请填写2025年指标值',
      validation:{rules:[{required:true,message:'请输入指标值'},{type:'number',min:0,message:'不能为负'}]}},
    {id:'row5_mat',  x:'12', y:'3', type:'text', content:'1 温室气体排放报告<br>2 B204-1表'},
    {id:'row5_rule', x:'13', y:'3', type:'text', content:'得分=min(×1)×11，负记0'},

    // ── 第4行：序号6 可再生能源利用率 ──
    {id:'row6_no',  x:'2',  y:'4', type:'text', content:'6'},
    {id:'row6_lv2', x:'3',  y:'4', type:'text', content:'可再生能源利用率'},
    {id:'row6_lv3', x:'4',  y:'4', type:'text', content:'年综合能源消费量10000吨标煤及以上<br>5000~10000吨<br>3000~5000吨<br>3000吨以下'},
    {id:'row6_type', x:'5',  y:'4', type:'text', content:'正向定量'},
    {id:'row6_score',x:'6',  y:'4', type:'text', content:'8'},
    {id:'row6_unit', x:'7',  y:'4', type:'text', content:'%'},
    {id:'row6_std',  x:'8',  y:'4', type:'text', content:'/'},
    {id:'row6_base', x:'9',  y:'4', type:'text', content:'/'},
    {id:'row6_wt',   x:'10', y:'4', type:'text', content:'/'},
    {id:'row6_val',  x:'11', y:'4', type:'number', value:null, placeholder:'请填写2025年指标值',
      validation:{rules:[{required:true,message:'请输入指标值'},{type:'number',min:0,max:100,message:'请输入0-100之间的值'}]}},
    {id:'row6_mat',  x:'12', y:'4', type:'text', content:'1 205-1/205-2/205-6表<br>2 可再生能源电力消费清单<br>3 绿证/交易凭证'},
    {id:'row6_rule', x:'13', y:'4', type:'text', content:'得分=min(×1)×8，负记0'},

    // ── 第5行：序号7 能源管理系统平台功能符合数量 ──
    {id:'row7_no',  x:'2',  y:'5', type:'text', content:'7'},
    {id:'row7_lv2', x:'3',  y:'5', type:'text', content:'能源管理系统平台功能符合数量'},
    {id:'row7_lv3', x:'4',  y:'5', type:'text', content:'□ 能耗查询<br>□ 能源消费统计<br>□ 用能诊断<br>□ 能效对标<br>□ 碳核查管理<br>□ 碳资产管理'},
    {id:'row7_type', x:'5',  y:'5', type:'text', content:'正向定量'},
    {id:'row7_score',x:'6',  y:'5', type:'text', content:'4'},
    {id:'row7_unit', x:'7',  y:'5', type:'text', content:'项'},
    {id:'row7_std',  x:'8',  y:'5', type:'text', content:'/'},
    {id:'row7_base', x:'9',  y:'5', type:'text', content:'/'},
    {id:'row7_wt',   x:'10', y:'5', type:'text', content:'/'},
    {id:'row7_val',  x:'11', y:'5', type:'number', value:null, placeholder:'请填写2025年指标值',
      validation:{rules:[{required:true,message:'请输入指标值'},{type:'number',min:0,message:'不能为负'}]}},
    {id:'row7_mat',  x:'12', y:'5', type:'text', content:'平台系统架构设计文档'},
    {id:'row7_rule', x:'13', y:'5', type:'text', content:'得分=min(×1)×4'}
  ]
};
