## 指令
- 指令是不依赖于控制的（一般还是需要控制器的） spa框架
```
<my-text></my-text>
app.directive('myText',function(){
    return {
        template:'<div></div>', //模板
        templateUrl:'tmpl/index.html', //模板的引用路径
        restrict:'ECMA', //限制使用范围
        link:function(scope,element,attrs){
            //scope 当前作用域
            //element 当前元素jq对象
            //attrs 属性集合
        },
        replace:true,//将我们的指令标签替换掉，替换成我们的template
        trasclude:true将指令之间的内容保留下来插入到带有ng-transclude的标签内
        scope:true/scope:{}
    }
})
```