import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex);

//全局store
export const store = new Vuex.Store({
  state: {},
  mutations: {},
  //注册子模块
  modules: {
    user,
  }
});
