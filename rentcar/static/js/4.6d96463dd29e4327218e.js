webpackJsonp([4],{a3Yh:function(e,t,n){"use strict";t.__esModule=!0;var a,i=n("liLe"),r=(a=i)&&a.__esModule?a:{default:a};t.default=function(e,t,n){return t in e?(0,r.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},a50D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("a3Yh"),i=n.n(a),r=n("0ChT"),l={data:function(){var e;return e={list:null,listLoading:!1,currentPage:1,totalNum:1,form:{},searchObj:{pageSize:1e3},dialogFormVisible:!1},i()(e,"form",{name:""}),i()(e,"rules",{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}),e},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(r.e)(this.searchObj).then(function(t){e.list=t.data.data.records,e.list=e.list.filter(function(e){return"aboutus"==e.type||"agreement"==e.type}),e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handleAdd:function(e,t){this.$router.push({path:"editcontent/"+e+"/"+t})},delArticle:function(e){var t=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.b)({id:e.id}).then(function(e){200==e.status&&0==e.data.code?(t.$message({type:"success",message:"已删除"}),t.fetchData()):t.$message({message:e.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"问题",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){e.handleAdd(-1,t.row.id)}}},[e._v("编辑")])]}}])})],1)],1)},staticRenderFns:[]},o=n("/Xao")(l,s,!1,null,null,null);t.default=o.exports},lbsL:function(e,t,n){n("ngi5");var a=n("Rv9F").Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},liLe:function(e,t,n){e.exports={default:n("lbsL"),__esModule:!0}},ngi5:function(e,t,n){var a=n("8leu");a(a.S+a.F*!n("berT"),"Object",{defineProperty:n("Mr+r").f})}});