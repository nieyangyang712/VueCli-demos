## author 
    raozy
## 介绍
  vue-cli4,vuejs2.0和yd-ui 2.x搭建的webapp界面。
    
### 项目结构
```
├── build  #webpack编译相关文件目录，一般不用动 
├── vue.config.js  #配置目录
├── dist  #生产环境下build后的文件存放目录（发布目录）
├── src #前端项目源码目录
│   ├───—api  #封装的接口文件目录
│   ├───—assets  #资源目录
│   ├───—common  #公用文件目录
│   ├───—components  #组件及页面文件目录
│   ├───—router  #路由目录
│   ├───—App.vue #项目入口文件
│   ├───—bus.js  #公共通信组件
│   └────main.js  #项目的核心文件
├── static  #开发模式下的静态资源目录
├── public────index.html #首页入口文件，你可以添加一些 meta 信息或同统计代码啥的
├── package.json #项目配置文件
└── README.md #项目的说明文档，markdown 格式
```

### 相关技术栈：

* vuejs2.0：一套构建用户界面的渐进式框架，易用、灵活、高效。
* yd-ui：一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的移动h5组件库http://vue.ydui.org/docs/#/quickstart。
* vue-router：官方的路由组件，配合vue.js创建单页应用（SPA）非常简单。
* axios: 基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用。


## 项目编译和运行

    ## 安装nodejs环境 http://nodejs.cn/

    ## 建议淘宝镜像 npm i -g cnpm --registry=https://registry.npm.taobao.org
    
    ## cnpm i下载依赖
    
    ## npm run dev 启动项目
    
    ## npm run build 打包项目

    ## 安装esri-loader cnpm  install --save esri-loader

### 针对IE9的兼容，详情参考尤大的解答  https://github.com/vuejs-templates/webpack/issues/260
    npm install --save babel-polyfill
   
    
### 简单规范，参考各文件readme
    文件夹 小驼峰命名
    页面组件大写开头,引入index
	


