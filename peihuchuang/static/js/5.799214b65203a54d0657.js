webpackJsonp([5],{"1Yfy":function(t,e,n){var a=n("oiSx");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("35ca8bde",a,!0)},"5aCZ":function(t,e,n){"use strict";var a=n("TIfe"),i=n("mtWM"),r=n.n(i),o={name:"Tinymce",props:{id:{type:String,default:"tinymceEditor"},height:{type:Number,default:300},width:{type:Number,default:null},value:{type:String,default:""},data:function(){return{hasChange:!1,hasInit:!1}}},mounted:function(){var t=this,e=this;tinymce.init({selector:"#"+this.id,language:"zh_CN",height:this.height,width:this.width,menubar:!1,plugins:["advlist autolink lists link image imagetools charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen textcolor colorpicker","insertdatetime media table contextmenu paste code help"],toolbar:["insert | undo redo | table styleselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | removeformat code"],images_upload_url:"postAcceptor.php",init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",n.getContent({format:"raw"}))})},images_upload_handler:function(t,e,n){r.a.defaults.headers.common.Authorization=Object(a.b)();var i=new FormData;i.append("file",t.blob()),r.a.post("http://47.107.249.233:8086/api/upload",i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var n=t.data.data;e(n)}).catch(function(t){console.log(t)})}})},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(e.id).setContent(t)})}},destroyed:function(){tinymce.get(this.id).destroy()}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container"},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.id}})])},staticRenderFns:[]};var l=n("VU/8")(o,s,!1,function(t){n("1Yfy")},"data-v-3b35bfd9",null);e.a=l.exports},Zt4k:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("V/8j"),i={data:function(){return{form:{title:"",content:""},statusOptions:[{id:"a1",name:"用户协议文案"},{id:"a2",name:"押金使用说明文案"},{id:"a3",name:"计费规则文案"},{id:"a4",name:"关于我们文案"},{id:"a5",name:"归还异常文案"},{id:"a6",name:"首页内容文案"},{id:"a7",name:"使用说明文案"}],rules:{content:[{required:!0,message:"内容不能为空",trigger:"blur"}]},edit:+this.$route.params.editid,flag:+this.$route.params.flag}},components:{Tinymce:n("5aCZ").a},created:function(){this.getArticle()},methods:{getArticle:function(){var t=this;Object(a.k)({type:"about"}).then(function(e){t.form=e.data.data})},submitRes:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;Object(a.g)(e.form).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"修改成功",type:"success"}),e.getArticle()):e.$message({message:t.data.message||"修改失敗",type:"warning"})})})}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"问题",prop:"content"}},[n("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"答案",prop:"content"}},[n("Tinymce",{ref:"editor",attrs:{height:550,width:800,id:"tinymce"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),n("el-form-item",{attrs:{label:""}},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("form")}}},[t._v("确定")])],1)],1)],1)},staticRenderFns:[]},o=n("VU/8")(i,r,!1,null,null,null);e.default=o.exports},oiSx:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.tinymce-container[data-v-3b35bfd9] {\r\n  position: relative\n}\n.tinymce-textarea[data-v-3b35bfd9] {\r\n  visibility: hidden;\r\n  z-index: -1;\n}\r\n\r\n",""])}});