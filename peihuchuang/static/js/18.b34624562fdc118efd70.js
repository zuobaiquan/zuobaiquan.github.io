webpackJsonp([18],{"cn/o":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("FWz8");var l={data:function(){return{form:{status:"",name:null},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},statusOptions:[{id:"1",name:"未故障"},{id:"2",name:"已故障"}],eventOptions:[{id:"1",name:"待处理"},{id:"2",name:"跟进中，故障等待修复"},{id:"3",name:"跟进中，故障已处理"}],baseURL:"http://47.107.249.233:8086/api/oss",edit:this.$route.params.id,dialogImageUrl:"",dialogImgVisible:!1}},created:function(){},methods:{handleImageScucess:function(e,t,a){this.form.avatar=e.data},beforeAvatarUpload:function(e){console.log(e);var t=["image/jpeg","image/gif","image/png"].includes(e.type);return t||this.$message.error("图片格式不正确!"),t},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogImgVisible=!0}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"故障编号：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"创建时间：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"医院名称：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"医院联系人：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"联系人方式：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"科室：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"联系人方式：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"柜子编号：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"故障状态","label-width":"120px",prop:"status"}},[a("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"发起人ID：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"发起人昵称：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"发起人联系方式：",prop:"name"}},[e._v("\n      111111111111\n    ")]),e._v(" "),a("el-form-item",{attrs:{label:"问题描述：",prop:"name"}},[a("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":e.beforeAvatarUpload,drag:"","on-success":e.handleImageScucess,action:e.baseURL}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),a("em",[e._v("点击上传")])])]),e._v(" "),e.form.avatar?a("div",{staticStyle:{"margin-left":"20px",display:"inline-block"}},[a("img",{staticStyle:{"max-width":"200px","max-height":"160px",cursor:"pointer","vertical-align":"middle"},attrs:{src:e.form.avatar,alt:""},on:{click:function(t){e.handlePictureCardPreview(e.form.avatar)}}})]):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"事件状态","label-width":"120px",prop:"name"}},[a("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.eventOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"备注：",prop:"name"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes("form")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.goBack()}}},[e._v("返回")])],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(l,r,!1,null,null,null);t.default=n.exports}});