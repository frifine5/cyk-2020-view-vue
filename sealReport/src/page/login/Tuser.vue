<template>
  <div>

    <Form ref="testForm" :model="testForm" :label-width="200" >
      <FormItem label="key">
        <Input v-model="testForm.key"  ></Input>
      </FormItem>
      <FormItem label="value">
        <Input v-model="testForm.value"  ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" size="small" @click="saveLocal()" style="margin-right: 10px" >加入</Button>
      </FormItem>
      <FormItem label="value">
        <Input v-model="tmpKey"  ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" size="small" @click="getLocal()">读取</Button>
        <Button type="primary" size="small" @click="delLocal()">删除</Button>
      </FormItem>

    </Form>


  </div>

</template>

<script>
  export default {
    name: "Tuser",
    data(){
      return{
        testForm:{
          key:'',
          value: '',
        },
        tmpKey: '',

      }
    },

    methods:{

      saveLocal(){
        let key = this.testForm.key;
        let value = this.testForm.value;
        console.log(this.testForm);
        window.localStorage.setItem(key, value);
      },

      getLocal(){
        let key = this.tmpKey;
        this.$message(window.localStorage.getItem(key));

      },

      delLocal(){
        let key = this.tmpKey;
        this.$message(window.localStorage.removeItem(key));

      },

    }

  }
</script>

<style scoped>

</style>
