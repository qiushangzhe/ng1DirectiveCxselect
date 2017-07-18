angular.module('cool').value('collectionResult', {
	//上门催收
	dropin_collection: {
        titleList : ['上门情况', '催收结果', '补充（最多三项）'],
        sourceData : [{
    		name: '部分还款a',
    		code: 'E001001001001'
    	}, {
    		name: '已全额还款a',
    		code: 'E001001001002'
    	}, {
    		name: '见到本人',
    		code: 'E001001001003',
    		child: [{
    			name: '承诺还款',
    			code: 'E001001001003001',
    			child: [{
    				'code': 'E001001002003001001',
    				'name': '平台借入b'
    			}, {
    				'code': 'E001001002003001002',
    				'name': '自有资金b'
    			}, {
    				'code': 'E001001002003001003',
    				'name': '薪资收入'
    			}, {
    				'code': 'E001001002003001004',
    				'name': '投资收益'
    			}, {
    				'code': 'E001001002003001005',
    				'name': '亲友代偿'
    			}, {
    				'code': 'E001001002003001006',
    				'name': '个人拆借'
    			}, {
    				'code': 'E001001002003001007',
    				'name': '金融贷款'
    			}, {
    				'code': 'E001001002003001008',
    				'name': '变卖资产'
    			}, {
    				'code': 'E001001002003001009',
    				'name': '经营收入'
    			}, {
    				'code': 'E001001002003001010',
    				'name': '补偿款'
    			}, {
    				'code': 'E001001002003001011',
    				'name': '账款回款'
    			}, {
    				'code': 'E001001002003001012',
    				'name': '其他'
    			}]
    		}, {
    			name: '暂无还款能力',
    			code: 'E001001001003002'
    		}, {
    			name: '无还款意愿',
    			code: 'E001001001003003',
    			child: [{
    				name: '选三个',
    				sy: '新页面--待定'
    			}]
    		}, {
    			name: '其他',
    			code: 'E001001001003004'
    		}]

    	}, {
    		name: '见到直系亲属',
    		code: 'E001001001004',
    		child: [{
    			name: '承诺代偿',
    			code: 'E001001001004001'
    		}, {
    			name: '无代偿意愿',
    			code: 'E001001001004002'
    		}, {
    			name: '承诺转告',
    			code: 'E001001001004003'
    		}, {
    			name: '第三方不配合',
    			code: 'E001001001004004'
    		}, {
    			name: '债务人经济困难',
    			code: 'E001001001004005'
    		}, {
    			name: '债务人死亡',
    			code: 'E001001001004006'
    		}, {
    			name: '债务人入狱',
    			code: 'E001001001004007'
    		}, {
    			name: '债务人病重',
    			code: 'E001001001004008'
    		}, {
    			name: '其他',
    			code: 'E001001001004009'
    		}]
    	}, {
    		name: '见到亲友',
    		code: 'E001001001005',
    		child: [{
    			name: '第三方不配合',
    			code: 'E001001001005001'
    		}, {
    			name: '不认识债务人',
    			code: 'E001001001005002'
    		}, {
    			name: '承诺转告',
    			code: 'E001001001005003'
    		}, {
    			name: '无法转告',
    			code: 'E001001001005004'
    		}, {
    			name: '债务人经济困难',
    			code: 'E001001001005005'
    		}, {
    			name: '债务人病重',
    			code: 'E001001001005006'
    		}, {
    			name: '债务人入狱',
    			code: 'E001001001005007'
    		}, {
    			name: '债务人死亡',
    			code: 'E001001001005008'
    		}, {
    			name: '信息修复',
    			code: 'E001001001005009'
    		}, {
    			name: '其他',
    			code: 'E001001001005010'
    		}]
    	}, {
    		name: '上门失败',
    		code: 'E001001001006',
    		child: [{
    			name: '债务人家中无人',
    			code: 'E001001001006001'
    		}, {
    			name: '债务人公司地址错误',
    			code: 'E001001001006002'
    		}, {
    			name: '债务人家庭地址错误',
    			code: 'E001001001006003'
    		}, {
    			name: '债务人户籍地址错误',
    			code: 'E001001001006004'
    		}, {
    			name: '其他',
    			code: 'E001001001006005'
    		}]
    	}]
    },
	//电话催收
	telephone_collection: {
        titleList : ['接通情况', '催收情况', '补充'],
        sourceData : [{
    		name: '部分还款',
    		code: 'E001001002001'
    	}, {
    		name: '已全额还款',
    		code: 'E001001002002'
    	}, {
    		name: '本人接听',
    		code: 'E001001002003',
    		child: [{
    			name: '承诺还款',
    			code: 'E001001002003001',
    			child: [{
    				'code': 'E001001002003001001',
    				'name': '平台借入'
    			}, {
    				'code': 'E001001002003001002',
    				'name': '自有资金'
    			}, {
    				'code': 'E001001002003001003',
    				'name': '薪资收入'
    			}, {
    				'code': 'E001001002003001004',
    				'name': '投资收益'
    			}, {
    				'code': 'E001001002003001005',
    				'name': '亲友代偿'
    			}, {
    				'code': 'E001001002003001006',
    				'name': '个人拆借'
    			}, {
    				'code': 'E001001002003001007',
    				'name': '金融贷款'
    			}, {
    				'code': 'E001001002003001008',
    				'name': '变卖资产'
    			}, {
    				'code': 'E001001002003001009',
    				'name': '经营收入'
    			}, {
    				'code': 'E001001002003001010',
    				'name': '补偿款'
    			}, {
    				'code': 'E001001002003001011',
    				'name': '账款回款'
    			}, {
    				'code': 'E001001002003001012',
    				'name': '其他'
    			}]
    		}, {
    			name: '暂无还款能力',
    			code: 'E001001002003002'
    		}, {
    			name: '无还款意愿',
    			code: 'E001001002003003'
    		}, {
    			name: '其他',
    			code: 'E001001002003004'
    		}]
    	}, {
    		name: '非本人接听',
    		code: 'E001001002004',
    		child: [{
    			name: '承诺结清',
    			code: 'E001001002004001'
    		}, {
    			name: '代偿部分',
    			code: 'E001001002004002'
    		}, {
    			name: '转告',
    			code: 'E001001002004003'
    		}, {
    			name: '不配合',
    			code: 'E001001002004004'
    		}, {
    			name: '电话错误',
    			code: 'E001001002004005'
    		}, {
    			name: '债务人病重',
    			code: 'E001001002004006'
    		}, {
    			name: '债务人入狱',
    			code: 'E001001002004007'
    		}, {
    			name: '债务人死亡',
    			code: 'E001001002004008'
    		}, {
    			name: '其他',
    			code: 'E001001002004009'
    		}]
    	}, {
    		name: '拨打联系人电话',
    		code: 'E001001002005',
    		child: [{
    			name: '承诺结清',
    			code: 'E001001002005001'
    		}, {
    			name: '代偿部分',
    			code: 'E001001002005002'
    		}, {
    			name: '转告',
    			code: 'E001001002005003'
    		}, {
    			name: '不配合',
    			code: 'E001001002005004'
    		}, {
    			name: '电话错误',
    			code: 'E001001002005005'
    		}, {
    			name: '债务人病重',
    			code: 'E001001002005006'
    		}, {
    			name: '债务人入狱',
    			code: 'E001001002005007'
    		}, {
    			name: '债务人死亡',
    			code: 'E001001002005008'
    		}, {
    			name: '其他',
    			code: 'E001001002005009'
    		}]
    	}, {
    		name: '未接通',
    		code: 'E001001002006',
    		child: [{
    			name: '其他',
    			code: 'E001001002006001'
    		}, {
    			name: '关机',
    			code: 'E001001002006002'
    		}, {
    			name: '停机',
    			code: 'E001001002006003'
    		}, {
    			name: '空号',
    			code: 'E001001002006004'
    		}, {
    			name: '电话设置',
    			code: 'E001001002006005'
    		}, {
    			name: '电话占线',
    			code: 'E001001002006006'
    		}, {
    			name: '无人接听',
    			code: 'E001001002006007'
    		}]
    	}]
    }
});