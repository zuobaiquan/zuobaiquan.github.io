webpackJsonp([12],{JGWG:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n={name:"Register",data:function(){return{}},methods:{getInputphone:function(t){console.log("phone",t)},getInputcode:function(t){console.log("code",t)},getInputPass:function(t){console.log("pass",t)},getInputRepass:function(t){console.log("repass",t)}},created:function(){},mounted:function(){}},a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"user-box"},[e("header",{staticClass:"user-title"},[t._v("注册")]),t._v(" "),e("section",{staticClass:"form-box"},[e("i",{staticClass:"form-logo"}),t._v(" "),e("ul",{staticClass:"form-list"},[e("li",[e("i",{staticClass:"form-icon icon-phone"}),t._v(" "),e("emInput",{attrs:{type:"number",maxlength:11,placeholder:"请输入手机号码"},on:{input:t.getInputphone}})],1),t._v(" "),e("li",[e("i",{staticClass:"form-icon icon-code"}),t._v(" "),e("emInput",{attrs:{type:"number",maxlength:6,placeholder:"请输入验证码"},on:{input:t.getInputcode}}),t._v(" "),e("a",{staticClass:"get-code",attrs:{href:"javascript:;"}},[t._v("获取验证码")])],1),t._v(" "),e("li",[e("i",{staticClass:"form-icon icon-password"}),t._v(" "),e("emInput",{attrs:{star:!0,placeholder:"请设置您的登录密码"},on:{input:t.getInputPass}})],1),t._v(" "),e("li",[e("i",{staticClass:"form-icon icon-repassword"}),t._v(" "),e("emInput",{attrs:{star:!0,placeholder:"再次确认您的登录密码"},on:{input:t.getInputRepass}})],1)]),t._v(" "),e("a",{staticClass:"fine-btn",attrs:{href:"javascript;"}},[t._v("注册")]),t._v(" "),e("a",{staticClass:"fine-login",attrs:{href:"#/login"}},[t._v("已有账号，去登录")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"protocol-txt"},[this._v("注册即代表我已阅读并同意"),s("a",{attrs:{href:"javascript:;"}},[this._v("《金科元素》")]),this._v("协议")])}]},o=e("VU/8")(n,a,!1,null,null,null);s.default=o.exports}});