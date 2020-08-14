<template>
  <div>
    <Button size="small" @click="testLogin">登录</Button>
    <Button size="small" @click="testMenu">获得菜单</Button>
    <Button size="small" @click="testSList">查询列表</Button>
    <Button size="small" @click="testLogout">登出</Button>
  </div>

</template>

<script>
  export default {
    name: "Test1",
    data(){
      return{


        list: [],

      }
    },
    methods:{

      async testLogout(){
        var oldToken = window.localStorage.getItem("token");
        var req = {"access_token": oldToken};

        var _this = this;
        await this.$http.post('/plat/user/webLogout', req).then(function (res) {

          console.log(res);
          if (res.status === 200) {
            let rs = res.data;
            window.localStorage.setItem("token", "");

          } else {
            _this.$Message.error('服务错误！HTTP:' + res.status);
          }

        });

      },

      testLogin(){
        var req = {"userAccount":"宜宾市驻京联络处","passWord":"ddb5dae482528387954e1a3bc7af2ca3"};

        var _this = this;
        this.$http.post('/plat/user/webLogin', req).then(function (res) {

          console.log(res);
          if (res.status === 200) {
            let rs = res.data;
            if (rs.code === 0) {
              var rsToken = rs.data.access_token;

              // window.localStorage.removeItem("token");
              window.localStorage.setItem("token", rsToken);

            } else {
              _this.$Message.error('登录失败！[' + rs.message + ']');
            }
          } else {
            _this.$Message.error('服务错误！HTTP:' + res.status);
          }


        });

      },

      testMenu(){
        var req = {"userId":"14"};

        var _this = this;
        this.$http.post('/plat/role/getMenuList', req,{
          headers:{
            'AccessToken': window.localStorage.getItem('token')
          }
        }).then(function (res) {

          console.log(res);
          if (res.status === 200) {

            let rs = res.data;
            if (rs.code === 0) {


            } else {
              _this.$Message.error('查询失败！[' + rs.message + ']');
            }
          } else {
            _this.$Message.error('服务错误！HTTP:' + res.status);
          }


        });

      },

      testSList(){

        var req = {"userId":"14","pageNo":1,"pageSize":10};

        var _this = this;
        this.$http.post('/plat/queryStatistics/querySealInfoList', req,{
          headers:{
            'AccessToken': window.localStorage.getItem('token')
          }
        }).then(function (res) {

          console.log(res);
          if (res.status === 200) {
            let rs = res.data;
            if (rs.code === 0) {

            } else {
              _this.$Message.error('查询失败！[' + rs.message + ']');
            }
          } else {
            _this.$Message.error('服务错误！HTTP:' + res.status);
          }


        });



      },

    },

  }
</script>

<style scoped>

</style>
