webpackJsonp([2],{"5HJ5":function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a={methods:{nameFormate:function(t){return(t+="").length>=2?t.substr(-2,1)+t.substr(-1,1):t},getUrlParam:function(t){var e=document.location.toString().split("?");if(e.length>1){for(var s,a=e[1].split("&"),n=0;n<a.length;n++)if(null!=(s=a[n].split("="))&&s[0]==t)return s[1];return""}return""}}}},Gq4u:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("5HJ5"),n={name:"taskItem",data:function(){return{}},props:{list:{type:Array}},methods:{genHash:function(t){for(var e=5381,s=0,a=(t=t||"").length;s<a;++s)e+=(e<<5)+t.charAt(s).charCodeAt();return(2147483647&e)%12},nameFormate:function(t){return(t+="").length>=2?t.substr(-2,1)+t.substr(-1,1):t}},created:function(){}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-container"},t._l(t.list,function(e,a){return s("div",{staticClass:"task-item"},[s("span",{staticClass:"name",class:"color"+t.genHash(e.name)},[t._v(t._s(t.nameFormate(e.name)))]),t._v(" "),s("div",{staticClass:"item-content"},[s("div",{staticClass:"item-top"},[s("span",[t._v(t._s(t.nameFormate(e.name))),s("span",{staticClass:"item-work"},[t._v(t._s(e.action))])]),t._v(" "),s("span",[t._v(t._s(t._f("parseTime")(e.createTime,"{y}.{m}.{d} {h}:{i}")))])]),t._v(" "),s("div",{staticClass:"work-dec"},[t._v(t._s(e.taskTitle))]),t._v(" "),e.cancelReason?s("div",{staticClass:"cancel-reason"},[t._v("取消原因："+t._s(e.cancelReason))]):t._e()])])}))},staticRenderFns:[]},r=s("vSla")(n,i,!1,null,null,null).exports,o={mixins:[a.a],name:"taskList",data:function(){return{page:0,size:10,recordList:[],isLoading:!0,isOver:!1}},components:{taskItem:r},methods:{getTasklist:function(t,e){var s=t.api+"/api/record?page="+e+"&size="+t.size+"&sort=createTime,desc";this.getUrlParam("date")&&(s=t.api+"/api/record?page="+e+"&size="+t.size+"&date="+this.getUrlParam("date")+"&sort=createTime,desc"),t.$ajax({method:"GET",url:s}).then(function(e){e.data.content.length<t.size&&(t.isOver=!0,t.isLoading=!1),t.recordList=t.recordList.concat(e.data.content)}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;window.onscroll=function(){if(window.screen.height+(document.body.scrollTop||document.documentElement.scrollTop)>=(document.body.scrollHeight||document.documentElement.scrollHeight)){if(t.isOver)return;t.page++,t.getTasklist(t,t.page)}}},created:function(){this.getTasklist(this,this.page)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-list"},[s("taskItem",{attrs:{list:t.recordList}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-wrap"},[s("i"),t._v(" "),s("span",[t._v("加载中...")])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOver,expression:"isOver"}],staticClass:"loaded"},[t._v("没有更多数据")])],1)},staticRenderFns:[]},l=s("vSla")(o,c,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=2.3c266fdf4e5e398d270a.js.map