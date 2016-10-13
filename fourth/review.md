## npm node package manager 管理后台包的
## bower 管理前端包的
- 安装bower 
```
npm install -g bower
```  

- 初始化一个bower.json文件，记录依赖,文件夹不能是中文不能有大写
```
bower init
```  

> 记录你安装的所有内容

- 安装包，安装后默认会放在bower_componets的文件夹下
```
bower install angular jquery --save  --save-dev
```

> 安装的时候会自动查找依赖的包进行下载

## 更改目录不产生到bower_components下
- 建立一个文件.bowerrc 将文件写入到lib中
- 在bowerrc中指定安装的文件夹
- 再安装时会默认将下载的文件放入bowerrc指定的目录中

## ng-app  

- 告诉angular启动的范围，会创建一个$rootScope - > window (默认最大为html)  

## ng-model  

- 双向绑定，将数据绑定在街面上，只有页面可以更改内容的才可以进行双向绑定  

## ng-bind,ng-template,ng-cloak
- ng-bind就是{{}}的全称，用法一样，必须设置在标签上
- ng-bind-template 可以绑定多个数据

> 绑定数据元素的标签内，不能自带内容

- ng-cloak先将带有ng-cloak标签全部隐藏掉，等待angular加载后，替换掉ng-cloak   

```
[ng-cloak]{
    display:none
}
```  

## {{}}  

- 表达式，用来取值和运算（简单的三元表达式）  

## module
- 模块通过angular对象创建模块，防止都定义在rootScope上污染全局变量  

## controller  

- 一切从模块开始，通过模块来创建控制器，买一送一送一个作用域（在控制器中可以注入一些服务） 控制器一般采用数组方式。防止代码被压缩  

## $scope,$rootScope  

- viewModel 实现双向数据绑定的 / $rootScope根作用域  

## ng-repeat  

- 遍历数据对象，要循环谁就写在谁身上，并且必须采用ng-repeat='xxx in xxx'，数组要追加track-by ($index),会产生新的作用域  

## ng-disabled ng-readonly  

- 禁用  
 
## ng-options  
- select as for in
- 设置默认值要让select默认值为选中的value值  

## $sce 防止html不被渲染  

```
<div ng-bind-html="html"></div>
$scope.html = $sce.trustAsHtml(html)
```  

## directive
- restrict
限制使用范围，ECMA, M一般不会使用
- replace
替换原指令，要替换的内容只能有一个根节点
- template
- templateUrl
指定替换的模板
- link
```
link:function(scope,element,attrs){
scope表示当前的作用域
element表示当前指令的元素，jq对象
attrs当前指令上的所有属性
}
```
- scope
    - @ 从当前指令上取属性对应的字符串，将值传递给指令中的scope（单向绑定）
    - = 从当前指令上取属性对应的变量，将变量传递给指令中的scope(双向绑定)
    - & 传递方法，传递参数时必须使用对象形式

> 指令默认不会创建独立作用域，

- transclude
保留原指令中的内容，插入到带有ng-transclude的标签内（会创建独立作用域）


- require指令和指令间的交互
将自控制器和父控制器发生关系，父控制器要提供一个controller方法，让子类来调用,
- ^先从自己身上找，找不到像上找，在找不到报错? 找不到不报错，传入为的null

## ng-show,ng-hide,ng-if
- ng-show/ng-hide
频繁切换使用ng-show/ng-hide 只是切换样式，但是首次消耗性能较高，无论代码是否成立都会执行。
- ng-if
如果代码不成立则不运行内部代码，首次消耗性能较少，频繁切换时消耗性能较多，如果不成立dom消失，所以会产生独立作用域
## watch,apply
- watch监控页面的变化，会输出原值和老值，当值变化就会触发watch的回调函数,true参数表示深度比较
- apply调用angular的脏值检查机制，默认angular自动会调用，但是我们自己的代码不会执行，所以需要手动调用$degist

> watch+apply 实现双向数据绑定的方法，最少执行两次

## $timeout,$interval,cancel


## 推送gh-pages
- 新建仓库，本地和远程仓库建立关联
- 切换到gh-pages的分支上
```
git checkout -b gh-pages(github规定的)
```
- git add .
- git commit
- git push origin gh-pages
```
501  git init 
502  git remote add origin https://github.com/zhufengzhufeng/node8test.git
503  git checkout -b gh-pages
504  git add .
505  git commit -m 'hello world'
506  git push origin gh-pages
```
## ng-class  
- class="{{}}"
- ng-class="{true:'className',false:'className'}[flag]"
- ng-class="{'className':flag,'className':!flag}"
## ng-style
- ng-style={'fontSize':'red'}
## filter 

## broadcast emit on  

## 服务  

## http  

## ngRoute uiRoute  

## ionic + angular  
