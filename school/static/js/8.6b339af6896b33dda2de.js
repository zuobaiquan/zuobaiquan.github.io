webpackJsonp([8],{"3zkC":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("dByW"),s={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(a.e)({page:this.currentPage-1,size:10}).then(function(e){t.list=e.data.data.content,t.totalNum=e.data.data.totalElements,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleAdd:function(t,e){this.$router.push({path:"adsedit/"+t+"/"+e})},setStatus:function(t){var e=this,n=t;n.status=!t.status,Object(a.f)(n,t.id).then(function(n){200==n.status?(e.$message({message:t.status?"已設置顯示":"已設置隱藏",type:"success"}),e.fetchData()):e.$message({message:"設置失败",type:"warning"})})},del:function(t){var e=this;Object(a.b)(t).then(function(t){200==t.status?(e.$message({message:"刪除成功",type:"success"}),e.fetchData()):e.$message({message:"刪除失敗",type:"warning"})})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleAdd(1,-1)}}},[t._v("添加廣告")]),t._v(" "),n("br"),n("br"),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序號",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(10*(t.currentPage-1)+e.$index+1)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"廣告名稱",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.title||"--")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"狀態",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.status?"顯示":"隱藏")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"發佈時間",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("parseTime")(e.row.createTime))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(n){t.setStatus(e.row)}}},[t._v(t._s(e.row.status?"隱藏":"顯示"))]),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){t.handleAdd(-1,e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(n){t.del(e.row.id)}}},[t._v("刪除")])]}}])})],1),t._v(" "),t.totalNum/10>1?n("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},staticRenderFns:[]},i=n("/Xao")(s,r,!1,null,null,null);e.default=i.exports},dByW:function(t,e,n){"use strict";e.e=function(t){return Object(r.a)({url:"/api/ad:banners",method:"get",params:t})},e.f=function(t,e){return Object(r.a)({url:"/api/ad:banners/"+e,method:"PATCH",data:s()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})},e.b=function(t){return Object(r.a)({url:"/api/ad:banners/"+t,method:"delete"})},e.d=function(t){return Object(r.a)({url:"/api/ad:banners/"+t,method:"get"})},e.a=function(t){return Object(r.a)({url:"/api/ad:banners",method:"post",data:s()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})},e.c=function(t){return Object(r.a)({url:"/api/ad:banners/"+t.id,method:"PATCH",data:s()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})};var a=n("3cXf"),s=n.n(a),r=n("vLgD")}});