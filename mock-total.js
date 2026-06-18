// mock 数据 — 能源系统优化评分表
var MOCK_DATA = {
  title: 't_green_factory_evaluation通则指标评分表2',
  cells: [
    {
      id: 'h1',
      x: '1',
      y: '1,2',
      type: 'label',
      content: '一级指标'
    },
    {
      id: 'h2',
      x: '2',
      y: '1,2',
      type: 'label',
      content: '序号'
    },
    {
      id: 'h3',
      x: '3',
      y: '1,2',
      type: 'label',
      content: '二级指标'
    },
    {
      id: 'h4',
      x: '4',
      y: '1,2',
      type: 'label',
      content: '三级指标'
    },
    {
      id: 'h5',
      x: '5',
      y: '1,2',
      type: 'label',
      content: '指标类型'
    },
    {
      id: 'h6',
      x: '6',
      platformHide: true,
      y: '1,2',
      type: 'label',
      content: '分值',
      portalHide: true
    },
    {
      id: 'h7',
      x: '7',
      y: '1,2',
      type: 'label',
      content: '单位'
    },
    {
      id: 'h8',
      x: '8',
      y: '1,2',
      type: 'label',
      content: '标杆值'
    },
    {
      id: 'h9',
      x: '9',
      y: '1,2',
      type: 'label',
      content: '基准值'
    },
    {
      id: 'h10',
      x: '10',
      y: '1,2',
      type: 'label',
      content: '加权参数'
    },
    {
      id: 'h11',
      x: '11',
      y: '1,2',
      type: 'label',
      content: '2025年指标值'
    },
    {
      id: 'h12',
      x: '12',
      y: '1,2',
      type: 'label',
      portalHide: true,
      content: '审核备注'
    },
    {
      id: 'h13',
      x: '13',
      y: '1,2',
      type: 'label',
      portalHide: true,
      content: '是否适用'
    },
    {
      id: 'h15',
      x: '15',
      y: '1,2',
      type: 'label',
      content: '证明材料要求\n（包括但不限于以下内容）'
    },
    {
      id: 'l1_r3',
      x: '1',
      y: '3,35',
      type: 'text',
      content: '<b>能源低碳化</b>'
    },
    {
      id: 'seq_r3',
      x: '2',
      y: '3,15',
      type: 'text',
      content: '4'
    },
    {
      id: 'l2_r3',
      x: '3',
      y: '3,15',
      type: 'text',
      content: '能源消耗强度'
    },
    {
      id: 'l3_r3',
      x: '4',
      y: '3,8',
      type: 'text',
      content:
        '有适用国家强制性能源消耗限额标准\n单位产品综合能耗\n（有适用国家强制性能源消耗限额标准时必选，涉及多种产品适用标准时，仅填写综合能耗排序前三以内的产品）'
    },
    {
      id: 'type_r3',
      x: '5',
      y: '3,11',
      type: 'text',
      content: '逆向定量'
    },
    {
      id: 'score_r3',
      x: '6',
      platformHide: true,
      y: '3,8',
      type: 'text',
      content: '11',
      portalHide: true
    },
    {
      id: 'unit_r3',
      x: '7',
      y: '3,8',
      type: 'text',
      content: 'tce/产品单位或 kgce/产品单位'
    },
    {
      id: 'bm_r3',
      x: '8',
      y: '3,8',
      type: 'text',
      content: '适用国家强制性能原消耗限额标准1级水平'
    },
    {
      id: 'bl_r3',
      x: '9',
      y: '3,8',
      type: 'text',
      content: '适用国家强制性能原消耗限额标准2级水平'
    },
    {
      id: 'weight_r3',
      x: '10',
      y: '3,8',
      type: 'text',
      content: '三级指标对应的产品综合能耗(吨标准煤)'
    },
    {
      id: 'indval_r3',
      x: '11',
      y: '3,8',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r3',
      x: '12',
      y: '3,8',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r3',
      x: '13',
      y: '3,15',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r3',
      x: '15',
      y: '3,15',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《工业产销总值及主要产品产量》（B204-1）、《能源购进、消费与库存》（205-1表）\n3.《能源加工转换与回收利用》（205-2表）（如有）、《主要耗能工业企业单位产品能源消费情况》（205-3表）（如有） 、《能源生产、销售与库存》（205-6表） （如有）\n4.《重点用能单位能源利用状况报告》（如有）'
    },
    {
      id: 'rule_r3',
      x: '17',
      y: '3,8',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r4',
      x: '4',
      y: '4',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r4',
      x: '6',
      platformHide: true,
      y: '4',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r4',
      x: '7',
      y: '4',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r4',
      x: '8',
      y: '4',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r4',
      x: '9',
      y: '4',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r4',
      x: '10',
      y: '4',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r4',
      x: '11',
      y: '4',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r4',
      x: '12',
      y: '4',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r4',
      x: '13',
      y: '4',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r4',
      x: '15',
      y: '4',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r4',
      x: '17',
      y: '4',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r5',
      x: '4',
      y: '5',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r5',
      x: '6',
      platformHide: true,
      y: '5',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r5',
      x: '7',
      y: '5',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r5',
      x: '8',
      y: '5',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r5',
      x: '9',
      y: '5',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r5',
      x: '10',
      y: '5',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r5',
      x: '11',
      y: '5',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r5',
      x: '12',
      y: '5',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r5',
      x: '13',
      y: '5',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r5',
      x: '15',
      y: '5',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r5',
      x: '17',
      y: '5',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r6',
      x: '4',
      y: '6',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r6',
      x: '6',
      platformHide: true,
      y: '6',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r6',
      x: '7',
      y: '6',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r6',
      x: '8',
      y: '6',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r6',
      x: '9',
      y: '6',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r6',
      x: '10',
      y: '6',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r6',
      x: '11',
      y: '6',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r6',
      x: '12',
      y: '6',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r6',
      x: '13',
      y: '6',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r6',
      x: '15',
      y: '6',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r6',
      x: '17',
      y: '6',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r7',
      x: '4',
      y: '7',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r7',
      x: '6',
      platformHide: true,
      y: '7',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r7',
      x: '7',
      y: '7',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r7',
      x: '8',
      y: '7',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r7',
      x: '9',
      y: '7',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r7',
      x: '10',
      y: '7',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r7',
      x: '11',
      y: '7',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r7',
      x: '12',
      y: '7',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r7',
      x: '13',
      y: '7',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r7',
      x: '15',
      y: '7',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r7',
      x: '17',
      y: '7',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r8',
      x: '4',
      y: '8',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r8',
      x: '6',
      platformHide: true,
      y: '8',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r8',
      x: '7',
      y: '8',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r8',
      x: '8',
      y: '8',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r8',
      x: '9',
      y: '8',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r8',
      x: '10',
      y: '8',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r8',
      x: '11',
      y: '8',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r8',
      x: '12',
      y: '8',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r8',
      x: '13',
      y: '8',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r8',
      x: '15',
      y: '8',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r8',
      x: '17',
      y: '8',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r9',
      x: '4',
      y: '9',
      type: 'input',
      content: '产品一名称'
    },
    {
      id: 'type_r12',
      x: '5',
      y: '12,15',
      type: 'text',
      content: '逆向定量'
    },
    {
      id: 'score_r9',
      x: '6',
      platformHide: true,
      y: '9',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r9',
      x: '7',
      y: '9,15',
      type: 'text',
      content: 'tce/产品单位或 kgce/产品单位'
    },
    {
      id: 'bm_r9',
      x: '8',
      y: '9',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r9',
      x: '9',
      y: '9',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r9',
      x: '10',
      y: '9',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r9',
      x: '11',
      y: '9',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r9',
      x: '12',
      y: '9',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r9',
      x: '13',
      y: '9',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r9',
      x: '15',
      y: '9',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r9',
      x: '17',
      y: '9',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r10',
      x: '4',
      y: '10',
      type: 'input',
      content: '产品二名称'
    },
    {
      id: 'score_r10',
      x: '6',
      platformHide: true,
      y: '10',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'bm_r10',
      x: '8',
      y: '10',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r10',
      x: '9',
      y: '10',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r10',
      x: '10',
      y: '10',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r10',
      x: '11',
      y: '10',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r10',
      x: '12',
      y: '10',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r10',
      x: '13',
      y: '10',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r10',
      x: '15',
      y: '10',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r10',
      x: '17',
      y: '10',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r11',
      x: '4',
      y: '11',
      type: 'input',
      content: '产品三名称'
    },
    {
      id: 'score_r11',
      x: '6',
      platformHide: true,
      y: '11',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'bm_r11',
      x: '8',
      y: '11',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r11',
      x: '9',
      y: '11',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r11',
      x: '10',
      y: '11',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r11',
      x: '11',
      y: '11',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r11',
      x: '12',
      y: '11',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r11',
      x: '13',
      y: '11',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r11',
      x: '15',
      y: '11',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r11',
      x: '17',
      y: '11',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r12',
      x: '4',
      y: '12,15',
      type: 'text',
      content: '单位产值综合能耗\n（无适用国家强制性能源消耗限额标准时选用）'
    },
    {
      id: 'score_r12',
      x: '6',
      platformHide: true,
      y: '12',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'bm_r12',
      x: '8',
      y: '12,15',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r12',
      x: '9',
      y: '12,15',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r12',
      x: '10',
      y: '12,15',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r12',
      x: '11',
      y: '12,15',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r12',
      x: '12',
      y: '12,15',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r12',
      x: '13',
      y: '12',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'use_r12',
      x: '13',
      y: '13',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'use_r12',
      x: '13',
      y: '14',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'use_r12',
      x: '13',
      y: '15',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r12',
      x: '15',
      y: '12',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r12',
      x: '17',
      y: '12',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r13',
      x: '4',
      y: '13',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r13',
      x: '6',
      platformHide: true,
      y: '13',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'score_r14',
      x: '6',
      platformHide: true,
      y: '14',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'rule_r14',
      x: '17',
      y: '14',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'score_r15',
      x: '6',
      platformHide: true,
      y: '15',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'evidence_r15',
      x: '15',
      y: '15',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r15',
      x: '17',
      y: '15',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r16',
      x: '2',
      y: '16,18',
      type: 'text',
      content: '5'
    },
    {
      id: 'l2_r16',
      x: '3',
      y: '16,18',
      type: 'text',
      content: '碳排放强度'
    },
    {
      id: 'l3_r16',
      x: '4',
      y: '16,18',
      type: 'text',
      content: '单位产值碳排放量'
    },
    {
      id: 'type_r16',
      x: '5',
      y: '16,18',
      type: 'text',
      content: '逆向定量'
    },
    {
      id: 'score_r16',
      x: '6',
      platformHide: true,
      y: '16,18',
      type: 'text',
      content: '11',
      portalHide: true
    },
    {
      id: 'unit_r16',
      x: '7',
      y: '16,18',
      type: 'text',
      content: 'kgCO2/万元'
    },
    {
      id: 'bm_r16',
      x: '8',
      y: '16,18',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r16',
      x: '9',
      y: '16,18',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r16',
      x: '10',
      y: '16,18',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r16',
      x: '11',
      y: '16,18',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r16',
      x: '12',
      y: '16,18',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r16',
      x: '13',
      y: '16,18',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r16',
      x: '15',
      y: '16,18',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.温室气体排放报告（依据相关核算标准给出的报告模板）\n3.报统计部门《工业产销总值及主要产品产量》（B204-1）'
    },
    {
      id: 'rule_r16',
      x: '17',
      y: '16,18',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r17',
      x: '4',
      y: '17',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r17',
      x: '5',
      y: '17',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r17',
      x: '6',
      platformHide: true,
      y: '17',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r17',
      x: '7',
      y: '17',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r17',
      x: '8',
      y: '17',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r17',
      x: '9',
      y: '17',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r17',
      x: '10',
      y: '17',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r17',
      x: '11',
      y: '17',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r17',
      x: '12',
      y: '17',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r17',
      x: '13',
      y: '17',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r17',
      x: '15',
      y: '17',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r17',
      x: '17',
      y: '17',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r18',
      x: '4',
      y: '18',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r18',
      x: '5',
      y: '18',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r18',
      x: '6',
      platformHide: true,
      y: '18',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r18',
      x: '7',
      y: '18',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r18',
      x: '8',
      y: '18',
      type: 'number',
      placeholder: '输入标杆值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'number',
            min: 0,
            message: '标杆值不能为负'
          }
        ]
      }
    },
    {
      id: 'bl_r18',
      x: '9',
      y: '18',
      type: 'number',
      placeholder: '输入基准值',
      validation: {
        rules: [
          {
            required: true,
            message: '请输入基准值'
          },
          {
            type: 'number',
            min: 0,
            message: '基准值不能为负'
          }
        ]
      }
    },
    {
      id: 'weight_r18',
      x: '10',
      y: '18',
      type: 'number',
      placeholder: '输入加权参数',
      validation: {
        rules: [
          {
            type: 'number',
            min: 0,
            message: '加权参数不能为负'
          }
        ]
      }
    },
    {
      id: 'indval_r18',
      x: '11',
      y: '18',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r18',
      x: '12',
      y: '18',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r18',
      x: '13',
      y: '18',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r18',
      x: '15',
      y: '18',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r18',
      x: '17',
      y: '18',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r19',
      x: '2',
      y: '19,23',
      type: 'text',
      content: '6'
    },
    {
      id: 'l2_r19',
      x: '3',
      y: '19,23',
      type: 'text',
      content: '可再生能源利用率'
    },
    {
      id: 'l3_r19',
      x: '4',
      y: '19,20',
      type: 'text',
      content: '可再生能源利用率\n年综合能源消费量10000吨标煤及以上的用能单位'
    },
    {
      id: 'type_r19',
      x: '5',
      y: '19,20',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r19',
      x: '6',
      platformHide: true,
      y: '19,20',
      type: 'text',
      content: '8',
      portalHide: true
    },
    {
      id: 'unit_r19',
      x: '7',
      y: '19,20',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r19',
      x: '8',
      y: '19,20',
      type: 'text',
      value: 4.31,
      content: '/'
    },
    {
      id: 'bl_r19',
      x: '9',
      y: '19,20',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r19',
      x: '10',
      y: '19,20',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r19',
      x: '11',
      y: '19,20',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r19',
      x: '12',
      y: '19,20',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r19',
      x: '13',
      y: '19,23',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r19',
      x: '15',
      y: '19,23',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《能源购进、消费与库存》（205-1表）、《能源加工转换与回收利用》（205-2表）（如有）、《能源生产、销售与库存》（205-6表）（如有）\n3.《可再生能源电力消费核算清单》\n4.可再生能源消费凭证，例如绿色电力市场化交易合同、交易结算凭证、绿证（GEC）等可再生能源电力消费凭证，非电力形式可再生能源利用相关合同、协议等\n注：《可再生能源电力消费核算清单》可由电力交易机构出具或企业自行整理填报（模板于系统下载）；如提供了电力交易机构出具的带签章、编号的核算清单，其内容覆盖的绿色电力市场化交易合同、交易结算凭证、绿证（GEC）等可再生能源电力消费凭证可免予提供；如企业自行整理填报，则需将相关凭证顺次整理并随附'
    },
    {
      id: 'rule_r19',
      x: '17',
      y: '19,20',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r20',
      x: '4',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r20',
      x: '5',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r20',
      x: '6',
      platformHide: true,
      y: '20',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r20',
      x: '7',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r20',
      x: '8',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r20',
      x: '9',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r20',
      x: '10',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r20',
      x: '11',
      y: '20',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r20',
      x: '12',
      y: '20',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r20',
      x: '13',
      y: '20',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r20',
      x: '15',
      y: '20',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r20',
      x: '17',
      y: '20',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r21',
      x: '4',
      y: '21',
      type: 'text',
      content: '年综合能源消费量5000吨及以上不满10000吨标煤的用能单位'
    },
    {
      id: 'type_r21',
      x: '5',
      y: '21',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r21',
      x: '6',
      platformHide: true,
      y: '21',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r21',
      x: '7',
      y: '21',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r21',
      x: '8',
      y: '21',
      type: 'text',
      value: 11.9,
      content: '/'
    },
    {
      id: 'bl_r21',
      x: '9',
      y: '21',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r21',
      x: '10',
      y: '21',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r21',
      x: '11',
      y: '21',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r21',
      x: '12',
      y: '21',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r21',
      x: '13',
      y: '21',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r21',
      x: '15',
      y: '21',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r21',
      x: '17',
      y: '21',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r22',
      x: '4',
      y: '22',
      type: 'text',
      content: '年综合能源消费量3000吨及以上不满5000吨标煤的用能单位'
    },
    {
      id: 'type_r22',
      x: '5',
      y: '22',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r22',
      x: '6',
      platformHide: true,
      y: '22',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r22',
      x: '7',
      y: '22',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r22',
      x: '8',
      y: '22',
      type: 'text',
      value: 7.93,
      content: '/'
    },
    {
      id: 'bl_r22',
      x: '9',
      y: '22',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r22',
      x: '10',
      y: '22',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r22',
      x: '11',
      y: '22',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r22',
      x: '12',
      y: '22',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r22',
      x: '13',
      y: '22',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r22',
      x: '15',
      y: '22',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r22',
      x: '17',
      y: '22',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r23',
      x: '4',
      y: '23',
      type: 'text',
      content: '年综合能源消费量3000吨标煤以下的用能单位'
    },
    {
      id: 'type_r23',
      x: '5',
      y: '23',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r23',
      x: '6',
      platformHide: true,
      y: '23',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r23',
      x: '7',
      y: '23',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r23',
      x: '8',
      y: '23',
      type: 'text',
      value: 33.03,
      content: '/'
    },
    {
      id: 'bl_r23',
      x: '9',
      y: '23',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r23',
      x: '10',
      y: '23',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r23',
      x: '11',
      y: '23',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r23',
      x: '12',
      y: '23',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r23',
      x: '13',
      y: '23',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r23',
      x: '15',
      y: '23',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r23',
      x: '17',
      y: '23',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r24',
      x: '2',
      y: '24,35',
      type: 'text',
      content: '7'
    },
    {
      id: 'l2_r24',
      x: '3',
      y: '24,35',
      type: 'text',
      content: '能碳管理系统平台功能符合数量'
    },
    {
      id: 'l3_r24',
      x: '4',
      y: '24,35',
      type: 'text',
      content: '能碳管理系统平台功能符合数量'
    },
    {
      id: 'type_r24',
      x: '5',
      y: '24,35',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r24',
      x: '6',
      platformHide: true,
      y: '24,35',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r24',
      x: '7',
      y: '24,35',
      type: 'text',
      content: '项'
    },
    {
      id: 'bm_r24',
      x: '8',
      y: '24,35',
      type: 'text',
      value: 6,
      content: '/'
    },
    {
      id: 'bl_r24',
      x: '9',
      y: '24,35',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r24',
      x: '10',
      y: '24,35',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r24',
      x: '11',
      y: '24,35',
      type: 'checkbox',
      value: '',
      options: [
        {
          label: '能耗查询',
          value: '1'
        },
        {
          label: '能源消费量和强度计算',
          value: '2'
        },
        {
          label: '能源消费分析与用能策略推荐',
          value: '3'
        },
        {
          label: '能效对标',
          value: '4'
        },
        {
          label: '能流分析',
          value: '5'
        },
        {
          label: '能效平衡与优化',
          value: '6'
        },
        {
          label: '用能与碳排放预算管理',
          value: '7'
        },
        {
          label: '碳排放核算',
          value: '8'
        },
        {
          label: '供应链碳管理',
          value: '9'
        },
        {
          label: '碳足迹核算',
          value: '10'
        },
        {
          label: '碳核查支撑',
          value: '11'
        },
        {
          label: '碳资产管理',
          value: '12'
        }
      ],
      validation: {
        rules: [
          {
            required: true,
            message: '请输入标杆值'
          },
          {
            type: 'array',
            min: 1,
            message: '至少添加1条数据',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'notes_r24',
      x: '12',
      y: '24,35',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r24',
      x: '13',
      y: '24,35',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r24',
      x: '15',
      y: '24,35',
      type: 'text',
      content:
        '1.平台系统架构设计文档，说明与相关业务功能的对应关系\n2.平台开发采购合同、部署验收报告（如有）\n3.平台功能实现或效果验证材料，例如用户操作手册、功能截图（大屏看板、APP 能耗实时展示等功能界面）等'
    },
    {
      id: 'rule_r24',
      x: '17',
      y: '24,35',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r25',
      x: '4',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r25',
      x: '5',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r25',
      x: '6',
      platformHide: true,
      y: '25',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r25',
      x: '7',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r25',
      x: '8',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r25',
      x: '9',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r25',
      x: '10',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r25',
      x: '11',
      y: '25',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r25',
      x: '12',
      y: '25',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r25',
      x: '13',
      y: '25',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r25',
      x: '15',
      y: '25',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r25',
      x: '17',
      y: '25',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r26',
      x: '4',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r26',
      x: '5',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r26',
      x: '6',
      platformHide: true,
      y: '26',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r26',
      x: '7',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r26',
      x: '8',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r26',
      x: '9',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r26',
      x: '10',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r26',
      x: '11',
      y: '26',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r26',
      x: '12',
      y: '26',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r26',
      x: '13',
      y: '26',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r26',
      x: '15',
      y: '26',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r26',
      x: '17',
      y: '26',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r27',
      x: '4',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r27',
      x: '5',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r27',
      x: '6',
      platformHide: true,
      y: '27',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r27',
      x: '7',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r27',
      x: '8',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r27',
      x: '9',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r27',
      x: '10',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r27',
      x: '11',
      y: '27',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r27',
      x: '12',
      y: '27',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r27',
      x: '13',
      y: '27',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r27',
      x: '15',
      y: '27',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r27',
      x: '17',
      y: '27',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r28',
      x: '4',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r28',
      x: '5',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r28',
      x: '6',
      platformHide: true,
      y: '28',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r28',
      x: '7',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r28',
      x: '8',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r28',
      x: '9',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r28',
      x: '10',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r28',
      x: '11',
      y: '28',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r28',
      x: '12',
      y: '28',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r28',
      x: '13',
      y: '28',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r28',
      x: '15',
      y: '28',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r28',
      x: '17',
      y: '28',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r29',
      x: '4',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r29',
      x: '5',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r29',
      x: '6',
      platformHide: true,
      y: '29',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r29',
      x: '7',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r29',
      x: '8',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r29',
      x: '9',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r29',
      x: '10',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r29',
      x: '11',
      y: '29',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r29',
      x: '12',
      y: '29',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r29',
      x: '13',
      y: '29',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r29',
      x: '15',
      y: '29',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r29',
      x: '17',
      y: '29',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r30',
      x: '4',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r30',
      x: '5',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r30',
      x: '6',
      platformHide: true,
      y: '30',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r30',
      x: '7',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r30',
      x: '8',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r30',
      x: '9',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r30',
      x: '10',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r30',
      x: '11',
      y: '30',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r30',
      x: '12',
      y: '30',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r30',
      x: '13',
      y: '30',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r30',
      x: '15',
      y: '30',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r30',
      x: '17',
      y: '30',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r31',
      x: '4',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r31',
      x: '5',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r31',
      x: '6',
      platformHide: true,
      y: '31',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r31',
      x: '7',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r31',
      x: '8',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r31',
      x: '9',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r31',
      x: '10',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r31',
      x: '11',
      y: '31',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r31',
      x: '12',
      y: '31',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r31',
      x: '13',
      y: '31',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r31',
      x: '15',
      y: '31',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r31',
      x: '17',
      y: '31',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r32',
      x: '4',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r32',
      x: '5',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r32',
      x: '6',
      platformHide: true,
      y: '32',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r32',
      x: '7',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r32',
      x: '8',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r32',
      x: '9',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r32',
      x: '10',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r32',
      x: '11',
      y: '32',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r32',
      x: '12',
      y: '32',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r32',
      x: '13',
      y: '32',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r32',
      x: '15',
      y: '32',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r32',
      x: '17',
      y: '32',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r33',
      x: '4',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r33',
      x: '5',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r33',
      x: '6',
      platformHide: true,
      y: '33',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r33',
      x: '7',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r33',
      x: '8',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r33',
      x: '9',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r33',
      x: '10',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r33',
      x: '11',
      y: '33',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r33',
      x: '12',
      y: '33',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r33',
      x: '13',
      y: '33',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r33',
      x: '15',
      y: '33',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r33',
      x: '17',
      y: '33',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r34',
      x: '4',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r34',
      x: '5',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r34',
      x: '6',
      platformHide: true,
      y: '34',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r34',
      x: '7',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r34',
      x: '8',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r34',
      x: '9',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r34',
      x: '10',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r34',
      x: '11',
      y: '34',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r34',
      x: '12',
      y: '34',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r34',
      x: '13',
      y: '34',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r34',
      x: '15',
      y: '34',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r34',
      x: '17',
      y: '34',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r35',
      x: '4',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r35',
      x: '5',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r35',
      x: '6',
      platformHide: true,
      y: '35',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r35',
      x: '7',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r35',
      x: '8',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r35',
      x: '9',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r35',
      x: '10',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r35',
      x: '11',
      y: '35',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r35',
      x: '12',
      y: '35',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r35',
      x: '13',
      y: '35',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r35',
      x: '15',
      y: '35',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r35',
      x: '17',
      y: '35',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l1_r36',
      x: '1',
      y: '36,53',
      type: 'text',
      content: '<b>资源高效化</b>'
    },
    {
      id: 'seq_r36',
      x: '2',
      y: '36,39',
      type: 'text',
      content: '8'
    },
    {
      id: 'l2_r36',
      x: '3',
      y: '36,39',
      type: 'text',
      content: '节约原材料'
    },
    {
      id: 'l3_r36',
      x: '4',
      y: '36,37',
      type: 'text',
      content: '减少生产过程中原辅材料消耗应用案例'
    },
    {
      id: 'type_r36',
      x: '5',
      y: '36,37',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r36',
      x: '6',
      platformHide: true,
      y: '36,37',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r36',
      x: '7',
      y: '36,37',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r36',
      x: '8',
      y: '36,37',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r36',
      x: '9',
      y: '36,37',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r36',
      x: '10',
      y: '36,37',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r36',
      x: '11',
      y: '36,37',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '提供本单位减少生产过程中原辅材料消耗的应用案例',
          value: 1
        },
        {
          label: '未提供',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r36',
      x: '12',
      y: '36,37',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r36',
      x: '13',
      y: '36,37',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r36',
      x: '15',
      y: '36,37',
      type: 'text',
      content: '提供本单位减少生产过程中原辅材料消耗的应用案例'
    },
    {
      id: 'rule_r36',
      x: '17',
      y: '36,37',
      type: 'text',
      content: '根据证明材料酌情给分。',
      portalHide: true
    },
    {
      id: 'l3_r37',
      x: '4',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r37',
      x: '5',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r37',
      x: '6',
      platformHide: true,
      y: '37',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r37',
      x: '7',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r37',
      x: '8',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r37',
      x: '9',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r37',
      x: '10',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r37',
      x: '11',
      y: '37',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r37',
      x: '12',
      y: '37',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r37',
      x: '13',
      y: '37',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r37',
      x: '15',
      y: '37',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r37',
      x: '17',
      y: '37',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r38',
      x: '4',
      y: '38,39',
      type: 'text',
      content:
        '使用再生材料、回收再利用材料或可回收材料替代原生材料、不可回收材料改善应用案例'
    },
    {
      id: 'type_r38',
      x: '5',
      y: '38,39',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r38',
      x: '6',
      platformHide: true,
      y: '38,39',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r38',
      x: '7',
      y: '38,39',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r38',
      x: '8',
      y: '38,39',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r38',
      x: '9',
      y: '38,39',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r38',
      x: '10',
      y: '38,39',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r38',
      x: '11',
      y: '38,39',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label:
            '使用再生材料、回收再利用材料或可回收材料替代原生材料、不可回收材料改善应用案例',
          value: 1
        },
        {
          label: '未提供',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r38',
      x: '12',
      y: '38,39',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r38',
      x: '13',
      y: '38,39',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r38',
      x: '15',
      y: '38,39',
      type: 'text',
      content:
        '提供本单位使用再生材料、回收再利用材料或可回收材料替代原生材料、不可回收材料改善应用案例'
    },
    {
      id: 'rule_r38',
      x: '17',
      y: '38,39',
      type: 'text',
      content: '根据证明材料酌情给分。',
      portalHide: true
    },
    {
      id: 'l3_r39',
      x: '4',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r39',
      x: '5',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r39',
      x: '6',
      platformHide: true,
      y: '39',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r39',
      x: '7',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r39',
      x: '8',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r39',
      x: '9',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r39',
      x: '10',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r39',
      x: '11',
      y: '39',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r39',
      x: '12',
      y: '39',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r39',
      x: '13',
      y: '39',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r39',
      x: '15',
      y: '39',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r39',
      x: '17',
      y: '39',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r40',
      x: '2',
      y: '40,45',
      type: 'text',
      content: '9'
    },
    {
      id: 'l2_r40',
      x: '3',
      y: '40,45',
      type: 'text',
      content: '取水强度'
    },
    {
      id: 'l3_r40',
      x: '4',
      y: '40,41',
      type: 'text',
      content:
        '单位产品取水量（有适用工业用水定额国家标准时必选，涉及多种产品适用标准时，仅填写取水量排序前三以内的产品）'
    },
    {
      id: 'type_r40',
      x: '5',
      y: '40,41',
      type: 'text',
      content: '逆向定量'
    },
    {
      id: 'score_r40',
      x: '6',
      platformHide: true,
      y: '40,41',
      type: 'text',
      content: '6',
      portalHide: true
    },
    {
      id: 'unit_r40',
      x: '7',
      y: '40,41',
      type: 'text',
      content: 'm3/产品单位'
    },
    {
      id: 'bm_r40',
      x: '8',
      y: '40,41',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r40',
      x: '9',
      y: '40,41',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r40',
      x: '10',
      y: '40,41',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r40',
      x: '11',
      y: '40,41',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r40',
      x: '12',
      y: '40,41',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r40',
      x: '13',
      y: '40,45',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r40',
      x: '15',
      y: '40,41',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《工业产销总值及主要产品产量》（B204-1）、《工业企业用水情况》（205-4表）\n3.工业用水统计台账'
    },
    {
      id: 'rule_r40',
      x: '17',
      y: '40,41',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r41',
      x: '4',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r41',
      x: '5',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r41',
      x: '6',
      platformHide: true,
      y: '41',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r41',
      x: '7',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r41',
      x: '8',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r41',
      x: '9',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r41',
      x: '10',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r41',
      x: '11',
      y: '41',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r41',
      x: '12',
      y: '41',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r41',
      x: '13',
      y: '41',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r41',
      x: '15',
      y: '41',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r41',
      x: '17',
      y: '41',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r42',
      x: '4',
      y: '42',
      type: 'input',
      content: '产品一名称'
    },
    {
      id: 'type_r42',
      x: '5',
      y: '42',
      type: 'text',
      content: ''
    },
    {
      id: 'score_r42',
      x: '6',
      platformHide: true,
      y: '42',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'unit_r42',
      x: '7',
      y: '42',
      type: 'text',
      content: ''
    },
    {
      id: 'bm_r42',
      x: '8',
      y: '42',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r42',
      x: '9',
      y: '42',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r42',
      x: '10',
      y: '42',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r42',
      x: '11',
      y: '42',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r42',
      x: '12',
      y: '42',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r42',
      x: '13',
      y: '42',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r42',
      x: '15',
      y: '42',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r42',
      x: '17',
      y: '42',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r43',
      x: '4',
      y: '43',
      type: 'input',
      content: '产品二名称'
    },
    {
      id: 'type_r43',
      x: '5',
      y: '43',
      type: 'text',
      content: ''
    },
    {
      id: 'score_r43',
      x: '6',
      platformHide: true,
      y: '43',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'unit_r43',
      x: '7',
      y: '43',
      type: 'text',
      content: ''
    },
    {
      id: 'bm_r43',
      x: '8',
      y: '43',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r43',
      x: '9',
      y: '43',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r43',
      x: '10',
      y: '43',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r43',
      x: '11',
      y: '43',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r43',
      x: '12',
      y: '43',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r43',
      x: '13',
      y: '43',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r43',
      x: '15',
      y: '43',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r43',
      x: '17',
      y: '43',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r44',
      x: '4',
      y: '44',
      type: 'input',
      content: '产品三名称'
    },
    {
      id: 'type_r44',
      x: '5',
      y: '44',
      type: 'text',
      content: ''
    },
    {
      id: 'score_r44',
      x: '6',
      platformHide: true,
      y: '44',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'unit_r44',
      x: '7',
      y: '44',
      type: 'text',
      content: ''
    },
    {
      id: 'bm_r44',
      x: '8',
      y: '44',
      type: 'number',
      placeholder: '输入标杆值'
    },
    {
      id: 'bl_r44',
      x: '9',
      y: '44',
      type: 'number',
      placeholder: '输入基准值'
    },
    {
      id: 'weight_r44',
      x: '10',
      y: '44',
      type: 'number',
      placeholder: '输入加权参数'
    },
    {
      id: 'indval_r44',
      x: '11',
      y: '44',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r44',
      x: '12',
      y: '44',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r44',
      x: '13',
      y: '44',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r44',
      x: '15',
      y: '44',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r44',
      x: '17',
      y: '44',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r45',
      x: '4',
      y: '45',
      type: 'text',
      content: '单位产值取水量（无适用工业用水定额国家标准时选用）'
    },
    {
      id: 'type_r45',
      x: '5',
      y: '45',
      type: 'text',
      content: '逆向定量'
    },
    {
      id: 'score_r45',
      x: '6',
      platformHide: true,
      y: '45',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r45',
      x: '7',
      y: '45',
      type: 'text',
      content: 'm3/万元'
    },
    {
      id: 'bm_r45',
      x: '8',
      y: '45',
      type: 'text',
      value: 1,
      content: '/'
    },
    {
      id: 'bl_r45',
      x: '9',
      y: '45',
      type: 'text',
      value: 0.5,
      content: '/'
    },
    {
      id: 'weight_r45',
      x: '10',
      y: '45',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r45',
      x: '11',
      y: '45',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r45',
      x: '12',
      y: '45',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r45',
      x: '13',
      y: '45',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r45',
      x: '15',
      y: '45',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r45',
      x: '17',
      y: '45',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r46',
      x: '2',
      y: '46,49',
      type: 'text',
      content: '10'
    },
    {
      id: 'l2_r46',
      x: '3',
      y: '46,49',
      type: 'text',
      content: '工业用水重复利用率'
    },
    {
      id: 'l3_r46',
      x: '4',
      y: '46,49',
      type: 'text',
      content: '工业用水重复利用率'
    },
    {
      id: 'type_r46',
      x: '5',
      y: '46,49',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r46',
      x: '6',
      platformHide: true,
      y: '46,49',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r46',
      x: '7',
      y: '46,49',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r46',
      x: '8',
      y: '46,49',
      type: 'text',
      value: 92.22,
      content: '/'
    },
    {
      id: 'bl_r46',
      x: '9',
      y: '46,49',
      type: 'text',
      value: 80,
      content: '/'
    },
    {
      id: 'weight_r46',
      x: '10',
      y: '46,49',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r46',
      x: '11',
      y: '46,49',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r46',
      x: '12',
      y: '46,49',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r46',
      x: '13',
      y: '46,49',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r46',
      x: '15',
      y: '46,49',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《工业企业用水情况》（205-4表）\n3.重复用水量证明，例如循环水量、串联水量、废水处理回用水量等计量或记录台账\n4.重复用水设施、关键区域现场实景照片'
    },
    {
      id: 'rule_r46',
      x: '17',
      y: '46,49',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r47',
      x: '4',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r47',
      x: '5',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r47',
      x: '6',
      platformHide: true,
      y: '47',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r47',
      x: '7',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r47',
      x: '8',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r47',
      x: '9',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r47',
      x: '10',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r47',
      x: '11',
      y: '47',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r47',
      x: '12',
      y: '47',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r47',
      x: '13',
      y: '47',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r47',
      x: '15',
      y: '47',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r47',
      x: '17',
      y: '47',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r48',
      x: '4',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r48',
      x: '5',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r48',
      x: '6',
      platformHide: true,
      y: '48',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r48',
      x: '7',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r48',
      x: '8',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r48',
      x: '9',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r48',
      x: '10',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r48',
      x: '11',
      y: '48',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r48',
      x: '12',
      y: '48',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r48',
      x: '13',
      y: '48',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r48',
      x: '15',
      y: '48',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r48',
      x: '17',
      y: '48',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r49',
      x: '4',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r49',
      x: '5',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r49',
      x: '6',
      platformHide: true,
      y: '49',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r49',
      x: '7',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r49',
      x: '8',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r49',
      x: '9',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r49',
      x: '10',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r49',
      x: '11',
      y: '49',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r49',
      x: '12',
      y: '49',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r49',
      x: '13',
      y: '49',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r49',
      x: '15',
      y: '49',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r49',
      x: '17',
      y: '49',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r50',
      x: '2',
      y: '50,53',
      type: 'text',
      content: '11'
    },
    {
      id: 'l2_r50',
      x: '3',
      y: '50,53',
      type: 'text',
      content: '一般工业固体废物综合利用率'
    },
    {
      id: 'l3_r50',
      x: '4',
      y: '50,53',
      type: 'text',
      content: '一般工业固体废物综合利用率'
    },
    {
      id: 'type_r50',
      x: '5',
      y: '50,53',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r50',
      x: '6',
      platformHide: true,
      y: '50,53',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r50',
      x: '7',
      y: '50,53',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r50',
      x: '8',
      y: '50,53',
      type: 'text',
      value: 100,
      content: '/'
    },
    {
      id: 'bl_r50',
      x: '9',
      y: '50,53',
      type: 'text',
      value: 80,
      content: '/'
    },
    {
      id: 'weight_r50',
      x: '10',
      y: '50,53',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r50',
      x: '11',
      y: '50,53',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r50',
      x: '12',
      y: '50,53',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r50',
      x: '13',
      y: '50,53',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r50',
      x: '15',
      y: '50,53',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.一般工业固体废物统计台账，包含年度产生量、综合利用量、综合利用往年贮存量等指标计算关键参数信息\n3.报生态环境部门《工业企业污染物和温室气体排放及治理情况》（基101表） （如有）\n4.综合利用证明，例如资源化技术方案、工艺流程图等自行利用说明、委外综合利用协议及综合利用单位资质证明、转移量确认单或相关凭证'
    },
    {
      id: 'rule_r50',
      x: '17',
      y: '50,53',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r51',
      x: '4',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r51',
      x: '5',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r51',
      x: '6',
      platformHide: true,
      y: '51',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r51',
      x: '7',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r51',
      x: '8',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r51',
      x: '9',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r51',
      x: '10',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r51',
      x: '11',
      y: '51',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r51',
      x: '12',
      y: '51',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r51',
      x: '13',
      y: '51',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r51',
      x: '15',
      y: '51',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r51',
      x: '17',
      y: '51',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r52',
      x: '4',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r52',
      x: '5',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r52',
      x: '6',
      platformHide: true,
      y: '52',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r52',
      x: '7',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r52',
      x: '8',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r52',
      x: '9',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r52',
      x: '10',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r52',
      x: '11',
      y: '52',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r52',
      x: '12',
      y: '52',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r52',
      x: '13',
      y: '52',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r52',
      x: '15',
      y: '52',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r52',
      x: '17',
      y: '52',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r53',
      x: '4',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r53',
      x: '5',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r53',
      x: '6',
      platformHide: true,
      y: '53',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r53',
      x: '7',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r53',
      x: '8',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r53',
      x: '9',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r53',
      x: '10',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r53',
      x: '11',
      y: '53',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r53',
      x: '12',
      y: '53',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r53',
      x: '13',
      y: '53',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r53',
      x: '15',
      y: '53',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r53',
      x: '17',
      y: '53',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l1_r54',
      x: '1',
      y: '54,70',
      type: 'text',
      content: '<b>生产洁净化</b>'
    },
    {
      id: 'seq_r54',
      x: '2',
      y: '54,55',
      type: 'text',
      content: '12'
    },
    {
      id: 'l2_r54',
      x: '3',
      y: '54,55',
      type: 'text',
      content: '生产工艺和设备先进性'
    },
    {
      id: 'l3_r54',
      x: '4',
      y: '54,55',
      type: 'text',
      content:
        '采用《国家工业和信息化领域节能降碳技术装备推荐目录》《国家鼓励的工业节水工艺、技术和装备目录》《国家工业资源综合利用先进适用工艺技术设备目录》《国家鼓励发展的重大环保技术装备目录》《绿色技术推广目录》《国家重点推广的低碳技术目录》《国家污染防治技术指导目录》《产业结构调整指导目录》范围内的先进技术和设备的数量'
    },
    {
      id: 'type_r54',
      x: '5',
      y: '54,55',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r54',
      x: '6',
      platformHide: true,
      y: '54,55',
      type: 'text',
      content: '6',
      portalHide: true
    },
    {
      id: 'unit_r54',
      x: '7',
      y: '54,55',
      type: 'text',
      content: '项'
    },
    {
      id: 'bm_r54',
      x: '8',
      y: '54,55',
      type: 'text',
      value: 5,
      content: '/'
    },
    {
      id: 'bl_r54',
      x: '9',
      y: '54,55',
      type: 'text',
      value: 3,
      content: '/'
    },
    {
      id: 'weight_r54',
      x: '10',
      y: '54,55',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r54',
      x: '11',
      y: '54,55',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r54',
      x: '12',
      y: '54,55',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r54',
      x: '13',
      y: '54,55',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r54',
      x: '15',
      y: '54,55',
      type: 'text',
      content: '采用相关生产工艺和设备的说明'
    },
    {
      id: 'rule_r54',
      x: '17',
      y: '54,55',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r55',
      x: '4',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r55',
      x: '5',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r55',
      x: '6',
      platformHide: true,
      y: '55',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r55',
      x: '7',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r55',
      x: '8',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r55',
      x: '9',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r55',
      x: '10',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r55',
      x: '11',
      y: '55',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r55',
      x: '12',
      y: '55',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r55',
      x: '13',
      y: '55',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r55',
      x: '15',
      y: '55',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r55',
      x: '17',
      y: '55',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r56',
      x: '2',
      y: '56,62',
      type: 'text',
      content: '13'
    },
    {
      id: 'l2_r56',
      x: '3',
      y: '56,62',
      type: 'text',
      content: '绿色低碳改造升级'
    },
    {
      id: 'l3_r56',
      x: '4',
      y: '56,58',
      type: 'text',
      content: '近3年实施绿色低碳改造升级年平均项目数量'
    },
    {
      id: 'type_r56',
      x: '5',
      y: '56,58',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r56',
      x: '6',
      platformHide: true,
      y: '56,58',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r56',
      x: '7',
      y: '56,58',
      type: 'text',
      content: '项'
    },
    {
      id: 'bm_r56',
      x: '8',
      y: '56,58',
      type: 'text',
      value: 3.67,
      content: '/'
    },
    {
      id: 'bl_r56',
      x: '9',
      y: '56,58',
      type: 'text',
      value: 3.6,
      content: '/'
    },
    {
      id: 'weight_r56',
      x: '10',
      y: '56,58',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r56',
      x: '11',
      y: '56,58',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r56',
      x: '12',
      y: '56,58',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r56',
      x: '13',
      y: '56,58',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r56',
      x: '15',
      y: '56,58',
      type: 'text',
      content:
        '1.近三年绿色低碳改造升级项目清单（按项目完成时间在近三年计）\n2.项目相关合同及立项、审批、验收材料（如有）\n3.项目结题报告（包含节能、降碳、减污、节材等效益计算说明）（如有）'
    },
    {
      id: 'rule_r56',
      x: '17',
      y: '56,58',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r57',
      x: '4',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r57',
      x: '5',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r57',
      x: '6',
      platformHide: true,
      y: '57',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r57',
      x: '7',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r57',
      x: '8',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r57',
      x: '9',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r57',
      x: '10',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r57',
      x: '11',
      y: '57',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r57',
      x: '12',
      y: '57',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r57',
      x: '13',
      y: '57',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r57',
      x: '15',
      y: '57',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r57',
      x: '17',
      y: '57',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r58',
      x: '4',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r58',
      x: '5',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r58',
      x: '6',
      platformHide: true,
      y: '58',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r58',
      x: '7',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r58',
      x: '8',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r58',
      x: '9',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r58',
      x: '10',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r58',
      x: '11',
      y: '58',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r58',
      x: '12',
      y: '58',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r58',
      x: '13',
      y: '58',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r58',
      x: '15',
      y: '58',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r58',
      x: '17',
      y: '58',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r59',
      x: '4',
      y: '59,62',
      type: 'text',
      content: '近3年绿色低碳改造升级项目投资额占比'
    },
    {
      id: 'type_r59',
      x: '5',
      y: '59,62',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r59',
      x: '6',
      platformHide: true,
      y: '59,62',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r59',
      x: '7',
      y: '59,62',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r59',
      x: '8',
      y: '59,62',
      type: 'text',
      value: 0.57,
      content: '/'
    },
    {
      id: 'bl_r59',
      x: '9',
      y: '59,62',
      type: 'text',
      value: 0.5,
      content: '/'
    },
    {
      id: 'weight_r59',
      x: '10',
      y: '59,62',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r59',
      x: '11',
      y: '59,62',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r59',
      x: '12',
      y: '59,62',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r59',
      x: '13',
      y: '59,62',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r59',
      x: '15',
      y: '59,62',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.近三年绿色低碳改造升级项目清单（按项目完成时间在近三年计）\n3.项目投资证明，例如项目合同、验收材料、支付凭证、专项审计报告等\n4.报统计部门《工业产销总值及主要产品产量》（B204-1）'
    },
    {
      id: 'rule_r59',
      x: '17',
      y: '59,62',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r60',
      x: '4',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r60',
      x: '5',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r60',
      x: '6',
      platformHide: true,
      y: '60',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r60',
      x: '7',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r60',
      x: '8',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r60',
      x: '9',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r60',
      x: '10',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r60',
      x: '11',
      y: '60',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r60',
      x: '12',
      y: '60',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r60',
      x: '13',
      y: '60',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r60',
      x: '15',
      y: '60',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r60',
      x: '17',
      y: '60',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r61',
      x: '4',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r61',
      x: '5',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r61',
      x: '6',
      platformHide: true,
      y: '61',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r61',
      x: '7',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r61',
      x: '8',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r61',
      x: '9',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r61',
      x: '10',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r61',
      x: '11',
      y: '61',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r61',
      x: '12',
      y: '61',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r61',
      x: '13',
      y: '61',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r61',
      x: '15',
      y: '61',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r61',
      x: '17',
      y: '61',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r62',
      x: '4',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r62',
      x: '5',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r62',
      x: '6',
      platformHide: true,
      y: '62',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r62',
      x: '7',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r62',
      x: '8',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r62',
      x: '9',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r62',
      x: '10',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r62',
      x: '11',
      y: '62',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r62',
      x: '12',
      y: '62',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r62',
      x: '13',
      y: '62',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r62',
      x: '15',
      y: '62',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r62',
      x: '17',
      y: '62',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r63',
      x: '2',
      y: '63,70',
      type: 'text',
      content: '14'
    },
    {
      id: 'l2_r63',
      x: '3',
      y: '63,70',
      type: 'text',
      content: '主要污染物年均排放浓度'
    },
    {
      id: 'l3_r63',
      x: '4',
      y: '63,67',
      type: 'text',
      content:
        '废水主要污染物年均排放浓度优于许可排放浓度限值的最低比例（不涉及工业废水排放的企业不填）'
    },
    {
      id: 'type_r63',
      x: '5',
      y: '63,67',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r63',
      x: '6',
      platformHide: true,
      y: '63,67',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r63',
      x: '7',
      y: '63,67',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r63',
      x: '8',
      y: '63,67',
      type: 'text',
      value: 75,
      content: '/'
    },
    {
      id: 'bl_r63',
      x: '9',
      y: '63,67',
      type: 'text',
      value: 0,
      content: '/'
    },
    {
      id: 'weight_r63',
      x: '10',
      y: '63,67',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r63',
      x: '11',
      y: '63,67',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r63',
      x: '12',
      y: '63,67',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r63',
      x: '13',
      y: '63,67',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r63',
      x: '15',
      y: '63,68',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.排污许可相关文件，例如排污许可证正本、副本，排污登记表\n3.排污许可证执行报告年报（如有）\n4.报生态环境部门《工业企业污染物和温室气体排放及治理情况》（基101表） （如有）\n5.污染物在线监测记录（包含年均排放浓度数据），如不能提供，请提交环境检测报告（原则上应保证全年监测频次不低于每季度1次，季节性生产单位应保证在生产期内监测次数不少于4次或不低于每月1次）\n6.污染治理措施说明'
    },
    {
      id: 'rule_r63',
      x: '17',
      y: '63,67',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r64',
      x: '4',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r64',
      x: '5',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r64',
      x: '6',
      platformHide: true,
      y: '64',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r64',
      x: '7',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r64',
      x: '8',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r64',
      x: '9',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r64',
      x: '10',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r64',
      x: '11',
      y: '64',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r64',
      x: '12',
      y: '64',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r64',
      x: '13',
      y: '64',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r64',
      x: '15',
      y: '64',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r64',
      x: '17',
      y: '64',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r65',
      x: '4',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r65',
      x: '5',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r65',
      x: '6',
      platformHide: true,
      y: '65',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r65',
      x: '7',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r65',
      x: '8',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r65',
      x: '9',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r65',
      x: '10',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r65',
      x: '11',
      y: '65',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r65',
      x: '12',
      y: '65',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r65',
      x: '13',
      y: '65',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r65',
      x: '15',
      y: '65',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r65',
      x: '17',
      y: '65',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r66',
      x: '4',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r66',
      x: '5',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r66',
      x: '6',
      platformHide: true,
      y: '66',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r66',
      x: '7',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r66',
      x: '8',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r66',
      x: '9',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r66',
      x: '10',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r66',
      x: '11',
      y: '66',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r66',
      x: '12',
      y: '66',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r66',
      x: '13',
      y: '66',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r66',
      x: '15',
      y: '66',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r66',
      x: '17',
      y: '66',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r67',
      x: '4',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r67',
      x: '5',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r67',
      x: '6',
      platformHide: true,
      y: '67',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r67',
      x: '7',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r67',
      x: '8',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r67',
      x: '9',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r67',
      x: '10',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r67',
      x: '11',
      y: '67',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r67',
      x: '12',
      y: '67',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r67',
      x: '13',
      y: '67',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r67',
      x: '15',
      y: '67',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r67',
      x: '17',
      y: '67',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r68',
      x: '4',
      y: '68,70',
      type: 'text',
      content:
        '废气主要污染物年均排放浓度优于许可排放浓度限值的最低比例（不涉及工业废气排放的企业不填）'
    },
    {
      id: 'type_r68',
      x: '5',
      y: '68,70',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r68',
      x: '6',
      platformHide: true,
      y: '68,70',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r68',
      x: '7',
      y: '68,70',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r68',
      x: '8',
      y: '68,70',
      type: 'text',
      value: 86.1,
      content: '/'
    },
    {
      id: 'bl_r68',
      x: '9',
      y: '68,70',
      type: 'text',
      value: 80,
      content: '/'
    },
    {
      id: 'weight_r68',
      x: '10',
      y: '68,70',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r68',
      x: '11',
      y: '68,70',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r68',
      x: '12',
      y: '68,70',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r68',
      x: '13',
      y: '68,70',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r68',
      x: '15',
      y: '68,70',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r68',
      x: '17',
      y: '68,70',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r69',
      x: '4',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r69',
      x: '5',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r69',
      x: '6',
      platformHide: true,
      y: '69',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r69',
      x: '7',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r69',
      x: '8',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r69',
      x: '9',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r69',
      x: '10',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r69',
      x: '11',
      y: '69',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r69',
      x: '12',
      y: '69',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r69',
      x: '13',
      y: '69',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r69',
      x: '15',
      y: '69',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r69',
      x: '17',
      y: '69',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r70',
      x: '4',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r70',
      x: '5',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r70',
      x: '6',
      platformHide: true,
      y: '70',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r70',
      x: '7',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r70',
      x: '8',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r70',
      x: '9',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r70',
      x: '10',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r70',
      x: '11',
      y: '70',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r70',
      x: '12',
      y: '70',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r70',
      x: '13',
      y: '70',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r70',
      x: '15',
      y: '70',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r70',
      x: '17',
      y: '70',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l1_r71',
      x: '1',
      y: '71,77',
      type: 'text',
      content: '<b>产品绿色化</b>'
    },
    {
      id: 'seq_r71',
      x: '2',
      y: '71,72',
      type: 'text',
      content: '15'
    },
    {
      id: 'l2_r71',
      x: '3',
      y: '71,72',
      type: 'text',
      content: '绿色设计'
    },
    {
      id: 'l3_r71',
      x: '4',
      y: '71,72',
      type: 'text',
      content: '绿色设计典型应用案例'
    },
    {
      id: 'type_r71',
      x: '5',
      y: '71,72',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r71',
      x: '6',
      platformHide: true,
      y: '71,72',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r71',
      x: '7',
      y: '71,72',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r71',
      x: '8',
      y: '71,72',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r71',
      x: '9',
      y: '71,72',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r71',
      x: '10',
      y: '71,72',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r71',
      x: '11',
      y: '71,72',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '提供绿色设计典型应用案例',
          value: 1
        },
        {
          label: '未提供',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r71',
      x: '12',
      y: '71,72',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r71',
      x: '13',
      y: '71,72',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r71',
      x: '15',
      y: '71,72',
      type: 'text',
      content:
        '绿色设计典型应用案例（围绕轻量化、无害化、长寿命、节能、易回收、可拆解、易再生等方面提供绿色设计典型应用案例，全面展示企业研发人员在设计环节运用绿色设计理念开展绿色设计）'
    },
    {
      id: 'rule_r71',
      x: '17',
      y: '71,72',
      type: 'text',
      content: '根据证明材料酌情给分。',
      portalHide: true
    },
    {
      id: 'l3_r72',
      x: '4',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r72',
      x: '5',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r72',
      x: '6',
      platformHide: true,
      y: '72',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r72',
      x: '7',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r72',
      x: '8',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r72',
      x: '9',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r72',
      x: '10',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r72',
      x: '11',
      y: '72',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '提供绿色设计典型应用案例',
          value: 1
        },
        {
          label: '未提供',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r72',
      x: '12',
      y: '72',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r72',
      x: '13',
      y: '72',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r72',
      x: '15',
      y: '72',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r72',
      x: '17',
      y: '72',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r73',
      x: '2',
      y: '73,74',
      type: 'text',
      content: '16'
    },
    {
      id: 'l2_r73',
      x: '3',
      y: '73,74',
      type: 'text',
      content: '产品碳足迹'
    },
    {
      id: 'l3_r73',
      x: '4',
      y: '73,74',
      type: 'text',
      content: '开展碳足迹核算产品类别占比'
    },
    {
      id: 'type_r73',
      x: '5',
      y: '73,74',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r73',
      x: '6',
      platformHide: true,
      y: '73,74',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r73',
      x: '7',
      y: '73,74',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r73',
      x: '8',
      y: '73,74',
      type: 'text',
      value: 100,
      content: '/'
    },
    {
      id: 'bl_r73',
      x: '9',
      y: '73,74',
      type: 'text',
      value: 80,
      content: '/'
    },
    {
      id: 'weight_r73',
      x: '10',
      y: '73,74',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r73',
      x: '11',
      y: '73,74',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r73',
      x: '12',
      y: '73,74',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r73',
      x: '13',
      y: '73,74',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r73',
      x: '15',
      y: '73,74',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《工业产销总值及主要产品产量》（B204-1）\n3.提供评价年相关类别产品碳足迹报告（参考GB/T 24067等相关依据标准给出的报告模板）'
    },
    {
      id: 'rule_r73',
      x: '17',
      y: '73,74',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r74',
      x: '4',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r74',
      x: '5',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r74',
      x: '6',
      platformHide: true,
      y: '74',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r74',
      x: '7',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r74',
      x: '8',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r74',
      x: '9',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r74',
      x: '10',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r74',
      x: '11',
      y: '74',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r74',
      x: '12',
      y: '74',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r74',
      x: '13',
      y: '74',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r74',
      x: '15',
      y: '74',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r74',
      x: '17',
      y: '74',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r75',
      x: '2',
      y: '75,77',
      type: 'text',
      content: '17'
    },
    {
      id: 'l2_r75',
      x: '3',
      y: '75,77',
      type: 'text',
      content: '绿色产品'
    },
    {
      id: 'l3_r75',
      x: '4',
      y: '75,77',
      type: 'text',
      content: '节能产品占比（有适用国家强制性能效标准时必选）'
    },
    {
      id: 'type_r75',
      x: '5',
      y: '75,77',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r75',
      x: '6',
      platformHide: true,
      y: '75,77',
      type: 'text',
      content: '6',
      portalHide: true
    },
    {
      id: 'unit_r75',
      x: '7',
      y: '75,77',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r75',
      x: '8',
      y: '75,77',
      type: 'text',
      value: 100,
      content: '/'
    },
    {
      id: 'bl_r75',
      x: '9',
      y: '75,77',
      type: 'text',
      value: 80,
      content: '/'
    },
    {
      id: 'weight_r75',
      x: '10',
      y: '75,77',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r75',
      x: '11',
      y: '75,77',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r75',
      x: '12',
      y: '75,77',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r75',
      x: '13',
      y: '75,77',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r75',
      x: '15',
      y: '75,77',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.级及以上能效产品产量台账\n3.报统计部门《工业产销总值及主要产品产量》（B204-1）（适用时）'
    },
    {
      id: 'rule_r75',
      x: '17',
      y: '75,77',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r76',
      x: '4',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r76',
      x: '5',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r76',
      x: '6',
      platformHide: true,
      y: '76',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r76',
      x: '7',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r76',
      x: '8',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r76',
      x: '9',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r76',
      x: '10',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r76',
      x: '11',
      y: '76',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r76',
      x: '12',
      y: '76',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r76',
      x: '13',
      y: '76',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r76',
      x: '15',
      y: '76',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r76',
      x: '17',
      y: '76',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r77',
      x: '4',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r77',
      x: '5',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r77',
      x: '6',
      platformHide: true,
      y: '77',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r77',
      x: '7',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r77',
      x: '8',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r77',
      x: '9',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r77',
      x: '10',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r77',
      x: '11',
      y: '77',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r77',
      x: '12',
      y: '77',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r77',
      x: '13',
      y: '77',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r77',
      x: '15',
      y: '77',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r77',
      x: '17',
      y: '77',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l1_r78',
      x: '1',
      y: '78,84',
      type: 'text',
      content: '<b>用地集约化</b>'
    },
    {
      id: 'seq_r78',
      x: '2',
      y: '78,84',
      type: 'text',
      content: '18'
    },
    {
      id: 'l2_r78',
      x: '3',
      y: '78,84',
      type: 'text',
      content: '土地产出率'
    },
    {
      id: 'l3_r78',
      x: '4',
      y: '78,79',
      type: 'text',
      content: '单位用地面积产值'
    },
    {
      id: 'type_r78',
      x: '5',
      y: '78,79',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r78',
      x: '6',
      platformHide: true,
      y: '78,79',
      type: 'text',
      content: '4',
      portalHide: true
    },
    {
      id: 'unit_r78',
      x: '7',
      y: '78,79',
      type: 'text',
      content: '万元/m2'
    },
    {
      id: 'bm_r78',
      x: '8',
      y: '78,79',
      type: 'text',
      value: 1.2,
      content: '/'
    },
    {
      id: 'bl_r78',
      x: '9',
      y: '78,79',
      type: 'text',
      value: 1,
      content: '/'
    },
    {
      id: 'weight_r78',
      x: '10',
      y: '78,79',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r78',
      x: '11',
      y: '78,79',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r78',
      x: '12',
      y: '78,79',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r78',
      x: '13',
      y: '78,79',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r78',
      x: '15',
      y: '78,79',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.报统计部门《工业产销总值及主要产品产量》（B204-1）'
    },
    {
      id: 'rule_r78',
      x: '17',
      y: '78',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r79',
      x: '4',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r79',
      x: '5',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r79',
      x: '6',
      platformHide: true,
      y: '79',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r79',
      x: '7',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r79',
      x: '8',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r79',
      x: '9',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r79',
      x: '10',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r79',
      x: '11',
      y: '79',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r79',
      x: '12',
      y: '79',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r79',
      x: '13',
      y: '79',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r79',
      x: '15',
      y: '79',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r79',
      x: '17',
      y: '79',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r80',
      x: '4',
      y: '80,82',
      type: 'text',
      content: '建筑系数'
    },
    {
      id: 'type_r80',
      x: '5',
      y: '80,82',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r80',
      x: '6',
      platformHide: true,
      y: '80,82',
      type: 'text',
      content: '2',
      portalHide: true
    },
    {
      id: 'unit_r80',
      x: '7',
      y: '80,82',
      type: 'text',
      content: '%'
    },
    {
      id: 'bm_r80',
      x: '8',
      y: '80,82',
      type: 'text',
      value: 51,
      content: '/'
    },
    {
      id: 'bl_r80',
      x: '9',
      y: '80,82',
      type: 'text',
      value: 40,
      content: '/'
    },
    {
      id: 'weight_r80',
      x: '10',
      y: '80,82',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r80',
      x: '11',
      y: '80,82',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r80',
      x: '12',
      y: '80,82',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r80',
      x: '13',
      y: '80,82',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r80',
      x: '15',
      y: '80,82',
      type: 'text',
      content:
        '1.指标计算过程表及其附件\n2.项目建设工程规划许可证及附图\n3.厂区总平面图'
    },
    {
      id: 'rule_r80',
      x: '17',
      y: '80,82',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r81',
      x: '4',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r81',
      x: '5',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r81',
      x: '6',
      platformHide: true,
      y: '81',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r81',
      x: '7',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r81',
      x: '8',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r81',
      x: '9',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r81',
      x: '10',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r81',
      x: '11',
      y: '81',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r81',
      x: '12',
      y: '81',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r81',
      x: '13',
      y: '81',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r81',
      x: '15',
      y: '81',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r81',
      x: '17',
      y: '81',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r82',
      x: '4',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r82',
      x: '5',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r82',
      x: '6',
      platformHide: true,
      y: '82',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r82',
      x: '7',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r82',
      x: '8',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r82',
      x: '9',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r82',
      x: '10',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r82',
      x: '11',
      y: '82',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r82',
      x: '12',
      y: '82',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r82',
      x: '13',
      y: '82',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r82',
      x: '15',
      y: '82',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r82',
      x: '17',
      y: '82',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r83',
      x: '4',
      y: '83,84',
      type: 'text',
      content: '容积率'
    },
    {
      id: 'type_r83',
      x: '5',
      y: '83,84',
      type: 'text',
      content: '正向定量'
    },
    {
      id: 'score_r83',
      x: '6',
      platformHide: true,
      y: '83,84',
      type: 'text',
      content: '2',
      portalHide: true
    },
    {
      id: 'unit_r83',
      x: '7',
      y: '83,84',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r83',
      x: '8',
      y: '83,84',
      type: 'text',
      value: 1.12,
      content: '/'
    },
    {
      id: 'bl_r83',
      x: '9',
      y: '83,84',
      type: 'text',
      value: 0.5,
      content: '/'
    },
    {
      id: 'weight_r83',
      x: '10',
      y: '83,84',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r83',
      x: '11',
      y: '83,84',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r83',
      x: '12',
      y: '83,84',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r83',
      x: '13',
      y: '83,84',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r83',
      x: '15',
      y: '83,84',
      type: 'text',
      content: '指标计算过程表及其附件'
    },
    {
      id: 'rule_r83',
      x: '17',
      y: '83,84',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r84',
      x: '4',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r84',
      x: '5',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r84',
      x: '6',
      platformHide: true,
      y: '84',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r84',
      x: '7',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r84',
      x: '8',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r84',
      x: '9',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r84',
      x: '10',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r84',
      x: '11',
      y: '84',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r84',
      x: '12',
      y: '84',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r84',
      x: '13',
      y: '84',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r84',
      x: '15',
      y: '84',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r84',
      x: '17',
      y: '84',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l1_r85',
      x: '1',
      y: '85,91',
      type: 'text',
      content: '<b>附加项</b>'
    },
    {
      id: 'seq_r85',
      x: '2,3',
      y: '85',
      type: 'text',
      content: '纳入“筑峰强链”企业库'
    },
    {
      id: 'l3_r85',
      x: '4',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r85',
      x: '5',
      y: '85',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r85',
      x: '6',
      platformHide: true,
      y: '85',
      type: 'text',
      content: '2',
      portalHide: true
    },
    {
      id: 'unit_r85',
      x: '7',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r85',
      x: '8',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r85',
      x: '9',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r85',
      x: '10',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r85',
      x: '11',
      y: '85',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r85',
      x: '12',
      y: '85',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r85',
      x: '13',
      y: '85',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r85',
      x: '15',
      y: '85',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r85',
      x: '17',
      y: '85',
      type: 'text',
      content: '重点企业加1分、骨干企业加1.5分、准链主企业加2分。',
      portalHide: true
    },
    {
      id: 'seq_r86',
      x: '2,3',
      y: '86,88',
      type: 'text',
      content: '使用江苏省产品碳足迹公共服务平台计算碳足迹。'
    },
    {
      id: 'l3_r86',
      x: '4',
      y: '86,88',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r86',
      x: '5',
      y: '86,88',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r86',
      x: '6',
      platformHide: true,
      y: '86,88',
      type: 'text',
      content: '1',
      portalHide: true
    },
    {
      id: 'unit_r86',
      x: '7',
      y: '86,88',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r86',
      x: '8',
      y: '86,88',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r86',
      x: '9',
      y: '86,88',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r86',
      x: '10',
      y: '86,88',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r86',
      x: '11',
      y: '86,88',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        },
        {
          label: '不适用',
          value: 2
        }
      ]
    },
    {
      id: 'notes_r86',
      x: '12',
      y: '86,88',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r86',
      x: '13',
      y: '86,88',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r86',
      x: '15',
      y: '86,88',
      type: 'text',
      content:
        '使用江苏省产品碳足迹公共服务平台计算碳足迹的证明材料。不适用的提供说明材料'
    },
    {
      id: 'rule_r86',
      x: '17',
      y: '86,88',
      type: 'text',
      content: '根据证明材料酌情给分。',
      portalHide: true
    },
    {
      id: 'l3_r87',
      x: '4',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r87',
      x: '5',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r87',
      x: '6',
      platformHide: true,
      y: '87',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r87',
      x: '7',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r87',
      x: '8',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r87',
      x: '9',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r87',
      x: '10',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r87',
      x: '11',
      y: '87',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r87',
      x: '12',
      y: '87',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r87',
      x: '13',
      y: '87',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r87',
      x: '15',
      y: '87',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r87',
      x: '17',
      y: '87',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r88',
      x: '4',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r88',
      x: '5',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r88',
      x: '6',
      platformHide: true,
      y: '88',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r88',
      x: '7',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r88',
      x: '8',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r88',
      x: '9',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r88',
      x: '10',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r88',
      x: '11',
      y: '88',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r88',
      x: '12',
      y: '88',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r88',
      x: '13',
      y: '88',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r88',
      x: '15',
      y: '88',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r88',
      x: '17',
      y: '88',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'seq_r89',
      x: '2,3',
      y: '89,91',
      type: 'text',
      content:
        '建设零碳（近零碳）工厂。积极响应国家双碳战略，启动推进零碳（近零碳）工厂建设。'
    },
    {
      id: 'l3_r89',
      x: '4',
      y: '89,91',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r89',
      x: '5',
      y: '89,91',
      type: 'text',
      content: '正向定性'
    },
    {
      id: 'score_r89',
      x: '6',
      platformHide: true,
      y: '89,91',
      type: 'text',
      content: '2',
      portalHide: true
    },
    {
      id: 'unit_r89',
      x: '7',
      y: '89,91',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r89',
      x: '8',
      y: '89,91',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r89',
      x: '9',
      y: '89,91',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r89',
      x: '10',
      y: '89,91',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r89',
      x: '11',
      y: '89,91',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r89',
      x: '12',
      y: '89,91',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r89',
      x: '13',
      y: '89,91',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r89',
      x: '15',
      y: '89,91',
      type: 'text',
      content:
        '零碳（近零碳）工厂建设方面开展的工作情况说明，包括：碳核算体系建设相关材料，自主减排项目案例，达成碳中和的相关证明材料'
    },
    {
      id: 'rule_r89',
      x: '17',
      y: '89,91',
      type: 'text',
      content: '根据证明材料酌情给分。',
      portalHide: true
    },
    {
      id: 'l3_r90',
      x: '4',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r90',
      x: '5',
      y: '90',
      type: 'select',
      content: '/',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'score_r90',
      x: '6',
      platformHide: true,
      y: '90',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r90',
      x: '7',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r90',
      x: '8',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r90',
      x: '9',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r90',
      x: '10',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r90',
      x: '11',
      y: '90',
      type: 'select',
      placeholder: '输入指标值',
      options: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    },
    {
      id: 'notes_r90',
      x: '12',
      y: '90',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r90',
      x: '13',
      y: '90',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r90',
      x: '15',
      y: '90',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r90',
      x: '17',
      y: '90',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'l3_r91',
      x: '4',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'type_r91',
      x: '5',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'score_r91',
      x: '6',
      platformHide: true,
      y: '91',
      type: 'text',
      content: '/',
      portalHide: true
    },
    {
      id: 'unit_r91',
      x: '7',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'bm_r91',
      x: '8',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'bl_r91',
      x: '9',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'weight_r91',
      x: '10',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'indval_r91',
      x: '11',
      y: '91',
      type: 'number',
      placeholder: '输入指标值'
    },
    {
      id: 'notes_r91',
      x: '12',
      y: '91',
      type: 'input',
      portalHide: true,
      platformHide: false,
      placeholder:
        '如指标值有修订，请填写修订备注如：该指标佶由A修改为B，理由是…'
    },
    {
      id: 'use_r91',
      x: '13',
      y: '91',
      type: 'radio',
      portalHide: true,
      platformHide: false,
      value: 1,
      options: [
        {
          label: '适用',
          value: 1
        },
        {
          label: '不适用',
          value: 0
        }
      ]
    },
    {
      id: 'evidence_r91',
      x: '15',
      y: '91',
      type: 'text',
      content: '/'
    },
    {
      id: 'rule_r91',
      x: '17',
      y: '91',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'h14',
      x: '14',
      y: '1,2',
      type: 'label',
      content: '证明材料上传'
    },
    {
      id: 'evidence_upload_3_8',
      x: '14',
      y: '3,15',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r3 != null && fm.indval_r3 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_16_18',
      x: '14',
      y: '16,18',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r16_18 != null && fm.indval_r16_18 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_17',
      x: '14',
      y: '17',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r17 != null && fm.indval_r17 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_18',
      x: '14',
      y: '18',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r18 != null && fm.indval_r18 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_19',
      x: '14',
      y: '19,20',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r19 != null && fm.indval_r19 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_20',
      x: '14',
      y: '20',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r20 != null && fm.indval_r20 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_21',
      x: '14',
      y: '21',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r21 != null && fm.indval_r21 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_22',
      x: '14',
      y: '22',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r22 != null && fm.indval_r22 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_23',
      x: '14',
      y: '23',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r23 != null && fm.indval_r23 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_24_35',
      x: '14',
      y: '24,35',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r24_35 != null && fm.indval_r24_35 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_25',
      x: '14',
      y: '25',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r25 != null && fm.indval_r25 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_26',
      x: '14',
      y: '26',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r26 != null && fm.indval_r26 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_27',
      x: '14',
      y: '27',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r27 != null && fm.indval_r27 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_28',
      x: '14',
      y: '28',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r28 != null && fm.indval_r28 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_29',
      x: '14',
      y: '29',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r29 != null && fm.indval_r29 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_30',
      x: '14',
      y: '30',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r30 != null && fm.indval_r30 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_31',
      x: '14',
      y: '31',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r31 != null && fm.indval_r31 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_32',
      x: '14',
      y: '32',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r32 != null && fm.indval_r32 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_33',
      x: '14',
      y: '33',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r33 != null && fm.indval_r33 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_34',
      x: '14',
      y: '34',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r34 != null && fm.indval_r34 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_35',
      x: '14',
      y: '35',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r35 != null && fm.indval_r35 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_36_37',
      x: '14',
      y: '36,37',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r36_37 != null && fm.indval_r36_37 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_37',
      x: '14',
      y: '37',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r37 != null && fm.indval_r37 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_38_39',
      x: '14',
      y: '38,39',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r38_39 != null && fm.indval_r38_39 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_39',
      x: '14',
      y: '39',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r39 != null && fm.indval_r39 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_40_41',
      x: '14',
      y: '40,41',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r40 != null && fm.indval_r40 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_41',
      x: '14',
      y: '41',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r41 != null && fm.indval_r41 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_42',
      x: '14',
      y: '42',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r42 != null && fm.indval_r42 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_43',
      x: '14',
      y: '43',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r43 != null && fm.indval_r43 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_44',
      x: '14',
      y: '44',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r44 != null && fm.indval_r44 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_45',
      x: '14',
      y: '45',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r45 != null && fm.indval_r45 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_46_49',
      x: '14',
      y: '46,49',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r46_49 != null && fm.indval_r46_49 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_47',
      x: '14',
      y: '47',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r47 != null && fm.indval_r47 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_48',
      x: '14',
      y: '48',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r48 != null && fm.indval_r48 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_49',
      x: '14',
      y: '49',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r49 != null && fm.indval_r49 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_50_53',
      x: '14',
      y: '50,53',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r50_53 != null && fm.indval_r50_53 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_51',
      x: '14',
      y: '51',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r51 != null && fm.indval_r51 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_52',
      x: '14',
      y: '52',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r52 != null && fm.indval_r52 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_53',
      x: '14',
      y: '53',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r53 != null && fm.indval_r53 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_54_55',
      x: '14',
      y: '54,55',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r54_55 != null && fm.indval_r54_55 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_55',
      x: '14',
      y: '55',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r55 != null && fm.indval_r55 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_56_58',
      x: '14',
      y: '56,58',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r56_58 != null && fm.indval_r56_58 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_57',
      x: '14',
      y: '57',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r57 != null && fm.indval_r57 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_58',
      x: '14',
      y: '58',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r58 != null && fm.indval_r58 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_59_62',
      x: '14',
      y: '59,62',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r59_62 != null && fm.indval_r59_62 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_60',
      x: '14',
      y: '60',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r60 != null && fm.indval_r60 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_61',
      x: '14',
      y: '61',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r61 != null && fm.indval_r61 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_62',
      x: '14',
      y: '62',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r62 != null && fm.indval_r62 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_63_67',
      x: '14',
      y: '63,67',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r63_67 != null && fm.indval_r63_67 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_64',
      x: '14',
      y: '64',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r64 != null && fm.indval_r64 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_65',
      x: '14',
      y: '65',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r65 != null && fm.indval_r65 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_66',
      x: '14',
      y: '66',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r66 != null && fm.indval_r66 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_67',
      x: '14',
      y: '67',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r67 != null && fm.indval_r67 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_68_70',
      x: '14',
      y: '68,70',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r68_70 != null && fm.indval_r68_70 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_69',
      x: '14',
      y: '69',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r69 != null && fm.indval_r69 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_70',
      x: '14',
      y: '70',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r70 != null && fm.indval_r70 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_71_72',
      x: '14',
      y: '71,72',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r71_72 != null && fm.indval_r71_72 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_72',
      x: '14',
      y: '72',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r72 != null && fm.indval_r72 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_73_74',
      x: '14',
      y: '73,74',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r73_74 != null && fm.indval_r73_74 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_74',
      x: '14',
      y: '74',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r74 != null && fm.indval_r74 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_75_77',
      x: '14',
      y: '75,77',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r75_77 != null && fm.indval_r75_77 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_76',
      x: '14',
      y: '76',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r76 != null && fm.indval_r76 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_77',
      x: '14',
      y: '77',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r77 != null && fm.indval_r77 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_78_79',
      x: '14',
      y: '78,79',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r78_79 != null && fm.indval_r78_79 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_79',
      x: '14',
      y: '79',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r79 != null && fm.indval_r79 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_80_82',
      x: '14',
      y: '80,82',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r80_82 != null && fm.indval_r80_82 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_81',
      x: '14',
      y: '81',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r81 != null && fm.indval_r81 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_82',
      x: '14',
      y: '82',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r82 != null && fm.indval_r82 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_83_84',
      x: '14',
      y: '83,84',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r83_84 != null && fm.indval_r83_84 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_84',
      x: '14',
      y: '84',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r84 != null && fm.indval_r84 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_85',
      x: '14',
      y: '85',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r85 != null && fm.indval_r85 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_86_88',
      x: '14',
      y: '86,88',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r86_88 != null && fm.indval_r86_88 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_87',
      x: '14',
      y: '87',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r87 != null && fm.indval_r87 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_88',
      x: '14',
      y: '88',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r88 != null && fm.indval_r88 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_89_91',
      x: '14',
      y: '89,91',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r89_91 != null && fm.indval_r89_91 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_90',
      x: '14',
      y: '90',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r90 != null && fm.indval_r90 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'evidence_upload_91',
      x: '14',
      y: '91',
      type: 'upload',
      content: '',
      validation: {
        rules: [
          {
            required: "fm.indval_r91 != null && fm.indval_r91 != ''",
            message: '指标值已填写，请上传证明材料',
            trigger: 'change'
          }
        ]
      }
    },
    {
      id: 'h16',
      x: '16',
      y: '1,2',
      type: 'label',
      content: '评分规则',
      portalHide: true
    },
    {
      id: 'h17',
      x: '17',
      y: '1,2',
      type: 'label',
      content: '评分规则2',
      portalHide: true
    },
    {
      id: 'rule2_3_8',
      x: '16',
      y: '3,8',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_4',
      x: '16',
      y: '4',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_5',
      x: '16',
      y: '5',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_6',
      x: '16',
      y: '6',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_7',
      x: '16',
      y: '7',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_8',
      x: '16',
      y: '8',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_9',
      x: '16',
      y: '9',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_10',
      x: '16',
      y: '10',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_11',
      x: '16',
      y: '11',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_12',
      x: '16',
      y: '12',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_13',
      x: '16',
      y: '13',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_14',
      x: '16',
      y: '14',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_15',
      x: '16',
      y: '15',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_16_18',
      x: '16',
      y: '16,18',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_17',
      x: '16',
      y: '17',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_18',
      x: '16',
      y: '18',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_19_20',
      x: '16',
      y: '19,20',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_20',
      x: '16',
      y: '20',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_21',
      x: '16',
      y: '21',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_22',
      x: '16',
      y: '22',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_23',
      x: '16',
      y: '23',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_24_35',
      x: '16',
      y: '24,35',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_25',
      x: '16',
      y: '25',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_26',
      x: '16',
      y: '26',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_27',
      x: '16',
      y: '27',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_28',
      x: '16',
      y: '28',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_29',
      x: '16',
      y: '29',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_30',
      x: '16',
      y: '30',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_31',
      x: '16',
      y: '31',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_32',
      x: '16',
      y: '32',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_33',
      x: '16',
      y: '33',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_34',
      x: '16',
      y: '34',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_35',
      x: '16',
      y: '35',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_36_37',
      x: '16',
      y: '36,37',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_37',
      x: '16',
      y: '37',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_38_39',
      x: '16',
      y: '38,39',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_39',
      x: '16',
      y: '39',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_40_41',
      x: '16',
      y: '40,41',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_41',
      x: '16',
      y: '41',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_42',
      x: '16',
      y: '42',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_43',
      x: '16',
      y: '43',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_44',
      x: '16',
      y: '44',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_45',
      x: '16',
      y: '45',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_46_49',
      x: '16',
      y: '46,49',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_47',
      x: '16',
      y: '47',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_48',
      x: '16',
      y: '48',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_49',
      x: '16',
      y: '49',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_50_53',
      x: '16',
      y: '50,53',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_51',
      x: '16',
      y: '51',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_52',
      x: '16',
      y: '52',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_53',
      x: '16',
      y: '53',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_54_55',
      x: '16',
      y: '54,55',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_55',
      x: '16',
      y: '55',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_56_58',
      x: '16',
      y: '56,58',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_57',
      x: '16',
      y: '57',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_58',
      x: '16',
      y: '58',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_59_62',
      x: '16',
      y: '59,62',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_60',
      x: '16',
      y: '60',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_61',
      x: '16',
      y: '61',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_62',
      x: '16',
      y: '62',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_63_67',
      x: '16',
      y: '63,67',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_64',
      x: '16',
      y: '64',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_65',
      x: '16',
      y: '65',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_66',
      x: '16',
      y: '66',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_67',
      x: '16',
      y: '67',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_68_70',
      x: '16',
      y: '68,70',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_69',
      x: '16',
      y: '69',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_70',
      x: '16',
      y: '70',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_71_72',
      x: '16',
      y: '71,72',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_72',
      x: '16',
      y: '72',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_73_74',
      x: '16',
      y: '73,74',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_74',
      x: '16',
      y: '74',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_75_77',
      x: '16',
      y: '75,77',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_76',
      x: '16',
      y: '76',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_77',
      x: '16',
      y: '77',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_78_79',
      x: '16',
      y: '78,79',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_79',
      x: '16',
      y: '79',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_80_82',
      x: '16',
      y: '80,82',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_81',
      x: '16',
      y: '81',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_82',
      x: '16',
      y: '82',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_83_84',
      x: '16',
      y: '83,84',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_84',
      x: '16',
      y: '84',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_85',
      x: '16',
      y: '85',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_86_88',
      x: '16',
      y: '86,88',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_87',
      x: '16',
      y: '87',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_88',
      x: '16',
      y: '88',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_89_91',
      x: '16',
      y: '89,91',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_90',
      x: '16',
      y: '90',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'rule2_91',
      x: '16',
      y: '91',
      type: 'text',
      content: '',
      portalHide: true
    },
    {
      id: 'h18',
      x: '18',
      y: '1,2',
      type: 'label',
      content: '得分'
    },
    {
      id: 'actualScore_r3',
      x: '18',
      y: '3,8',
      type: 'input'
    },
    {
      id: 'actualScore_r12',
      x: '18',
      y: '9,15',
      type: 'input'
    },
    {
      id: 'actualScore_r16',
      x: '18',
      y: '16,18',
      type: 'input'
    },
    {
      id: 'actualScore_r19',
      x: '18',
      y: '19,23',
      type: 'input'
    },
    {
      id: 'actualScore_r24',
      x: '18',
      y: '24,35',
      type: 'input'
    },
    {
      id: 'actualScore_r36',
      x: '18',
      y: '36,37',
      type: 'input'
    },
    {
      id: 'actualScore_r38',
      x: '18',
      y: '38,39',
      type: 'input'
    },
    {
      id: 'actualScore_r40',
      x: '18',
      y: '40,45',
      type: 'input'
    },
    {
      id: 'actualScore_r46',
      x: '18',
      y: '46,49',
      type: 'input'
    },
    {
      id: 'actualScore_r50',
      x: '18',
      y: '50,53',
      type: 'input'
    },
    {
      id: 'actualScore_r54',
      x: '18',
      y: '54,55',
      type: 'input'
    },
    {
      id: 'actualScore_r56',
      x: '18',
      y: '56,58',
      type: 'input'
    },
    {
      id: 'actualScore_r59',
      x: '18',
      y: '59,62',
      type: 'input'
    },
    {
      id: 'actualScore_r63',
      x: '18',
      y: '63,67',
      type: 'input'
    },
    {
      id: 'actualScore_r68',
      x: '18',
      y: '68,70',
      type: 'input'
    },
    {
      id: 'actualScore_r71',
      x: '18',
      y: '71,72',
      type: 'input'
    },
    {
      id: 'actualScore_r73',
      x: '18',
      y: '73,74',
      type: 'input'
    },
    {
      id: 'actualScore_r75',
      x: '18',
      y: '75,77',
      type: 'input'
    },
    {
      id: 'actualScore_r78',
      x: '18',
      y: '78,79',
      type: 'input'
    },
    {
      id: 'actualScore_r80',
      x: '18',
      y: '80,82',
      type: 'input'
    },
    {
      id: 'actualScore_r83',
      x: '18',
      y: '83,84',
      type: 'input'
    },
    {
      id: 'actualScore_r85',
      x: '18',
      y: '85',
      type: 'input'
    },
    {
      id: 'actualScore_r86',
      x: '18',
      y: '86,88',
      type: 'input'
    },
    {
      id: 'actualScore_r89',
      x: '18',
      y: '89,91',
      type: 'input'
    },
    {
      id: 'l1_r92',
      x: '1,7',
      y: '92',
      type: 'text',
      content: '总分',
      portalHide: true
    },
    {
      id: 'unit_r92',
      x: '8,15',
      y: '92',
      type: 'input',
      portalHide: true
    }
  ]
};
