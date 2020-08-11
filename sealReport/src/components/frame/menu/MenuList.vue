<template>

  <Menu :theme="theme" id="leftMenu" @on-select="select" >
    <div v-for="(m, index) in demoMenus" :key="index" >
      <Submenu v-if="m.children" :name="m.name">
        <template slot="title">
          <Icon :type="m.icon"/>
          <span>{{m.title}}</span>
        </template>
        <div v-for="(secItem, index2) in m.children" :key="index + index2" >
          <Submenu v-if="secItem.children" :name="secItem.name">
            <template slot="title">
              <Icon :type="secItem.icon"/>
              <span>{{secItem.title}}</span>
            </template>
            <MenuItem v-for="(thrItem, i) in secItem.children" :key="index + index2 +i" :name="thrItem.name">
              <Icon :type="thrItem.icon" />
              <span> {{thrItem.title}}</span>
            </MenuItem>
          </Submenu>
          <MenuItem v-else :name="secItem.name"  >
            <Icon :type="secItem.icon" />
            <span ><small>{{secItem.title}}</small></span>
          </MenuItem>
        </div>
      </Submenu>
    </div>


  </Menu>

</template>

<script>
  export default {
    name: "MenuList",

    data () {
      return {
        theme: 'light',
        demoMenus: [
          {
            id: '1',
            title: '用户管理',
            name: 'userManager',
            uri: '',
            icon: 'ios-people',
            children: [
              {
                id: '1-1',
                title: '后台用户管理',
                name: 'admUserMg',
                uri: '',
                icon: 'ios-person',
                children: null
              },
              {
                id: '1-2',
                title: '普通用户管理',
                name: 'norUserMg',
                uri: '',
                icon: 'md-people',
                children: null
              }
              ]
          },
          {
            id: '2',
            title: '参数管理',
            name: 'paramManager',
            uri: '',
            icon: 'ios-paper',
            children: [
              {
                id: '2-1',
                title: '参数字典',
                name: 'dicManager',
                uri: '',
                icon: 'ios-book',
                children: null
              }
            ]
          },
          {
            id: '3',
            title: '印章业务',
            name: 'sealManage',
            uri: '',
            icon: 'ios-paper',
            children: [
              {
                id: '3-1',
                title: '申请印章',
                name: 'sealApply',
                uri: '',
                icon: 'ios-document',
                children: null
              },
              {
                id: '3-2',
                title: '未完成申请',
                name: 'unfinishApply',
                uri: '',
                icon: 'ios-folder-open',
                children: null
              },
              {
                id: '3-3',
                title: '印章申请进度',
                name: 'sealProgress',
                uri:'',
                icon: 'ios-clock',
                children: null
              },
              {
                id: '3-4',
                title: '我的印章',
                name: 'uFinishSeal',
                uri:'',
                icon: 'ios-briefcase',
                children: null
              },

            ]
          },
          {
            id: '4',
            title: '印章审批',
            name: 'sealApprove',
            uri: '',
            icon: 'ios-switch',
            children: [
              {
                id: '4-1',
                title: '审批列表',
                name: 'approveSeal',
                uri:'',
                icon: 'ios-briefcase',
                children: null
              },


            ]
          },



        ]

      }
    },
    mounted () {
      // this.getMenu()
      this.getActive()
    },


    methods: {


      select (name) {
        this.$router.push({name: name});
        // this.$router.replace( name);
      },

      getActive () {
        let hash = location.hash
        let stringStrHash = hash.substring(1)
        this.active = stringStrHash
      }



    },

    watch: {
      $route () {
        this.getActive()
      }
    },



  }
</script>

<style scoped>

  #leftMenu{
    top: 60px;
    left: 0;
  }

</style>
