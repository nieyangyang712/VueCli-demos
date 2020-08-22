import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart' //举例

//import products from './modules/products'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

//*不要在发布环境下启用严格模式！ 会造成性能损失
//const debug = process.env.NODE_ENV !== 'production'


//公共数据
const state = {
    loading: false,
    menus: []
}
//同步加载数据
const mutations = {
    updateLoadingStatus(state, payload) {
        state.loading = payload.loading
    }
    /*changeLogin(state,status){
      state.isLogin = status;
    }*/
}
//实现异步加载数据
const actions = {
    /*loginAction({commit}){
      commit('changeLogin',1);
    }*/
}


export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        cart //举例
        // products
    }
})
//  plugins: debug ? [createLogger()] : []
