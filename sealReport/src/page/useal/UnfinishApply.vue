<template>
    <div>
      <Divider orientation="left">
        <small>未完成申请</small>
      </Divider>
      <div>
        <Table border :columns="columns" :data="data1" size="small">
          <template slot-scope="{ row }" slot="status">
            <strong v-if="row.status === 1">待上传印章图片</strong>
            <strong v-else-if="row.status === 2">待上传申请文件</strong>
            <strong v-else>未知</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(row.id)">详情</Button>
          </template>
        </Table>
        <Page :total="total" :page-size="pageSize" :current="pageNo"
              size="small" show-total prev-text="上一页" next-text="下一页" @on-change="changePage"/>

      </div>



      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "UnfinishApply",
    data(){
      return {

        pageNo: 1,       // 页码
        pageSize: 10,     // 页容
        total: 0,
        data:[],
        data1: [
          {
            id: '1',
            deptName: '部门一',
            crtDate:  '2020-08-05',
            status: 1,
          },
          {
            id: '2',
            deptName: '部门一',
            crtDate:  '2020-08-05',
            status: 2,
          },

        ],
        columns: [
          {
            title: '申请编号',
            key: 'id',
            resizable: true,
            width: 120
          },
          {
            title: '申请时间',
            key: 'crtDate',
            resizable: true,
            width: 120
          },
          {
            title: '所属部门',
            key: 'deptName',
            resizable: true,
          },
          {
            title: '状态',
            slot: 'status',
            resizable: true,
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
    created(){


    },
    methods:{

      queryUfList(){
        // 查询获得未完成的申请列表


      },

      changePage(index){


      },

      show(id){

        let url = decodeURIComponent('/seal/unfinishDetail?t='+ new Date());
        this.$router.push({path: url, query:{id:id}});

      }


    },

  }
</script>

<style scoped>

</style>
