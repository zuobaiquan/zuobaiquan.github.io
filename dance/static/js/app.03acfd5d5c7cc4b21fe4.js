webpackJsonp([2],{Ll7u:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};n.d(a,"parseTime",function(){return s}),n.d(a,"formatTime",function(){return f});var r=n("ZLEe"),i=n.n(r),o=n("IvJb"),u={name:"App",created:function(){!function(e,t){var n,a=e.documentElement;n="orientationchange"in t?"orientationchange":"resize";var r=function(){var e=a.clientWidth;e&&(a.style.fontSize=(e>=750?750:e)/375*50+"px")};e.addEventListener&&(t.addEventListener(n,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window)}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var l=n("vSla")(u,c,!1,function(e){n("Ll7u")},null,null).exports,d=n("zO6J");o.a.use(d.a);var p=new d.a({routes:[{path:"/Index",name:"Index",component:function(e){n.e(0).then(function(){var t=[n("J91o")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"活动详情"}},{path:"/",redirect:{name:"Index"}}]});function s(e,t){if(e=e.replace(/-/g,"/"),0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=new Date(e),r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=r[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function f(e,t){e=1e3*+e;var n=new Date(e),a=(Date.now()-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?s(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}var h=n("aozt"),v=n.n(h);p.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}),o.a.config.productionTip=!1,i()(a).forEach(function(e){o.a.filter(e,a[e])}),o.a.prototype.$ajax=v.a,o.a.prototype.api="http://47.104.204.137:8002/industry-social-distribution",new o.a({el:"#app",router:p,components:{App:l},template:"<App/>"})}},["NHnr"]);