<template>
  <div>
    <Divider orientation="left">
      <small>新增字典参数</small>
    </Divider>
    <Form ref="addForm" :model="addForm"  :label-width="200" >
      <FormItem label="门类编码">
        <Input v-model="addForm.typeCode" disabled ></Input>
      </FormItem>
      <FormItem label="门类名">
        <Input v-model="addForm.typeName" disabled ></Input>
      </FormItem>

      <FormItem label="参数名">
        <Input v-model="addForm.name"  ></Input>
      </FormItem>
      <FormItem label="参数值">
        <Input v-model="addForm.value"  ></Input>
      </FormItem>

      <FormItem>
        <Button type="primary" size="small" @click="addCommit()" style="margin-right: 10px" >提交</Button>
        <Button type="primary" size="small" @click="cancle()">取消</Button>
      </FormItem>
    </Form>

  </div>

</template>

<script>
  export default {
    name: "AddParam",
    data(){
      return {

        addForm:{
          typeCode: '',
          typeName: '',
          name: '',
          value: '',
        },



      }
    },
    created(){
      var params = this.$route.params;
      if(undefined !== params){
        console.log(params);
        this.addForm.typeCode = params.code;
        this.addForm.typeName = params.name;
      }
    },

    methods: {

      cancle(){
        this.$router.push({name: 'dicManager'});
      },

      addCommit(){

        // api

        // success:
        this.$router.push({name: 'dicManager'});
      },

      checkEnable(){

        // api

      }

    }
  }
</script>

<style scoped>

</style>
