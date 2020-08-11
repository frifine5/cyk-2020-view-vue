<template>
  <div>

    <Divider orientation="left">
      <small>普通用户</small>
    </Divider>

    <Form ref="formInline" :model="formInline" :rules="ruleInline" :label-width="80" inline>
      <FormItem label="用户名" prop="name">
        <Input v-model="formInline.name" size="small" clearable placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="部门" prop="dept">
        <Input v-model="formInline.dept" size="small" clearable placeholder="请输入所属部门"></Input>
      </FormItem>
<!--      <FormItem label="创建日期" prop="date">
        <DatePicker type="date" size="small" placeholder="选择日期" v-model="formInline.date"></DatePicker>
      </FormItem>-->

      <FormItem>
        <Button type="primary" size="small" @click="queryUserList()">查询</Button>
      </FormItem>
    </Form>

    <Divider/>

    <div>

      <Table border :columns="columns" :data="data" size="small">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">详情</Button>
          <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
      </Table>
      <Page :total="total" :page-size="pageSize" :current="pageNo"
            size="small" show-total prev-text="上一页" next-text="下一页" @on-change="changePage"/>

    </div>


  </div>
</template>

<script>
  export default {
    name: "NormalUser",
    data() {
      return {
        formInline: {
          name: '',
          dept: '',
          date: '',

        },
        ruleInline: {
          name: [
            {required: false, message: '请输入用户名', trigger: 'blur'}
          ],
          dept: [
            {required: false, message: '请输入用户所属部门名称', trigger: 'blur'},
            {type: 'string', min: 3, message: '部门名称不得少于3个字', trigger: 'blur'}
          ]
        },


        pageNo: 1,       // 页码
        pageSize: 10,     // 页容
        total: 0,
        data:[],
        data1: [
          {
            name: 'A1',
            id: '1',
            dept: '部门一',
            crtDate: '2020-07-02',
          },
          {
            name: 'A2',
            id: '2',
            dept: '部门一',
            crtDate: '2020-07-02',
          },
          {
            name: 'B1',
            id: '11',
            dept: '部门二',
            crtDate: '2020-07-03',
          },
          {
            name: 'B2',
            id: '12',
            dept: '部门二',
            crtDate: '2020-07-02',
          },
        ],
        columns: [
          {
            title: '编号',
            key: 'id',
            resizable: true,
          },
          {
            title: '用户名',
            slot: 'name',
            resizable: true,
            width: 180
          },
          {
            title: '所属部门',
            key: 'dept',
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

    methods: {

      queryUserList(){
        var _this = this;
        var result = {};
        var param = new URLSearchParams();

        // let date = this.formInline.date;
        // if(! "".isE(date)){
        //   console.log('date = ' + date)
        //   console.log('format = ' + new Date(date).format("yyyy-MM-dd"));
        // }

        let formParam = this.formInline;
        let pageNo = this.pageNo;
        let pageSize = this.pageSize;
        param.append('name', formParam.name);
        param.append('dept', formParam.name);
        param.append('pageNo', pageNo);
        param.append('pageSize', pageSize);

        var url = "/api/user/query";
        this.$http.post(url, param).then(function (res) {
          if (res.status == 200) {
            result = res.data;
            // console.log(result);
            _this.total = result.total;
            _this.pageNo = result.pageNo;
            _this.pageSize = result.pageSize;
            _this.data = result.list;

          } else {
            this.$Message.error('查询失败!' + res.message);

          }
        });

      },

      changePage(index){
        console.log(index);
        this.pageNo = index;
        this.queryUserList();

      },

      // 检查查询条件
      handleSubmit(name) {
        console.log(this.formInline);
        this.$refs[name].validate((valid) => {
          if (valid) {
            // this.$Message.success('Success!');
            console.log(1);

            queryUserList();

          } else {
            this.$Message.error('Fail!');
          }
        });

      },
      show(index) {
        this.$Modal.info({
          title: '用户信息描述',
          // <!--<img width="160" height="160" src="/static/images/Starry.png" /><br/>-->
          content: `用户名：${this.data[index].name}<br>编号：${this.data[index].id}<br>部门：${this.data[index].dept}<br>创建日期：${this.data[index].crtDate}<br>`
        });
      },
      remove(index){
        this.data.splice(index, 1);
      },




      },

    created(){
      this.queryUserList();
    }

  }
</script>

<style scoped>

</style>
