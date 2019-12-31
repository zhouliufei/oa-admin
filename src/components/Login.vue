<template>
  <div>
    <input type="text" v-model="loginForm.username" placeholder="用户名"/>
    <input type="text" v-model="loginForm.password" placeholder="密码"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>

import axios from 'axios'
import 'url-search-params-polyfill'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  // mounted: function() {
  //   console.log("hello word")
  //   console.log(this.treeDate)
  //   let result = this.treeDate;
  //   let param = translateDataToTree(result);
  //   console.log(param)
  // },
  methods: {
    login: function () {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空')
      } else {
        localStorage.removeItem("Authorization")
        localStorage.removeItem("role")
        this.$router.push('/home')
        let params = new URLSearchParams()
        params.append("username",this.loginForm.username)
        params.append("password",this.loginForm.password)
        axios({
          method: 'post',
          url: 'api/login',
          data: params
        }).then(res => {
          console.log(res)
          // 存储用户token
          let userToken = res.headers.token
          let roleCode = res.data.role
          localStorage.setItem("Authorization",userToken)
          localStorage.setItem("role",roleCode)
          console.log(localStorage.getItem('role'))
          this.$router.push('/home')
          alert('登录成功')
        }).catch(error => {
          alert('账号或密码错误')
          console.log(error)
        })
      }
    },

  }
}
</script>

<style scoped>

</style>
