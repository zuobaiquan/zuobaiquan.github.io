webpackJsonp([8],{GcRn:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={name:"userauth",data:function(){return{}},methods:{getInputIDCard:function(t){console.log("idcard",t)},getInputName:function(t){console.log("name",t)}},created:function(){},mounted:function(){}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-box"},[t._m(0),t._v(" "),e("section",{staticClass:"form-box"},[e("p",{staticClass:"auth-tit"},[t._v("识别身份证正反面")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",{staticClass:"auth-tit"},[t._v("上传手持身份证照片")]),t._v(" "),t._m(3),t._v(" "),e("p",{staticClass:"auth-tit"},[t._v("资料填写")]),t._v(" "),e("ul",{staticClass:"form-list"},[e("li",[e("i",{staticClass:"form-icon icon-user"}),t._v(" "),e("emInput",{attrs:{placeholder:"请填写您真实的姓名"},on:{input:t.getInputName}})],1),t._v(" "),e("li",[e("i",{staticClass:"form-icon icon-idcard"}),t._v(" "),e("emInput",{attrs:{type:"number",maxlength:18,placeholder:"请输入您有效的身份证号码"},on:{input:t.getInputIDCard}})],1),t._v(" "),t._m(4)]),t._v(" "),e("a",{staticClass:"fine-btn",attrs:{href:"javascript;"}},[t._v("提交申请")]),t._v(" "),t._m(5)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tit-title"},[s("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"}}),this._v("实名认证"),s("a",{staticClass:"person-icon",attrs:{href:"javascript:;"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pic-upload"},[s("i"),this._v(" "),s("p",[this._v("正面")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pic-upload pic-upload2"},[s("i"),this._v(" "),s("p",[this._v("反面")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pic-upload"},[s("i"),this._v(" "),s("p",[this._v("手持身份证")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("i",{staticClass:"form-icon icon-datetime"}),this._v(" "),s("input",{attrs:{placeholder:"请输入证件有效期",type:"text",name:"",value:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"protocol-txt"},[this._v("提交申请即代表我阅读并同意"),s("a",{attrs:{href:"javascript:;"}},[this._v("《服务条款》")])])}]},n=e("VU/8")(a,i,!1,null,null,null);s.default=n.exports}});