webpackJsonp([26],{jvUt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("T452"),i={data:function(){return{list:null,listLoading:!1,currentPage:1,totalNum:1,form:{keyword:"",status:"normal"},rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"blur"}]},searchObj:{pageSize:10},editFlag:!1,dialogFormVisible:!1,dialogTitle:"添加风格类型名称",selectTypeOptions:[{id:"normal",name:"上架"},{id:"stop",name:"下架"}]}},created:function(){this.fetchData()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,String(this.searchObj.status)||delete this.searchObj.status,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(s.h)(this.searchObj).then(function(e){t.list=e.data.data.records,t.totalNum=e.data.data.total,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleAdd:function(t,e){var a=this;this.$refs.form&&this.$refs.form.clearValidate(),1==t&&(this.form.id=-1,this.editFlag=!1,this.dialogTitle="添加风格类型名称",this.form.name="",this.form.status="normal",this.dialogFormVisible=!0),-1==t&&(this.form.id=e,this.editFlag=!0,this.dialogTitle="编辑风格类型名称",this.list.forEach(function(t,s){if(t.id==e)return a.form.name=t.name,a.form.status=t.status,void(a.dialogFormVisible=!0)}))},deleteStyle:function(t){var e=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(s.d)({id:t.id}).then(function(t){200==t.status&&0==t.data.code?(e.$message({type:"success",message:"已删除"}),e.fetchData()):e.$message({message:t.data.message||"操作失败",type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},styleStatus:function(t){var e=this,a="是否确认"+("normal"==t.status?"下架":"上架")+"?";this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={id:t.id,status:"normal"==t.status?"stop":"normal"};Object(s.f)(a).then(function(a){200==a.status&&0==a.data.code?(e.$message({type:"success",message:"已"+("normal"==t.status?"下架":"上架")+"!"}),e.fetchData()):e.$message({message:a.data.message||"操作失败",type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消"+("normal"==t.status?"下架":"上架")})})},submitRes:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.editFlag?Object(s.f)({id:e.form.id,name:e.form.name,status:e.form.status}).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"修改成功",type:"success"}),e.fetchData(),e.dialogFormVisible=!1):e.$message({message:t.data.message||"修改失敗",type:"warning"})}):Object(s.b)({name:e.form.name,status:e.form.status}).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"添加成功",type:"success"}),e.fetchData(),e.dialogFormVisible=!1):e.$message({message:t.data.message||"添加失敗",type:"warning"})})})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleAdd(1,1)}}},[t._v("添加类型")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-left":"50px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}}),t._v(" "),a("span",[t._v("状态：")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:t.searchObj.status,callback:function(e){t.$set(t.searchObj,"status",e)},expression:"searchObj.status"}},t._l(t.selectTypeOptions,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("br"),a("br"),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"风格类型名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s("normal"==e.row.status?"上架":"下架")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.parseTime(e.row.createTime)||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"220",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.styleStatus(e.row)}}},[t._v("上架")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleAdd(-1,e.row.id)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.deleteStyle(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"风格类型名称：",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入风格类型名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态：",prop:"status"}},[a("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-radio",{attrs:{label:"normal"}},[t._v("上架")]),t._v(" "),a("el-radio",{attrs:{label:"stop"}},[t._v("下架")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("form")}}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]},r=a("VU/8")(i,n,!1,null,null,null);e.default=r.exports}});