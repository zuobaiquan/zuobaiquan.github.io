webpackJsonp([17],{"Fy+Y":function(t,n,e){"use strict";n.a=[{path:"/index",name:"Index",component:function(t){e.e(11).then(function(){var n=[e("J91o")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"首页"}},{path:"/register",name:"Register",component:function(t){e.e(6).then(function(){var n=[e("JGWG")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"注册"}},{path:"/login",name:"Login",component:function(t){e.e(9).then(function(){var n=[e("qzG6")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"登陆"}},{path:"/personcenter",name:"Personcenter",component:function(t){e.e(8).then(function(){var n=[e("7NXY")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"个人中心"}},{path:"/userinfo",name:"Userinfo",component:function(t){Promise.all([e.e(3),e.e(0)]).then(function(){var n=[e("pkLm")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"个人资料"}},{path:"/cardinfo",name:"CardInfo",component:function(t){e.e(2).then(function(){var n=[e("JNnp")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"FinE卡"}},{path:"/cardactive",name:"CardActive",component:function(t){e.e(13).then(function(){var n=[e("AUWi")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"激活FinE卡"}},{path:"/indexsuccess",name:"IndexSuccess",component:function(t){e.e(10).then(function(){var n=[e("3GxB")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"成功页面"}},{path:"/userauth",name:"UserAuth",component:function(t){e.e(4).then(function(){var n=[e("GcRn")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"实名认证"}},{path:"/cardfee",name:"CardFee",component:function(t){e.e(12).then(function(){var n=[e("LqWg")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"卡片申请"}},{path:"/recharge",name:"Recharge",component:function(t){e.e(7).then(function(){var n=[e("0LUI")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"充值"}},{path:"/accountsecurity",name:"AccountSecurity",component:function(t){Promise.all([e.e(15),e.e(0)]).then(function(){var n=[e("Hkfb")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"账户安全"}},{path:"/reportloss",name:"ReportLoss",component:function(t){Promise.all([e.e(5),e.e(0)]).then(function(){var n=[e("e+cB")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"挂失"}},{path:"/addemail",name:"AddEmail",component:function(t){e.e(14).then(function(){var n=[e("d1r4")];t.apply(null,n)}.bind(this)).catch(e.oe)},meta:{title:"添加邮箱"}},{path:"/navigation",name:"navigationIndex",component:function(t){e.e(1).then(function(){var n=[e("Q36e")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",redirect:{name:"navigationIndex"}}]},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a={};e.d(a,"parseTime",function(){return m}),e.d(a,"formatTime",function(){return s});var i=e("fZjL"),o=e.n(i),c=e("7+uW"),r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var l=e("VU/8")({name:"App",created:function(){}},r,!1,function(t){e("oA8a")},null,null).exports,u=e("/ocq"),p=e("Fy+Y");c.a.use(u.a),console.log(p.a);var h=new u.a({routes:p.a});function m(t,n){if(t=t.replace(/-/g,"/"),0===arguments.length)return null;10===(t+"").length&&(t=1e3*+t);var e=n||"{y}-{m}-{d} {h}:{i}:{s}",a=new Date(t),i={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return e.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,n){var e=i[n];return"a"===n?["一","二","三","四","五","六","日"][e-1]:(t.length>0&&e<10&&(e="0"+e),e||0)})}function s(t,n){t=1e3*+t;var e=new Date(t),a=(Date.now()-e)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":n?m(t,n):e.getMonth()+1+"月"+e.getDate()+"日"+e.getHours()+"时"+e.getMinutes()+"分"}var f=e("mtWM"),d=e.n(f);h.beforeEach(function(t,n,e){t.meta.title&&(document.title=t.meta.title),e()}),c.a.config.productionTip=!1,o()(a).forEach(function(t){c.a.filter(t,a[t])}),c.a.prototype.$ajax=d.a,c.a.prototype.api="http://47.104.204.137:8002/industry-social-distribution",new c.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},oA8a:function(t,n){}},["NHnr"]);