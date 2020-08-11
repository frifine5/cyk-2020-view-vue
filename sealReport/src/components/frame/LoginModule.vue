<template>
  <div>
    <div id="loginBox">
      <h4>登录</h4>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-width="0px">
        <el-form-item label="" prop="userName">
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"><i class="el-icon-user-solid"></i></span>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" placeholder='用户名' v-model="loginForm.userName"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="" prop="passWord">
          <el-row>
            <el-col :span='2'>
              <span class="iconfont"><i class="el-icon-key"></i></span>
            </el-col>
            <el-col :span='22'>
              <el-input class="inps" placeholder='密码' v-model="loginForm.passWord"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="margin-top:55px;">
          <el-button type="primary" round class="submitBtn" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'LoginModule',
    data() {
      return {

        width: window.innerWidth,
        height: window.innerHeight,
        loginForm: {
          userName: "",
          passWord: ""
        },
        loginRules: {
          userName: [{required: true, message: "请输入用户名", trigger: "blur"}],
          passWord: [{required: true, message: "请输入密码", trigger: "blur"}]
        }
      };
    },
    methods: {
      //提交登录
      submitForm() {
        var _this = this;
        var name = this.loginForm.userName;
        var pwd = this.loginForm.passWord;
        if (undefined === name || undefined === pwd) {
          console.log('sub param is undefined');
        } else if ("" === name || "" === pwd) {
          console.log('sub param is null');
        } else {
          console.log(this.loginForm);
          _this.login(name, pwd);

        }

      },

      async login(name, pwd) {
        var _this = this;
        var result={};
        var req = {  name: name, pwd: pwd };

        var url = '/api/user/login';
        await this.$http.post( url, req ).then(function (res) {
          if (res.status == 200) {
            console.log(res);

            if( 0 !== res.data.code){
              this.$message(res.data.msg);
            }else{
              result=res.data.data;
              console.log('>>>> put user');
              console.log(result);
              window.localStorage.removeItem('user');
              window.localStorage.setItem('user', JSON.stringify(result));
              _this.$router.push({
                name: 'MainView'
              })

            }
          } else {
            alert("登录失败！");
          }
        });
      },



    },
    mounted() {

    }
  };
</script>

<style lang='less' scoped>


  #loginBox {
    width: 240px;
    height: 280px;
    position: absolute;
    top: 20%;
    /*left: 0;*/
    right: 20%;
    /*bottom: 0;*/
    margin: auto;
    padding: 50px 40px 40px 40px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    opacity: 1;
    background: linear-gradient(
      230deg,
      rgba(53, 57, 74, 0) 0%,
      rgb(20, 100, 150) 100%
    );
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
  }


</style>
