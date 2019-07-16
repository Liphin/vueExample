import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

/**
 * 各组件模块相互share的数据
 */

export default new Vuex.Store({
  modules: {
    //登录模块共享数据
    login: {
      state: {
        status: false,
        account: '',
      },
      mutations: {
        /**
         * 更新登录状态
         * @param state 默认携带state内部数据句柄
         * @param param 参数对象
         */
        changeLoginStatus(state, param) {
          state.account = param.account;
          state.status = true;
        }
      }
    }
  }
})
