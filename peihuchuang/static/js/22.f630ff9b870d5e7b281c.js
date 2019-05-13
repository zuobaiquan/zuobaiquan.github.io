webpackJsonp([22],{Ck0x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("SgkS"),i=a("liXN"),r={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,startEndTime:"",searchObj:{pageSize:10},form:{id:""},form2:{id:""},dialogFormVisible:!1,dialogFormVisible2:!1,dialogTitle:"",dialogTitle2:"",rules:{sn:[{required:!0,message:"设备编号不能为空",trigger:"blur"}],innerSn:[{required:!0,message:"内部编号不能为空",trigger:"blur"}],bluePassword:[{required:!0,message:"蓝牙通讯密码不能为空",trigger:"blur"}],hospitalId:[{required:!0,message:"投放医院不能为空",trigger:"blur"}],officeId:[{required:!0,message:"投放科室不能为空",trigger:"blur"}],room:[{required:!0,message:"投放房间不能为空",trigger:"blur"}],roomNo:[{required:!0,message:"投放床位不能为空",trigger:"blur"}]},rules2:{},selectOfficeList:[],selectHospitalList:[],cabinetStatusList:[{id:"wait",name:"待租用"},{id:"using",name:"租用中"},{id:"unclean",name:"待清洁"},{id:"error",name:"故障中"}],adminType:adminType}},created:function(){var e=this;"admin"==adminType&&Object(i.f)({pageNo:0,pageSize:100}).then(function(t){e.selectHospitalList=t.data.data.records}),"hospital"==adminType&&(this.searchObj.hospitalId=+hospitalId),"department"==adminType&&(this.searchObj.hospitalId=+hospitalId,this.searchObj.officeId=+officeId),this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.sn)||delete this.searchObj.sn,String(this.searchObj.hospitalId)||delete this.searchObj.hospitalId,String(this.searchObj.officeId)||delete this.searchObj.officeId,String(this.searchObj.status)||delete this.searchObj.status,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(l.c)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},cabinetDetail:function(e){var t=this;Object(l.b)({sn:e.cabinet.sn}).then(function(e){t.dialogFormVisible2=!0,t.form2=e.data.data})},changeHospital:function(e){var t=this;Object(i.f)({pageNo:0,pageSize:100,hospitalId:e}).then(function(e){t.selectOfficeList=e.data.data.records})},submitRes:function(e){var t=this;this.$refs[e].validate(function(e){e&&(delete t.form.id,Object(l.a)(t.form).then(function(e){200==e.status&&0==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.dialogFormVisible=!1,t.fetchData()):t.$message({message:e.data.message||"添加失敗",type:"warning"})}))})},cabinetStatus:function(e){return"wait"==e?"待租用":"using"==e?"租用中":"unclean"==e?"待清洁":"error"==e?"故障中":"--"},handleAdd:function(e,t){var a=this;this.$refs.form&&this.$refs.form.clearValidate(),1==e&&(this.form.id=-1,this.editFlag=!1,this.dialogTitle="添加柜子",this.form.bluePassword="",this.form.hospitalId="",this.form.innerSn="",this.form.officeId="",this.form.room="",this.form.roomNo="",this.form.sn="",this.dialogFormVisible=!0),-1==e&&(this.form.id=t,this.editFlag=!0,this.dialogTitle="编辑柜子",this.list.forEach(function(e,l){if(e.id==t)return a.form.bluePassword=e.bluePassword,a.form.hospitalId=e.hospitalId,a.form.innerSn=e.innerSn,a.form.officeId=e.officeId,a.form.room=e.room,a.form.roomNo=e.roomNo,a.form.sn=e.sn,void(a.dialogFormVisible=!0)}))}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,1)}}},[e._v("添加柜子")]),e._v(" "),"admin"==e.adminType?a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"所属医院"},on:{change:e.changeHospital},model:{value:e.searchObj.hospitalId,callback:function(t){e.$set(e.searchObj,"hospitalId",t)},expression:"searchObj.hospitalId"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):e._e(),e._v(" "),"department"!==e.adminType?a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"所属科室"},model:{value:e.searchObj.officeId,callback:function(t){e.$set(e.searchObj,"officeId",t)},expression:"searchObj.officeId"}},e._l(e.selectOfficeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})):e._e(),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"柜子编号"},model:{value:e.searchObj.sn,callback:function(t){e.$set(e.searchObj,"sn",t)},expression:"searchObj.sn"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"柜子状态"},model:{value:e.searchObj.status,callback:function(t){e.$set(e.searchObj,"status",t)},expression:"searchObj.status"}},e._l(e.cabinetStatusList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v("投放时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.startEndTime,callback:function(t){e.startEndTime=t},expression:"startEndTime"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.sn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备最新连线时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.updateTime||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"柜子状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.cabinetStatus(t.row.cabinet&&t.row.cabinet.status))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"锁状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&0==t.row.cabinet.lockStatus?"关":t.row.cabinet&&1==t.row.cabinet.lockStatus?"开":"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"电量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.battery&&t.row.cabinet.batteryVoltage&&100*parseFloat(t.row.cabinet.battery/t.row.cabinet.batteryVoltage).toFixed(2)+"%"||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属医院名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.hospital&&t.row.hospital.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属科室",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.office&&t.row.office.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属房间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.room)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属床号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.roomNo)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.cabinetDetail(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"设备编号：",prop:"sn","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入设备编号"},model:{value:e.form.sn,callback:function(t){e.$set(e.form,"sn",t)},expression:"form.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内部编号：",prop:"innerSn","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入内部编号"},model:{value:e.form.innerSn,callback:function(t){e.$set(e.form,"innerSn",t)},expression:"form.innerSn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"蓝牙通讯密码：",prop:"name","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"password",placeholder:"请输入蓝牙通讯密码"},model:{value:e.form.bluePassword,callback:function(t){e.$set(e.form,"bluePassword",t)},expression:"form.bluePassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投放医院：","label-width":"150px",prop:"hospitalId"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%"},attrs:{clearable:"",placeholder:"请选择"},on:{change:e.changeHospital},model:{value:e.form.hospitalId,callback:function(t){e.$set(e.form,"hospitalId",t)},expression:"form.hospitalId"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"投放科室：","label-width":"150px",prop:"officeId"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.officeId,callback:function(t){e.$set(e.form,"officeId",t)},expression:"form.officeId"}},e._l(e.selectOfficeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"投放房间：",prop:"room","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入投放房间"},model:{value:e.form.room,callback:function(t){e.$set(e.form,"room",t)},expression:"form.room"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投放床位：",prop:"roomNo","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入投放床位"},model:{value:e.form.roomNo,callback:function(t){e.$set(e.form,"roomNo",t)},expression:"form.roomNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"150px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes("form")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"柜子详情",visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[a("el-form",{ref:"form2",attrs:{model:e.form2}},[a("el-form-item",{attrs:{label:"柜子编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.sn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"内部编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.innerSn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"设备蓝牙连接编号：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.innerSn||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"设备最新连线时间","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.updateTime||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"蓝牙通讯密码：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.password||"--"))]),e._v(" "),"admin"==e.adminType&&e.form2.hospital?a("el-form-item",{attrs:{label:"投放医院：","label-width":"150px"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"50%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form2.hospital.id,callback:function(t){e.$set(e.form2.hospital,"id",t)},expression:"form2.hospital.id"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"医院联系人：","label-width":"150px"}},[e._v(e._s(e.form2.hospital&&e.form2.hospital.linkman||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"联系电话：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.hospital&&e.form2.hospital.phone||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放科室：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.name||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放房间：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.room||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"投放床位：","label-width":"150px"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.roomNo||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.linkman||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"联系电话：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.office&&e.form2.office.phone||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子电量：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&e.form2.cabinet.battery&&e.form2.cabinet.batteryVoltage&&100*parseFloat(e.form2.cabinet.battery/e.form2.cabinet.batteryVoltage).toFixed(2)+"%"||"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.cabinetStatus(e.form2.cabinet&&e.form2.cabinet.status)))]),e._v(" "),a("el-form-item",{attrs:{label:"柜子状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&0==e.form2.cabinet.lockStatus?"关":e.form2.cabinet&&1==e.form2.cabinet.lockStatus?"开":"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"故障状态：","label-width":"150px",prop:"name"}},[e._v(e._s(e.form2.cabinet&&"noraml"==e.form2.cabinet.error_status?"无故障":e.form2.cabinet&&"error "==e.form2.cabinet.error_status?"有故障":"--"))]),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"150px"}},[a("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},s=a("VU/8")(r,o,!1,null,null,null);t.default=s.exports}});