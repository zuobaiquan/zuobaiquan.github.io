webpackJsonp([13],{d2D8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3cXf"),r=a.n(n),l=a("vMJZ"),s={data:function(){return{dialogVisible:!1,dialogImageUrl:"",list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10}}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.nickname)||delete this.searchObj.nickname,String(this.searchObj.phone)||delete this.searchObj.phone,this.fetchData()},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(l.c)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.avatar,this.dialogVisible=!0},changeStatus:function(e){var t=this,a="确认"+("normal"==e.user.accountStatus?"禁用":"开启")+"?";this.$confirm(a,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(l.a)("status="+("normal"==e.user.accountStatus?"stop":"normal")+"&uid="+e.user.id).then(function(a){200==a.status&&0==a.data.code?(t.$message({type:"success",message:"已"+("normal"==e.user.accountStatus?"禁用":"开启")+"!"}),t.fetchData()):t.$message({message:a.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消"+("normal"==e.user.accountStatus?"禁用":"开启")})})},userDetail:function(e){this.$router.push({path:"driverdetail/"+r()(e)})},handleAdd:function(e,t){this.$router.push({path:"driveredit/"+e+"/"+t})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("span",{staticClass:"label"},[e._v("姓名")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"请输入司机姓名"},model:{value:e.searchObj.nickname,callback:function(t){e.$set(e.searchObj,"nickname",t)},expression:"searchObj.nickname"}}),e._v(" "),a("span",{staticClass:"label"},[e._v("电话")]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"请输入司机电话"},model:{value:e.searchObj.phone,callback:function(t){e.$set(e.searchObj,"phone",t)},expression:"searchObj.phone"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(t){e.handleAdd(1,-1)}}},[e._v("新增司机")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"司机姓名",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.nickname||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"司机电话",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.phone||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"车型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.car&&t.row.car.carType&&t.row.car.carType.name+(t.row.car.carDetailType&&"-"+t.row.car.carDetailType.name)||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"车牌号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.car&&t.row.car.car&&t.row.car.car.carNumber||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"备注",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickname||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"170",label:"账号状态（开启/禁止）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){e.changeStatus(t.row)}},model:{value:"normal"==t.row.user.accountStatus,callback:function(a){e.$set(t.row.user,"accountStatus=='normal'",a)},expression:"scope.row.user.accountStatus=='normal'"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.userDetail(t.row)}}},[e._v("详情")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},c=a("/Xao")(s,i,!1,null,null,null);t.default=c.exports}});