import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Permission from '../view/admin/Permission'
import PermissionIndex from '../view/admin/PermissionIndex'
import Dashboard from '../components/Dashboard'
import Home from '../view/Home'


Vue.use(Router)

//所有权限通用路由表
//如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
  {
    path: '/',
    component: Dashboard,
    redirect: '/dashboard',
    name: '首页',
    children: []
  }
]

//实例化vue的时候只挂载constantRouter
export default new Router({
  routes: constantRouterMap
});

//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = [
//   {
//     path: '/permission',
//     component: Permission,
//     name: '权限测试',
//     meta: { role: ['ROLE_ADMIN','super_editor'] }, //页面需要的权限
//     children: [
//       {
//         path: '/index',
//         component: PermissionIndex,
//         name: '权限测试页',
//         meta: { role: ['ROLE_ADMIN','super_editor'] }  //页面需要的权限
//       }]
//   },
//   { path: '*', redirect: '/404', hidden: true }
];

