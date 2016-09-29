## 搭建静态博客
- 创建仓库，名字为
- yourname.github.io

## -g代表安装的命令可以在全局命令行下使用
- 在任意目录下都可以进行安装

## 安装hexo命令行工具
- mac下都需要使用sudo
```
npm install hexo-cli -g
```
- 初始化项目（写博客的位置）
```
hexo init 你的文件夹的名字
``` 

## 启动服务开始写文章
```
hexo server
```
## 安装发布插件
```
npm install hexo-deployer-git --save
```

## 配置发布地址
```  
deploy:
  type: git
  repo: https://名字:密码@github.com/wakeupmypig/wakeupmypig.github.io.git
  branch: master
  message: push
```

## 发布 hexo deploy
```
hexo deploy
```
## 第二次发布时
```
hexo g
hexo deploy
```