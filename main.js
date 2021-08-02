import Vue from 'vue'
import App from './App'
import utils from './utils/index.js'

Vue.prototype.$utils = utils
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
