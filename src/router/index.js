import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 按需加载文件
const Pick = (resolve) => {
  import('@/components/Pick').then((module) => {
    resolve(module);
  })
}

const Draw = (resolve) => {
  import('@/components/Draw').then((module) => {
    resolve(module);
  })
}

const Intro = (resolve) => {
  import('@/components/Intro').then((module) => {
    resolve(module);
  })
}

const Submit = (resolve) => {
  import('@/components/Submit').then((module) => {
    resolve(module);
  })
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/pick'
    },
    {
      path: '/pick',
      name: 'pick',
      component: Pick
    },
    {
      path: '/draw',
      name: 'draw',
      component: Draw
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit
    },{
      path: '*',
      redirect: '/pick'
    }
  ]
})
