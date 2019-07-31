import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require.ensure([], () => resolve(require('@/components/HelloWorld')), 'helloworld')
    },
    {
      path: '/test',
      name: 'Test',
      component: resolve => require.ensure([], () => resolve(require('@/components/Test')), 'test')
    }
  ]
})
