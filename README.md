# 虎彩FORM表单组件介绍


### 安装

```html
npm install @tiger/form --registry=http://192.172.9.139/
或者通过nrm切换镜像源，参考本站开发指南-npm 私服使用指南
```

### 快速上手

在main.js中引入一下内容：
```js
import Vue from 'vue';
import VForm from '@tiger/form';
import App from './App.vue';

Vue.use(VForm, {
  lab: 'element-ui' // 如果项目中使用的是iview，则更改为lab: 'iview'
});
// 或者挂到全局window上：
// Vue.use(VForm);
// window.componentLib = 'element-ui'

new Vue({
  el: '#app',
  render: h => h(App)
});
```