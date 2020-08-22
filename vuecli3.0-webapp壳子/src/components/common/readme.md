### 项目公共组件

### 介绍 
    该文件库存放整体项目的公共组件(复用度较高的组件),各模块内部的组件建议放在个模块
    
    基于vue，由于项目主题选择elementUI作为前端UI库,组件大多基于elementUI封装，使用前请参考 http://element-cn.eleme.io/#/zh-CN/component/installation
    
    组件建议采用props emit传递数据的方式统一封装，做好备注。
    
    组件名称建议小驼峰命名，即首字母小写，第二个单词首字母大写，例：timePicker
    
    组件目录建议 文件夹/index.vue的形式
                例：── cropper #组件目录
                    │   ├───—index  #暴露的目录(这才是外面需要引入的地方)
                    │   ├───— other #公共组件内部需要的组件
    
    组件需要引入其他js库的，建议按需引入，做好备注。
    
###  当前公共组件模块
└── readme.md #说明文档，markdown 格式
