webpackJsonp([0],{"/dSo":function(t,e,n){
/*!
 * clipboard.js v2.0.1
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var i;i=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var i,o,r,a;a=function(t,e){"use strict";var n,i=(n=e)&&n.__esModule?n:{default:n};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":o(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=a},o=[t,n(7)],void 0===(r="function"==typeof(i=a)?i.apply(e,o):i)||(t.exports=r)},function(t,e,n){var i=n(6),o=n(5);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!i.string(e))throw new TypeError("Second argument must be a String");if(!i.fn(n))throw new TypeError("Third argument must be a Function");if(i.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(i.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(i.string(t))return function(t,e,n){return o(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var i=this.e||(this.e={});return(i[t]||(i[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var i=this;function o(){i.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),i=0,o=n.length;i<o;i++)n[i].fn.apply(n[i].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),i=n[t],o=[];if(i&&e)for(var r=0,a=i.length;r<a;r++)i[r].fn!==e&&i[r].fn._!==e&&o.push(i[r]);return o.length?n[t]=o:delete n[t],this}},t.exports=n},function(t,e,n){var i,o,r,a;a=function(t,e,n,i){"use strict";var o=s(e),r=s(n),a=s(i);function s(t){return t&&t.__esModule?t:{default:t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return i.resolveOptions(n),i.listenClick(t),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r.default),u(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===c(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,a.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new o.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return f("action",t)}},{key:"defaultTarget",value:function(t){var e=f("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return f("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function f(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},o=[t,n(0),n(2),n(1)],void 0===(r="function"==typeof(i=a)?i.apply(e,o):i)||(t.exports=r)},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var i=Element.prototype;i.matches=i.matchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector||i.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){var i=n(4);function o(t,e,n,o,r){var a=function(t,e,n,o){return function(n){n.delegateTarget=i(n.target,e),n.delegateTarget&&o.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}t.exports=function(t,e,n,i,r){return"function"==typeof t.addEventListener?o.apply(null,arguments):"function"==typeof n?o.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return o(t,e,n,i,r)}))}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var i=window.getSelection(),o=document.createRange();o.selectNodeContents(t),i.removeAllRanges(),i.addRange(o),e=i.toString()}return e}}])},t.exports=i()},"3cXf":function(t,e,n){t.exports={default:n("RJ+u"),__esModule:!0}},Eaaq:function(t,e,n){t.exports=n.p+"static/img/img1.802d14d.jpg"},J91o:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("3cXf"),o=n.n(i),r=n("Eaaq"),a=n.n(r),s=n("aXrP"),c=n.n(s),u=n("/dSo"),l=n.n(u),f={name:"index",data:function(){return{page:0,size:10,imglist:[a.a,c.a],InviteCount:{},UserInfo:{},LastweekList:[],CurweekList:[],userId:-1,showCopy:!1,periodText:!1}},methods:{shareBtn:function(){var t={shareLink:"http://zuobaiquan.com/share/#/share?id="+this.getUrlParam("id")};window.jsonData=o()(t).toString(),console.log(window.jsonData);var e=navigator.userAgent.toLowerCase();/iphone|ipad|ipod/.test(e)?window.webkit.messageHandlers.share.postMessage(window.jsonData.toString()):/android/.test(e)&&lianlian.share(window.jsonData.toString())},nextPage:function(){this.periodText=!this.periodText},getUrlParam:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},onCopySuccess:function(t){var e=this,n=new l.a(".tag-copy");n.on("success",function(t){console.log("复制成功"),e.showCopy=!0,setTimeout(function(){e.showCopy=!1},2e3),n.destroy()}),n.on("error",function(t){console.log("该浏览器不支持自动复制"),n.destroy()})},getLastweekDate:function(t,e){t.$ajax({method:"GET",url:t.api+"/dist:activity-invite-weeks?weekYear="+e[0]+"&weekOfYear="+e[1]+"&endStatus=true&page=0&size=10"}).then(function(e){if(0==e.data.code)if(e.data.data.content.length>0){var n=e.data.data.content[0].id;t.getInviteRewards(t,n)}else t.LastweekList=[]}).catch(function(t){console.log(t)})},getInviteRewards:function(t,e){t.$ajax({method:"GET",url:t.api+"/dist:activity-invite-rewards?activityId="+e+"&page=0&size=10"}).then(function(e){0==e.data.code&&(t.LastweekList=e.data.data.content)}).catch(function(t){console.log(t)})},getCurweekDate:function(t,e){t.$ajax({method:"GET",url:t.api+"/dist:facade-statistics/period/inviteTopPage?weekYear="+e[0]+"&weekOfYear="+e[1]+"&page=0&size=10"}).then(function(e){0==e.data.code&&(t.CurweekList=e.data.data.content,console.log(t.CurweekList))}).catch(function(t){console.log(t)})},getInviteCount:function(t,e,n){t.$ajax({method:"GET",url:t.api+"/dist:facade-accounts/period/inviteCountInSpecifyLevel?specifyLevel=1&weekYear="+e[0]+"&weekOfYear="+e[1]+"&userId="+n}).then(function(e){t.InviteCount=e.data.data}).catch(function(t){console.log(t)})},getUserInfo:function(t,e){t.$ajax({method:"GET",url:t.api+"/dist:users/findByUserId/"+e+"?projection=withUser"}).then(function(e){t.UserInfo=e.data.data}).catch(function(t){console.log(t)})},getLastDay:function(t){var e=new Date,n=(e.getFullYear(),e.getMonth(),e.getDate(),new Date(e));return n.setDate(e.getDate()+t),n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()},getWeekOfYear:function(t){var e=new Date(t),n=e.getFullYear(),i=new Date(n,0,1),o=i.getDay(),r=1;0!=o&&(r=7-o+1),i=new Date(e.getFullYear(),0,1+r);var a=Math.ceil((e.valueOf()-i.valueOf())/864e5);return[n,Math.ceil(a/7)+1]}},created:function(){this.userId=this.getUrlParam("id")||100;var t=this.getWeekOfYear(this.getLastDay(0)),e=this.getWeekOfYear(this.getLastDay(-7));this.getInviteCount(this,t,this.userId),this.getCurweekDate(this,t),this.getLastweekDate(this,e),this.getUserInfo(this,this.userId)},mounted:function(){var t=this;window.share=function(){t.shareBtn()}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-box"},[n("div",{staticClass:"header-top1"},[n("img",{attrs:{src:t.imglist[0],alt:""}}),t._v(" "),n("div",{staticClass:"top1-box"},[n("span",{staticClass:"join-codetit"},[t._v("您的邀请码")]),t._v(" "),n("p",{staticClass:"join-code"},[t._v(t._s(t.UserInfo.inviteCode))]),t._v(" "),n("ul",{staticClass:"top-btnlist"},[n("li",[n("div",{staticClass:"tag-copy",attrs:{"data-clipboard-text":t.UserInfo.inviteCode},on:{click:t.onCopySuccess}},[t._v("复制")])]),t._v(" "),n("li",[n("div",{on:{click:function(e){t.shareBtn()}}},[t._v("立即分享")])])])])]),t._v(" "),n("img",{attrs:{src:t.imglist[1],alt:""}}),t._v(" "),n("div",{staticClass:"joinbox-content"},[n("ul",{staticClass:"my-list"},[n("li",[n("p",[t._v(t._s(t.InviteCount.periodInviteCount)+"人")]),t._v(" "),n("p",[t._v("本周邀请")])]),t._v(" "),n("li",[n("p",[t._v(t._s(t.InviteCount.historyInviteCount)+"人")]),t._v(" "),n("p",[t._v("历史邀请")])]),t._v(" "),n("li",[n("p",[t._v(t._s(t.UserInfo.accIncome)+"金币")]),t._v(" "),n("p",[t._v("累计奖励")])])]),t._v(" "),n("div",{staticClass:"thisweek-rank"},[n("span",[t._v(t._s(t.periodText?"往期奖励榜":"本周榜"))]),t._v(" "),n("div",{on:{click:function(e){t.nextPage()}}},[n("a",{attrs:{href:"javascript:;"}},[t._v(t._s(t.periodText?"本周邀请":"往期"))])])]),t._v(" "),t.CurweekList.length>0&&!t.periodText?n("ul",{staticClass:"friend-list"},t._l(t.CurweekList,function(e,i){return n("li",[t._v(t._s(i+1)+". "+t._s(e.distUser.user.nickName?e.distUser.user.nickName:"链链ID"+e.distUser.user.id)+"：本周邀请"+t._s(e.periodInviteCount)+"人")])})):t._e(),t._v(" "),0!=t.CurweekList.length||t.periodText?t._e():n("div",{staticClass:"no-data"},[t._v("暂无本周榜数据")]),t._v(" "),0==t.LastweekList.length&&t.periodText?n("div",{staticClass:"no-data"},[t._v("暂无往期奖励榜数据")]):t._e(),t._v(" "),t.LastweekList.length>0&&t.periodText?n("ul",{staticClass:"friend-list"},t._l(t.LastweekList,function(e,i){return n("li",[t._v(t._s(i+1)+". "+t._s(e.distUser.user.nickName?e.distUser.user.nickName:"链链ID"+e.distUser.user.id)+"：赚钱"+t._s(e.rewordAmount.toFixed(2))+"金币")])})):t._e()]),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.showCopy,expression:"showCopy"}],staticClass:"copy-box"},[t._v("复制成功")])])},staticRenderFns:[]},h=n("vSla")(f,d,!1,null,null,null);e.default=h.exports},"RJ+u":function(t,e,n){var i=n("AKd3"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},aXrP:function(t,e,n){t.exports=n.p+"static/img/img2.6f9efd6.jpg"}});