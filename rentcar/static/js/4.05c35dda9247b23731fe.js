webpackJsonp([4],{"1Yfy":function(t,e,a){var n=a("oiSx");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("35ca8bde",n,!0)},"5aCZ":function(t,e,a){"use strict";var n=a("TIfe"),i=a("mtWM"),r=a.n(i),o={name:"Tinymce",props:{id:{type:String,default:"tinymceEditor"},height:{type:Number,default:300},width:{type:Number,default:null},value:{type:String,default:""},data:function(){return{hasChange:!1,hasInit:!1}}},mounted:function(){var t=this,e=this;tinymce.init({selector:"#"+this.id,language:"zh_CN",height:this.height,width:this.width,menubar:!1,plugins:["advlist autolink lists link image imagetools charmap print preview anchor textcolor","searchreplace visualblocks code fullscreen textcolor colorpicker","insertdatetime media table contextmenu paste code help"],toolbar:["insert | undo redo | table styleselect | bold italic backcolor forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | removeformat code"],images_upload_url:"postAcceptor.php",init_instance_callback:function(a){e.value&&a.setContent(e.value),e.hasInit=!0,a.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",a.getContent({format:"raw"}))})},images_upload_handler:function(t,e,a){r.a.defaults.headers.common.Authorization=Object(n.c)();var i=new FormData;i.append("file",t.blob()),r.a.post("http://47.106.224.185:8086/api/upload",i,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){var a=t.data.data;e(a)}).catch(function(t){console.log(t)})}})},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return tinymce.get(e.id).setContent(t)})}},destroyed:function(){tinymce.get(this.id).destroy()}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container"},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.id}})])},staticRenderFns:[]};var l=a("VU/8")(o,s,!1,function(t){a("1Yfy")},"data-v-3b35bfd9",null);e.a=l.exports},SVPU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("0ChT"),i={data:function(){return{editFlag:!1,form:{status:"normal"},rules:{title:[{required:!0,message:"名称不能为空",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}]},edit:parseInt(this.$route.params.id),flag:parseInt(this.$route.params.flag)}},components:{Tinymce:a("5aCZ").a},created:function(){var t=this;-1==this.flag?(Object(n.d)({id:this.$route.params.id}).then(function(e){t.form=e.data.data}),this.$route.meta.title="编辑公告"):this.$route.meta.title="添加公告"},methods:{submitRes:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;!e.form.webUrl||/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i.test(e.form.webUrl)?-1==e.flag?Object(n.c)({id:e.form.id,title:e.form.title,content:e.form.content,webUrl:e.form.webUrl,type:"post"}).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"修改成功",type:"success"}),e.goBack()):e.$message({message:t.data.message||"修改失敗",type:"warning"})}):Object(n.a)({title:e.form.title,content:e.form.content,webUrl:e.form.webUrl,type:"post"}).then(function(t){200==t.status&&0==t.data.code?(e.$message({message:"添加成功",type:"success"}),e.goBack()):e.$message({message:t.data.message||"添加失敗",type:"warning"})}):e.$message({message:"链接格式不正确",type:"warning"})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"链接",prop:"webUrl"}},[a("el-input",{attrs:{placeholder:"请输入链接"},model:{value:t.form.webUrl,callback:function(e){t.$set(t.form,"webUrl",e)},expression:"form.webUrl"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"内容",prop:"content"}},[a("Tinymce",{ref:"editor",attrs:{height:550,width:800,id:"tinymce"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("form")}}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.goBack()}}},[t._v("返回")])],1)],1)],1)},staticRenderFns:[]},o=a("VU/8")(i,r,!1,null,null,null);e.default=o.exports},oiSx:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.tinymce-container[data-v-3b35bfd9] {\r\n  position: relative\n}\n.tinymce-textarea[data-v-3b35bfd9] {\r\n  visibility: hidden;\r\n  z-index: -1;\n}\r\n\r\n",""])}});