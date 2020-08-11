// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './element'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/js/global.js'
import store from './store/index'

import axios from 'axios'



Vue.use(ViewUI, {
  transfer: true,
  size: 'large',
  capture: false,
  select: {
    arrow: 'md-arrow-dropdown',
    arrowSize: 20
  }
});


Vue.prototype.$http = axios
Vue.prototype.$http.defaults.baseURL = '' // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
