webpackJsonp([10],{"2pQq":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("V/8j"),s={data:function(){return{list:null,listLoading:!1,currentPage:1,totalNum:1,searchUsername:"",searchName:"",searchStatus:"",dialogFormVisible:!1,editFlag:!1,dialogTitle:"新增角色",selectStatusOptions:[{id:1,name:"禁用"},{id:2,name:"启用"}],form:{name:"",remark:""},rules:{name:[{required:!0,message:"角色名称不能为空",trigger:"blur"}],remark:[{required:!0,message:"描述不能为空",trigger:"blur"}]},dialogTitle2:"",dialogFormVisible2:!1,form2:{},permissionsList:[],checkList:[]}},created:function(){this.fetchData(),this.getAllPermission()},methods:{checkMethod:function(){},getAllPermission:function(){var e=this;Object(a.i)().then(function(t){e.permissionsList=t.data.data})},rolePower:function(e){var t=this;this.form2=e,this.checkList=[],this.dialogTitle2="为角色【"+e.name+"】分配权限",this.dialogFormVisible2=!0,Object(a.l)({roleId:e.id}).then(function(e){e.data.data.map(function(e){t.checkList.push(e.id)})})},fetchData:function(){var e=this;this.listLoading=!0,Object(a.k)().then(function(t){e.list=t.data.data,e.listLoading=!1})},delRole:function(e){var t=this;this.$confirm("确认删除角色【"+e.name+"】?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.e)({roleId:e.id}).then(function(e){if(200==e.status&&0==e.data.code)return t.$message({message:"删除成功",type:"success"}),void t.fetchData();t.$message({message:e.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},userStatus:function(){var e=this;this.$confirm("确认禁用【Jason】?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handleAdd:function(e,t){var i=this;this.$refs.form&&this.$refs.form.clearValidate(),1==e&&(this.form.id=-1,this.editFlag=!1,this.dialogTitle="添加角色",this.form.name="",this.form.remark="",this.dialogFormVisible=!0),-1==e&&(this.form.id=t,this.editFlag=!0,this.dialogTitle="编辑角色",this.list.forEach(function(e,a){if(e.id==t)return i.form.name=e.name,i.form.remark=e.remark,void(i.dialogFormVisible=!0)}))},submitPower:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;if(0!=t.checkList.length){var i="roleId="+t.form2.id+"&permissions="+t.checkList.join(",");Object(a.m)(i).then(function(e){200==e.status&&0==e.data.code?(t.$message({message:"权限设置成功",type:"success"}),t.dialogFormVisible2=!1,t.fetchData()):t.$message({message:e.data.message||"设置失败",type:"warning"})})}else t.$message({message:"权限至少设置一项",type:"warning"})})},submitRes:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.editFlag?Object(a.g)({id:t.form.id,remark:t.form.remark,name:t.form.name}).then(function(e){t.dialogFormVisible=!1,200==e.status&&0==e.data.code?(t.$message({message:"修改成功",type:"success"}),t.fetchData()):t.$message({message:e.data.message||"修改失败",type:"warning"})}):Object(a.b)({remark:t.form.remark,name:t.form.name}).then(function(e){t.dialogFormVisible=!1,200==e.status&&0==e.data.code?(t.$message({message:"添加成功",type:"success"}),t.fetchData()):t.$message({message:e.data.message||"添加失败",type:"warning"})})})}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,1)}}},[e._v("新增角色")]),e._v(" "),i("br"),i("br"),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{align:"center",label:"编号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"角色名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name||"--")+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.remark||"--")+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("parseTime")(t.row.createTime))+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{fixed:"right",width:"320",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(i){e.rolePower(t.row)}}},[e._v("分配权限")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(i){e.handleAdd(-1,t.row.id)}}},[e._v("修改")]),e._v(" "),i("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(i){e.delRole(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[i("el-form-item",{attrs:{label:"角色名称：","label-width":"120px",prop:"name"}},[i("el-input",{staticStyle:{width:"85%"},attrs:{placeholder:"请输入角色名称","auto-complete":"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"描述：","label-width":"120px",prop:"remark"}},[i("el-input",{staticStyle:{width:"85%"},attrs:{type:"textarea",rows:3,placeholder:"请输入描述","auto-complete":"off"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes("form")}}},[e._v("确 定")])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.dialogTitle2,visible:e.dialogFormVisible2},on:{"update:visible":function(t){e.dialogFormVisible2=t}}},[i("el-form",{ref:"form2",attrs:{model:e.form2}},[i("el-form-item",{attrs:{label:"权限设置：","label-width":"120px",prop:"name"}},[i("el-checkbox-group",{attrs:{size:"small"},on:{change:e.checkMethod},model:{value:e.checkList,callback:function(t){e.checkList=t},expression:"checkList"}},e._l(e.permissionsList,function(t,a){return i("el-checkbox",{key:t.id,attrs:{border:!0,label:t.id,checked:t.check}},[e._v(e._s(t.name))])}))],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible2=!1}}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitPower("form2")}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]},n=i("VU/8")(s,o,!1,null,null,null);t.default=n.exports}});