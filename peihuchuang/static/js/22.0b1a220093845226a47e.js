webpackJsonp([22],{"cn/o":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("SgkS"),i={data:function(){return{form:{status:"",name:null},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},statusOptions:[{id:"1",name:"未故障"},{id:"2",name:"已故障"}],eventOptions:[{id:"1",name:"待处理"},{id:"2",name:"跟进中，故障等待修复"},{id:"3",name:"跟进中，故障已处理"}],baseURL:"http://47.107.249.233:8086/api/oss",dialogImageUrl:"",dialogImgVisible:!1}},created:function(){var e=this;Object(r.d)({id:parseInt(this.$route.params.id)}).then(function(t){e.form=t.data.data,console.log(e.form)})},methods:{handleImageScucess:function(e,t,a){this.form.avatar=e.data},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogImgVisible=!0},cabinetStatus:function(e){return"wait"==e?"待租用":"using"==e?"租用中":"unclean"==e?"待清洁":"error"==e?"故障中":"--"},eventStatus:function(e){return"wait"==e?"待处理":"ing"==e?"跟进中":"done"==e?"已处理":"--"}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.form?a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"故障编号："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.id)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"创建时间："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.createTime)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"医院名称："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.hospital.name)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"医院联系人："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.hospital.linkman)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"医院联系人方式："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.hospital.phone)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"科室："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.office.name)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.office.linkman)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人方式："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.office.phone)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"柜子编号："}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.cabinet.sn)+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态："}},[e._v("\n      "+e._s(e.cabinetStatus(e.form.cabinet&&e.form.cabinet.cabinet&&e.form.cabinet.cabinet.status))+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"故障状态","label-width":"160px"}},[e._v("\n      "+e._s(e.form.cabinet&&e.form.cabinet.cabinet&&"error"==e.form.cabinet.cabinet.errorStatus?"有故障":e.form.cabinet&&"noraml"==e.form.cabinet.cabinet.errorStatus?"无故障":"--")+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"发起人ID："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.id||"--")+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"发起人昵称："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.reviewName||"--")+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"发起人联系方式："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.reviewName||"--")+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"照片："}},[e.form.feedback&&e.form.feedback.photoUrl?a("div",{staticStyle:{"margin-left":"20px",display:"inline-block"}},[a("img",{staticStyle:{"max-width":"200px","max-height":"160px",cursor:"pointer","vertical-align":"middle"},attrs:{src:e.form.feedback.photoUrl,alt:""},on:{click:function(t){e.handlePictureCardPreview(e.form.feedback.photoUrl)}}})]):e._e()]),e._v(" "),a("el-form-item",{attrs:{label:"事件状态：","label-width":"160px"}},[e._v("\n      "+e._s(e.eventStatus(e.form.feedback&&e.form.feedback.status))+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"备注："}},[e._v("\n      "+e._s(e.form.feedback&&e.form.feedback.reviewRemark||"--")+"\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{on:{click:function(t){e.goBack()}}},[e._v("返回")])],1)],1):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogImgVisible},on:{"update:visible":function(t){e.dialogImgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},o=a("VU/8")(i,n,!1,null,null,null);t.default=o.exports}});