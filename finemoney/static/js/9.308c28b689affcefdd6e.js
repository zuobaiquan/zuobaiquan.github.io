webpackJsonp([9],{AUWi:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s="",i={name:"cardactive",data:function(){return{idcardData:""}},watch:{idcardData:function(t){t.length>s.length?s+=t.slice(-1):t.length<s.length&&(s=s.slice(0,s.length-2)),this.idcardData=this.idcardData.replace(/./g,"*")}},methods:{},created:function(){},mounted:function(){}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user-box"},[t._m(0),t._v(" "),e("section",{staticClass:"form-box"},[e("p",{staticClass:"active-txt"},[t._v("激活FinE卡")]),t._v(" "),e("ul",{staticClass:"form-list"},[t._m(1),t._v(" "),e("li",[e("i",{staticClass:"form-icon icon-password"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.idcardData,expression:"idcardData"}],attrs:{placeholder:"请设置6位数字支付密码",type:"text",name:"",value:""},domProps:{value:t.idcardData},on:{input:function(a){a.target.composing||(t.idcardData=a.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),e("p",{staticClass:"form-redtips"},[t._v("短信验证码已发送到您输入的手机号码")]),t._v(" "),e("a",{staticClass:"fine-btn",attrs:{href:"javascript;"}},[t._v("激活")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tit-title"},[a("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"}}),this._v("激活FinE卡"),a("a",{staticClass:"person-icon",attrs:{href:"javascript:;"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("i",{staticClass:"form-icon icon-card"}),this._v(" "),a("input",{attrs:{placeholder:"5295878728267537",type:"text",name:"",value:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("i",{staticClass:"form-icon icon-repassword"}),this._v(" "),a("input",{attrs:{placeholder:"再次确认密码",type:"password",name:"",value:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("i",{staticClass:"form-icon icon-phone"}),this._v(" "),a("input",{attrs:{placeholder:"请输入您的手机号码",type:"text",name:"",value:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("i",{staticClass:"form-icon icon-code"}),this._v(" "),a("input",{attrs:{placeholder:"请输入短信验证码",type:"text",name:"",value:""}}),this._v(" "),a("a",{staticClass:"get-code",attrs:{href:"javascript:;"}},[this._v("获取验证码")])])}]},c=e("VU/8")(i,r,!1,null,null,null);a.default=c.exports}});