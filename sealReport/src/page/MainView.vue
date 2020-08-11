<template>

  <div>
    <div>
      <menu-list></menu-list>
    </div>
    <div class="rightBox">
      <div class="module-name">
        <!-- <MyIcon type="shangyibu" interval="interval"></MyIcon>-->
        <Breadcrumb separator="/">
          <BreadcrumbItem
            v-for="(item, index) in breadcrumb"
            :to="item.path"
            :key="index"
          >{{item.meta.breadcrumbName}}
          </BreadcrumbItem>
        </Breadcrumb>

      </div>
      <hr class="income-underline"/>
      <router-view></router-view>
    </div>


  </div>

</template>

<script>
  import MenuList from "../components/frame/menu/MenuList";

  export default {
    name: "MainView",
    components: {MenuList},
    data() {
      return {
        theme: 'light',
        breadcrumb: '',
        breads: []


      }
    },
    methods: {
      handleMenuSelect (index, indexPath) {
        this.breads = indexPath
      },
      getBreadcrumb () {
        // console.log("38",this.breadcrumb)
        let len = this.$route.matched.length
        this.breadcrumb = this.$route.matched.slice(1, len)
        // console.log("41",this.breadcrumb)

      },



    },
    watch: {
      $route () {
        this.getBreadcrumb()
      }





    }

  }
</script>

<style scoped>

  .ivu-breadcrumb a {

    color: #878787;
    padding: 0 5px;
    font-family: '宋体';
  }
  #app .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    padding: 14px 18px !important;
  }
  .ivu-menu-submenu-title span>i, .ivu-menu-submenu-title>i {
    margin-right: 18px;
  }
  .rightBox {
    float: left;
    box-sizing: border-box;
    position: absolute;
    top: 30px;
    /*padding: 16px;*/
    left: 240px;
    width: 80%;
  }
  .module-name{
    text-align:left;
    font-size: 14px;
    color: #495060;
    margin-top: 16px;
  }
  .income-underline {
    height: 1px;
    margin: 6px 0;
    /* background-color: #DDDEE1;*/
    background-color: #ccc;
    border: 0;
  }
  .ivu-breadcrumb {
    padding-left: 20px;
    text-align:left;
    display: inline-block;
  }



</style>
