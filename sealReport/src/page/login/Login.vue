<template>
  <div>

    <welcome-animation></welcome-animation>

    <login-module></login-module>

  </div>
</template>

<script>
  import WelcomeAnimation from "../../components/animation/WelcomeAnimation";
  import LoginModule from "../../components/frame/LoginModule";
  export default {
    name: "Login",
    components: {LoginModule, WelcomeAnimation},
    data () {
      return {
        list: []
      }
    },

    methods: {
      querygraphic () {
        console.log("1 >> ")
        let _this = this
        this.$http.get('/plat/flow/queryList').then(res => {
          _this.list = res.data.data
        })
      },

      async getfiles() {
        var result={};
        var param = new URLSearchParams()
        param.append('id', $("#type").val())
        var url = "/backstage/fileupload/getFileName.action";
        await this.$http.post(url, param).then(function (res) {
          if (res.status == 200) {
            result=res.data.data;
          } else {
            alert("获取失败！");
          }
        });
        this.filenames=result
      },

    }


  }





</script>

<style scoped="scoped">

  .fl-onright{
    position: absolute;
    top: 20%;
    right: 10%;

  }

  #loginBox {
    width: 240px;
    height: 280px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(0, 0, 0) 100%
    );
  }
  /deep/ .inps input {
    border: none;
    color: #fff;
    background-color: transparent;
    font-size: 12px;
  }
  .submitBtn {
    background-color: transparent;
    color: #39f;
    width: 200px;
  }
  .iconfont {
    color: #fff;
  }




</style>
