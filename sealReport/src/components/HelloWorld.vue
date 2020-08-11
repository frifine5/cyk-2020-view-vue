<template>
  <div>
    {{msg}}<br/>
    {{name}}
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        msg: "Hello World! My Developer.",
        name:''
      }
    },
    created() {
      console.log(this.name);
      this.getParams();
      console.log(this.name);
    },
    methods: {

      getParams() {
        console.log("get param from sub ")
        // 取到路由带过来的参数
        const routerName = this.$route.params.name
        this.name = routerName;
      }
    },
    watch: {
      '$route': 'getParams'
    }
  }
</script>

<style scoped>

</style>
