webpackJsonp([8],{"sRf/":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"transferFund",data:function(){return{moneyNum:"",maskShow:!1}},methods:{closePop:function(){this.maskShow=!1}},created:function(){document.body.className="bgGray"},mounted:function(){},beforeDestroy:function(){document.body.className=""}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"person-center index-box"},[t._m(0),t._v(" "),a("p",{staticClass:"common-txt"},[t._v("转入到")]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"recharge-money"},[a("p",{staticClass:"recharge-tit"},[t._v("充值金额")]),t._v(" "),a("div",{staticClass:"recharge-number"},[a("span",[t._v("¥")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.moneyNum,expression:"moneyNum"}],attrs:{placeholder:"请输入您要转入的金额",type:"text",name:"",value:""},domProps:{value:t.moneyNum},on:{input:function(s){s.target.composing||(t.moneyNum=s.target.value)}}})])]),t._v(" "),a("p",{staticClass:"common-txt"},[t._v("转出")]),t._v(" "),t._m(2),t._v(" "),a("p",{staticClass:"fund-tips"},[t._v("提示：仅支持同币种FinE卡之间转账")]),t._v(" "),a("a",{staticClass:"fine-btn singe-finebtn",attrs:{href:"javascript;"}},[t._v("转账")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"mask"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"popBox"},[a("p",{staticClass:"pop-title"},[t._v("转账失败")]),t._v(" "),t._m(3),t._v(" "),a("a",{staticClass:"pop-btn",attrs:{href:"javascript:;"},on:{click:t.closePop}},[t._v("好的，我知道了")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tit-title"},[s("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"}}),this._v("转账"),s("a",{staticClass:"person-icon",attrs:{href:"javascript:;"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"info-list"},[a("li",[a("span",[t._v("姓名")]),t._v(" "),a("input",{attrs:{placeholder:"请输入转账人姓名",type:"text",name:"",value:""}})]),t._v(" "),a("li",[a("span",[t._v("FinE卡号")]),t._v(" "),a("input",{attrs:{placeholder:"请输入FinE卡号",type:"text",name:"",value:""}})]),t._v(" "),a("li",[a("span",[t._v("卡号币种")]),t._v(" "),a("span",{staticClass:"right-graytxt"},[t._v("美金")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"info-list"},[a("li",[a("span",[t._v("FinE卡号")]),t._v(" "),a("span",{staticClass:"right-graytxt"},[t._v("5295 **** **** 7537")])]),t._v(" "),a("li",[a("span",[t._v("卡号币种")]),t._v(" "),a("span",{staticClass:"right-graytxt"},[t._v("港币")])]),t._v(" "),a("li",[a("span",[t._v("可转出金额")]),t._v(" "),a("span",{staticClass:"right-orangetxt"},[t._v("888.00"),a("sub",[t._v("HKD")])])]),t._v(" "),a("li",[a("span",[t._v("手机号码")]),t._v(" "),a("input",{attrs:{placeholder:"请输入您的手机号码",type:"text",name:"",value:""}})]),t._v(" "),a("li",[a("input",{staticClass:"input-left",attrs:{placeholder:"请输入验证码",type:"text",name:"",value:""}}),t._v(" "),a("a",{staticClass:"get-code",attrs:{href:"javascript:;"}},[t._v("获取验证码")])]),t._v(" "),a("li",[a("input",{staticClass:"input-left",attrs:{placeholder:"请输入您的FinE卡支付密码",type:"text",name:"",value:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"pop-content"},[s("p",{staticClass:"pop-express"},[this._v("此平台仅支持同币种FinE卡之间转账，请重新核对您的信息再操作！")])])}]},i=a("VU/8")(e,n,!1,null,null,null);s.default=i.exports}});