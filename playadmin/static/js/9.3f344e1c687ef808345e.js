webpackJsonp([9],{"aOx/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("V/8j"),l={data:function(){return{uid:this.$route.params.uid,dialogVisible:!1,dialogImageUrl:"",userInfo:{},list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.h)().then(function(t){e.list=t.data.data,e.totalNum=t.data.data.total,e.listLoading=!1})},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogVisible=!0},backTolist:function(){this.$router.go(-1)},changeStatus:function(e){}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container userInfo"},[n("el-form",[n("el-form-item",{attrs:{label:"","label-width":"80px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("span",[e._v("头像：")]),e._v(" "),n("img",{staticStyle:{"margin-left":"20px",width:"80px",height:"80px","border-radius":"50%",display:"inline-block","vertical-align":"middle"},attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",alt:""},on:{click:function(t){e.handlePictureCardPreview(e.userInfo.avatar)}}})]),e._v(" "),n("div",{staticClass:"column-three"},[n("span",{staticClass:"three-item"},[e._v("用户昵称："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("性别："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("年龄："+e._s(e.userInfo.name||"--"))])]),e._v(" "),n("div",{staticClass:"column-three"},[n("span",{staticClass:"three-item"},[e._v("登录微信账号："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("初始登录时间："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("捐献达人："+e._s(e.userInfo.name||"暂未获得"))])]),e._v(" "),n("div",{staticClass:"column-three"},[n("span",{staticClass:"three-item"},[e._v("绑定手机号："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("账户余额："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("勋章名称："+e._s(e.userInfo.name||"暂未获得"))])]),e._v(" "),n("div",{staticClass:"column-three"},[n("span",{staticClass:"three-item"},[e._v("捐单数："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"},[e._v("放单数："+e._s(e.userInfo.name||"--"))]),e._v(" "),n("span",{staticClass:"three-item"})]),e._v(" "),n("p",{staticClass:"column-three"},[e._v("技师申请时间：2018-12-20  11:11:11")]),e._v(" "),n("div",{staticClass:"column-three"},[e._v("风格类型：")]),e._v(" "),n("p",{staticClass:"column-three",staticStyle:{"margin-bottom":"0"}},[e._v("TA的技师申请：")]),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.id)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"游戏名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"游戏等级",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.email||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"游戏大区",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"游戏玩法",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"认证照片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{"margin-left":"20px",width:"80px",height:"80px","border-radius":"50%",display:"inline-block","vertical-align":"middle"},attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",alt:""},on:{click:function(t){e.handlePictureCardPreview(e.userInfo.avatar)}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"一句话介绍",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"语音",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"微信号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"QQ号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.sex||"--")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"申请时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("parseTime")(t.row.createTime))+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"100",fixed:"right",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{padding:"9px 5px"},attrs:{type:"primary",size:"small"},on:{click:function(n){e.changeStatus(t.row)}}},[e._v(e._s(0==t.row.status?"禁用":"启用"))])]}}])})],1),e._v(" "),n("p",{staticClass:"column-three",staticStyle:{"margin-bottom":"0"}},[e._v("TA的服务评价：")]),e._v(" "),n("el-table",{attrs:{border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"项目"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("评价数量")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"点赞数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项1",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项2",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项3",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项4",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项5",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"风格评价选项6",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.username||0)+"\n          ")]}}])})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"","label-width":"80px"}},[n("el-button",{on:{click:function(t){e.backTolist()}}},[e._v("返回列表")])],1)],1),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},r=n("VU/8")(l,s,!1,null,null,null);t.default=r.exports}});