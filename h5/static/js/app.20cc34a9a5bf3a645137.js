webpackJsonp([1],{E2dV:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={};s.d(a,"parseTime",function(){return w}),s.d(a,"formatTime",function(){return b});var n=s("ZLEe"),i=s.n(n),r=s("MVMM"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=s("vSla")({name:"App"},o,!1,function(e){s("E2dV")},null,null).exports,l=s("zO6J"),m={name:"taskItem",data:function(){return{}},props:{list:{type:Array}},methods:{nameFormate:function(e){return e.length>=2?e.substr(-2,1)+e.substr(-1,1):e}},created:function(){}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task-container"},e._l(e.list,function(t,a){return s("div",{staticClass:"task-item"},[s("span",{staticClass:"name"},[e._v(e._s(e.nameFormate(t.name)))]),e._v(" "),s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-top"},[s("span",[e._v(e._s(e.nameFormate(t.name))),s("span",{staticClass:"item-work"},[e._v(e._s(t.action))])]),e._v(" "),s("span",[e._v(e._s(e._f("parseTime")(t.createTime,"{y}.{m}.{d} {h}:{i}")))])]),e._v(" "),s("div",{staticClass:"work-dec"},[e._v(e._s(t.taskTitle))]),e._v(" "),t.cancelReason?s("div",{staticClass:"cancel-reason"},[e._v("取消原因："+e._s(t.cancelReason))]):e._e()])])}))},staticRenderFns:[]},d={name:"taskList",data:function(){return{page:0,size:10,recordList:[],isLoading:!0,isOver:!1}},components:{taskItem:s("vSla")(m,u,!1,null,null,null).exports},methods:{getTasklist:function(e,t){var s=e.api+"/api/record?page="+t+"&size="+e.size+"&sort=createTime,desc";this.getUrlParam("date")&&(s=e.api+"/api/record?page="+t+"&size="+e.size+"&date="+this.getUrlParam("date")+"&sort=createTime,desc"),e.$ajax({method:"GET",url:s}).then(function(t){t.data.content.length<e.size&&(e.isOver=!0,e.isLoading=!1),e.recordList=e.recordList.concat(t.data.content),console.log(e.recordList)}).catch(function(e){console.log(e)})},getUrlParam:function(e){var t=document.location.toString().split("?");if(t.length>1){for(var s,a=t[1].split("&"),n=0;n<a.length;n++)if(null!=(s=a[n].split("="))&&s[0]==e)return s[1];return""}return""}},mounted:function(){var e=this;window.onscroll=function(){if(window.screen.height+(document.body.scrollTop||document.documentElement.scrollTop)>=(document.body.scrollHeight||document.documentElement.scrollHeight)){if(e.isOver)return;e.page++,e.getTasklist(e,e.page)}}},created:function(){this.getTasklist(this,this.page)}},h={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"task-list"},[s("taskItem",{attrs:{list:e.recordList}}),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],staticClass:"loading-wrap"},[s("i"),e._v(" "),s("span",[e._v("加载中...")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isOver,expression:"isOver"}],staticClass:"loaded"},[e._v("没有更多数据")])],1)},staticRenderFns:[]},p=s("vSla")(d,h,!1,null,null,null).exports,v=s("3cXf"),f=s.n(v),g={name:"memberList",data:function(){return{page:0,size:10,adminList:[],memberList:[],chosenList:[{id:"",name:""}]}},methods:{nameFormate:function(e){return e.length>=2?e.substr(-2,1)+e.substr(-1,1):e},getUrlParam:function(e){var t=document.location.toString().split("?");if(t.length>1){for(var s,a=t[1].split("&"),n=0;n<a.length;n++)if(null!=(s=a[n].split("="))&&s[0]==e)return s[1];return""}return""},chosenMember:function(e){var t=this;"false"!=this.getUrlParam("isSelect")&&(this.adminList.map(function(s,a){s.id==e&&(s.isChosen=!s.isChosen,s.isChosen?t.chosenList.push({id:s.id,realName:s.realName}):t.chosenList.splice(a,1))}),this.memberList.map(function(s,a){s.id==e&&(s.isChosen=!s.isChosen,s.isChosen?t.chosenList.push({id:s.id,realName:s.realName}):t.chosenList.splice(a,1))}),console.log(f()(this.chosenList)),window.webkit.messageHandlers.avatarClick.postMessage(f()(this.chosenList)))},getMemberlist:function(e,t){var s=[];this.chosenList.shift(),e.getUrlParam("ids")&&(s=e.getUrlParam("ids").split(",")),e.$ajax({method:"GET",url:e.api+"/api/user?page="+t+"&size="+e.size+"&sort=createTime,desc"}).then(function(t){t.data.content.map(function(t,a){t.randomcolor=parseInt(12*Math.random()+1,10),t.isChosen=!1,s.includes(""+t.id)&&(t.isChosen=!0,e.chosenList.push({id:t.id,realName:t.realName})),0==t.userType&&e.memberList.push(t),1==t.userType&&e.adminList.push(t)})}).catch(function(e){console.log(e)})}},created:function(){this.getMemberlist(this,this.page)}},_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"member-list"},[s("div",{staticClass:"top"},[e._v("任务分配给指定员工负责，对方在任务开始和快过期会收到 推送.")]),e._v(" "),s("div",{staticClass:"tit"},[e._v("负责人、管理员")]),e._v(" "),s("ul",{staticClass:"list-item"},e._l(e.adminList,function(t,a){return s("li",{on:{click:function(s){e.chosenMember(t.id)}}},[s("span",{staticClass:"name-box",class:"color"+t.randomcolor},[e._v(e._s(e.nameFormate(t.realName)))]),e._v(" "),s("span",{staticClass:"name"},[e._v(e._s(e.nameFormate(t.realName)))]),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isChosen,expression:"item.isChosen"}],staticClass:"is-chosen"})])})),e._v(" "),s("div",{staticClass:"tit"},[e._v("成员")]),e._v(" "),s("ul",{staticClass:"list-item"},e._l(e.memberList,function(t,a){return s("li",{on:{click:function(s){e.chosenMember(t.id)}}},[s("span",{staticClass:"name-box",class:"color"+t.randomcolor},[e._v(e._s(e.nameFormate(t.realName)))]),e._v(" "),s("span",{staticClass:"name"},[e._v(e._s(e.nameFormate(t.realName)))]),e._v(" "),s("i",{directives:[{name:"show",rawName:"v-show",value:t.isChosen,expression:"item.isChosen"}],staticClass:"is-chosen"})])}))])},staticRenderFns:[]},C=s("vSla")(g,_,!1,null,null,null).exports;r.a.use(l.a);var L=new l.a({routes:[{path:"/record",name:"taskList",component:p,meta:{title:"操作记录"}},{path:"/",name:"taskList",component:p},{path:"/member",name:"memberList",component:C,meta:{title:"成员管理"}}]});function w(e,t){if(e=e.replace(/-/g,"/"),0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var s=t||"{y}-{m}-{d} {h}:{i}:{s}",a=new Date(e),n={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return s.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var s=n[t];return"a"===t?["一","二","三","四","五","六","日"][s-1]:(e.length>0&&s<10&&(s="0"+s),s||0)})}function b(e,t){e=1e3*+e;var s=new Date(e),a=(Date.now()-s)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?w(e,t):s.getMonth()+1+"月"+s.getDate()+"日"+s.getHours()+"时"+s.getMinutes()+"分"}var k=s("aozt"),T=s.n(k);L.beforeEach(function(e,t,s){e.meta.title&&(document.title=e.meta.title),s()}),r.a.config.productionTip=!1,i()(a).forEach(function(e){r.a.filter(e,a[e])}),r.a.prototype.$ajax=T.a,r.a.prototype.api="http://120.24.183.106:9089",new r.a({el:"#app",router:L,components:{App:c},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.20cc34a9a5bf3a645137.js.map