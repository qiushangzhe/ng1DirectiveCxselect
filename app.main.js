var qiushangzhe = {
    type: ['第一个', '第二个', '第三个'],
    data: [{
        name: "水果",
        child: [{
            name: "苹果",
            child: [{
                name: "青苹果"
            }, {
                name: "红苹果"
            }]
        }, {
            name: "香蕉",
            child: [{
                name: "帝王香蕉"
            }, {
                name: "普通香蕉"
            }]
        }]
    }, {
        name: "蔬菜",
        child: [{
            name: "西红柿",
            child: [{
                name: "大苹果",
                child:[
                    {name:"1px"},
                    {name:"2px",child:[{name:"红色的"},{name:"绿色的"}]}
                ]
            }, {
                name: "小苹果（圣女果）"
            }]
        }]
    },{
        name: "玩具",
        child: [{
            name: "汽车模型",
            child: [{
                name: "推土机"
            }, {
                name: "赛车",
                child:[
                    {
                        name:"奥迪"
                    },{
                        name:"捷达"
                    }
                ]
            },{
                name: "迷你四驱车"
            }, {
                name: "超级战车"
            }]
        }]
    }]
};


var app = angular.module('cool', []);
app.directive('threeLink', function() {
    return {
        restrict: 'E',
        templateUrl: 'threeLink.html',
        replace: true,
        link: function($scope, iElement, iAttrs, controller) {
            $scope.indexList = [];
            $scope.nowChildList = [];
            $scope.target = {};
            $scope.target_father = {};
            init();
            var deep = -1;
            formatting(qiushangzhe.data);
            // 给数据 添加深度值
            function formatting(target) {
                deep++;
                for (var i in target) {
                    target[i].deep = deep;
                    formatting(target[i].child);
                }
                deep--;
            }

            function init() {

                for (var i in qiushangzhe.type) {
                    var buffer = {
                        target: {
                            name: qiushangzhe.type[i]
                        }
                    }
                    if (i == 0) {
                        buffer.father = qiushangzhe.data;
                    }
                    $scope.indexList.push(buffer);
                }

            }
            // 生成 顶部 选择器数据
            function generateHeader(list) {
                if (!list) {
                    return;
                }
                $scope.nowChildList.length = 0;
                for (var i in list) {
                    $scope.nowChildList.push(list[i]);
                }
            }
            // 选中一个item
            $scope.selectTarget = function(item, father) {
                $scope.target = item;
                $scope.target_father = father.slice(0);
                console.log(item);
                $scope.indexList[item.deep] = {
                    target: item,
                    father: $scope.target_father
                };
                checkHeader();
                generateHeader($scope.target.child);
            }

            $scope.clickHeaderItem = function(deep, item) {
                generateHeader(item.father);
            }

            //check顶部 数据
            function checkHeader() {
                $scope.maxDeep = 0;
                checkDeep($scope.target);
                clearHeader();
            }

            //check 最大深度
            function checkDeep(target) {
                if (target.child && target.child.length != 0) {
                    if (target.child[0].deep > $scope.maxDeep) {
                        $scope.maxDeep = target.child[0].deep;
                    }
                } else {
                    $scope.maxDeep = target.deep;
                }
                for (var i in target.child) {
                    checkDeep(target.child[i]);
                }
            }

            //清理一下header
            function clearHeader() {
                for (var i in $scope.indexList) {
                    if (i > $scope.target.deep) {
                        $scope.indexList[i] = {};
                    }
                    if (i > $scope.maxDeep) {
                        $scope.indexList[i] = {};
                    }
                }
            }
        }
    };
});

app.controller('mainController', function($scope, $location, $rootScope) {
    $scope.data = {};
    $scope.data.isOpen = false;
});
