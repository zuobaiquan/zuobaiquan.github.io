webpackJsonp([28],{d1r4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("lC5x"),n=a.n(s),r=a("J0Oq"),i=a.n(r),c=a("vMJZ"),o=null,l={name:"Register",data:function(){return{email:"",code:"",sendFlag:!1,time:60}},methods:{goBack:function(){this.$router.replace({path:"accountsecurity"})},getCode:function(){var e=this;return i()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isEmail(e.email)||e.sendFlag){t.next=14;break}return t.prev=1,t.next=4,Object(c.h)("email="+e.email);case 4:200==(a=t.sent).status&&a.data&&0==a.data.code?(Toast(a.data.message),e.sendFlag=!0,o=setInterval(function(){--this.time,0==this.time&&(this.sendFlag=!1,this.time=60,clearInterval(o))}.bind(e),1e3)):(Toast(a.data.message),e.sendFlag=!1,e.time=60,clearInterval(o)),t.next=14;break;case 8:t.prev=8,t.t0=t.catch(1),Toast("接口异常，稍后再试"),e.sendFlag=!1,e.time=60,clearInterval(o);case 14:case"end":return t.stop()}},t,e,[[1,8]])}))()},submit:function(){var e=this;return i()(n.a.mark(function t(){var a,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.isEmail(e.email)&&e.isEmpty(e.code,"验证码不能为空")&&e.verifyLength(e.code,"验证码长度为6位",6))){t.next=12;break}return a="code="+e.code+"&email="+e.email,t.next=4,Object(c.i)(a);case 4:if(200!=(s=t.sent).status||!s.data||0!=s.data.code){t.next=10;break}Toast("邮箱设置成功"),e.$router.replace({path:"accountsecurity",query:{}}),t.next=12;break;case 10:return Toast(s.data.message||"邮箱设置失败"),t.abrupt("return");case 12:case"end":return t.stop()}},t,e)}))()}},created:function(){this.$nextTick(function(){document.body.className="bgGray"})},beforeDestroy:function(){document.body.className=""}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-box"},[a("div",{staticClass:"tit-title"},[a("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"},on:{click:e.goBack}}),e._v("添加邮箱"),a("a",{staticClass:"house-icon",attrs:{href:"javascript:;"},on:{click:e.userPage}})]),e._v(" "),a("section",{staticClass:"form-box form-box2"},[a("ul",{staticClass:"form-list"},[a("li",[a("span",{staticClass:"input-txt"},[e._v("邮箱账号")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{placeholder:"请输入您的邮箱账号",type:"text",name:"",value:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"mail-inputcode",attrs:{maxlength:"6",type:"tel",placeholder:"请输入验证码",value:""},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),a("a",{staticClass:"get-code",attrs:{href:"javascript:;"},on:{click:e.getCode}},[e._v(e._s(e.sendFlag?e.time+"s":"获取验证码"))])])]),e._v(" "),a("a",{staticClass:"fine-btn singe-finebtn btning",attrs:{href:"javascript:;"},on:{click:e.submit}},[e._v("添加邮箱")])])])},staticRenderFns:[]},d=a("C7Lr")(l,u,!1,null,null,null);t.default=d.exports}});