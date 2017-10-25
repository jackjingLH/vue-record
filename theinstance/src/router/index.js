import Vue from 'vue'
import Router from 'vue-router'

const ApplyFor = (resolve) => {
  import('components/apply-for/apply-for').then((module) => {
    resolve(module)
  })
}

const Pending = (resolve) => {
  import('components/pending/pending').then((module) => {
    resolve(module)
  })
}

const Record = (resolve) => {
  import('components/record/record').then((module) => {
    resolve(module)
  })
}

const Afrom = (resolve) => {
  import('components/afrom/afrom').then((module) => {
    resolve(module)
  })
}

const Bfrom = (resolve) => {
  import('components/bfrom/bfrom').then((module) => {
    resolve(module)
  })
}

const Cfrom = (resolve) => {
  import('components/cfrom/cfrom').then((module) => {
    resolve(module)
  })
}

const Dfrom = (resolve) => {
  import('components/dfrom/dfrom').then((module) => {
    resolve(module)
  })
}

const Efrom = (resolve) => {
  import('components/efrom/efrom').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/applyFor'
    },
    {
      path: '/applyFor',
      component: ApplyFor,
      children: [{
        path: '/applyFor/0',
        component: Afrom
      }, {
        path: '/applyFor/1',
        component: Bfrom
      }, {
        path: '/applyFor/2',
        component: Cfrom
      }, {
        path: '/applyFor/3',
        component: Dfrom
      }, {
        path: '/applyFor/4',
        component: Efrom
      }]
    },
    {
      path: '/pending',
      component: Pending
    },
    {
      path: '/record',
      component: Record
    }
  ]
})
