webpackJsonp([16],{"/sR5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("vMJZ"),n={data:function(){return{dialogVisible2:!1,dialogImageUrl:"",list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10,keyword:"",gender:""},selectTypeOptions:[{id:"male",name:"男"},{id:"female",name:"女"}]}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.gender)||delete this.searchObj.gender,String(this.searchObj.keyword)||delete this.searchObj.keyword,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(l.e)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handlePictureCardPreview:function(e){this.dialogImageUrl=e.avatar,this.dialogVisible2=!0},userDetail:function(e){this.$router.push({name:"mechanicInfo",params:{uid:e}})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",[e._v("性别：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.gender,callback:function(t){e.$set(e.searchObj,"gender",t)},expression:"searchObj.gender"}},e._l(e.selectTypeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickName||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"头像",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px",display:"inline-block","vertical-align":"middle","border-radius":"50%"},attrs:{src:t.row.avatar,alt:""},on:{click:function(a){e.handlePictureCardPreview(t.row)}}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.sexStatus(t.row.gender))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"绑定手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"技师申请时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100",fixed:"right",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.userDetail(t.row.id)}}},[e._v("查看详情")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},i=a("VU/8")(n,r,!1,null,null,null);t.default=i.exports}});