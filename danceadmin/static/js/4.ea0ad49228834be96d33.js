webpackJsonp([4],{Wk5N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("ZfnU"),i={data:function(){return{list:null,listLoading:!0,dialogFormVisible:!1,dialogTitle:"添加banner",form:{title:"",sortIndex:0,url:"",coverUrl:"",id:-1},baseURL:"http://120.79.163.13:8080/api/oss",dialogVisible2:!1,dialogImageUrl:"",currentPage:1,totalNum:1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(a.d)({page:this.currentPage-1,size:10},"category").then(function(t){e.list=t.data.data.content,e.totalNum=t.data.data.totalElements,e.listLoading=!1})},delBanner:function(e){var t=this;Object(a.b)({id:e}).then(function(e){200==e.status?(t.$message({message:"删除成功",type:"success"}),t.fetchData()):t.$message({message:"删除失败",type:"warning"})})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handlePictureCardPreview:function(e){this.dialogImageUrl=e.coverUrl,this.dialogVisible2=!0},handleAdd:function(e,t){var n=this;1==e&&(this.form.id=-1,this.dialogTitle="添加banner",this.form.title="",this.form.url="",this.form.sortIndex=null,this.form.coverUrl="",this.dialogFormVisible=!0),-1==e&&(this.form.id=t,this.dialogTitle="修改banner",this.list.forEach(function(e,a){if(e.id==t)return n.form.title=e.title,n.form.url=e.url,n.form.sortIndex=e.sortIndex,n.form.coverUrl=e.coverUrl,void(n.dialogFormVisible=!0)}))},handleImageScucess:function(e,t,n){this.form.coverUrl=e.data},handelErrorForm:function(){return""==this.form.title?(this.$message({message:"标题不能为空",type:"warning"}),!1):""==this.form.url?(this.$message({message:"链接地址不能为空",type:"warning"}),!1):""==this.form.sortIndex?(this.$message({message:"排序不能为空",type:"warning"}),!1):/^(0|([1-9]\d*))$/.test(this.form.sortIndex)?""!=this.form.coverUrl||(this.$message({message:"图片不能为空",type:"warning"}),!1):(this.$message({message:"排序格式不正确",type:"warning"}),!1)},submitRes:function(){var e=this;this.handelErrorForm()?-1==this.form.id?Object(a.a)({coverUrl:this.form.coverUrl,sortIndex:this.form.sortIndex,title:this.form.title,url:this.form.url,type:"category"}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"添加成功",type:"success"}),e.fetchData()):e.$message({message:"添加失败",type:"warning"})}):Object(a.c)({coverUrl:this.form.coverUrl,title:this.form.title,url:this.form.url,sortIndex:this.form.sortIndex,id:this.form.id}).then(function(t){200==t.status?(e.dialogFormVisible=!1,e.$message({message:"修改成功",type:"success"}),e.fetchData()):e.$message({message:"修改失败",type:"warning"})}):console.log("表单提交失败")}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(t){e.handleAdd(1,-1)}}},[e._v("添加")]),e._v(" "),n("br"),n("br"),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"banner标题",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"banner链接地址",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.url)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"banner图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{"max-height":"150px","max-width":"150px",cursor:"pointer"},attrs:{src:t.row.coverUrl,alt:""},on:{click:function(n){e.handlePictureCardPreview(t.row)}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"排序",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.sortIndex)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(n){e.handleAdd(-1,t.row.id)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"small"},on:{click:function(n){e.delBanner(t.row.id)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"banner标题","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"banner链接地址","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"排序","label-width":"120px"}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.sortIndex,callback:function(t){e.$set(e.form,"sortIndex",t)},expression:"form.sortIndex"}})],1)],1),e._v(" "),n("div",[n("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"}},[e._v("banner图片")]),e._v(" "),n("el-upload",{staticClass:"upload-demo",attrs:{drag:"","on-success":e.handleImageScucess,action:e.baseURL}},[n("i",{staticClass:"el-icon-upload"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])])])],1),e._v(" "),e.form.coverUrl?n("div",{staticStyle:{"margin-left":"120px"}},[n("img",{staticStyle:{"max-height":"200px",cursor:"pointer"},attrs:{src:e.form.coverUrl,alt:"",width:"80%",height:"80%"},on:{click:function(t){e.handlePictureCardPreview(e.form)}}})]):e._e(),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitRes()}}},[e._v("确 定")])],1)],1),e._v(" "),e.totalNum/10>1?n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),n("el-dialog",{attrs:{visible:e.dialogVisible2},on:{"update:visible":function(t){e.dialogVisible2=t}}},[n("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var o=n("/Xao")(i,r,!1,function(e){n("uGLF")},"data-v-327b2bb7",null);t.default=o.exports},ZfnU:function(e,t,n){"use strict";t.d=function(e,t){return Object(r.a)({url:"/api/banner?type="+t,method:"get",params:e})},t.a=function(e){return Object(r.a)({url:"/api/banner/add",method:"post",data:i()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})},t.c=function(e){return Object(r.a)({url:"/api/banner/edit",method:"post",data:i()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})},t.b=function(e){return Object(r.a)({url:"/api/banner/delete",method:"delete",params:e})};var a=n("3cXf"),i=n.n(a),r=n("vLgD")},lAbS:function(e,t,n){(e.exports=n("BkJT")(!1)).push([e.i,"\n.upload-container[data-v-327b2bb7] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.upload-container .image-uploader[data-v-327b2bb7] {\n    margin-left: 120px;\n    float: left;\n}\n.upload-container .image-preview[data-v-327b2bb7] {\n    width: 200px;\n    height: 200px;\n    position: relative;\n    border: 1px dashed #d9d9d9;\n    float: left;\n    margin-left: 50px;\n}\n.upload-container .image-preview .image-preview-wrapper[data-v-327b2bb7] {\n      position: relative;\n      width: 100%;\n      height: 100%;\n}\n.upload-container .image-preview .image-preview-wrapper img[data-v-327b2bb7] {\n        width: 100%;\n        height: 100%;\n}\n.upload-container .image-preview .image-preview-action[data-v-327b2bb7] {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      cursor: default;\n      text-align: center;\n      color: #fff;\n      opacity: 0;\n      font-size: 20px;\n      background-color: rgba(0, 0, 0, 0.5);\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s;\n      cursor: pointer;\n      text-align: center;\n      line-height: 200px;\n}\n.upload-container .image-preview .image-preview-action .el-icon-delete[data-v-327b2bb7] {\n        font-size: 36px;\n}\n.upload-container .image-preview:hover .image-preview-action[data-v-327b2bb7] {\n      opacity: 1;\n}\n",""])},uGLF:function(e,t,n){var a=n("lAbS");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("8bSs")("14ec0d30",a,!0)}});