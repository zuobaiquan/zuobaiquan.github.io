webpackJsonp([10],{Dc4p:function(a,t,r){var e=r("GerP");"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);r("8bSs")("7297e79e",e,!0)},GerP:function(a,t,r){(a.exports=r("BkJT")(!1)).push([a.i,"\n.photo-tips[data-v-00578e56] {\n  margin: 0;\n  color: #97a8be;\n  font-size: 16px;\n  text-align: center;\n  cursor: pointer;\n}\n.photo-tips span[data-v-00578e56]:before {\n    margin-right: -10px;\n    content: '';\n    width: 41px;\n    color: #97a8be;\n    height: 44px;\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAsCAMAAADPc2F3AAAAVFBMVEUAAAC/v7++vr6/v7++vr6+vr69vb2/v7+8vLyhoaG+vr69vb2+vr6wsLC/v7+/v7+/v7+9vb28vLy+vr6+vr6+vr6/v7+9vb29vb2+vr64uLi/v79fBXgUAAAAG3RSTlMA+IC6cVRo6zAEoXdDDMebhDImesCSa2lhNxJ94jZ3AAAA80lEQVQ4y+WUSQKDIAxFGQRU1Lba+d//nrW0i0SxZOOqfyXwYgZC1P46OT95dyphXRvwUWi7H1xtQWXrLbDSALQ13nlj03eV5ZpDOuu/yz7ZHZoM+QaHkWyMwxvNuAZ0bLiXqIFqlcy8eV+Zx9l8mZYFLpnYB8Au6giEXq01zq54XVsWEA+/ZRsB+pkle43A7pqEs06A9oADjhukARxZeuDGAXrkyXLihoq7m8T/vMrjFOdei+spvyPxvT+kvXSW96e056P0HcHI3iZBC+89moQWZ8h5TiahpbmU6pjQ4/asu7pUG4IWtDfaiVGnZOpco/5bL0NiGXK72qniAAAAAElFTkSuQmCC) 0 0/100% 100% no-repeat;\n}\n",""])},HHgr:function(a,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=r("vMJZ"),o={data:function(){return{activeTab:"first",dialogVisible:!1,dialogImageUrl:"",baseURL:"http://47.106.224.185:8086/api/upload",form:{driverAge:1,accountStatus:"normal"},rules:{avatar:[{required:!0,message:"头像不能为空",trigger:"blur"}],nickname:[{required:!0,message:"司机姓名不能为空",trigger:"blur"}],phone:[{required:!0,validator:function(a,t,r){return t?/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(t)?void r():r(new Error("司机电话不正确")):r(new Error("司机电话不能为空"))},trigger:"blur"}],driverAge:[{required:!0,message:"驾龄不能为空",trigger:"blur"}],carNumber:[{required:!0,message:"车牌号不能为空",trigger:"blur"}],insuranceFocusFront:[{required:!0,message:"强制保险不能为空",trigger:"blur"}],insuranceBusinessFront:[{required:!0,message:"商业保险不能为空",trigger:"blur"}],username:[{required:!0,message:"司机账号不能为空",trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空",trigger:"blur"}],accountStatus:[{required:!0,message:"请选择状态",trigger:"blur"}]},edit:this.$route.params.id,flag:this.$route.params.flag,dialogFormVisible:!1,dialogTitle:"",selectParents:[],selectChilds:[],loadavatar:!0,loaddriverFront:!0,loaddriverBack:!0,loadidFront:!0,loadidBack:!0,loadcarDriverFront:!0,loadcarDriverBack:!0,loadInsuranceFocusFront:!0,loadInsuranceBusinessFront:!0,loadcarPhotoIn:!0,loadcarPhotoOut:!0}},created:function(){var a=this;-1==this.flag?this.$route.meta.title="编辑司机":this.$route.meta.title="新增司机",Object(e.e)({parentId:0}).then(function(t){a.selectParents=t.data.data})},methods:{nextStep:function(){this.activeTab="second",window.scrollTo(0,0)},beforeAvatarUpload:function(a){var t=["image/jpeg","image/gif","image/png"].includes(a.type);return t||this.$message.error("图片格式不正确!"),t},handleAvatar:function(a,t,r){this.loadavatar=!1,this.form.avatar=a.data,this.loadavatar=!0},handleDriverFront:function(a,t,r){this.loaddriverFront=!1,this.form.driverFront=a.data,this.loaddriverFront=!0},handleDriverBack:function(a,t,r){this.loaddriverBack=!1,this.form.driverBack=a.data,this.loaddriverBack=!0},handleidFront:function(a,t,r){this.loadidFront=!1,this.form.idFront=a.data,this.loadidFront=!0},handleidBack:function(a,t,r){this.loadidBack=!1,this.form.idBack=a.data,this.loadidBack=!0},handleCarDriverFront:function(a,t,r){this.loadcarDriverFront=!1,this.form.carDriverFront=a.data,this.loadcarDriverFront=!0},handleCarDriverBack:function(a,t,r){this.loadcarDriverBack=!1,this.form.carDriverBack=a.data,this.loadcarDriverBack=!0},handleInsuranceFocusFront:function(a,t,r){this.loadInsuranceFocusFront=!1,this.form.insuranceFocusFront=a.data,this.loadInsuranceFocusFront=!0},handleInsuranceBusinessFront:function(a,t,r){this.loadInsuranceBusinessFront=!1,this.form.insuranceBusinessFront=a.data,this.loadInsuranceBusinessFront=!0},handleCarPhotoIn:function(a,t,r){this.loadcarPhotoIn=!1,this.form.carPhotoIn=a.data,this.loadcarPhotoIn=!0},handleCarPhotoOut:function(a,t,r){this.loadcarPhotoOut=!1,this.form.carPhotoOut=a.data,this.loadcarPhotoOut=!0},changeParents:function(a){var t=this;a&&Object(e.e)({parentId:a}).then(function(a){t.selectChilds=a.data.data})},handleImageScucess:function(){},handleImageScucesslist:function(a,t,r){this.form.driverFront=a.data,this.form.photos=[]},handleRemove:function(a,t){var r=this;this.form.photos.map(function(t,e){t.url==a.url&&r.form.photos.splice(e,1)})},handlePictureCardPreview:function(a){this.dialogImageUrl=a,this.dialogVisible=!0},checkForm:function(){return this.form.driverFront?this.form.driverBack?this.form.idFront?this.form.idBack?this.form.carDriverFront?this.form.carDriverBack?this.form.carPhotoIn?!!this.form.carPhotoOut||void this.$message({message:"车辆外观不为空",type:"warning"}):void this.$message({message:"车辆内饰不为空",type:"warning"}):void this.$message({message:"行驶证背面不为空",type:"warning"}):void this.$message({message:"行驶证正面不为空",type:"warning"}):void this.$message({message:"身份证背面不为空",type:"warning"}):void this.$message({message:"身份证正面不为空",type:"warning"}):void this.$message({message:"驾驶证背面不为空",type:"warning"}):void this.$message({message:"驾驶证正面不为空",type:"warning"})},submitRes:function(a){var t=this;this.$refs[a].validate(function(a){if(!a||!t.checkForm())return!1;var r={accountStatus:t.form.accountStatus,avatar:t.form.avatar,driverAge:t.form.driverAge,driverBack:t.form.driverBack,driverFront:t.form.driverFront,idBack:t.form.idBack,idFront:t.form.idFront,nickname:t.form.nickname,password:t.form.password,phone:t.form.phone,username:t.form.username,car:{carDriverBack:t.form.carDriverBack,carDriverFront:t.form.carDriverFront,carNumber:t.form.carNumber,carPhotoIn:t.form.carPhotoIn,carPhotoOut:t.form.carPhotoOut,carTypeDetailId:t.form.carTypeDetailId,carTypeId:t.form.carTypeId,insuranceBusinessFront:t.form.insuranceBusinessFront,insuranceFocusFront:t.form.insuranceFocusFront}};-1==t.flag||Object(e.f)(r).then(function(a){200==a.status&&0==a.data.code?(t.$message({message:"添加成功",type:"success"}),t.goBack()):t.$message({message:a.data.message||"添加失敗",type:"warning"})})})}}},s={render:function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",{staticClass:"app-container driver-edit"},[r("el-form",{ref:"form",attrs:{model:a.form,rules:a.rules,"label-width":"120px"}},[r("el-tabs",{model:{value:a.activeTab,callback:function(t){a.activeTab=t},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"个人信息",name:"first"}},[r("el-form-item",{attrs:{label:"头像",prop:"avatar"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadavatar?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleAvatar,"show-file-list":!1,action:a.baseURL}},[a.form.avatar?r("img",{staticClass:"avatar",attrs:{src:a.form.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e()],1)]),a._v(" "),r("el-form-item",{attrs:{label:"司机姓名",prop:"nickname"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入司机姓名"},model:{value:a.form.nickname,callback:function(t){a.$set(a.form,"nickname",t)},expression:"form.nickname"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"司机电话",prop:"phone"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入司机电话"},model:{value:a.form.phone,callback:function(t){a.$set(a.form,"phone",t)},expression:"form.phone"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"驾龄",prop:"driverAge"}},[r("el-input-number",{staticStyle:{width:"250px"},attrs:{precision:1,step:.1,max:100},model:{value:a.form.driverAge,callback:function(t){a.$set(a.form,"driverAge",t)},expression:"form.driverAge"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"驾驶证"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loaddriverFront?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleDriverFront,"show-file-list":!1,action:a.baseURL}},[a.form.driverFront?r("img",{staticClass:"avatar",attrs:{src:a.form.driverFront}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("驾驶证正面"),r("span",[a._v("示例")])])],1),a._v(" "),r("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[a.loaddriverBack?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleDriverBack,"show-file-list":!1,action:a.baseURL}},[a.form.driverBack?r("img",{staticClass:"avatar",attrs:{src:a.form.driverBack}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("驾驶证背面"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：其中图片数量，正反面驾驶证2张")])]),a._v(" "),r("el-form-item",{attrs:{label:"身份证"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadidFront?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleidFront,"show-file-list":!1,action:a.baseURL}},[a.form.idFront?r("img",{staticClass:"avatar",attrs:{src:a.form.idFront}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("身份证正面"),r("span",[a._v("示例")])])],1),a._v(" "),r("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[a.loadidBack?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleidBack,"show-file-list":!1,action:a.baseURL}},[a.form.idBack?r("img",{staticClass:"avatar",attrs:{src:a.form.idBack}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("身份证背面"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：身份证正反面")])]),a._v(" "),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){a.nextStep()}}},[a._v("下一步")])],1)],1),a._v(" "),r("el-tab-pane",{attrs:{label:"车辆信息",name:"second"}},[r("el-form-item",{attrs:{label:"车型"}},[r("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请选择"},on:{change:a.changeParents},model:{value:a.form.carTypeId,callback:function(t){a.$set(a.form,"carTypeId",t)},expression:"form.carTypeId"}},a._l(a.selectParents,function(a){return r("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})})),a._v(" "),r("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"请选择"},model:{value:a.form.carTypeDetailId,callback:function(t){a.$set(a.form,"carTypeDetailId",t)},expression:"form.carTypeDetailId"}},a._l(a.selectChilds,function(a){return r("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1),a._v(" "),r("el-form-item",{attrs:{label:"车牌号",prop:"carNumber"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入车牌号"},model:{value:a.form.carNumber,callback:function(t){a.$set(a.form,"carNumber",t)},expression:"form.carNumber"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"行驶证"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadcarDriverFront?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleCarDriverFront,"show-file-list":!1,action:a.baseURL}},[a.form.carDriverFront?r("img",{staticClass:"avatar",attrs:{src:a.form.carDriverFront}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("行驶证正面"),r("span",[a._v("示例")])])],1),a._v(" "),r("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[a.loadcarDriverBack?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleCarDriverBack,"show-file-list":!1,action:a.baseURL}},[a.form.carDriverBack?r("img",{staticClass:"avatar",attrs:{src:a.form.carDriverBack}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("行驶证背面"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：行驶证2张，正本和副本")])]),a._v(" "),r("el-form-item",{attrs:{label:"强制保单",prop:"insuranceFocusFront"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadInsuranceFocusFront?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleInsuranceFocusFront,"show-file-list":!1,action:a.baseURL}},[a.form.insuranceFocusFront?r("img",{staticClass:"avatar",attrs:{src:a.form.insuranceFocusFront}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("强制保单"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：强制保单1张")])]),a._v(" "),r("el-form-item",{attrs:{label:"商业保险单",prop:"insuranceBusinessFront"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadInsuranceBusinessFront?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleInsuranceBusinessFront,"show-file-list":!1,action:a.baseURL}},[a.form.insuranceBusinessFront?r("img",{staticClass:"avatar",attrs:{src:a.form.insuranceBusinessFront}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("商业保险单"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：商业保险单1张")])]),a._v(" "),r("el-form-item",{attrs:{label:"车辆外观内饰"}},[r("div",{staticStyle:{display:"inline-block"}},[a.loadcarPhotoIn?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleCarPhotoIn,"show-file-list":!1,action:a.baseURL}},[a.form.carPhotoIn?r("img",{staticClass:"avatar",attrs:{src:a.form.carPhotoIn}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("车辆内饰"),r("span",[a._v("示例")])])],1),a._v(" "),r("div",{staticStyle:{display:"inline-block","margin-left":"50px"}},[a.loadcarPhotoOut?r("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":a.beforeAvatarUpload,drag:"","on-success":a.handleCarPhotoOut,"show-file-list":!1,action:a.baseURL}},[a.form.carPhotoOut?r("img",{staticClass:"avatar",attrs:{src:a.form.carPhotoOut}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]):a._e(),a._v(" "),r("p",{staticClass:"photo-tips",on:{click:function(t){a.handlePictureCardPreview("")}}},[a._v("车辆外观"),r("span",[a._v("示例")])])],1),a._v(" "),r("p",{staticStyle:{color:"rgb(153, 0, 0)","margin-top":"0"}},[a._v("备注：车辆外观内饰（合并为一项）2张")])]),a._v(" "),r("el-form-item",{attrs:{label:"司机账号",prop:"username"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入司机账号"},model:{value:a.form.username,callback:function(t){a.$set(a.form,"username",t)},expression:"form.username"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"登录密码",prop:"password"}},[r("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入登录密码"},model:{value:a.form.password,callback:function(t){a.$set(a.form,"password",t)},expression:"form.password"}})],1),a._v(" "),r("el-form-item",{attrs:{label:"状态",prop:"accountStatus"}},[r("el-radio-group",{model:{value:a.form.accountStatus,callback:function(t){a.$set(a.form,"accountStatus",t)},expression:"form.accountStatus"}},[r("el-radio",{attrs:{label:"normal"}},[a._v("开启")]),a._v(" "),r("el-radio",{attrs:{label:"stop"}},[a._v("禁止")])],1)],1),a._v(" "),r("el-form-item",{attrs:{label:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){a.submitRes("form")}}},[a._v("确定")]),a._v(" "),r("el-button",{on:{click:function(t){a.goBack()}}},[a._v("返回")])],1)],1)],1)],1),a._v(" "),r("el-dialog",{attrs:{visible:a.dialogVisible},on:{"update:visible":function(t){a.dialogVisible=t}}},[r("img",{attrs:{width:"100%",src:a.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var i=r("/Xao")(o,s,!1,function(a){r("Dc4p")},"data-v-00578e56",null);t.default=i.exports}});