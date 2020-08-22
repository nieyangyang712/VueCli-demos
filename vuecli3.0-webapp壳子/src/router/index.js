/**
### 路由呗分割成模块，便于管理
### 路由name属于特殊字段，所以name都放在meta里面
### 权限过与细致的话建议后端返回路由
**/
import Vue from 'vue'
import store from "../vuex/store";
import Router from 'vue-router'
import HOME from './home'
import ABOUTME from './aboutMe'
import ANALYSIS from './analysis'
import MARKET from './marketing'
import SERVICE from './service'
Vue.use(Router)
let routes = [...HOME, ...ABOUTME, ...ANALYSIS, ...MARKET, ...SERVICE];

let router = new Router({
    mode: 'history',
    base: '/gompapp/',//应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"
    routes
})


//router.beforeEach(function (to, from, next) {
//    store.commit('updateLoadingStatus', {
//        loading: true
//    })
//    next()
//})
//
//router.afterEach(function (to) {
//    store.commit('updateLoadingStatus', {
//        loading: false
//    })
//})

//router.beforeEach((to, from, next) => {
//    let tooken = window.localStorage.getItem('access-token');
//    var role;
//    if (window.localStorage.getItem('user')) {
//        role = JSON.parse(window.localStorage.getItem('user')).roleDO.roleId;
//    } else {
//        role = ''
//    }
//
//    if (tooken && role == 'M_1') {
//        next();
//    } else if (tooken && role == 'M_2') {
//        if (to.path.includes('/admin')) {
//            alert('登录超时，请重新登录')
//            next('/')
//        } else {
//            next();
//        }
//    } else {
//        if (to.path.includes('/admin')) {
//            alert('登录超时，请重新登录')
//            next('/')
//        } else {
//            next()
//        }
//
//    }
//    router.afterEach((to, from, next) => {
//        window.scrollTo(0, 0);
//    });
//})

export default router
