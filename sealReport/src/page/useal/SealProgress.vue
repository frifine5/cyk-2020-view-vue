<template>
    <div>
      <Divider orientation="left">
        <small>印章申请进度查询</small>
      </Divider>
      <div style=" margin-left: 30px; margin-bottom: 10px; align-content: left">
        <Form ref="sealQueryForm" :model="sealQueryForm"  :label-width="80" inline >
          <FormItem label="印章名称" prop="name" >
            <Input v-model="sealQueryForm.sealName" size="small" clearable placeholder="请输入印章名称" />
          </FormItem>
          <FormItem>
            <Button type="primary" size="small" @click="querySealApplyList()">查询</Button>
          </FormItem>
        </Form>
      </div>
      <div>
        <Table border :columns="column" :data="data1" size="small">
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="urge(row.id)">催办</Button>
            <Button type="primary" size="small" style="margin-right: 5px" @click="detail(index)">详情</Button>

          </template>
        </Table>
      </div>

    </div>
</template>

<script>
  export default {
    name: "SealProgress",
    data(){
      return{
        sealQueryForm:{
          sealName: '',

        },

        pageNo: 1,       // 页码
        pageSize: 10,     // 页容
        total: 0,
        data:[],
        data1: [
          {
            id: '1',
            sealName: 'A1',
            crtDate: '2020-07-02',
            status: '待审批',
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
            title: '申请时间',
            key: 'crtDate',
            width: 180,
          },
          {
            title: '申请进度',
            key: 'status',
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
    methods: {
      querySealApplyList(){


      },

      urge(id){


      },

      detail(id){




      }



    }



  }
</script>

<style scoped>

</style>
