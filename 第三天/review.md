## 指令(扩展功能封装插件)
- 装饰型指令
- 组件式指令
```
<panel name="name" n="fn(h)"></panel>
$scope.name = 456;
$scope.fn = function(hello){
    alert(hello)
}
<div panel></div>
<div class="panel"></div>
<!-- directive:panel -->
```
- 一切从模块开始，默认不会产生独立作用域
```
app.directive('panel',function(){
    return {
        restrict:'EAC',
        replace:true,
        template:"<button ng-click="n({h:123})">点我</button>",
        //templateUrl:'', 如果增加replace模板中的根节点只能有一个 
        link:function(scope,element,attrs){
            //scope当前作用域
            //element当前jq对象 angular.element 
            //attrs当前指令上的所有属性
        }，
        //scope:true//还可以继承上级的内容
        scope:{ //引用当前指令上的属性
            name:'@name', //引用的是变量，里面改变外面不会更改(单向)
            name:'=name',//双向的引用的是地址 (双向)
            n:'&'
        }
    }
})
```
## ng-show/ng-hide/ng-if
- ng-show/ng-hide操作样式 频繁切换消耗性能较低（首次消耗较大）
- ng-if 如果不成里dom就消失了，里面代码根本无法执行 (ng-if是会产生独立作用域的)一般和ng-repeat连用
