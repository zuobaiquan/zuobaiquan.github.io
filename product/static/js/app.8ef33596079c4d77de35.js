webpackJsonp([1],{ElFF:function(t,e){},FZux:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("MVMM"),i={name:"taskItem",data:function(){return{}},props:{list:{type:Array}},methods:{genHash:function(t){for(var e=5381,s=0,a=(t=t||"").length;s<a;++s)e+=(e<<5)+t.charAt(s).charCodeAt();return(2147483647&e)%12},lessTen:function(t){return parseInt(t)<10?"0"+t:t},nameFormate:function(t){return t.length>=2?t.substr(-2,1)+t.substr(-1,1):t},getEndTime:function(t){var e=new Date(t);return[this.lessTen(e.getHours()),this.lessTen(e.getMinutes())].join(":")}},created:function(){}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-container"},t._l(t.list,function(e,a){return s("div",{staticClass:"task-item",class:e.competeTime?"task-compete":""},[s("div",{staticClass:"task-title"},[s("i"),t._v(" "),s("span",[t._v(t._s(e.detail))])]),t._v(" "),s("div",{staticClass:"task-info"},[s("span",{staticClass:"type-name"},[t._v(t._s(0==e.type?"临":1==e.type?"周":"重"))]),t._v(" "),e.isParent?s("span",{staticClass:"type-name"},[t._v("主")]):t._e(),t._v(" "),e.parentTaskId?s("span",{staticClass:"type-name"},[t._v("子")]):t._e(),t._v(" "),s("i",{staticClass:"time-icon",class:e.isRedTime?"redtime-line":""}),t._v(" "),s("span",{staticClass:"date-line",class:e.isRedTime?"date-redline":""},[t._v(t._s(t.getEndTime(e.endTime))+" 截止")]),t._v(" "),e.isParent?s("span",[s("i",{staticClass:"task-icon"}),t._v(" "),s("span",{staticClass:"date-line"},[t._v(t._s(e.childCompleteCount)+"/"+t._s(e.childCount))])]):t._e()]),t._v(" "),e.competeTime&&!e.isFinishOntime?s("span",{staticClass:"isFinishOntime"},[t._v("逾期完成")]):t._e(),t._v(" "),e.isFinish?s("span",{staticClass:"isunFinish"},[t._v("未完成")]):t._e(),t._v(" "),s("ul",{staticClass:"item-name"},t._l(e.joinList,function(e,a){return s("li",{class:"color"+t.genHash(e.realName)},[t._v(t._s(t.nameFormate(e.realName)))])}))])}))},staticRenderFns:[]};var r={name:"Index",data:function(){return{dutyList:[],dutyId:-1,activeIndex:-1,workshopList:[],dutyHour:"00",dutyMinute:"00",dutySecond:"00",dutyTaskList:[],periodTaskList:[],dutyTaskData:[],periodTaskData:[],dutyTaskPage:0,periodTaskPage:0}},components:{taskItem:s("vSla")(i,n,!1,function(t){s("Ql2Z")},"data-v-2ad1fc2f",null).exports},computed:{isLoadData:function(){return 0==this.dutyTaskPage&&0==this.periodTaskPage}},watch:{dutyId:function(t,e){},isLoadData:function(t,e){t&&(clearInterval(this.timerTask),clearInterval(this.timerPeriod),this.getDaytask(this,this.dutyId))}},methods:{lessTen:function(t){return parseInt(t)<10?"0"+t:t},workshopClass:function(t){switch(t){case 0:return"white";case 1:return"gray";case 2:return"green";case 3:return"red"}},getDutyData:function(t){t.$ajax({method:"GET",url:t.api+"/api/duty"}).then(function(e){t.dutyList=e.data.data.content,t.timer=setInterval(function(){var e=new Date,s=[e.getFullYear(),t.lessTen(e.getMonth()+1),t.lessTen(e.getDate())].join("-"),a=e.getTime();t.dutyList.map(function(e,i){var n=new Date(s+" "+e.startTime+":00").getTime(),r=n+1e3*e.duration;if(a>n&&r>a){t.activeIndex=i,t.dutyId=e.id;var o=(r-a)/1e3;return t.dutyHour=t.lessTen(parseInt(o/60/60)),t.dutyMinute=t.lessTen(parseInt(60*(o/60/60-t.dutyHour))),void(t.dutySecond=t.lessTen(parseInt(60*(60*(o/60/60-t.dutyHour)-t.dutyMinute))))}})},1e3),setTimeout(function(){-1==t.dutyId&&(t.dutyId=1,t.activeIndex=0),t.getDaytask(t,t.dutyId)},1e3)}).catch(function(t){console.log(t)})},getWorkshop:function(t){t.$ajax({method:"GET",url:t.api+"/api/workshop?isDelete=0"}).then(function(e){t.workshopList=e.data.data.content}).catch(function(t){console.log(t)})},getDaytask:function(t,e){t.$ajax({method:"GET",url:t.api+"/api/task/day?date="+t.getNowFormatDate()+"&dutyId="+t.dutyId}).then(function(e){var s=(new Date).getTime();t.dutyTaskList=e.data.data.dutyTaskList,t.periodTaskList=e.data.data.periodTaskList,t.dutyTaskList.map(function(e,a){var i=new Date(e.competeTime),n=new Date(e.endTime).getTime();return e.isRedTime=!1,e.isFinish=!1,s>n-1e3*t.configMinute*60&&!e.competeTime&&(e.isRedTime=!0),s>n&&!e.competeTime&&(e.isFinish=!0),i.getTime()<n?e.isFinishOntime=!0:e.isFinishOntime=!1,e}),t.periodTaskList.map(function(e,a){var i=new Date(e.competeTime),n=new Date(e.endTime).getTime();return e.isRedTime=!1,e.isFinish=!1,s>n-1e3*t.configMinute*60&&!e.competeTime&&(e.isRedTime=!0),s>n&&!e.competeTime&&(e.isFinish=!0),i.getTime()<n?e.isFinishOntime=!0:e.isFinishOntime=!1,e}),t.dutyTaskData=t.dutyTaskList.slice(4*t.dutyTaskPage,4*t.dutyTaskPage+4),t.timerTask=setInterval(function(){t.dutyTaskList.length>4*t.dutyTaskPage+4?t.dutyTaskPage++:t.dutyTaskPage=0,t.dutyTaskData=t.dutyTaskList.slice(4*t.dutyTaskPage,4*t.dutyTaskPage+4)},5e3),t.periodTaskData=t.periodTaskList.slice(4*t.periodTaskPage,4*t.periodTaskPage+4),t.timerPeriod=setInterval(function(){t.periodTaskList.length>4*t.periodTaskPage+4?t.periodTaskPage++:t.periodTaskPage=0,t.periodTaskData=t.periodTaskList.slice(4*t.periodTaskPage,4*t.periodTaskPage+4)},5e3)}).catch(function(t){console.log(t)})},getNowFormatDate:function(){var t=new Date,e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate();return[e,this.lessTen(s),this.lessTen(a)].join("-")}},created:function(){this.getDutyData(this),this.getWorkshop(this)},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.timer2&&clearInterval(this.timer2)}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"top-container"},[s("div",{staticClass:"top-box"},[s("div",{staticClass:"top1"},[s("div",{staticClass:"top1-content"},[t._m(0),t._v(" "),s("div",{staticClass:"fr top1-right"},[s("span",{staticClass:"top1-text"},[t._v("距离换班剩余")]),t._v(" "),s("div",{staticClass:"top1-time"},[s("span",[t._v(t._s(t.dutyHour))]),t._v(":"),s("span",[t._v(t._s(t.dutyMinute))]),t._v(":"),s("span",[t._v(t._s(t.dutySecond))])])])])]),t._v(" "),s("div",{staticClass:"top2"},[s("ul",{staticClass:"top2-left"},t._l(t.dutyList,function(e,a){return 0==e.status?s("li",{class:t.activeIndex==a?"chosen":""},[t._v(t._s(e.name))]):t._e()})),t._v(" "),s("ul",{staticClass:"top2-right"},t._l(t.workshopList,function(e,a){return s("li",{class:t.workshopClass(e.status)},[t._v(t._s(e.name))])}))])])]),t._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"content-left fl"},[s("p",{staticClass:"title"},[t._v("当班任务")]),t._v(" "),s("taskItem",{attrs:{list:t.dutyTaskData}})],1),t._v(" "),s("div",{staticClass:"content-right fr"},[s("p",{staticClass:"title"},[t._v("周期任务")]),t._v(" "),s("taskItem",{attrs:{list:t.periodTaskData}})],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fl top1-left"},[e("i"),this._v(" "),e("span",[this._v("动力工段管理")])])}]};var c={name:"App",components:{Index:s("vSla")(r,o,!1,function(t){s("ElFF")},"data-v-ebaae18a",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Index")],1)},staticRenderFns:[]};var u=s("vSla")(c,d,!1,function(t){s("FZux")},null,null).exports,l=s("aozt"),p=s.n(l);a.a.config.productionTip=!1,a.a.prototype.$ajax=p.a,a.a.prototype.api="http://120.24.183.106:9089",a.a.prototype.configMinute=10,new a.a({el:"#app",components:{App:u},template:"<App/>"})},Ql2Z:function(t,e){}},["NHnr"]);