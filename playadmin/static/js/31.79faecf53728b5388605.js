webpackJsonp([31],{BjTJ:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("EOkb"),s={data:function(){return{dialogVisible:!1,dialogImageUrl:"",form:{status:0,coverUrl:""},isLoad:!1,styleData:"",applyDetail:{},edit:this.$route.params.id,flag:this.$route.params.flag}},created:function(){var a=this,t=[];Object(l.a)({id:this.edit}).then(function(e){a.applyDetail=e.data.data,a.applyDetail.servantApply.gameTypeData=JSON.parse(a.applyDetail.servantApply.gameTypeData),a.applyDetail.servantApply.styleData=JSON.parse(a.applyDetail.servantApply.styleData),a.applyDetail.servantApply.styleData&&a.applyDetail.servantApply.styleData.map(function(a){t.push(a.name)}),a.styleData=t.join("，"),Object(l.b)({uid:a.applyDetail.servantApply.uid}).then(function(t){a.applyDetail.servantDetail=t.data.data,a.isLoad=!0})})},methods:{handlePictureCardPreview:function(a){this.dialogImageUrl=a,this.dialogVisible2=!0},goBack:function(){this.$router.go(-1)},submitRes:function(){},gameTypeName:function(a,t){var e=[];return t.forEach(function(t){a==t.gameTypeId&&e.push(t.name)}),e.join("，")},handelApply:function(a,t){var e=this;Object(l.d)("applyId="+a+"&isPass="+(1==t)+"&reason=''").then(function(a){0==a.data.code?(e.$message({message:1==t?"审核通过":"审核不通过",type:"success"}),e.goBack()):e.$message({message:a.data.message||"操作失败",type:"warning"})})}}},i={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"app-container apply-container"},[a.isLoad?e("el-form",{ref:"form",staticStyle:{width:"80%"},attrs:{model:a.form,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"","label-width":"80px"}},[e("el-card",{staticClass:"box-card"},[e("div",[e("span",[a._v("头像：")]),a._v(" "),e("img",{staticStyle:{margin:"10px",width:"100px",height:"100px",display:"inline-block","vertical-align":"middle","border-radius":"50%"},attrs:{src:a.applyDetail.user&&a.applyDetail.user.avatar,alt:""}})]),a._v(" "),e("div",{staticClass:"column-three"},[e("span",{staticClass:"three-item"},[a._v("审核状态："+a._s(a.applyType(a.applyDetail.servantApply&&a.applyDetail.servantApply.applyType)))]),a._v(" "),e("span",{staticClass:"three-item"},[a._v("申请类型："+a._s(a.applyStatus(a.applyDetail.servantApply&&a.applyDetail.servantApply.applyStatus)))]),a._v(" "),e("span",{staticClass:"three-item"})])]),a._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"column-three"},[e("span",{staticClass:"three-item"},[a._v("用户昵称："+a._s(a.applyDetail.user&&a.applyDetail.user.nickname))]),a._v(" "),e("span",{staticClass:"three-item"},[a._v("用户手机号："+a._s(a.applyDetail.user&&a.applyDetail.user.phone||"--"))]),a._v(" "),e("span",{staticClass:"three-item"},[a._v("性别："+a._s(a.sexStatus(a.applyDetail.user&&a.applyDetail.user.gender)))])]),a._v(" "),e("div",{staticClass:"column-three"},[e("div",{staticClass:"three-item"},[a._v("勋章名称："),a._l(a.applyDetail.servantDetail.honers,function(t,l){return a.applyDetail.servantDetail.honers&&a.applyDetail.servantDetail.honers.length>0?e("el-tag",{key:l,staticStyle:{"margin-right":"10px"},attrs:{type:"warning"}},[a._v(a._s(t.name))]):a._e()}),a._v(" "),a.applyDetail.servantDetail.honers&&0==a.applyDetail.servantDetail.honers.length?e("span",[a._v("暂无")]):a._e()],2),a._v(" "),e("span",{staticClass:"three-item"},[a._v("年龄："+a._s(a.applyDetail.user&&a.applyDetail.user.age||"--"))])]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("风格类型："+a._s(a.styleData))])]),a._v(" "),e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"column-three"},[a._v("申请时间："+a._s(a.parseTime(a.applyDetail.servantApply.createTime)))]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("游戏名称："+a._s(a.applyDetail.game&&a.applyDetail.game.name||"--"))]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("游戏等级："+a._s(a.gameTypeName(2,a.applyDetail.servantApply.gameTypeData)))]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("游戏大区："+a._s(a.gameTypeName(3,a.applyDetail.servantApply.gameTypeData)))]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("游戏玩法："+a._s(a.gameTypeName(1,a.applyDetail.servantApply.gameTypeData)))]),a._v(" "),e("div",{staticClass:"column-three"},[e("span",{staticClass:"three-item"},[a._v("微信号："+a._s(a.applyDetail.servantApply.wechat))]),a._v(" "),e("span",{staticClass:"three-item"},[a._v("QQ号："+a._s(a.applyDetail.servantApply.qq))]),a._v(" "),e("span",{staticClass:"three-item"})]),a._v(" "),e("div",{staticClass:"column-three"},[a._v("一句话介绍："+a._s(a.applyDetail.servantApply.intro))]),a._v(" "),e("div",{staticClass:"column-three",staticStyle:{"padding-bottom":"10px"}},[e("div",{staticClass:"three-item"},[a._v("认证图片："),e("img",{staticStyle:{"margin-left":"20px",width:"60px",height:"60px","border-radius":"50%",display:"inline-block","vertical-align":"middle"},attrs:{src:a.applyDetail.servantApply.certifiedPhoto,alt:""},on:{click:function(t){a.handlePictureCardPreview(a.applyDetail.servantApply.certifiedPhoto)}}})]),a._v(" "),e("span",{staticClass:"three-item"},[a._v("语音：")]),a._v(" "),e("span",{staticClass:"three-item"})])])],1),a._v(" "),e("el-form-item",{attrs:{label:"","label-width":"120px"}},[1==a.flag?e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.handelApply(a.applyDetail.servantApply.id,1)}}},[a._v("审核通过")]):a._e(),a._v(" "),1==a.flag?e("el-button",{attrs:{type:"primary"},on:{click:function(t){a.handelApply(a.applyDetail.servantApply.id,-1)}}},[a._v("审核失败")]):a._e(),a._v(" "),e("el-button",{on:{click:function(t){a.goBack()}}},[a._v("返回")])],1)],1):a._e(),a._v(" "),e("el-dialog",{attrs:{visible:a.dialogVisible},on:{"update:visible":function(t){a.dialogVisible=t}}},[e("img",{attrs:{width:"100%",src:a.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},p=e("VU/8")(s,i,!1,null,null,null);t.default=p.exports}});