import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/HelloWorld'
import Index from '@/page/Index'
import Login from '@/page/login/Login'

import MainView from '@/page/MainView'
import AdmUser from '@/page/user/AdmUser'
import NorUserMg from '@/page/user/NormalUser'

import ParamManage from '@/page/param/ParamManage'
import AddDicType from '@/page/param/AddDicType'
import AddParam from '@/page/param/AddParam'

import SealApply from '@/page/useal/SealApply'
import UnfinishApply from '@/page/useal/UnfinishApply'
import UnfinishDetail from '@/page/useal/UnfinishDetail'
import SealProgress from '@/page/useal/SealProgress'
import UFinishSeal from '@/page/useal/UFinishSeal'
import UpApplyPic from '@/page/useal/UpApplyPic'


import ApproveSeal from '@/page/usappr/ApproveSeal'


// Test
import Tuser from '@/page/login/Tuser'


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Tuser',
      component: Tuser
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainView',
      name: 'MainView',
      component: MainView,
      children:[
        {
          path: '/user/admUser',
          name: 'admUserMg',
          component: AdmUser,
          meta: {
            breadcrumbName: '/用户管理/后台用户管理',
            auth: false
          }
        },
        {
          path: '/user/norUserMg',
          name: 'norUserMg',
          component: NorUserMg,
          meta: {
            breadcrumbName: '/用户管理/普通用户管理',
            auth: false
          }
        },
        {
          path: '/param/list',
          name: 'dicManager',
          component: ParamManage,
          meta: {
            breadcrumbName: '/参数管理/参数字典',
            auth: false
          }
        },
        {
          path: '/param/addDicType',
          name: 'dicManagerAddType',
          component: AddDicType,
          meta: {
            breadcrumbName: '/参数管理/参数字典:新增字典门类',
            auth: false
          }
        },
        {
          path: '/param/addDicParam',
          name: 'dicManagerAddParam',
          component: AddParam,
          meta: {
            breadcrumbName: '/参数管理/参数字典:新增字典参数',
            auth: false
          }
        },

        //sealApply
        {
          path: '/seal/sealApply',
          name: 'sealApply',
          component: SealApply,
          meta: {
            breadcrumbName: '/印章/印章申请',
            auth: false
          }
        },
        {
          path: '/seal/unfinishApply',
          name: 'unfinishApply',
          component: UnfinishApply,
          meta: {
            breadcrumbName: '/印章/未完申请',
            auth: false
          },
          children:[
            {
              path: '/seal/unfinishDetail',
              name: 'unfinishDetail',
              component: UnfinishDetail,
            }
          ]
        },
        {
          path: '/seal/sealProgress',
          name: 'sealProgress',
          component: SealProgress,
          meta: {
            breadcrumbName: '/印章/申请进度',
            auth: false
          },
        },
        {
          path: '/seal/upApplyPic',
          name: 'upApplyPic',
          component: UpApplyPic,
          meta: {
            breadcrumbName: '/印章申请/上传印模',
            auth: false
          },
        },
        // UFinishSeal
        {
          path: '/seal/uFinishSeal',
          name: 'uFinishSeal',
          component: UFinishSeal,
          meta: {
            breadcrumbName: '/印章/我的印章',
            auth: false
          },
        },

        // ApproveSeal
        {
          path: '/approve/approveSeal',
          name: 'approveSeal',
          component: ApproveSeal,
          meta: {
            breadcrumbName: '/印章审批/审批列表',
            auth: false
          },
        }




      ]
    },




  ]
})
