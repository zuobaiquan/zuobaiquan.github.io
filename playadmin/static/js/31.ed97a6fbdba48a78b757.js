webpackJsonp([31],{Uu9s:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("GKtG");var l={data:function(){return{dialogVisible2:!1,dialogImageUrl:"",editFlag:!1,baseURL:"https://finecard.fintech-es.com/finecard-admin-api/api/vendor:oss/files",form:{status:!0},rules:{title:[{required:!0,message:"广告名称不能为空",trigger:"blur"}],link:[{required:!0,validator:function(t,e,i){return e?/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(e)?void i():i(new Error("链接格式不正确")):i(new Error("链接不能为空"))},trigger:"blur"}]},edit:this.$route.params.editid,flag:this.$route.params.flag}},created:function(){-1==this.flag?this.$route.meta.title="編輯資訊":this.$route.meta.title="添加資訊"},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t,this.dialogVisible2=!0},goBack:function(){this.$router.go(-1)},handleImagebeforeUpload:function(t){},submitRes:function(t){this.$refs[t].validate(function(t){})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[i("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"广告名称：",prop:"title"}},[i("el-input",{attrs:{placeholder:"请输入广告名称"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("div",{staticStyle:{display:"inline-block"}},[i("label",{staticClass:"el-form-item__label",staticStyle:{width:"120px"}},[t._v("广告图片：")]),t._v(" "),i("el-upload",{staticClass:"upload-demo",attrs:{"before-upload":t.handleImagebeforeUpload,"show-file-list":!1,action:t.baseURL,drag:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])])])],1),t._v(" "),t.form.image?i("div",{staticStyle:{"margin-left":"20px",display:"inline-block"}},[i("img",{staticStyle:{"max-width":"400px","max-height":"320px",cursor:"pointer","vertical-align":"middle"},attrs:{src:t.form.image,alt:""},on:{click:function(e){t.handlePictureCardPreview(t.form.image)}}})]):t._e(),t._v(" "),i("br"),i("br"),t._v(" "),i("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"跳转链接：",prop:"link"}},[i("el-input",{attrs:{placeholder:"请输入跳转链接"},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),i("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"广告状态：",prop:"status"}},[i("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[i("el-radio",{attrs:{label:!0}},[t._v("上架")]),t._v(" "),i("el-radio",{attrs:{label:!1}},[t._v("下架")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:""}},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("form")}}},[t._v("确定")]),t._v(" "),i("el-button",{on:{click:function(e){t.goBack()}}},[t._v("返回")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible2},on:{"update:visible":function(e){t.dialogVisible2=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},r=i("VU/8")(l,a,!1,null,null,null);e.default=r.exports}});