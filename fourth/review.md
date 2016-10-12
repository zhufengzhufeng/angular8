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
- replace
- template
- templateUrl
- link
- scope
    - @
    - &
    - =
- require

## ng-show,ng-hide,ng-show

## watch,apply

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
