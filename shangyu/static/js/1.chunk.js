(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{340:function(e,t,a){"use strict";a.r(t);var n=a(74),r=a.n(n),c=a(346),s=a(102),l=a(6),i=a(7),o=a(9),d=a(8),u=a(10),m=a(3),p=a(0),E=a.n(p),O=a(13),T=a.n(O),S=a(37),h=a(360),f=a(38),N=a(4),y=a(358);var A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).PageNum=1,a.PageSize=15,a.OrderField="FORECASTL",a.OrderType=1,a._renderList=function(){var e=a.state,t=e.Impairment,n=e.hasMore;return E.a.createElement("div",null,E.a.createElement("div",{className:"table scroll-table"},E.a.createElement("div",{className:"tr headetr scroll-tr"},E.a.createElement("span",{className:"td firsttd"},"名称/代码"),E.a.createElement("span",{className:"td ".concat(a.classType("FORECASTTYPE")),onClick:function(){return a.orderHandle("FORECASTTYPE")}},"预告类型"),E.a.createElement("span",{className:"td ".concat(a.classType("NETASSETS")),onClick:function(){return a.orderHandle("NETASSETS")}},"商誉/净资产"),E.a.createElement("span",{className:"td ".concat(a.classType("TOTALASSETS")),onClick:function(){return a.orderHandle("TOTALASSETS")}},"商誉/总资产"),E.a.createElement("span",{className:"td ".concat(a.classType("GOODWILL")),onClick:function(){return a.orderHandle("GOODWILL")}},"商誉"),E.a.createElement("span",{className:"td ".concat(a.classType("FORECASTL")),onClick:function(){return a.orderHandle("FORECASTL")}},"净利润预计"),E.a.createElement("span",{className:"td ".concat(a.classType("INCREASE")),onClick:function(){return a.orderHandle("INCREASE")}},"变动幅度"),E.a.createElement("span",{className:"td td-last ".concat(a.classType("CHANGEREASONDSCRPT")),onClick:function(){return a.orderHandle("CHANGEREASONDSCRPT")}},"内容详情")),t.length>0&&t.map(function(e,t){return E.a.createElement(y.a,{className:"tr scroll-body-tr",key:t,to:{pathname:"/shangyudetail/".concat(e.SECURITYCODE,"/").concat(e.SHORTNAME),search:a.props.history.location.search}},E.a.createElement("div",{className:"twoLine"},E.a.createElement("div",null,E.a.createElement("span",null,e.SHORTNAME),E.a.createElement("span",null,Object(N.a)(e.SECURITYCODE)))),E.a.createElement("span",{className:"td"},e.FORECASTTYPE),E.a.createElement("span",{className:"td"},Object(N.c)(e.NETASSETS)),E.a.createElement("span",{className:"td"},Object(N.c)(e.TOTALASSETS)),E.a.createElement("span",{className:"td"},Object(N.f)(e.GOODWILL),"亿"),E.a.createElement("span",{className:"td pre-td"},function(e,t){return e&&t?Object(N.f)(e)+"~\n"+Object(N.f)(t)+"亿":"--"}(e.FORECASTL,e.FORECASTT)),E.a.createElement("span",{className:"td pre-td"},function(e,t){return e&&t?e+"~\n"+t+"%":"--"}(e.INCREASEL,e.INCREASET)),E.a.createElement("div",{className:"td tdcontent"},E.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.CHANGEREASONDSCRPT}})))})),a._renderLoadMore(n))},a._renderLoadMore=function(e){return e?E.a.createElement(S.e,{onClick:function(){return a.LoadMore()},isMore:!0}):null},a.shouldComponentUpdate=T.a.shouldComponentUpdate.bind(Object(m.a)(Object(m.a)(a))),a.state={Impairment:[],hasMore:!1,OrderField:"FORECASTL",OrderType:1},a.classType=a.classType.bind(Object(m.a)(Object(m.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="商誉减值预期",this.Impairment()}},{key:"Impairment",value:function(){var e=Object(s.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.Impairment({PageNum:this.PageNum,PageSize:this.PageSize,OrderField:this.OrderField,OrderType:this.OrderType});case 3:t=e.sent,a=1==this.PageNum?t:[].concat(Object(c.a)(this.state.Impairment),Object(c.a)(t)),this.setState({Impairment:a,hasMore:t.length==this.PageSize}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"LoadMore",value:function(){this.PageNum++,this.Impairment()}},{key:"orderHandle",value:function(e){var t=0;this.state.OrderField==e&&(t=0==this.OrderType?1:0),this.setState({OrderField:e,OrderType:t}),this.OrderType=t,this.OrderField=e,this.PageNum=1,this.Impairment()}},{key:"classType",value:function(e){var t=this.state.OrderType;return e==this.state.OrderField?0==t?"order-down":"order-down order-up":""}},{key:"render",value:function(){return E.a.createElement("div",{className:"container"},this._renderList(),E.a.createElement(S.d,null))}}]),t}(p.Component);t.default=Object(h.a)(A)},346:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})}}]);