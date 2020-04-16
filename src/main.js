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
Vue.config.productionTip = false

let Base64 = require('js-base64').Base64;

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
 * @param {*} key 
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

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
