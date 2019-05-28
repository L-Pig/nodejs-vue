// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import {store} from '@/store/index';
import VueSocketIO from 'vue-socket.io'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:8888'
}))
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
