webpackJsonp([12],{"fa+N":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("V/8j"),i={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,dialogTitle:"添加學年",form:{year:""}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(n.f)({page:this.currentPage-1,size:10}).then(function(e){t.list=e.data.data.content,t.totalNum=e.data.data.totalElements,t.listLoading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},submitRes:function(){var t=this;Object(n.a)(this.form).then(function(e){if(!e.data||!e.data.code||-1!=e.data.code)return 200==e.status?(t.$message({message:"添加成功",type:"success"}),void t.fetchData()):void t.$message({message:"添加失敗",type:"warning"});t.$message({message:e.data.msg,type:"warning"})})},handleAdd:function(t,e){var a=this;if(1==t){var n=new Date,i=n.getFullYear(),s=n.getMonth()+1;8==s||9==s?(this.form.year=i,this.form.id=-1,delete this.form.id,this.dialogTitle="添加學年",this.$confirm('您將創建<span style="font-weight:bolder;margin:0 5px;">'+this.form.year+"學年</span>，上一年數據<br />將會歸檔，是否確認此操作？","",{confirmButtonText:"確定",cancelButtonText:"取消",type:"warning",center:!0,dangerouslyUseHTMLString:!0}).then(function(){a.submitRes()}).catch(function(){a.$message({type:"info",message:"已取消添加"})})):this.$message({message:"僅限每年8月-9月可添加續學年，且只可添加當前學年",type:"warning"})}}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(e){t.handleAdd(1,-1)}}},[t._v("添加學年")]),t._v(" "),a("span",{staticStyle:{"margin-left":"10px",color:"#999"}},[t._v("(僅限每年8月-9月可添加續學年，且只可添加當前學年)")]),t._v(" "),a("br"),a("br"),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序號",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(10*(t.currentPage-1)+e.$index+1)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"學年",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.year+"學年"||"--")+"\n      ")]}}])})],1),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e()],1)},staticRenderFns:[]},r=a("/Xao")(i,s,!1,null,null,null);e.default=r.exports}});