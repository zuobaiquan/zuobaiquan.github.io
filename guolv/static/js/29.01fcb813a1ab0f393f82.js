webpackJsonp([29],{"2ys5":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("lC5x"),i=e.n(s),r=e("J0Oq"),c=e.n(r),n=e("V/8j"),o={name:"activitylist",data:function(){return{cardId:"",ArticleList:[],isLoading:!0,isOver:!1}},methods:{activitydetail:function(t){this.$router.push({path:"activitydetail",query:{id:t.id,cardid:this.cardId}})}},created:function(){var t=this;return c()(i.a.mark(function a(){var e;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.cardId=t.getUrlParam("cardid"),t.$nextTick(function(){document.body.className="bgGray"}),a.prev=2,a.next=5,Object(n.b)({type:0,pageNo:0,pageSize:10});case 5:200==(e=a.sent).status&&e.data?(t.dataRes=e.data.data,t.ArticleList=e.data.data.records,t.isOver=!0,t.isLoading=!1):Toast(e.data.message||"接口异常，稍后再试"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(2),Toast("接口异常，稍后再试");case 12:case"end":return a.stop()}},a,t,[[2,9]])}))()},beforeDestroy:function(){document.body.className=""}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"index-box"},[e("div",{staticClass:"tit-title"},[e("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"},on:{click:t.goBack}}),t._v("活动列表"),e("a",{staticClass:"house-icon",attrs:{href:"javascript:;"},on:{click:t.userPage}})]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.ArticleList.length>0,expression:"ArticleList.length>0"}],staticClass:"activity-list"},t._l(t.ArticleList,function(a,s){return e("li",{on:{click:function(e){t.activitydetail(a)}}},[e("img",{attrs:{src:a.coverUrl,alt:""}})])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],staticClass:"loading-wrap"},[e("i"),t._v(" "),e("span",[t._v("加载中...")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOver,expression:"isOver"}],staticClass:"loaded"},[t._v("没有更多数据")])])},staticRenderFns:[]},l=e("C7Lr")(o,d,!1,null,null,null);a.default=l.exports}});