webpackJsonp([24],{"3vj2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("SgkS"),i=a("liXN"),r={data:function(){return{form2:{status:"",name:null},rules2:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},selectHospitalList:[],statusOptions:[{id:"1",name:"未故障"},{id:"2",name:"已故障"}],eventOptions:[{id:"wait",name:"待处理"},{id:"ing",name:"跟进中，故障等待修复"},{id:"done",name:"跟进中，故障已处理"}],baseURL:"http://47.107.249.233:8086/api/oss",dialogImageUrl:"",dialogImgVisible:!1,status:"",remark:""}},created:function(){var e=this;Object(l.e)({sn:this.$route.params.sn}).then(function(t){e.form2=t.data.data}),Object(i.f)({pageNo:0,pageSize:100}).then(function(t){e.selectHospitalList=t.data.data.records})},methods:{handleImageScucess:function(e,t,a){this.form2.avatar=e.data},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogImgVisible=!0},cabinetStatus:function(e){return"wait"==e?"待租用":"using"==e?"租用中":"unclean"==e?"待清洁":"error"==e?"故障中":"--"},eventStatus:function(e){return"wait"==e?"待处理":"ing"==e?"跟进中，故障等待修复":"done"==e?"跟进中，故障已处理":"--"}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[e.form2?a("el-form",{ref:"form2",attrs:{model:e.form2,rules:e.rules2,"label-width":"160px"}},[a("el-form-item",{attrs:{label:"柜子编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.sn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"内部编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.innerSn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"设备蓝牙连接编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.innerSn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"设备最新连线时间","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.updateTime||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"蓝牙通讯密码：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.password||"--"))]),e._v(" "),e.form2.hospital?a("el-form-item",{attrs:{label:"投放医院：","label-width":"150px"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form2.hospital.id,callback:function(t){e.$set(e.form2.hospital,"id",t)},expression:"form2.hospital.id"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"医院联系人：","label-width":"150px"}},[e._v(e._s(e.form2.hospital&&e.form2.hospital.linkman||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"联系电话：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.hospital&&e.form2.hospital.phone||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放科室：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.name||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放房间：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.room||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放床位：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.roomNo||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.linkman||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"联系电话：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.phone||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子电量：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.battery&&e.form2.cabinet.batteryVoltage&&100*parseFloat(e.form2.cabinet.battery/e.form2.cabinet.batteryVoltage).toFixed(2)+"%"||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.cabinetStatus(e.form2.cabinet&&e.form2.cabinet.status)))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&0==e.form2.cabinet.lockStatus?"关":e.form2.cabinet&&1==e.form2.cabinet.lockStatus?"开":"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"故障状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&"noraml"==e.form2.cabinet.error_status?"无故障":e.form2.cabinet&&"error "==e.form2.cabinet.error_status?"有故障":"--"))]),e._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{on:{click:function(t){e.goBack()}}},[e._v("返回")])],1)],1):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogImgVisible},on:{"update:visible":function(t){e.dialogImgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},n=a("VU/8")(r,o,!1,null,null,null);t.default=n.exports}});