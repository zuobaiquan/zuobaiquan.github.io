webpackJsonp([21],{"56nf":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("SgkS"),l=a("liXN"),r={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10},selectOfficeList:[],selectHospitalList:[],cabinetStatusList:[{id:"wait",name:"待租用"},{id:"using",name:"租用中"},{id:"unclean",name:"待清洁"},{id:"error",name:"故障中"}]}},created:function(){var e=this;Object(l.f)({pageNo:0,pageSize:100}).then(function(t){e.selectHospitalList=t.data.data.records}),this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.sn)||delete this.searchObj.sn,String(this.searchObj.hospitalId)||delete this.searchObj.hospitalId,String(this.searchObj.officeId)||delete this.searchObj.officeId,String(this.searchObj.status)||delete this.searchObj.status,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(n.h)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},changeHospital:function(e){var t=this;Object(l.f)({pageNo:0,pageSize:100,hospitalId:e}).then(function(e){t.selectOfficeList=e.data.data.records})},feedbackDetail:function(e){this.$router.push({path:"feedbackdetail/"+e.feedback.id})},cabinetStatus:function(e){return"wait"==e?"待租用":"using"==e?"租用中":"unclean"==e?"待清洁":"error"==e?"故障中":"--"},eventStatus:function(e){return"wait"==e?"待处理":"ing"==e?"跟进中，故障等待修复":"done"==e?"故障已处理":"--"}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"所属医院"},on:{change:e.changeHospital},model:{value:e.searchObj.hospitalId,callback:function(t){e.$set(e.searchObj,"hospitalId",t)},expression:"searchObj.hospitalId"}},e._l(e.selectHospitalList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"所属科室"},model:{value:e.searchObj.officeId,callback:function(t){e.$set(e.searchObj,"officeId",t)},expression:"searchObj.officeId"}},e._l(e.selectOfficeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"柜子编号"},model:{value:e.searchObj.sn,callback:function(t){e.$set(e.searchObj,"sn",t)},expression:"searchObj.sn"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"柜子状态"},model:{value:e.searchObj.status,callback:function(t){e.$set(e.searchObj,"status",t)},expression:"searchObj.status"}},e._l(e.cabinetStatusList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{width:"50",align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"故障编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.id||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.createTime||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"医院名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.hospital&&t.row.cabinet.hospital.name||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"科室",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.office&&t.row.cabinet.office.name||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属房间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.cabinet&&t.row.cabinet.cabinet.room||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"所属床号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.cabinet&&t.row.cabinet.cabinet.roomNo||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"柜子编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.cabinet&&t.row.cabinet.cabinet.sn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"事件状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.eventStatus(t.row.feedback&&t.row.feedback.status))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"柜子状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.cabinetStatus(t.row.cabinet&&t.row.cabinet.cabinet&&t.row.cabinet.cabinet.status))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"故障状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.cabinet&&"error"==t.row.cabinet.cabinet.errorStatus?"有故障":"noraml"==t.row.cabinet.cabinet.errorStatus?"无故障":"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发起人ID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.id||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"发起人昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.reviewName||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"反馈内容",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.content||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.feedback&&t.row.feedback.reviewRemark||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.feedbackDetail(t.row)}}},[e._v(e._s(t.row.feedback&&"done"==t.row.feedback.status?"详情":"操作"))])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]},c=a("VU/8")(r,i,!1,null,null,null);t.default=c.exports}});