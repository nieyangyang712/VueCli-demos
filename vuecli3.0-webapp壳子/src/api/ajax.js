/**
 * Created by bootdo.
 */
import axios from 'axios'
import store from "../vuex/store";
import qs from 'qs';
import {
    bus
} from '../bus.js'
axios.defaults.withCredentials = true;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; 

//添加一个请求拦截器
axios.interceptors.request.use(
    config => {
        if (window.localStorage.getItem('access-token')) {
            //每次请求都为http头增加Authorization字段，其内容为token

            config.headers.Authorization = JSON.parse(window.localStorage.getItem('access-token'));
        }
        //防止用户多次点击请求重复，取消重复的请求
        //        let requestName = config.method === 'post' ? config.data.requestName : config.params.requestName
        //        if (requestName) {
        //            if (axios[requestName] && axios[requestName].cancel) {
        //                axios[requestName].cancel()
        //            }
        //            config.cancelToken = new CancelToken(e => {
        //                axios[requestName] = {}
        //                axios[requestName].cancel = e
        //            })
        //        }
        if (config.method == 'get') {
            config.params = {
                _t: Date.parse(new Date()) / 1000,
                ...config.params
            }
        } else if (config.method == 'post') {}
        store.state.loading = true
        return config
    },
    error => {
        return Promise.reject(error);
    }
);
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    //    console.log(response)

    store.state.loading = false


    if (response.data && response.status === 200) {
        if (response.data === 'logout') {
            //未登录，登录失效
            bus.$emit('goto', '/login')
        }
    } else {
        bus.$emit('goto', '/notfound')
    }
    return response;
}, function (error) {
    //    console.log(error)
    //    if (err && err.response) {
    //        switch (err.response.status) {
    //            case 400:
    //                err.message = '请求错误(400)';
    //                break;
    //            case 401:
    //                err.message = '未授权，请重新登录(401)';
    //                break;
    //            case 403:
    //                err.message = '拒绝访问(403)';
    //                break;
    //            case 404:
    //                err.message = '请求出错(404)';
    //                break;
    //            case 408:
    //                err.message = '请求超时(408)';
    //                break;
    //            case 500:
    //                err.message = '服务器错误(500)';
    //                break;
    //            case 501:
    //                err.message = '服务未实现(501)';
    //                break;
    //            case 502:
    //                err.message = '网络错误(502)';
    //                break;
    //            case 503:
    //                err.message = '服务不可用(503)';
    //                break;
    //            case 504:
    //                err.message = '网络超时(504)';
    //                break;
    //            case 505:
    //                err.message = 'HTTP版本不受支持(505)';
    //                break;
    //            default:
    //                err.message = `连接出错(${err.response.status})!`;
    //        }
    //    } else {
    //        err.message = '连接服务器失败!'
    //    }
    //    this.$message.error(err.message);
    bus.$emit('message', '网络错误')
    //    bus.$emit('goto', '/notfound')

    store.state.loading = false

    // Do something with response error
    return Promise.reject(error);
});

//基地址
export let base = process.env.VUE_APP_API_ROOT
let config = {
    //添加请求头
    //    headers: {
    //        "Content-Type": "multipart/form-data",
    //        'Content-Type':''
    //    },
};
//通用方法
export const POST = (url, params) => {
    console.info("POST请求路径" + `${base}${url}`);
    return axios.post(`${base}${url}`, qs.stringify(params)).then(res => res.data)
}
export const GET = (url, params) => {
    console.info("GET请求路径" + `${base}${url}`);
    //    params.timetext = new Date()
    return axios.get(`${base}${url}`, {
        params: params,
    }).then(res => res.data)
}
export const PUT = (url, params) => {
    console.info("PUT请求路径" + `${base}${url}`);

    return axios.put(`${base}${url}`, params).then(res => res.data).catch((error) => error)
}
export const DELETE = (url, params) => {
    console.info("DELETE请求路径" + `${base}${url}`);

    return axios.delete(`${base}${url}`, {
        params: params
    }).then(res => res.data).catch((error) => error)
}
export const PATCH = (url, params) => {
    console.info("PATCH请求路径" + `${base}${url}`);
    return axios.patch(`${base}${url}`, params).then(res => res.data).catch((error) => error)
}
