webpackJsonp([16],{"3zkC":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("0ChT"),s={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{size:10,type:"post"}}},created:function(){this.fetchData()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,String(this.searchObj.status)||delete this.searchObj.status,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,this.searchObj.page=this.currentPage-1,Object(n.e)(this.searchObj).then(function(e){t.list=e.data.data.records,t.totalNum=e.data.data.totalElements,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleAdd:function(t,e){this.$router.push({path:"adsedit/"+t+"/"+e})},delAds:function(t){var e=this;this.$confirm("确认删除该公告?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)({id:t.id}).then(function(t){if(200==t.status&&0==t.data.code)return e.$message({message:"删除成功",type:"success"}),void e.fetchData();e.$message({message:t.data.message||"操作失败",type:"warning"})})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(e){t.handleAdd(1,-1)}}},[t._v("添加文章")]),t._v(" "),a("br"),a("br"),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(10*(t.currentPage-1)+e.$index+1)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"文章标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"链接",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.webUrl||"--")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"发布时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("parseTime")(e.row.createTime))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){t.handleAdd(-1,e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.delAds(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},staticRenderFns:[]},l=a("VU/8")(s,r,!1,null,null,null);e.default=l.exports}});