webpackJsonp([8],{dEdu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("vMJZ"),l={data:function(){return{dialogImgVisible:!1,dialogImageUrl:"",list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10,keyword:""}}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.phone)||delete this.searchObj.phone,String(this.searchObj.nickname)||delete this.searchObj.nickname,this.fetchData()},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(n.b)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.avatar,this.dialogImgVisible=!0}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入手机号"},model:{value:e.searchObj.phone,callback:function(t){e.$set(e.searchObj,"phone",t)},expression:"searchObj.phone"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入昵称"},model:{value:e.searchObj.nickname,callback:function(t){e.$set(e.searchObj,"nickname",t)},expression:"searchObj.nickname"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"微信openid",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.wxOpenId||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickname||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px",display:"inline-block",cursor:"pointer","vertical-align":"middle","border-radius":"50%"},attrs:{src:t.row.avatar,alt:""},on:{click:function(a){e.handlePictureCardPreview(t.row)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"性别",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s("male"==t.row.gender?"男":("female"==t.row.gender?"女":"未知")||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"省份城市",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.wxProvince+t.row.wxCity||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"押金",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(parseFloat(t.row.balance/100).toFixed(2))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"注册时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime)+"\n      ")]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogImgVisible},on:{"update:visible":function(t){e.dialogImgVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},i=a("VU/8")(l,r,!1,null,null,null);t.default=i.exports}});