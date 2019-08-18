// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import zxwUI from 'zxw-test-component'
import 'zxw-test-component/dist/zxw.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Antd)
Vue.use(zxwUI)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
