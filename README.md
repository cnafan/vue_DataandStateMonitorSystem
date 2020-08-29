# myvuecli

> A Vue.js project

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

## Direction
```
├─dist                      // 编译之后的项目文件
├─src                       // 开发目录
│  ├─assets                 // 静态资源
│     ├─css		              // 公共css
│     ├─img					        // 图片资源
│  ├─utils                  // 公共工具库
│  ├─config                 // 公共配置
│  ├─components             // 公共组件
│  ├─pages                  // 页面，根据路由结构划分
│  ├─App.vue                // 启动页面，最外层容器组件
│  ├─main.js                // 入口脚本
│
├─ babel.config.js          // babel 配置文件
├─ vue.config.js            // vue 自定义配置，与 webpack 配置相关
├─ package.json             // 项目配置
├─ README.md                // 项目说明
```

## Others
