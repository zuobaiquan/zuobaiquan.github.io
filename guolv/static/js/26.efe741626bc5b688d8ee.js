webpackJsonp([26],{AUWi:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=t("lC5x"),s=t.n(r),n=t("J0Oq"),o=t.n(n),i=t("vMJZ"),c=t("GKtG"),d=null,l={name:"cardactive",data:function(){return{sendFlag:!1,time:60,phoneNum:"",cardInfo:{},password:"",repassword:"",verifyCode:"",userInfo:{},cardNo:"",activateCodeObj:{}}},methods:{goBack:function(){this.$router.replace({path:"index"})},getInputCardPass:function(e){this.password=e},getInputCardrePass:function(e){this.repassword=e},getPhoneCode:function(){var e=this;return o()(s.a.mark(function a(){var t;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e.isEmpty(e.cardNo,"卡号不为空")||!e.verifyLength(e.cardNo,"卡号长度为16位",16)||e.sendFlag){a.next=14;break}return a.prev=1,a.next=4,Object(c.g)("cardNo="+e.cardNo);case 4:200==(t=a.sent).status&&t.data&&0==t.data.code?(e.activateCodeObj=t.data.data,Toast(t.data.message),e.sendFlag=!0,d=setInterval(function(){--this.time,0==this.time&&(this.sendFlag=!1,this.time=60,clearInterval(d))}.bind(e),1e3)):(Toast(t.data.message),e.sendFlag=!1,e.time=60,clearInterval(d)),a.next=14;break;case 8:a.prev=8,a.t0=a.catch(1),Toast("接口异常，稍后再试"),e.sendFlag=!1,e.time=60,clearInterval(d);case 14:case"end":return a.stop()}},a,e,[[1,8]])}))()},activateClick:function(){var e=this;return o()(s.a.mark(function a(){var t,r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.isEmpty(e.cardNo,"卡号不为空")&&e.verifyLength(e.cardNo,"卡号长度为16位",16)&&e.isEmpty(e.verifyCode,"验证码不能为空")&&e.verifyLength(e.verifyCode,"验证码长度为6位",6)&&e.isEmpty(e.password,"密码不能为空")&&e.verifyLength(e.password,"密码长度为6位",6)&&e.isEmpty(e.repassword,"确认密码不能为空")&&e.isEquals(e.password,e.repassword))){a.next=22;break}if(e.sendFlag){a.next=4;break}return Toast("请获取验证码"),a.abrupt("return");case 4:return a.prev=4,t="cardNo="+e.cardNo+"&password="+e.password+"&verifyCode="+e.verifyCode+"&verifyWaterNo="+e.activateCodeObj.verifyWaterNo,a.next=8,Object(c.a)(t);case 8:if(200!=(r=a.sent).status||!r.data||0!=r.data.code){a.next=14;break}Toast("激活成功"),e.$router.push({path:"indexsuccess",query:{type:0}}),a.next=16;break;case 14:return Toast(r.data.message||"激活失败"),a.abrupt("return");case 16:a.next=22;break;case 18:return a.prev=18,a.t0=a.catch(4),Toast("接口异常，稍后再试"),a.abrupt("return");case 22:case"end":return a.stop()}},a,e,[[4,18]])}))()}},created:function(){var e=this;return o()(s.a.mark(function a(){var t,r;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(c.h)({cardId:e.getUrlParam("cardid")});case 3:return 200==(t=a.sent).status&&t.data?e.cardInfo=t.data.data:Toast(t.data.message||"接口异常，稍后再试"),a.next=7,Object(i.f)();case 7:200==(r=a.sent).status&&r.data?(e.userInfo=r.data.data,e.phoneNum=e.userInfo.mobNo):Toast(r.data.message||"接口异常，稍后再试"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),Toast("接口异常，稍后再试");case 14:case"end":return a.stop()}},a,e,[[0,11]])}))()}},u={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"user-box"},[t("div",{staticClass:"tit-title"},[t("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"},on:{click:e.goBack}}),e._v("激活FinE卡"),t("a",{staticClass:"house-icon",attrs:{href:"javascript:;"},on:{click:e.userPage}})]),e._v(" "),t("section",{staticClass:"form-box"},[t("p",{staticClass:"active-txt"},[e._v("激活FinE卡")]),e._v(" "),t("ul",{staticClass:"form-list"},[t("li",[t("i",{staticClass:"form-icon icon-card"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.cardNo,expression:"cardNo"}],attrs:{type:"tel",name:"",maxlength:"16",placeholder:"请输入激活卡号",value:""},domProps:{value:e.cardNo},on:{input:function(a){a.target.composing||(e.cardNo=a.target.value)}}})]),e._v(" "),t("li",[t("i",{staticClass:"form-icon icon-code"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCode,expression:"verifyCode"}],attrs:{type:"tel",name:"",maxlength:"6",value:"",placeholder:"请输入短信验证码"},domProps:{value:e.verifyCode},on:{input:function(a){a.target.composing||(e.verifyCode=a.target.value)}}}),e._v(" "),t("a",{staticClass:"get-code",attrs:{href:"javascript:;"},on:{click:e.getPhoneCode}},[e._v(e._s(e.sendFlag?e.time+"s":"获取验证码"))])]),e._v(" "),t("li",[t("i",{staticClass:"form-icon icon-password"}),e._v(" "),t("emInput",{attrs:{star:!0,maxlength:6,placeholder:"请设置6位数字支付密码"},on:{input:e.getInputCardPass}})],1),e._v(" "),t("li",[t("i",{staticClass:"form-icon icon-repassword"}),e._v(" "),t("emInput",{attrs:{star:!0,maxlength:6,placeholder:"再次确认密码"},on:{input:e.getInputCardrePass}})],1),e._v(" "),t("li",[t("i",{staticClass:"form-icon icon-phone"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNum,expression:"phoneNum"}],attrs:{disabled:"",type:"tel",name:"",maxlength:"11",placeholder:"请输入您的手机号码",value:""},domProps:{value:e.phoneNum},on:{input:function(a){a.target.composing||(e.phoneNum=a.target.value)}}})])]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.sendFlag,expression:"sendFlag"}],staticClass:"form-redtips"},[e._v("短信验证码已发送到您输入的手机号码")]),e._v(" "),t("a",{staticClass:"fine-btn btning",attrs:{href:"javascript:;"},on:{click:e.activateClick}},[e._v("激活")])])])},staticRenderFns:[]},p=t("C7Lr")(l,u,!1,null,null,null);a.default=p.exports}});