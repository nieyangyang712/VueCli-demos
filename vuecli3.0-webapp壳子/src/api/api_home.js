/**
 * Created by rcy.
 * 主页相关
 */
import * as API from './ajax'
import axios from 'axios'
import qs from 'qs';
const BASE = process.env.API_ROOT

export default {
    //查询所有项目
    queryProjects: params => {
        return API.GET('/mobilebanner/20170717/20170717113514278470.jpg', params)
    },
    //一键下载
    downloadPackage: params => {
        let url = '/manager-service/file/downloadPackage';
        return axios.post(`${BASE}${url}`, qs.stringify(params), {
            responseType: 'blob'
        }).then(res => res.data);
    },

}
