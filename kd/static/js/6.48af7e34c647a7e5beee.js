webpackJsonp([6],{WBH0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"reservebox",data:function(){return{tabList:["报装","我的"],tabIndex:1}},methods:{changeTab:function(t){t!==this.tabIndex&&(0==t?this.$router.push({path:"Pack"}):1==t&&this.$router.push({path:"Mine"}))},clickOrder:function(){this.$router.push({path:"Myorder"})}},created:function(){this.$nextTick(function(){document.body.className="bgGray"})},mounted:function(){},beforeDestroy:function(){document.body.className=""}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reserve-box"},[n("ul",{staticClass:"mine-list"},[n("li",{on:{click:t.clickOrder}},[t._v("我的订单")]),t._v(" "),t._m(0)]),t._v(" "),n("ul",{staticClass:"footer-bar"},t._l(t.tabList,function(e,s){return n("li",{class:{active:t.tabIndex==s},on:{click:function(e){t.changeTab(s)}}},[t._v(t._s(e))])})),t._v(" "),n("a",{staticClass:"btn logout"},[t._v("退出")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("联系客服"),e("a",{attrs:{href:"tel:020-88889999"}},[this._v("020-88889999")])])}]},i=n("VU/8")(s,a,!1,null,null,null);e.default=i.exports}});