import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入全局样式
import './assets/style/baseStyle.less'

//引入全局的脚本
import './assets/javascript/baseAxios'
// import './assets/javascript/base_echarts.js'
Vue.config.productionTip = false

let Base64 = require('js-base64').Base64;

// 消息提示
import { Notification } from 'element-ui';
/**
* 在页面左侧显示提示消息
* @param {String} msg 提示消息
* @param {String} type 消息类别
* @param {String} title 消息标题
* @param {Number} duration 显示时间（毫秒）
*/
function Message(msg, type = 'info', title = '提示', duration = 6000) {
  Notification({
      "title": title,
      "message": msg,
      "type": type,
      "duration": duration
  })
}
Vue.prototype.$msg = Message

/*-----缓存策略------ */
/**
 * 添加指定的键值对到localStorage中
 * @param {String} key 缓存的键
 * @param {Object} value 缓存的值
 */
function setLocal(key, value) {
  let localData = localStorage.getItem("data")
  if(localData != null){
    localData = JSON.parse(Base64.decode(localData))
    localData[key] = value
  } else {
    localData = {}
    localData[key] = value
  }
  localStorage.setItem("data", Base64.encode(JSON.stringify(localData)))
}
Vue.prototype.__setLocal = setLocal

/**
 * 获取localStorage中对应键的值
 * @param {String} key 缓存中的值 
 */
function getLocal(key) {
  let localData = localStorage.getItem("data")
  if (localData != null) {
    localData = JSON.parse(Base64.decode(localData))
    return localData[key]
  } else {
    return undefined
  }
}
Vue.prototype.__getLocal = getLocal

/**
 * 删除localStorage中对应健
 *@param {String} key 缓存中的值
 */
function removeLocal(key) {
  let localData = localStorage.getItem("data")
  if(localData != null){
    localData = JSON.parse(Base64.decode(localData))
    delete localData[key]
    localStorage.setItem("data", Base64.encode(JSON.stringify(localData)))
  }
}
Vue.prototype.__removeLocal = removeLocal


/**
 * 添加指定的键值对到sessionStorage中
 * @param {String} key 缓存的健
 * @param {Object} value 缓存的值
 */
function setSession(key, value) {
  let sessionData = sessionStorage.getItem("data")
  if (sessionData != null) {
      sessionData = JSON.parse(Base64.decode(sessionData))
      sessionData[key] = value
  } else {
      sessionData = {};
      sessionData[key] = value
  }
  sessionStorage.setItem("data", Base64.encode(JSON.stringify(sessionData)))
}
Vue.prototype.__setSession = setSession;

/**
* 获取sessionStorage中对应健的值
* @param {String} key 缓存中的健
*/
function getSession(key) {
  let sessionData = sessionStorage.getItem("data");
  if (sessionData != null) {
      sessionData = JSON.parse(Base64.decode(sessionData))
      return sessionData[key]
  } else {
      return undefined
  }
}
Vue.prototype.__getSession = getSession;

/**
* 删除sessionStorage中对应健
* @param {String} key 缓存中的健
*/
function removeSession(key) {
  let sessionData = sessionStorage.getItem("data")
  if (sessionData != null) {
      sessionData = JSON.parse(Base64.decode(sessionData))
      delete sessionData[key]
      sessionStorage.setItem("data", Base64.encode(JSON.stringify(sessionData)));
  }
}
Vue.prototype.__removeSession = removeSession;

if(typeof(window.name) != 'undefined' && window.name != '') {
  setLocal("user", JSON.parse(window.name))
}
const baseURL = require("../static/base.json").baseURL;
if(baseURL) {
  setLocal("baseURL", baseURL)
}
/* --------------- 缓存策略 end --------------- */

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
