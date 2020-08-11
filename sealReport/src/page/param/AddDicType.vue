<template>
  <div>
    <Divider orientation="left">
      <small>新增字典门类</small>
    </Divider>
    <Form ref="addForm" :model="addForm"  :label-width="200" >
      <FormItem label="门类编码">
        <Input v-model="addForm.code" placeholder="输入门类编码/不输入将由后台自动生成"></Input>
      </FormItem>
      <FormItem label="门类名">
        <Input v-model="addForm.name" placeholder="输入门类名"></Input>
      </FormItem>
      <FormItem label="门类描述信息">
        <Input v-model="addForm.describe" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="输入门类字典的简单介绍、用途信息等"></Input>
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
    name: "AddDicType",
    data(){
      return {

        addForm:{
          code: '',
          name: '',
          describe: '',
        },



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
