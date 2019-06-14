webpackJsonp([19],{ZR8O:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("liXN"),n=a("TIfe"),r={data:function(){return{list:null,listLoading:!1,currentPage:1,totalNum:1,form:{name:"",linkman:"",phone:"",password:"",account:""},rules:{name:[{required:!0,message:"科室名称不能为空",trigger:"blur"}],linkman:[{required:!0,message:"科室联系人不能为空",trigger:"blur"}],account:[{required:!0,message:"登录账号不能为空",trigger:"blur"}],phone:[{required:!0,validator:function(e,t,a){return t?/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(t)?void a():a(new Error("联系电话格式不正确")):a(new Error("联系电话不能为空"))},trigger:"blur"}],password:[{required:!0,message:"登录密码不能为空",trigger:"blur"}]},searchObj:{hospitalId:this.$route.params.id,pageSize:10},username:Object(n.h)(),editFlag:!1,dialogFormVisible:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(o.f)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},submitRes:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;-1==t.flag||Object(o.b)({account:t.form.account,hospitalId:t.$route.params.id,linkman:t.form.linkman,name:t.form.name,password:t.form.password,phone:t.form.phone}).then(function(e){t.dialogFormVisible=!1,200==e.status&&0==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.fetchData()):t.$message({message:e.data.message||"添加失敗",type:"warning"})})})},handleAdd:function(e,t){var a=this;this.$refs.form&&this.$refs.form.clearValidate(),1==e&&(this.form.hospitalId=-1,this.editFlag=!1,this.form.linkman="",this.form.name="",this.form.password="",this.form.phone="",this.form.account="",this.dialogFormVisible=!0),-1==e&&(this.form.hospitalId=t,this.editFlag=!0,this.list.forEach(function(e,o){if(e.id==t)return a.form.account=e.account,a.form.phone=e.phone,a.form.password=e.password,a.form.linkman=e.linkman,a.form.name=e.name,void(a.dialogFormVisible=!0)}))},deleteOffice:function(e){var t=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.c)({id:e.id}).then(function(e){200==e.status&&0==e.data.code?(t.$message({type:"success",message:"已删除"}),t.fetchData()):t.$message({message:e.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,1)}}},[e._v("新增")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"科室编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"科室名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"科室联系人",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.linkman||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"联系电话",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"登录账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.account||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"登录密码",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.password||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteOffice(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:e.editFlag?"编辑科室":"新增科室",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[e.editFlag?a("el-form-item",{attrs:{label:"科室编号：","label-width":"120px"}},[a("el-input",{attrs:{disabled:!0,"auto-complete":"off",placeholder:"请输入科室编号"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"科室名称","label-width":"120px",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入科室名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"科室联系人","label-width":"120px",prop:"linkman"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入科室联系人"},model:{value:e.form.linkman,callback:function(t){e.$set(e.form,"linkman",t)},expression:"form.linkman"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话","label-width":"120px",prop:"phone"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入联系电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"登录账号","label-width":"120px",prop:"account"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入登录账号"},model:{value:e.form.account,callback:function(t){e.$set(e.form,"account",t)},expression:"form.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"登录密码","label-width":"120px",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入登录密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes("form")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,l,!1,null,null,null);t.default=i.exports}});