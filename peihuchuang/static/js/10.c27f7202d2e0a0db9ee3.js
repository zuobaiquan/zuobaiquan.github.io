webpackJsonp([10],{Ck0x:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("SgkS"),i=a("liXN"),l={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,startEndTime:"",searchObj:{pageSize:20,keyword:""},form:{id:""},dialogFormVisible:!1,dialogTitle:"",rules:{sn:[{required:!0,message:"设备编号不能为空",trigger:"blur"}],bluePassword:[{required:!0,message:"蓝牙通讯密码不能为空",trigger:"blur"}],hospitalId:[{required:!0,message:"投放医院不能为空",trigger:"blur"}],officeId:[{required:!0,message:"投放科室不能为空",trigger:"blur"}],room:[{required:!0,message:"投放房间不能为空",trigger:"blur"}],roomNo:[{required:!0,message:"投放床位不能为空",trigger:"blur"}]},selectOfficeList:[],selectHospitalList:[]}},created:function(){var e=this;this.handleFilter(),Object(i.e)({pageNo:0,pageSize:100}).then(function(t){e.selectHospitalList=t.data.data.records})},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(r.c)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},cabinetDetail:function(e){this.$router.push({path:"cabinetList/"+e.cabinet.sn})},changeHospital:function(e){var t=this;Object(i.e)({pageNo:0,pageSize:100,hospitalId:e}).then(function(e){t.selectOfficeList=e.data.data.records})},submitRes:function(e){var t=this;this.$refs[e].validate(function(e){e&&(delete t.form.id,Object(r.a)(t.form).then(function(e){200==e.status&&0==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.dialogFormVisible=!1,t.fetchData()):t.$message({message:e.data.message||"添加失敗",type:"warning"})}))})},cabinetStatus:function(e){return"wait"==e?"待租用":"using"==e?"租用中":"unclean"==e?"待清洁":"error"==e?"故障中":"--"},handleAdd:function(e,t){var a=this;this.$refs.form&&this.$refs.form.clearValidate(),1==e&&(this.form.id=-1,this.editFlag=!1,this.dialogTitle="添加柜子",this.form.bluePassword="",this.form.hospitalId="",this.form.innerSn="",this.form.officeId="",this.form.room="",this.form.roomNo="",this.form.sn="",this.dialogFormVisible=!0),-1==e&&(this.form.id=t,this.editFlag=!0,this.dialogTitle="编辑柜子",this.list.forEach(function(e,r){if(e.id==t)return a.form.bluePassword=e.bluePassword,a.form.hospitalId=e.hospitalId,a.form.innerSn=e.innerSn,a.form.officeId=e.officeId,a.form.room=e.room,a.form.roomNo=e.roomNo,a.form.sn=e.sn,void(a.dialogFormVisible=!0)}))}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,1)}}},[e._v("添加柜子")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"医院名称"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[e._v("投放时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.startEndTime,callback:function(t){e.startEndTime=t},expression:"startEndTime"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.sn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"设备最新连线时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.updateTime||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"柜子状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.cabinetStatus(t.row.cabinet&&t.row.cabinet.status))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"锁状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&0==t.row.cabinet.lockStatus?"关":"开")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"电量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.battery&&t.row.cabinet.batteryVoltage&&100*parseFloat(t.row.cabinet.battery/t.row.cabinet.batteryVoltage).toFixed(2)+"%"||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属医院名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.hospital&&t.row.hospital.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属科室",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.office&&t.row.office.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属房间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.room)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属床号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.roomNo)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.cabinetDetail(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),e.totalNum/20>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,20,40,60],"page-size":20,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"设备编号：",prop:"sn","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入设备编号"},model:{value:e.form.sn,callback:function(t){e.$set(e.form,"sn",t)},expression:"form.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"蓝牙通讯密码：",prop:"name","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{type:"password",placeholder:"请输入蓝牙通讯密码"},model:{value:e.form.bluePassword,callback:function(t){e.$set(e.form,"bluePassword",t)},expression:"form.bluePassword"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投放医院：","label-width":"150px",prop:"hospitalId"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%"},attrs:{clearable:"",placeholder:"请选择"},on:{change:e.changeHospital},model:{value:e.form.hospitalId,callback:function(t){e.$set(e.form,"hospitalId",t)},expression:"form.hospitalId"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"投放科室：","label-width":"150px",prop:"officeId"}},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"40%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.officeId,callback:function(t){e.$set(e.form,"officeId",t)},expression:"form.officeId"}},e._l(e.selectOfficeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"投放房间：",prop:"room","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入投放房间"},model:{value:e.form.room,callback:function(t){e.$set(e.form,"room",t)},expression:"form.room"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"投放床位：",prop:"roomNo","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入投放床位"},model:{value:e.form.roomNo,callback:function(t){e.$set(e.form,"roomNo",t)},expression:"form.roomNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":"150px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes("form")}}},[e._v("确定")]),e._v(" "),a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},n=a("VU/8")(l,o,!1,null,null,null);t.default=n.exports},SgkS:function(e,t,a){"use strict";t.c=function(e){return Object(l.a)({url:"/api/cabinet/search",method:"post",data:i()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})},t.b=function(e){return Object(l.a)({url:"/api/cabinet/"+e.sn,method:"get",params:e})},t.a=function(e){return Object(l.a)({url:"/api/cabinet",method:"post",data:i()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})};var r=a("mvHQ"),i=a.n(r),l=a("vLgD")}});