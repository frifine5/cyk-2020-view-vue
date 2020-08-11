<template>
    <div>
      <Divider orientation="left">
        <small>订单详情-订单号<Icon type="ios-arrow-forward"/><Icon type="ios-arrow-forward"/>&nbsp;{{id}}</small>
      </Divider>
      <Row >
        <Col span="23">
          <table class="main-panel">
            <tr>
              <td width="20%">部门名称</td>
              <td width="25%">{{sealOrder.deptName}}</td>
              <td width="20%">部门代码</td>
              <td width="30%">{{sealOrder.deptCode}}</td>
            </tr>
            <tr>
              <td>地区</td>
              <td>{{sealOrder.area}}</td>
              <td rowspan="3">详细地址</td>
              <td rowspan="3">{{sealOrder.address}}</td>
            </tr>
            <tr>
              <td>联系人</td>
              <td>{{sealOrder.linkman}}</td>
            </tr>
            <tr>
              <td>电话号码</td>
              <td>{{sealOrder.tel}}</td>
            </tr>

          </table>

        </Col>

      </Row>
      <Row >
        <Col span="23">
          <Table border :columns="itemColumn" :data="sealOrder.items" size="small">
           <template slot-scope="{ row }" slot="size">
              <strong>{{ row.width }}mm*{{ row.height }}mm</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
              <Button type="primary" size="small" style="margin-right: 5px" v-if="row.status !==1" @click="showImage(index)">查看印模</Button>
              <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>

            </template>
          </Table>

        </Col>
      </Row>


    </div>
</template>

<script>
  export default {
    name: "UnfinishDetail",

    created(){
      var params = this.$route.query;
      if(undefined !== params){
        this.id = params.id;
        // 查详单（向后台请求）

      }

    },

    data(){
      return{

        id:'',


        sealOrder:{
          orderId: '1',
          userCode: '1234567890',
          userName: '测试用户',
          deptName: '测试部门',
          deptCode: 'deptcode-1234567890',
          area: '测试',
          address: '假设这是一个足够长的测试地址，含省市区县乡镇街道某村某户某单元某-某',
          tel: '010-00000010',
          linkman:'联系人某某',
          items:[
            {
              id: '1',
              name: '这个是展示用测试章',
              color: '红色',
              valid: 1,
              width: 30,
              height: 30,
              rdTime: '2020-08-05 12:00:00',
              status: 1,
            },
            {
              id: '2',
              name: '这个是展示用测试章2',
              color: '红色',
              valid: 1,
              width: 35,
              height: 35,
              rdTime: '2020-08-05 12:00:01',
              status: 2,
            },

          ]
        },

        itemColumn:[
          {
            title: '编号',
            key: 'id',
            width: 100,
          },
          {
            title: '印章名称',
            key: 'name',
            resizable: true,
          },
          {
            title: '颜色',
            key: 'color',
            width: 80,
          },
          {
            title: '有效期(年)',
            key: 'valid',
            width: 100,
          },
          {
            title: '印章尺寸 宽*高 ',
            slot: 'size',
            resizable: true,
          },

          {
            title: '申请时间',
            key: 'rdTime',
            resizable: true,
            width: 160
          },

          {
            title: '操作',
            slot: 'action',
            // width: 150,
            align: 'center'
          }
        ],

      }

    },

    methods:{

      showImage(index){




      },



    },


    watch: {
      '$route': {
        immediate: true,
        handler: function(to, from) {
          // console.log('监测参数id ：' + to.query.id);
          this.id = to.query.id;

        }
      }
    },








  }
</script>

<style scoped>
  .main-panel{
    margin-left: 20px;
    /*padding: 5px 5px;*/
    align-content: center;
    text-align: center;
    vertical-align: middle;
    font: 14px/25px "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", HELVETICA;
    border: 1px solid #eee;
    background-color: white;
  }
  .main-panel td{
    /*width:200px;*/
    border: 1px solid #eee;
  }


</style>
