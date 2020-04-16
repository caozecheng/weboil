import Vue from 'vue'
const base = require('../../../static/base.json')

//登录
export const ajaxLogin = param => { return Vue.prototype.$post(base.baseURL + 'admin/login', param).then(res => res)}