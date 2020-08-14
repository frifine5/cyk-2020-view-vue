<template>

  <div>

    <!--  字典门类  -->
    <Divider orientation="left">
      <small>字典门类</small>
    </Divider>
    <div style=" margin-left: 30px; margin-bottom: 10px; width: 200px;">
      <Button type="primary" size="small" @click="addNewType()">新增字典门类</Button>
    </div>

    <div>
      <Table border :columns="dicTypeColumn" :data="dicTypeData" size="small" style="margin-left: 20px; align-content: left; ">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="error" size="small" style="margin-right: 5px" @click="disableType(index)">禁用</Button>
          <Button type="primary" size="small" @click="enableType(index)">解禁</Button>
        </template>
      </Table>
      <Page :total="dicTypeTotal" :page-size="dicTypePageSize" :current="dicTypePageNo"
            size="small" show-total prev-text="上一页" next-text="下一页"  />
    </div>


    <!--  字典查询  -->

    <Divider orientation="left">
      <small>参数字典查询</small>
    </Divider>
    <div style=" margin-left: 30px; margin-bottom: 10px; ">
      <Form ref="dicTypeForm" :model="dicTypeForm"  :label-width="80" inline style="text-align: left;">
        <FormItem label="字典类型" prop="name" >
          <Select v-model="dicTypeModel" style="width:100px" size="small" orientation="left" @on-change="selectDicType" >
            <Option v-for="item in dicTypeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" size="small" @click="queryDicList()">查询</Button>
        </FormItem>
        <FormItem>
          <Button type="primary" size="small" @click="addParam()">新增参数</Button>
        </FormItem>
      </Form>
    </div>

    <div style="margin-left: 20px;">

      <Table border :columns="dicColumn" :data="dicParamData" size="small">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
          <Button type="error" size="small" style="margin-right: 5px" @click="disableType(index)">禁用</Button>
          <Button type="primary" size="small" @click="enableType(index)">解禁</Button>
        </template>
      </Table>
      <Page :total="dicTypeTotal" :page-size="dicTypePageSize" :current="dicTypePageNo"
            size="small" show-total prev-text="上一页" next-text="下一页"  />

    </div>


  </div>



</template>

<script>
  export default {
    name: "ParamManage",
    data(){
      return {

        dicTypeModel: '',
        dicTypeList:[
          {
            value: '01',
            label: '地区'
          }

        ],
        dicTypeForm:{
          dicCode: '',
          dicType: '',
        },
        dicTypePageNo: 1,
        dicTypeTotal: 10,
        dicTypePageSize: 5,
        dicTypeData:[
          {
            id: '1',
            name: '地区'
          }


        ],
        dicTypeColumn:[
          {
            title: '编号',
            key: 'id',
            resizable: true,
          },
          {
            title: '字典门类名',
            slot: 'name',
            resizable: true,
          },
          {
            title: '创建日期',
            key: 'rdDate',
            resizable: true,
          },
          {
            title: '门类信息',
            key: 'describe',
            resizable: true,
            width: 360
          },
          {
            title: '操作',
            slot: 'action',
            align: 'center'
          }
        ],

        dicColumn:[

          {
            title: '参数名',
            slot: 'name',
            resizable: true,
          },
          {
            title: '参数值',
            key: 'value',
            resizable: true,
          },
          {
            title: '所属门类',
            key: 'typeName',
            resizable: true,
          },
          {
            title: '创建日期',
            key: 'rdDate',
            resizable: true,
          },

          {
            title: '操作',
            slot: 'action',
            align: 'center'
          }
        ],

        dicParamPageNo: 1,
        dicParamTotal: 10,
        dicParamPageSize: 10,
        dicParamData:[
          {
            name: '北京市',
            value: '110100',
            typeCode: '1',
            typeName: '地区',
            rdDate: '',

          }

        ],

        tmpKey: '',



      }
    },

    methods: {

      selectDicType(value){
        // console.log(value);

        this.dicTypeForm.dicCode = value;
        var dicList = this.dicTypeList;
        for(var a = 0; a< dicList.length; a++){
          if(dicList[a].value == value){
            this.dicTypeForm.dicType = dicList[a].label;
          }
        }
        // console.log(this.dicTypeForm);

      },


      disableType(index){
        let code = this.dicTypeData[index];

        // 调接口


      },

      enableType(index){
        let code = this.dicTypeData[index];

        // 调接口


      },
      addNewType(){
        this.$router.push({name: 'dicManagerAddType'});
      },


      queryDicList(){



      },

      addParam(){
        this.$router.push({name: 'dicManagerAddParam',
          params:{code:this.dicTypeForm.dicCode , name:this.dicTypeForm.dicType }});

      },

      getLocal(){
        let key = this.tmpKey;
        this.$message(window.localStorage.getItem(key));

      },


    }


  }
</script>

<style scoped>

</style>
