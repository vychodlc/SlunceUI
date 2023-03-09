import { RouteRecordRaw } from 'vue-router'

const pagesRouter:RouteRecordRaw[] = [
  {
    path: '/',
    name: '主页',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/components',
    name: 'components',
    component: () => import('@/views/components.vue'),
  },
  {
    path: '/components/basic',
    name: 'basic',
    redirect: '/components/basic/button'
  },
  {
    path: '/components/form',
    name: 'form',
    redirect: '/components/form/input'
  },
  {
    path: '/components/basic/button',
    name: 'basic-button',
    component: () => import('../../docs/basic/button/index.vue')
  },
  {
    path: '/components/basic/color',
    name: 'basic-color',
    component: () => import('../../docs/basic/color/index.vue')
  },
  {
    path: '/components/basic/icon',
    name: 'basic-icon',
    component: () => import('../../docs/basic/icon/index.vue')
  },
  {
    path: '/components/form/input',
    name: 'form-input',
    component: () => import('../../docs/form/input/index.vue')
  },
  {
    path: '/components/form/select',
    name: 'form-select',
    component: () => import('../../docs/form/select/index.vue')
  },
  {
    path: '/components/feedback/message',
    name: 'feedback-message',
    component: () => import('../../docs/feedback/message/index.vue')
  },
]

export default pagesRouter