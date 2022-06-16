

import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
// import Main from "../views/Home/index.vue"
import Main from "../views/Main/index.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'icon-car',
      title: '主页'
    },
    component: Main,
    children: [
      {
        path: '/about',
        name: 'About',
        meta: {
          title: 'About',
        },
        //异步方法
        component: () => import('../views/About/about.vue')
      },
      {
        path: '/vuex',
        name: 'Vuex',
        meta: {
          title: 'Vuex',
        },
        component: () => import('../views/Vuex/vuex.vue')
      },
      {
        path: '/axios',
        name: 'Axios',
        meta: {
          title: 'Axios',
        },
        component: () => import('../views/Ajaxs/axios.vue')
      }, {
        path: '/list',
        name: 'List',
        meta: {
          title: 'List',
        },
        component: () => import('../views/List/list.vue')
      },
    ]
  },
  {
    path: '/layout',
    name: 'Layout',
    meta: {
      icon: 'icon-printer',
      title: '各种布局形式',
    },
    component: Main,
    children: [
      {
        path: '/gridPage',
        name: 'gridPage',
        meta: {
          title: 'grid网格案例',
        },
        component: () => import('../views/layout/gridPage.vue')
      },
      {
        path: '/xiaomiGrid',
        name: 'xiaomiGrid',
        meta: {
          title: 'grid左侧滑动菜单布局',
        },
        component: () => import('../views/layout/xiaomiGrid.vue')
      },
      {
        path: '/flex',
        name: 'Flex',
        meta: {
          title: '弹性盒子布局',
        },
        component: () => import('../views/layout/flex.vue'),
      },
      {
        path: '/baiduGrid',
        name: 'baiduGrid',
        meta: {
          title: '网格布局',
        },
        component: () => import('../views/layout/baiduGrid.vue'),
      },
      {
        path: '/sanlanGrid',
        name: 'sanlanGrid',
        meta: {
          title: '三栏布局',
        },
        component: () => import('../views/layout/sanlanGrid.vue'),
      },
      {
        path: '/gridRepeat',
        name: 'gridRepeat',
        meta: {
          title: '宽度响应式换行',
        },
        component: () => import('../views/layout/gridRepeat.vue'),
      },
      {
        path: '/gridImage',
        name: 'gridImage',
        meta: {
          title: 'grid图片叠加显示',
        },
        component: () => import('../views/layout/gridImage.vue'),
      },
    ]

  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-video',
      title: '搜索列表',
    },
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-check-circle',
      title: '搜索列表',
    },
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-user',
      title: '个人中心',
    },
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-highlight',
      title: '结果页',
    },
    component: () => import('../views/Login/login.vue')
  },

  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-wrench',
      title: '图形编辑器',
    },
    component: () => import('../views/Login/login.vue')
  },


  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'icon-error',
      title: '登录页面',
    },
    component: () => import('../views/Login/login.vue'),
    //如果登录就不能去login页面
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      isLogin ? next({ name: "Home" }) : next()
    }
  },
]

const router = createRouter({
  //4.提供要使用的历史记录实现。为了简单起见，我们在这里使用哈希历史记录。
  history: createWebHashHistory(),
  // history: createWebHistory(), //需要服务器配置比较麻烦， https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90
  routes, // short for `routes: routes`
})


//只要跳转页面都会走到这里
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin

  if (isLogin || to.name === "Login") {
    next()
  } else {
    next({ name: "Login" })
  }



  next()
})

export default router

