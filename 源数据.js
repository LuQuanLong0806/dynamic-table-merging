var TABLE_DATA = {
  title: '通则指标评分表',
  cells: [
    // ── Row 1: 表头 ──
    { id: 'h1', x: '1', y: '1', type: 'label', content: '一级指标' },
    { id: 'h2', x: '2', y: '1', type: 'label', content: '序号' },
    { id: 'h3', x: '3', y: '1', type: 'label', content: '二级指标' },
    { id: 'h4', x: '4', y: '1', type: 'label', content: '三级指标' },
    { id: 'h5', x: '5', y: '1', type: 'label', content: '指标类型' },
    { id: 'h6', x: '6', y: '1', type: 'label', content: '分值' },
    { id: 'h7', x: '7', y: '1', type: 'label', content: '单位' },
    { id: 'h8', x: '8', y: '1', type: 'label', content: '标杆值' },
    { id: 'h9', x: '9', y: '1', type: 'label', content: '基准值' },
    { id: 'h10', x: '10', y: '1', type: 'label', content: '加权参数' },
    { id: 'h11', x: '11', y: '1', type: 'label', content: '2025年指标值' },
    { id: 'h12', x: '12', y: '1', type: 'label', content: '证明材料要求' },
    { id: 'h13', x: '13', y: '1', type: 'label', content: '评分规则' },

    // ══ 基本要求 (Row 2-3) ══
    { id: 'a1', x: '1', y: '2,3', type: 'text', content: '<b>基本要求</b>' },
    { id: 'a2', x: '2', y: '2', type: 'text', content: '1' },
    { id: 'b2', x: '2', y: '3', type: 'text', content: '2' },
    // ★ 二级指标 → 合并2行的 radio
    {
      id: 'sec_ind',
      x: '3',
      y: '2,3',
      type: 'radio',
      value: '',
      options: [
        {
          label:
            '工厂应依法设立，近三年无安全、质量、环境污染等事故以及偷漏税等违法违规行为',
          value: 'opt1'
        },
        {
          label: '企业不应使用国家明令禁止的淘汰类工艺技术和装备',
          value: 'opt2'
        }
      ],
      validation: { rules: [{ required: true, message: '请选择二级指标' }] },
      linkage: [
        {
          trigger: 'opt1',
          actions: [
            {
              type: 'rowEnable',
              rowTargets: [
                {
                  row: 2,
                  cols: [
                    'r2_benchmark',
                    'r2_baseline',
                    'r2_weight',
                    'r2_indvalue'
                  ]
                }
              ]
            },
            {
              type: 'rowDisable',
              rowTargets: [
                {
                  row: 3,
                  cols: [
                    'r3_benchmark',
                    'r3_baseline',
                    'r3_weight',
                    'r3_indvalue'
                  ]
                }
              ]
            },
            {
              type: 'rowClear',
              rowTargets: [
                {
                  row: 3,
                  cols: [
                    'r3_benchmark',
                    'r3_baseline',
                    'r3_weight',
                    'r3_indvalue'
                  ]
                }
              ]
            }
          ]
        },
        {
          trigger: 'opt2',
          actions: [
            {
              type: 'rowEnable',
              rowTargets: [
                {
                  row: 3,
                  cols: [
                    'r3_benchmark',
                    'r3_baseline',
                    'r3_weight',
                    'r3_indvalue'
                  ]
                }
              ]
            },
            {
              type: 'rowDisable',
              rowTargets: [
                {
                  row: 2,
                  cols: [
                    'r2_benchmark',
                    'r2_baseline',
                    'r2_weight',
                    'r2_indvalue'
                  ]
                }
              ]
            },
            {
              type: 'rowClear',
              rowTargets: [
                {
                  row: 2,
                  cols: [
                    'r2_benchmark',
                    'r2_baseline',
                    'r2_weight',
                    'r2_indvalue'
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // ── Row 2 (选项1 对应行) ──
    { id: 'a4', x: '4', y: '2', type: 'text', content: '/' },
    { id: 'a5', x: '5', y: '2', type: 'text', content: '/' },
    { id: 'a6', x: '6', y: '2', type: 'text', content: '/' },
    { id: 'a7', x: '7', y: '2', type: 'text', content: '/' },
    {
      id: 'r2_benchmark',
      x: '8',
      y: '2',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '标杆值',
      validation: {
        rules: [
          { required: true, message: '请输入标杆值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    {
      id: 'r2_baseline',
      x: '9',
      y: '2',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '基准值',
      validation: {
        rules: [
          { required: true, message: '请输入基准值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    {
      id: 'r2_weight',
      x: '10',
      y: '2',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '加权参数',
      validation: { rules: [{ type: 'number', min: 0, message: '不能为负' }] }
    },
    {
      id: 'r2_indvalue',
      x: '11',
      y: '2',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '指标值',
      validation: {
        rules: [
          { required: true, message: '请输入指标值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    {
      id: 'a12',
      x: '12',
      y: '2',
      type: 'text',
      content: '1.企业营业执照\n2.信用中国截图'
    },
    { id: 'a13', x: '13', y: '2', type: 'text', content: '必须符合' },

    // ── Row 3 (选项2 对应行) ──
    { id: 'b3', x: '4', y: '3', type: 'text', content: '/' },
    { id: 'b4', x: '5', y: '3', type: 'text', content: '/' },
    { id: 'b5', x: '6', y: '3', type: 'text', content: '/' },
    { id: 'b6', x: '7', y: '3', type: 'text', content: '/' },
    {
      id: 'r3_benchmark',
      x: '8',
      y: '3',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '标杆值',
      validation: {
        rules: [
          { required: true, message: '请输入标杆值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    {
      id: 'r3_baseline',
      x: '9',
      y: '3',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '基准值',
      validation: {
        rules: [
          { required: true, message: '请输入基准值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    {
      id: 'r3_weight',
      x: '10',
      y: '3',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '加权参数',
      validation: { rules: [{ type: 'number', min: 0, message: '不能为负' }] }
    },
    {
      id: 'r3_indvalue',
      x: '11',
      y: '3',
      type: 'number',
      value: null,
      disabled: true,
      placeholder: '指标值',
      validation: {
        rules: [
          { required: true, message: '请输入指标值' },
          { type: 'number', min: 0, message: '不能为负' }
        ]
      }
    },
    { id: 'b11', x: '12', y: '3', type: 'text', content: '相关证明材料' },
    { id: 'b12', x: '13', y: '3', type: 'text', content: '必须符合' },

    // ══ 能源低碳化 (Row 4-7) ══
    { id: 'c1', x: '1', y: '4,7', type: 'text', content: '<b>能源低碳化</b>' },
    { id: 'c2', x: '2', y: '4,5', type: 'text', content: '1' },
    { id: 'c3', x: '3', y: '4,5', type: 'text', content: '能源消耗强度' },
    {
      id: 'c4',
      x: '4',
      y: '4',
      type: 'select',
      value: '',
      content: '是否有适用国家强制性标准',
      options: [
        { label: '有适用标准', value: 'has' },
        { label: '无适用标准', value: 'no' }
      ],
      validation: { rules: [{ required: true, message: '请选择' }] },
      linkage: [
        {
          trigger: 'has',
          actions: [
            { target: 'c8', type: 'enable' },
            { target: 'c9', type: 'enable' },
            { target: 'c10', type: 'enable' },
            { target: 'c11', type: 'enable' },
            { target: 'd_energy', type: 'show' },
            { target: 'd_none', type: 'hide' }
          ]
        },
        {
          trigger: 'no',
          actions: [
            { target: 'c8', type: 'disable' },
            { target: 'c8', type: 'clear' },
            { target: 'c9', type: 'disable' },
            { target: 'c9', type: 'clear' },
            { target: 'c10', type: 'disable' },
            { target: 'c10', type: 'clear' },
            { target: 'c11', type: 'disable' },
            { target: 'c11', type: 'clear' },
            { target: 'd_energy', type: 'hide' },
            { target: 'd_energy', type: 'clear' },
            { target: 'd_none', type: 'show' }
          ]
        }
      ]
    },
    { id: 'c5', x: '5', y: '4', type: 'text', content: '逆向定量' },
    { id: 'c6', x: '6', y: '4', type: 'text', content: '11' },
    { id: 'c7', x: '7', y: '4', type: 'text', content: 'tce/产品单位' },
    {
      id: 'c8',
      x: '8',
      y: '4',
      type: 'number',
      value: null,
      placeholder: '输入标杆值',
      validation: {
        rules: [
          { required: true, message: '请输入标杆值' },
          { type: 'number', min: 0, message: '标杆值不能为负' }
        ]
      }
    },
    {
      id: 'c9',
      x: '9',
      y: '4',
      type: 'number',
      value: null,
      placeholder: '输入基准值',
      validation: {
        rules: [
          { required: true, message: '请输入基准值' },
          { type: 'number', min: 0, message: '基准值不能为负' }
        ]
      }
    },
    {
      id: 'c10',
      x: '10',
      y: '4',
      type: 'number',
      value: null,
      placeholder: '输入加权参数',
      validation: {
        rules: [{ type: 'number', min: 0, message: '加权参数不能为负' }]
      }
    },
    {
      id: 'c11',
      x: '11',
      y: '4',
      type: 'number',
      value: null,
      placeholder: '输入指标值',
      validation: {
        rules: [
          { required: true, message: '请输入指标值' },
          { type: 'number', min: 0, message: '指标值不能为负' }
        ]
      }
    },
    {
      id: 'c12',
      x: '12',
      y: '4',
      type: 'text',
      content: '1.指标计算过程表及其附件\n2.报统计部门相关报表'
    },
    {
      id: 'c13',
      x: '13',
      y: '4',
      type: 'text',
      content: '按各类产品产量占比分配权重分值'
    },

    {
      id: 'd_energy',
      x: '4',
      y: '5',
      type: 'number',
      value: null,
      placeholder: '单位产品综合能耗(tce)',
      validation: {
        rules: [{ type: 'number', min: 0, message: '请输入有效的综合能耗' }]
      }
    },
    { id: 'd_none', x: '4', y: '5', type: 'text', content: '/', _hidden: true },
    { id: 'd2', x: '5', y: '5', type: 'text', content: '/' },
    { id: 'd3', x: '6', y: '5', type: 'text', content: '/' },
    { id: 'd4', x: '7', y: '5', type: 'text', content: '/' },
    { id: 'd5', x: '8', y: '5', type: 'text', content: '先进水平' },
    { id: 'd6', x: '9', y: '5', type: 'text', content: '准入水平' },
    { id: 'd7', x: '10', y: '5', type: 'text', content: '/' },
    { id: 'd8', x: '11', y: '5', type: 'text', content: '/' },
    {
      id: 'd9',
      x: '12',
      y: '5',
      type: 'text',
      content: '3.《能源加工转换与回收利用》等相关报表'
    },
    {
      id: 'd10',
      x: '13',
      y: '5',
      type: 'text',
      content: '=min(标杆值得分, 基准值得分)'
    },

    { id: 'e1', x: '2', y: '6', type: 'text', content: '2' },
    { id: 'e2', x: '3', y: '6', type: 'text', content: '可再生能源利用率' },
    { id: 'e3', x: '4', y: '6', type: 'text', content: '可再生能源利用率' },
    { id: 'e4', x: '5', y: '6', type: 'text', content: '正向定量' },
    { id: 'e5', x: '6', y: '6', type: 'text', content: '5' },
    { id: 'e6', x: '7', y: '6', type: 'text', content: '%' },
    {
      id: 'e7',
      x: '8',
      y: '6',
      type: 'number',
      value: null,
      placeholder: '标杆值(%)',
      validation: {
        rules: [
          { required: true, message: '请输入标杆值' },
          { type: 'number', min: 0, max: 100, message: '请输入0-100之间的值' }
        ]
      }
    },
    {
      id: 'e8',
      x: '9',
      y: '6',
      type: 'number',
      value: null,
      placeholder: '基准值(%)',
      validation: {
        rules: [
          { required: true, message: '请输入基准值' },
          { type: 'number', min: 0, max: 100, message: '请输入0-100之间的值' }
        ]
      }
    },
    {
      id: 'e9',
      x: '10',
      y: '6',
      type: 'number',
      value: null,
      placeholder: '加权参数',
      validation: {
        rules: [{ type: 'number', min: 0, message: '加权参数不能为负' }]
      }
    },
    {
      id: 'e10',
      x: '11',
      y: '6',
      type: 'number',
      value: null,
      placeholder: '指标值(%)',
      validation: {
        rules: [
          { required: true, message: '请输入指标值' },
          { type: 'number', min: 0, max: 100, message: '请输入0-100之间的值' }
        ]
      }
    },
    {
      id: 'e11',
      x: '12',
      y: '6',
      type: 'text',
      content: '可再生能源利用证明材料'
    },
    { id: 'e12', x: '13', y: '6', type: 'text', content: '按比例计算得分' },

    { id: 'f1', x: '2', y: '7', type: 'text', content: '3' },
    { id: 'f2', x: '3', y: '7', type: 'text', content: '碳排放强度' },
    {
      id: 'f3',
      x: '4',
      y: '7',
      type: 'text',
      content: '单位工业总产值碳排放量'
    },
    { id: 'f4', x: '5', y: '7', type: 'text', content: '逆向定量' },
    { id: 'f5', x: '6', y: '7', type: 'text', content: '4' },
    { id: 'f6', x: '7', y: '7', type: 'text', content: 'tCO₂/万元' },
    {
      id: 'f7',
      x: '8',
      y: '7',
      type: 'number',
      value: null,
      placeholder: '标杆值',
      validation: {
        rules: [
          { required: true, message: '请输入标杆值' },
          { type: 'number', min: 0, message: '标杆值不能为负' }
        ]
      }
    },
    {
      id: 'f8',
      x: '9',
      y: '7',
      type: 'number',
      value: null,
      placeholder: '基准值',
      validation: {
        rules: [
          { required: true, message: '请输入基准值' },
          { type: 'number', min: 0, message: '基准值不能为负' }
        ]
      }
    },
    {
      id: 'f9',
      x: '10',
      y: '7',
      type: 'number',
      value: null,
      placeholder: '加权参数',
      validation: { rules: [{ type: 'number', min: 0, message: '不能为负' }] }
    },
    {
      id: 'f10',
      x: '11',
      y: '7',
      type: 'number',
      value: null,
      placeholder: '指标值',
      validation: {
        rules: [
          { required: true, message: '请输入指标值' },
          { type: 'number', min: 0, message: '指标值不能为负' }
        ]
      }
    },
    { id: 'f11', x: '12', y: '7', type: 'text', content: '碳排放核查报告' },
    { id: 'f12', x: '13', y: '7', type: 'text', content: '逆向指标，越低越好' },

    // ── Row 8: 小计 ──
    { id: 'g1', x: '2', y: '8', type: 'text', content: '' },
    { id: 'g2', x: '3,5', y: '8', type: 'text', content: '<b>小计</b>' },
    {
      id: 'g3',
      x: '6',
      y: '8',
      type: 'formula',
      calculationFormula: 'SUM(c6,e5,f5)'
    },
    { id: 'g4', x: '7', y: '8', type: 'text', content: '' },
    { id: 'g5', x: '8', y: '8', type: 'text', content: '' },
    { id: 'g6', x: '9', y: '8', type: 'text', content: '' },
    { id: 'g7', x: '10', y: '8', type: 'text', content: '' },
    {
      id: 'g8',
      x: '11',
      y: '8',
      type: 'formula',
      calculationFormula: 'CALC_SCORE'
    },
    { id: 'g9', x: '12', y: '8', type: 'text', content: '' },
    { id: 'g10', x: '13', y: '8', type: 'text', content: '' }
  ]
};
