<template>
  <div>


    <Divider orientation="left">
      <small>上传印模</small>
    </Divider>

    <div>

      <table>

        <tr v-if="list.length>0">
          <td>序号</td>
          <td>申请编号</td>
          <td>印章名称</td>
          <td>颜色</td>
          <td>印章尺寸(宽*高)</td>
          <td>上传图片</td>
          <td></td>
        </tr>

        <tr v-for="(item, index) in list" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.orderId}}</td>
          <td>{{item.sealName}}</td>
          <td>{{item.sealColor}}</td>
          <td>{{item.picWidth}}*{{item.picHeight}}
          </td>
          <td>

            <Upload action="/api/user/seal/upApplySealPic" :data="item"
                    :on-success="handleSuccess" :show-upload-list="false"
                    :format="['jpg','jpeg','png']" :on-format-error="formatCheck"
            :on-error="handleError">
              <Button size="small" icon="ios-cloud-upload-outline">选择待上传图片</Button>
            </Upload>

          </td>
          <td>

          </td>
        </tr>
      </table>
    </div>


  </div>
</template>

<script>
  export default {
    name: "UpApplyPic",
    data() {
      return {
        list:[],

        list1: [
          {
            orderId: '1',
            picWidth: 36,
            picHeight: 36,
            sealName: '印章一',
            sealColor: '红色',
            validStart: '2020-08-11',
            validEnd: '2021-08-10',
          },
          {
            orderId: '2',
            picWidth: 42,
            picHeight: 42,
            sealName: '印章二',
            sealColor: '红色',
            validStart: '2020-08-11',
            validEnd: '2021-08-10',
          }


        ],
        file: null,
        loadingStatus: false


      }
    },

    methods: {

      handleSuccess (response, file, fileList ) {
        console.log('upload success');
        if(null == response){

        }else{
          if( response.code === 0 ){
            this.file = null;
            var list = this.list;
            var i = 0;
            for(; i< list.length; i++){
              if(list[i].orderId === response.data){
                this.list.splice(i,1);
              }
            }
            this.$Message.info('上传完成！');

            // if(this.list == null || this.list.length<1){
            //   this.$router.push({name:'unFinishApply'});
            // }

          }else{
            this.$Message.error('上传失败：' + response.msg);
          }

        }


      },

      handleError(error, file, fileList){
        console.log('upload error');
        console.log(error);
        console.log(file);
        console.log(fileList);
      },

      formatCheck(file){
        // console.log(file);
        this.$Message.error('文件格式错误！');
      }







    },

    created() {
      var params = this.$route.params;
      console.log(params);
      if (undefined !== params && undefined !== params.list ) {
        this.list = params.list;
      }

    },

    watch: {
      '$route': {
        immediate: true,
        handler: function(to, from) {
          // console.log('监测参数id ：' + to.query.id);
          this.list = to.params;
        }
      }
    },


  }
</script>

<style scoped>

  table {
    width: 800px;
    margin: 10px auto;
    font-size: 12px;
    border: 2px solid #dddee1;
  }

  td {
    padding: 5px 10px;
    border-right: 1px solid #dddee1;
    border-bottom: 1px solid #dddee1;
  }


</style>
