<template>
    <div>
      <Divider orientation="left">
        <small>印章审批列表</small>
      </Divider>
      <div style=" margin-left: 30px; margin-bottom: 10px; align-content: left">
        <Form ref="sealQueryForm" :model="sealQueryForm"  :label-width="80" inline style="text-align: left;" >
          <FormItem label="印章名称" prop="name" >
            <Input v-model="sealQueryForm.sealName" size="small" clearable placeholder="请输入印章名称" />
          </FormItem>
          <FormItem label="申请日期" prop="scpDates">
            <DatePicker type="daterange" v-model="sealQueryForm.scpDates" split-panels
                        size="small" placeholder="选择日期范围" style="width: 200px" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="small" @click="querySealList()">查询</Button>
          </FormItem>
        </Form>
      </div>
      <div>
        <Table border :columns="column" :data="data1" size="small">
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="detail(row.id)">查看详情</Button>

          </template>
        </Table>
      </div>

    </div>
</template>

<script>
  export default {
    name: "ApproveSeal",
    data(){
      return{
        sealQueryForm:{
          sealName: '',
          scpDates: [],

        },

        pageNo: 1,       // 页码
        pageSize: 10,     // 页容
        total: 0,
        data:[],
        data1: [
          {
            id: '1',
            sealName: 'A0',
            crtDate: '2020-07-01',
            status: '可用',
          },
        ],
        column:[
          {
            title: '申请编号',
            key: 'id',
            width: 100,
          },
          {
            title: '印章名称',
            key: 'sealName',
            resizable: true,
          },
          {
            title: '记录时间',
            key: 'crtDate',
            width: 180,
          },
          {
            title: '印章状态',
            key: 'status',
            resizable: true,
            width: 120
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
    methods: {
      querySealList(){
        let queryParams = this.sealQueryForm;
        console.log(queryParams);
        console.log(queryParams.scpDates);
        console.log(queryParams.scpDates[0]);
        console.log(queryParams.scpDates[1]);

      },





    }



  }
</script>

<style scoped>

</style>
