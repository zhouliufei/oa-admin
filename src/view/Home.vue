<script src="../api/homeApi.js"></script>
<template>
  <div>
    <h1>hello word</h1>
    <Sidebar :menuList="menuList"></Sidebar>
  </div>
</template>

<script>

  import translateDataToTree from '../util/translateDataToTree'
  import Sidebar from '../components/SideBar.vue'
  import homeApi from '../api/homeApi'
  import router from '../router/index'
  import {menusToRoutes,asyncRoutes} from '../router/admin'
  export default {
    name: 'home',
    components: { Sidebar},
    data() {
        return {
          username: 'fanfan',
          menuList:[]
        }
      },
    mounted: function() {
      let roleCode = localStorage.getItem('role');
      homeApi.getMenuByRole({roleCode:roleCode}).then(res => {
        let param = res.object;
        let result = [];
        for(let i = 0; i < param.length;i++) {
          let obj = asyncRoutes[param[i].menuName]
          if(obj) {
            result.push(obj);
          }
        }
        this.menuList = translateDataToTree(param);
        // let result = menusToRoutes(res.object);
        console.log("============1")
        console.log(result)
        router.addRoutes(result);
      }).catch(err=> {
        console.log(err);
      })
    },
    methods: {

    }
  }
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
