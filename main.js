import Vue from 'vue'
import App from './App'
import $cc from './utils/index.js'

Vue.prototype.$cc = $cc
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
