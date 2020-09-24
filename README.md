# MyUploaderDemo

> 采用vue.js + plupload + element-ui 实现的前端文件上传界面

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 前端实现
## 组件列表
- 单文件上传：SingleUpload.vue
- 多文件上传：MultiFileUploader.vue
- 按文件目录上传（能选择不同的文件类型）：DirectoryUploader.vue

## 引入pluploader
##### 参考了gaoyuyue的项目，项目地址 (https://github.com/gaoyuyue/MyUploader.git)
### 使用Uploader组件必须要配置的参数：
- browse_button： 选择文件button的id
- url： 文件上传地址
- inputUploader方法： 用于获取uploader对象

>为了获取uploader对象，自定义了inputUploader方法，需要在引用Uploader.vue的组件中实现inputUploader方法，inputUploader方法中传入了一个参数即uploader对象。关于uploader对象及其他配置参数请参考plupload官方文档
