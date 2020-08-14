<template>

  <div>


    <Divider orientation="left">
      <small>印章申请</small>
    </Divider>
    <Form ref="applyForm" :model="applyForm" :label-width="120" label-position="right" style="width: 800px; text-align: center;" inline>

      <FormItem label="部门名称" prop="deptName">
        <Input v-model="applyForm.deptName" v-if=" undefined === user.deptName ||''=== user.deptName" size="small"
               clearable placeholder="请输入部门名称"></Input>
        <Input v-model="applyForm.deptName" v-else disabled="disabled" size="small" placeholder="请输入部门名称"/>
      </FormItem>
      <FormItem label="部门代码" prop="deptCode">
        <Input v-model="applyForm.deptCode" v-if=" undefined === user.ouCode ||''=== user.ouCode" size="small" clearable
               placeholder="请输入部门编号或统一社会信用代码"></Input>
        <Input v-model="applyForm.deptCode" v-else disabled size="small" clearable placeholder="请输入部门编号或统一社会信用代码"/>
      </FormItem>
      <FormItem label="地区" prop="area">
        <Input v-model="applyForm.area" size="small" clearable placeholder="请输入地区名"/>
      </FormItem>
      <FormItem label="详细地址" prop="address">
        <Input v-model="applyForm.address" size="small" clearable placeholder="请输入详细地址"/>
      </FormItem>
      <FormItem label="电话" prop="name">
        <Input v-model="applyForm.tel" size="small" clearable placeholder="请输入电话号码"/>
      </FormItem>
      <FormItem label="联系人" prop="linkman">
        <Input v-model="applyForm.linkman" size="small" clearable placeholder="请输入联系人"/>
      </FormItem>

      <Divider orientation="left" style="margin-left: 20px">
        <small>印章项</small>
      </Divider>
      <FormItem size="small"
                v-for="(item, index) in applyForm.items"
                :key="index"
                :prop="'items[' + index + '].name'"
                :rules="[{required:true, message:'印章名称不能为空', trigger: 'blur'}]">
        <Row :gutter="16">
          <Col span="7">
            <Input search enter-button="查重" @on-search="checkSealName" v-model="item.name" size="small"
                   placeholder="印章名" clearable/>
          </Col>

          <Col span="3">
            <Select v-model="item.color" size="small" default-first-option clearable>
              <Option v-for="itm in sealColorList" :value="itm.value" :key="itm.value">{{ itm.label }}</Option>
            </Select>
          </Col>
          <Col span="4">
            <small>有效期:</small>&nbsp;<InputNumber :min="1" :max="3" v-model="item.valid" size="small"
                                                  style="width: 40px;"/>
            <small>年</small>
          </Col>
          <Col span="4">
            <small>宽:</small>&nbsp;<InputNumber :min="10" :max="50" v-model="item.width" size="small"
                                                style="width: 50px;"/>
            mm
          </Col>
          <Col span="4">
            <small>高:</small>&nbsp;<InputNumber :min="10" :max="50" v-model="item.height" size="small"
                                                style="width: 50px;"/>
            mm
          </Col>
          <Col span="2">
            <Button @click="handleRemove(index)" type="warning" size="small">删除</Button>
          </Col>

        </Row>
      </FormItem>
      <FormItem>
        <Button type="dashed" long @click="handleAdd" icon="md-add" style="width: 500px;">添加新项</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('applyForm')">提交</Button>
        <Button @click="handleReset('applyForm')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>

  </div>


</template>

<script>
  export default {
    name: "SealApply",
    data() {
      return {
        user: {},
        itemLen: 1,
        sealColorList: [
          {
            value: '红色',
            label: '红色',
          },
          {
            value: '黑色',
            label: '黑色',
          },
          {
            value: '蓝色',
            label: '蓝色',
          }
        ],
        applyForm: {
          userCode: '',
          userName: '',
          deptName: '',
          deptCode: '',
          area: '',
          address: '',
          tel: '',
          linkman: '',
          items: [
            {
              name: '',
              color: '',
              valid: 1,
              width: 30,
              height: 30,
            },

          ]

        },


      }
    },

    methods: {

      handleSubmit(name) {
        // console.log(this.itemLen);
        // console.log(this.applyForm);

        if (this.itemLen < 1) {
          this.$Message.error('至少需输入一条印章信息！');
          return;
        }
        this.$refs[name].validate((valid) => {
          if (valid) {
            // 提交
            var req = this.applyForm;
            var _this = this;

            this.$http.post('/api/user/seal/apply', req).then(function (res) {
              if (res.status === 200) {
                console.log(res);

                let rs = res.data;
                if (rs.code === 0) {
                  let list = rs.data;

                  _this.$Modal.confirm({
                    title: '提交成功',
                    content: '<p>是否继续上传印模图片</p>',
                    okText: '是',
                    cancelText: '否',
                    onOk: () => {
                      // goto upload picture
                      _this.$router.push({name: 'upApplyPic', params: {list: rs.data} });
                    },
                    onCancel: () => {
                      // goto sealUnfinishApply Page
                      _this.$router.push({name: 'unfinishApply'});
                    }
                  });

                } else {
                  _this.$Message.error('提交失败！[' + rs.msg + ']');
                }
              } else {
                _this.$Message.error('服务错误！HTTP:' + res.status);
              }


            });

          } else {
            this.$Message.error('您输入的数据有误！');
          }
        })
      },
      handleReset(name) {
        this.$refs[name].resetFields();
      },
      handleAdd() {
        this.applyForm.items.push({
          name: '',
          color: '',
          valid: 1,
          width: 30,
          height: 30,
        });
        this.itemLen = this.applyForm.items.length;
      },
      handleRemove(index) {
        this.applyForm.items.splice(index, 1);
        this.itemLen = this.applyForm.items.length;
      },

      checkSealName(value) {
        console.log('查印章名：' + value);
        if ('' === value) {
          this.$Message.error('印章名不能为空');
          return false;
        }
        var items = this.applyForm.items;
        if (null == items || items.length < 2) {
          return true;
        }
        var time = 0;
        for (var i = 0; i < items.length; i++) {
          if (items[i].name == value) {
            time++;
          }
        }
        if (time > 1) {
          this.$Message.error('印章名[' + value + ']重复');
          return false;
        } else {
          return true;
        }

      }


    },

    created() {
      var user = window.localStorage.getItem("user");
      console.log(user);
      user = undefined === user ? null : JSON.parse(user);
      this.applyForm.deptName = user.deptName;
      this.applyForm.deptCode = user.ouCode;
      this.applyForm.userCode = user.userGuid;
      this.applyForm.userName = user.name;
      this.user = user;

    }


  }
</script>

<style scoped>

</style>
