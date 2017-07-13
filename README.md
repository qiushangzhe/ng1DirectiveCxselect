# n级联动插件

## 给我数据。 还你多级联动

## 数据格式要求

就是无限的name和child的嵌套。

```
var testData = {
    // 默认头 如果是空 那么联动头也为空
    type: ['种类1', '种类2', '种类3'],
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
                name: "大苹果"
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
```

## 目前实现n级联动，可随便扩展。
