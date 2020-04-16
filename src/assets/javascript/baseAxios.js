import Vue from 'vue'
import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'; // 请求头设置
axios.defaults.headers['Access-Control-Allow-Credentials'] = true; // 请求头设置
axios.defaults.headers['Access-Control-Expose-Headers'] = 'returnRUL'; // 请求头设置
axios.defaults.timeout = 5000
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

//超时时间
axios.defaults.timeout = 1000 * 60 * 15

//http请求拦截器
axios.interceptors.request.use(config => {
  config.headers["returnRUL"] = window.location
  return config
}, error => {
  return Promise.reject(error)
});

//http响应拦截器
axios, interceptors.response.use(data => {//响应成功关闭loading
  return data
}, (err) => {
  let title = '服务异常'
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误(400)';
        break;
      case 401:
        // window.location = err.response.data;
        err.message = '未授权，请重新登录(401)';
        break;
      case 403:
        title = "权限问题"
        err.message = '对不起，您没有权限进行操作';
        break;
      case 404:
        err.message = '请求出错(404)';
        break;
      case 408:
        err.message = '请求超时(408)';
        break;
      case 500:
        err.message = '服务器错误(500)';
        break;
      case 501:
        err.message = '服务未实现(501)';
        break;
      case 502:
        err.message = '网络错误(502)';
        break;
      case 503:
        err.message = '服务不可用(503)';
        break;
      case 504:
        err.message = '网络超时(504)';
        break;
      case 505:
        err.message = 'HTTP版本不受支持(505)';
        break;
      default:
        err.message = `连接出错(${err.response.status})!`;
    }
  }else{
    try {
      err.message = '连接服务器失败！'
    } catch (error) { }
    Vue.prototype.$msg(err.message, 'error', title)
    document.body.style.cursor = 'auto' // 默认样式
    return Promise.reject(err)
  }
});

Vue.prototype.$http = axios;
//避免重复信息
let obj = '';
//添加post方法
Vue.prototype.$post = function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if (response.status == 200) {
          let resp = response.data
          if (typeof (resp.code) == 'undefined') {
            if (resp.result) {
              resolve(resp.content)
            } else{
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.message +')')
            }
          } else {
            if (resp.code == 200) {
              resolve(resp.content)
            } else {
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.code +')')
            }
          }
        } else {
          reject(response.data)
          Vue.prototype.$msg(response.status, 'error', '服务异常,' + response.message)
        }
      }, err => {
        reject(err)
      })
  })
}
//添加put方法
Vue.prototype.$put = function put(url, data) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        if (response.status == 200) {
          let resp = response.data
          if (typeof (resp.code) == 'undefined') {
            if (resp.result) {
              resolve(resp.content)
            } else{
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.message +')')
            }
          } else {
            if (resp.code == 200) {
              resolve(resp.content)
            } else {
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.code +')')
            }
          }
        } else {
          reject(response.data)
          Vue.prototype.$msg(response.status, 'error', '服务异常,' + response.message)
        }
      }, err => {
        reject(err)
      })
  })
}
//添加delete方法
Vue.prototype.$delete = function del(url, data) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        if (response.status == 200) {
          let resp = response.data
          if (typeof (resp.code) == 'undefined') {
            if (resp.result) {
              resolve(resp.content)
            } else{
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.message +')')
            }
          } else {
            if (resp.code == 200) {
              resolve(resp.content)
            } else {
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.code +')')
            }
          }
        } else {
          reject(response.data)
          Vue.prototype.$msg(response.status, 'error', '服务异常,' + response.message)
        }
      }, err => {
        reject(err)
      })
  })
}
//添加get
Vue.prototype.$get = function get(url) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        if (response.status == 200) {
          let resp = response.data
          if (typeof (resp.code) == 'undefined') {
            if (resp.result) {
              resolve(resp.content)
            } else{
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.message +')')
            }
          } else {
            if (resp.code == 200) {
              resolve(resp.content)
            } else {
              Vue.prototype.$msg(resp.msg, 'error', '服务异常('+ resp.code +')')
            }
          }
        } else {
          reject(response.data)
          Vue.prototype.$msg(response.status, 'error', '服务异常,' + response.message)
        }
      }, err => {
        reject(err)
      })
  })
}