webpackJsonp([19],{"c/8U":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("bOdI"),r=a.n(n),o=a("6BJY"),i={data:function(){var t,e=function(t,e,a){return e?/(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{1,2}$)/.test(e)?void a():a(new Error("价格格式不正确")):a(new Error("价格不为空"))};return t={list:null,listLoading:!1,currentPage:1,totalNum:1,form:{},searchObj:{pageSize:10},selectTypeOptions:[{id:"normal",name:"上架"},{id:"stop",name:"下架"}],dialogFormVisible:!1},r()(t,"form",{name:"",startEndTime:""}),r()(t,"rules",{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],amount:[{required:!0,validator:e,trigger:"blur"}],limitAmount:[{required:!0,validator:e,trigger:"blur"}],startEndTime:[{required:!0,validator:function(t,e,a){if(console.log("value",e),!e||0==e.length)return a(new Error("有效期不能为空"));a()},trigger:"blur"}]}),t},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(o.o)(this.searchObj).then(function(e){t.list=e.data.data.records,t.totalNum=e.data.data.total,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleAdd:function(){this.$refs.form&&this.$refs.form.clearValidate(),this.form.id=-1,this.dialogTitle="添加优惠券",this.form.name="",this.form.startEndTime="",this.form.amount="",this.form.limitAmount="",this.dialogFormVisible=!0},deleteCoupon:function(t){var e=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.f)({id:t.id}).then(function(t){200==t.status&&0==t.data.code?(e.$message({type:"success",message:"已删除"}),e.fetchData()):e.$message({message:t.data.message||"操作失败",type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},submitRes:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;Object(o.b)({startTime:e.form.startEndTime[0],endTime:e.form.startEndTime[1],amount:e.form.amount,limitAmount:e.form.limitAmount,name:e.form.name}).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"添加成功",type:"success"}),e.dialogFormVisible=!1,e.fetchData()):e.$message({message:t.data.message||"添加失敗",type:"warning"})})})},couponStatus:function(t){var e=this,a="是否确认"+("normal"==t.status?"下架":"上架")+"?";this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.u)("id="+t.id).then(function(a){200==a.status&&0==a.data.code?(e.$message({type:"success",message:"已"+("normal"==t.status?"下架":"上架")+"!"}),e.fetchData()):e.$message({message:a.data.message||"操作失败",type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消"+("normal"==t.status?"下架":"上架")})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleAdd()}}},[t._v("添加现金券")]),t._v(" "),a("br"),a("br"),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"现金券名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"使用条件（元）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("满"+e.row.limitAmount)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"优惠金额（元）",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.amount)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"有效期",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.parseTime(e.row.startTime,"{y}-{m}-{d}")+"~"+t.parseTime(e.row.endTime,"{y}-{m}-{d}")||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"兑换码",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.code||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"兑换数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.useCount+"/"+e.row.getCount)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("normal"==e.row.status?"上架":"下架")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"220",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.couponStatus(e.row)}}},[t._v(t._s("normal"==e.row.status?"下架":"上架"))]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteCoupon(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"现金券名称：",prop:"name","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"请输入现金券名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"使用条件：",prop:"limitAmount","label-width":"150px"}},[a("div",{staticStyle:{display:"inline-block","white-space":"nowrap"}},[t._v("满   "),a("el-input",{staticStyle:{display:"inline-block"},attrs:{placeholder:"请输入使用条件"},model:{value:t.form.limitAmount,callback:function(e){t.$set(t.form,"limitAmount",e)},expression:"form.limitAmount"}}),t._v("   元")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"优惠：",prop:"amount","label-width":"150px"}},[a("div",{staticStyle:{display:"inline-block","white-space":"nowrap"}},[a("el-input",{staticStyle:{display:"inline-block"},attrs:{placeholder:"请输入券金额"},model:{value:t.form.amount,callback:function(e){t.$set(t.form,"amount",e)},expression:"form.amount"}}),t._v("   元")],1)]),t._v(" "),a("el-form-item",{attrs:{label:"有效期：","label-width":"150px",prop:"startEndTime"}},[a("el-date-picker",{attrs:{type:"daterange",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.form.startEndTime,callback:function(e){t.$set(t.form,"startEndTime",e)},expression:"form.startEndTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"","label-width":"150px"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("form")}}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},s=a("VU/8")(i,l,!1,null,null,null);e.default=s.exports}});