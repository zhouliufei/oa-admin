// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})

let whitelist = '/home';

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('Authorization');
//   let role = localStorage.getItem('roleCode');
//   if(token) {
//     if(to.path === '/login') {
//       next({path:'/'});
//     }
//     else {
//       if(role) {
//         next();
//       }
//       else {
//         //当用户没有权限的时候，重新登录获取权限
//         localStorage.removeItem('Authorization')
//         localStorage.removeItem('roleCode')
//         next('/login')
//       }
//     }
//   }
//   else {
//     if(whitelist.indexOf(to.path) !== -1) {
//       next();
//     }
//     else {
//       next({path: '/login'});
//       alert("未登录，请先登录")
//     }
//   }
// });
