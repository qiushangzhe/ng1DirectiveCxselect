var app = angular.module('cool', []);
app.directive('threeLink', function(collectionResult) {
	return {
		restrict: 'E',
		templateUrl: 'threeLink.html',
		replace: true,
		link: function($scope, iElement, iAttrs, controller) {
			$scope.havaResult = false;
			$scope.type = 1; //1. 电话催收 2. 上门催收
			$scope.sourceData = null; //源数据 根据$scope.type判断
			$scope.bodyData = null; //催收数据
			$scope.headerData = []; //标题数据
			$scope.header_showList = []; //标题显示的列表
			$scope.showList = []; //当前显示的数据列表
			var deep = -1;
			// 允许多选的deep有哪些
			$scope.MultiSelect = [{
				deep: 2,
				maxNum: 3
			}];

			//最后的结果
			$scope.chooseResultData = [];
			$scope.sourceData = $scope.type == 1 ? collectionResult.telephone_collection : $scope.type == 2 ? collectionResult.dropin_collection : {};
			$scope.headerData = $scope.sourceData.titleList;
			$scope.bodyData = $scope.sourceData.sourceData;
			/*
				Function formatSourceData
			    格式化源数据 使之变成directive可使用的数据结构
			*/
			function formatSourceData(sourceData) {
				deep++;
				for (var i in sourceData) {
					sourceData[i].deep = deep;
					sourceData[i].isSelect = false;
					formatSourceData(sourceData[i].child);
				}
				deep--;
			}
			/*
				初始化当前的directive
			*/
			function initDirective() {
				// console.log('$scope.bodyData是',$scope.bodyData);
				// 当前显示的列表 （考虑两种情况，1. 默认打开 2. 已经有数据的打开）
				$scope.showList = $scope.bodyData;
				initBaseSelected($scope.bodyData);
			}

			/*
				初始化当前选择的状态
			*/
			function initBaseSelected(list){
				for(var i in list){
					if(list[i].child && list[i].child.length>0){
						initBaseSelected(list[i].child);
					}
					checkSelect(list[i]);
				}
			}

			/*
				喵喵喵
			*/
			function checkSelect(item){
				for(var i in $scope.chooseResultData){
					if($scope.chooseResultData[i].code == item.code){
						item.isSelect = true;
					}
				}
			}
			/*
				当用户选中某一个项目的回掉函数
			*/
			$scope.selectItem = function(item, showList) {
				if(judgeMultiSelect(item)){
					multiSelect(item, showList)
				}else{
					item.isSelect = true
				}
				//将当前同组所有item的isSelect状态设置成false
				clearSelectStatus(item, showList);
				//判断是否需要自动关闭
				if(judgeAutoCloseDirective(item,showList)){
					$scope.closeDirective();
				}
				$scope.header_showList[item.deep] = $scope.headerData[item.deep];
				// console.log("当前表头显示的项目为", $scope.header_showList);
				// 切换到子表
				showChildData(item);
			};

			/*
				切换到子表
			*/
			function showChildData(item) {
				if (item.child && item.child.length > 0) {
					$scope.showList = item.child;
				}
			};

			/*
				将当前同组所有item的isSelect状态设置成false
			*/
			function clearSelectStatus(item, list) {
				if (judgeMultiSelect(item)) {
					//如果深度是3 需要支持多选的功能
					return;
				}
				for (var i in list) {
					if (list[i] == item) {
						continue;
					} else {
						list[i].isSelect = false;
					}
				}
			};

			/*
				判断本层是否支持多选
			*/
			function judgeMultiSelect(item) {
				for (var i in $scope.MultiSelect) {
					//本层支持多选
					if (item.deep == $scope.MultiSelect[i].deep) {
						return true;
					}
				}
				return false;
			};

			/*
				进行多选
			*/
			function multiSelect(item, list) {
				//判断同层已经选中的个数
				if (checkMultiSelectMax(item,list)) {
					if (item.isSelect) {
						item.isSelect = !item.isSelect;
					}
				} else {
					item.isSelect = !item.isSelect;
				}
			};
			/*
				判断本层是否已经多选到了最大值
			*/
			function checkMultiSelectMax(item,list){
				var config = {};
				var nowSelectedNum = 0;
				config = getMultiSelectConf(item);
				nowSelectedNum = judgeNowSelectedNum(list);
				if(nowSelectedNum >= config.maxNum){
					// 已经选多了
					return true;
				}else{
					return false;
				}
			}
			/*
				获取某一层已经选中的item数
			*/
			function judgeNowSelectedNum(list) {
				var buffer = 0;
				for (var i in list) {
					if (list[i].isSelect) {
						buffer++;
					}
				}
				return buffer;
			};

			/*
				获取某一层多选配置
			*/
			function getMultiSelectConf(item) {
				var buffer = null;
				for (var i in $scope.MultiSelect) {
					if ($scope.MultiSelect[i].deep == item.deep) {
						buffer = $scope.MultiSelect[i];
						break;
					}
				}
				return buffer;
			};

			/*
				判断是否需要自动关闭 directive
			*/
			function judgeAutoCloseDirective(item,list){
				//首先要判断一下 有没有子节点了
				if(item.child && item.child.length>0){

				}
				if(checkMultiSelectMax(item,list)){
					return true;
				}else{
					return false;
				}
			}
			/*
				check出结果
			*/
			function checkResult(list){
				for(var i in list){
					if(list[i].isSelect){
						$scope.chooseResultData.push(list[i]);
					}
					if(list[i].child && list[i].child.length>0){
						checkResult(list[i].child);
					}
				}
			}
			/*
				关闭directive 传出数据
			*/
			$scope.closeDirective = function() {
				//清空结果列表
				$scope.chooseResultData.length = 0;
				// 检查结果
				checkResult($scope.bodyData);
				$scope.$emit('msg_close_threeLink', $scope.chooseResultData);
			};

			$scope.$on('msg_open_threeLink', function(event, data) {
				$scope.type = data.type;
				formatSourceData($scope.bodyData);
				initDirective();
			});
		}
	}
});

app.controller('mainController', function($scope, $location, $rootScope) {
	$scope.data = {};

	$scope.type = 1; //1. 电话催收 2. 上门催收
	$scope.showThreeLink = function() {
		$scope.data.isOpen = true;
		$scope.$broadcast('msg_open_threeLink', {
			type: $scope.type
		});
	}
	$scope.$on('msg_close_threeLink', function(event, data) {
		$scope.data.isOpen = false;
		console.log('当前的结果是', data);
	});

});
