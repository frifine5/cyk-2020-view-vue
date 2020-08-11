<template>
    <div>

      <Divider orientation="left"><small>后台管理用户</small></Divider>
      <div>

        <Table border :columns="columns" :data="data" size="small">
          <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
            <Button type="error" size="small" @click="remove(index)" v-if="row.role !=='管理员'">删除</Button>
          </template>
        </Table>
        <Page :total="total" :page-size="pageSize" :current="pageNum"
              size="small"  show-total prev-text="上一页" next-text="下一页" />

      </div>

    </div>
</template>

<script>
  export default {
    name: "AdmUser",
    data () {
      return {

        pageNum: 1,       // 页码
        pageSize: 10,     // 页容
        total: 3,
        columns:[
          {
            title: '名称',
            slot: 'name'
          },
          {
            title: '编号',
            key: 'id'
          },
          {
            title: '角色',
            key: 'role'
          },
          {
            title: '创建日期',
            key: 'crtDate'
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        data:[
          {
            name: '管理员',
            id: '1',
            role: '管理员',
            crtDate: '2020-07-02',
            describe: '系统管理员，执行系统用户、系统设备、系统参数维护工作，不可删除。',

          },
          {
            name: '审计员',
            id: '21',
            role: '审计员',
            crtDate: '2020-07-02',
            describe: '安全审计员，执行系统操作的日志追踪，审计操作的合规性，至少保留一。',

          },
          {
            name: '保密员',
            id: '31',
            role: '保密员',
            crtDate: '2020-07-02',
            describe: '安全保密员，执行系统安全设备及网络授权，审计安全保密操作的合规性，至少保留一。',

          }

        ]


      }
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: '用户信息描述',
          content: `名称：${this.data[index].name}<br>编号：${this.data[index].id}<br>
角色：${this.data[index].role}<br>创建日期：${this.data[index].crtDate}<br>
职责：${this.data[index].describe}`
        })
      },
      remove (index) {
        this.data.splice(index, 1);
      }
    }



  }
</script>

<style scoped>

</style>
