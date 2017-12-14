`parcel`一个快速，零配置的 Web 应用程序打包工具,这里我介绍下如何和`vue`结合进行开发。具体代码:https://github.com/zlxbuzz/parcel-demo

#### 初始化项目

```bash
mkdir parcel-demo && cd parcel-demo && yarn init -y

```

#### 安装依赖

```bash
yarn add parcel-bundler parcel-plugin-vue babel-preset-env less  --dev
yarn add vue-router
```
其中`parcel-bundler`是主要的工具，对于`vue`结尾的单文件，需要单独处理文件类型，
`parcel-plugin-vue`这个插件会通过`vueify`来生成对应的代码，`parcel`会自动加载`parcel-plugin`开头的依赖。



#### 在根目录添加babel，postcss配置

```
//postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({ browsers:  [
                              'last 20 versions',
                              'IE 9',
                              'iOS >= 8']})]
}
```

```
//.babelrc

{
  "presets": [
    ["env"]
  ]
}
```

#### 新建html

这里引用了`mint`来方便展示页面

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name=viewport content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1">
  <title>parcel-vue-demo</title>
  <!-- 引入样式 -->
  <link rel="stylesheet" href="https://cdn.bootcss.com/mint-ui/2.2.13/style.css">

  <script src="https://cdn.bootcss.com/vue/2.5.9/vue.min.js"></script>
  <!-- 引入组件库 -->
  <script src="https://cdn.bootcss.com/mint-ui/2.2.13/index.js"></script>
</head>
<body>
  <app></app>
  <script src="./src/index.js"></script>
</body>
</html>
```

#### 开发
和基于webpack开发的目录结构一致,具体代码可以参考 https://github.com/zlxbuzz/parcel-demo
```js
src
├── app.vue
├── index.js
├── index.less
├── router.js
└── views
    ├── detail.vue
    └── index.vue
```

```js
//index.js


import app from './app.vue'
import router from './router'

import './index.less'

window.onload = function(){
  new Vue({
    router,
    el: 'app',
    components: {
      app
    }
  });
}
```

#### 添加脚本

```js
{
  "name": "h5",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html --public-url /"
  },
  "devDependencies": {
    "babel-preset-env": "^1.6.1",
    "less": "^2.7.3",
    "parcel-bundler": "^1.2.0",
    "parcel-plugin-vue": "^1.0.1"
  },
  "dependencies": {
    "vue-router": "^3.0.1"
  }
}
```
只需要执行`npm run dev` 和 `npm run build` 就可以进行开发和构建，`public-url`就相当于资源的引用路径。

