import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './store'
import 'common/base.styl'

import 'common/style.css'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
