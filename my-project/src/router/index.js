import Vue from 'vue'
import Router from 'vue-router'
import Rollings from 'components/rollings/rollings'
import Addplan from 'components/Addplan/Addplan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Rollings,
      children: [
        {
          path: '/addplan',
          component: Addplan
        }
      ]
    }
  ]
})
