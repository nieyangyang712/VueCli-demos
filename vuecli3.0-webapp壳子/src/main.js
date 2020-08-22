import Vue from 'vue'
import App from './App'
import '@/assets/styles/main.scss'
import router from './router'
import store from './vuex/store.js'
//关闭生产环境下的提示
Vue.config.productionTip = false
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
//在main.js里引用fastclick,移动端点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})

/**权限指令**/
Vue.directive('has', {
    bind: function (el, binding) {
        if (!Vue.prototype.$_has(binding.value)) {
            el.parentNode.removeChild(el);
        }
    }
});
//权限检查方法
Vue.prototype.$_has = function (value) {
    let isExist = false;
    console.info('权限检查');
    let buttonpermsStr = localStorage.getItem("perms");
    if (buttonpermsStr == undefined || buttonpermsStr == null) {
        return false;
    }
    let buttonperms = JSON.parse(buttonpermsStr);
    for (let i = 0; i < buttonperms.length; i++) {
        if (buttonperms[i].perms.indexOf(value) > -1) {
            isExist = true;
            break;
        }
    }
    return isExist;
};
