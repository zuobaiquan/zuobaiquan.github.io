webpackJsonp([5],{cNj1:function(e,t,a){"use strict";t.a=function(e){return Object(r.a)({url:"/api/address",method:"post",data:n()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})},t.b=function(e){return Object(r.a)({url:"/api/address",method:"PATCH",data:n()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})},t.c=function(e){return Object(r.a)({url:"/api/address",method:"get",params:e})};var s=a("3cXf"),n=a.n(s),r=a("vLgD")},kEb5:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("lC5x"),n=a.n(s),r=a("J0Oq"),i=a.n(r),c=a("ZLEe"),o=a.n(c),d=a("5nAI"),l=a.n(d),u=a("cNj1"),p=a("GKtG"),m={name:"cardactive",data:function(){return{cardId:"",name:"",phone:"",street:"",province:"",city:"",area:"",regionVisible:!1,addressProvince:"",addressCity:"",addressCounty:"",myAddressSlots:[{flex:1,defaultIndex:1,values:o()(l.a),className:"slot1",textAlign:"center"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:[],className:"slot3",textAlign:"center"},{divider:!0,content:"-",className:"slot4"},{flex:1,values:[],className:"slot5",textAlign:"center"}]}},methods:{getInputpass:function(e){this.payPassword=e},selectArea:function(){this.regionVisible=!0},cancleaddress:function(){this.regionVisible=!1},selectaddress:function(){this.regionVisible=!1,this.province=this.addressProvince,this.city=this.addressCity,this.area=this.addressCounty},onMyAddressChange:function(e,t){l.a[t[0]]&&(e.setSlotValues(1,o()(l.a[t[0]])),e.setSlotValues(2,l.a[t[0]][t[1]]),this.addressProvince=t[0],this.addressCity=t[1],this.addressCounty=t[2])},changeNew:function(e){var t=this;return i()(n.a.mark(function a(){var s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(p.e)({addressId:e,cardId:t.cardId});case 2:if(200!=(s=a.sent).status||!s.data||0!=s.data.code){a.next=8;break}Toast("申请成功"),t.$router.replace({path:"cardinfo",query:{cardid:t.cardId}}),a.next=10;break;case 8:return Toast(s.data.message||"申请失败"),a.abrupt("return");case 10:case"end":return a.stop()}},a,t)}))()},submit:function(){var e=this;return i()(n.a.mark(function t(){var a,s,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.isEmpty(e.name,"收货人姓名不能为空")&&e.verifyPhone(e.phone)&&e.isEmpty(e.province,"请选择省份")&&e.isEmpty(e.city,"请选择市级")&&e.isEmpty(e.area,"请选择区域")&&e.isEmpty(e.street,"详细地址不能为空")&&e.isEmpty(e.payPassword,"支付密码不为空")&&e.verifyLength(e.payPassword,"支付密码为6位",6))){t.next=29;break}if(a={area:e.area,city:e.city,isDefault:0,name:e.name,phone:e.phone,province:e.province,street:e.street},!(e.addrList.length>0&&e.isObjectValueEqual(a,e.addrList[0]))){t.next=7;break}return e.changeNew(a.id),t.abrupt("return");case 7:if(0!=e.addrList.length){t.next=19;break}return t.next=10,Object(u.a)(a);case 10:if(200!=(s=t.sent).status||!s.data||0!=s.data.code){t.next=15;break}e.changeNew(s.data.data.id),t.next=17;break;case 15:return Toast(s.data.message),t.abrupt("return");case 17:t.next=29;break;case 19:return a.id=e.addrList[0].id,t.next=22,Object(u.b)(a);case 22:if(200!=(r=t.sent).status||!r.data||0!=r.data.code){t.next=27;break}e.changeNew(a.id),t.next=29;break;case 27:return Toast(r.data.message),t.abrupt("return");case 29:case"end":return t.stop()}},t,e)}))()}},created:function(){var e=this;return i()(n.a.mark(function t(){var a,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.$nextTick(function(){document.body.className="bgGray"}),e.cardId=e.getUrlParam("cardid"),t.prev=2,t.next=5,Object(u.c)();case 5:200==(a=t.sent).status&&a.data?(e.addrList=a.data.data,e.addrList.length>0&&(s=e.addrList[0],e.name=s.name,e.street=s.street,e.phone=s.phone,e.province=s.province,e.city=s.city,e.area=s.area,e.addressProvince=s.province,e.addressCity=s.city,e.addressCounty=s.area)):Toast(a.data.message||"接口异常，稍后再试"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),Toast("接口异常，稍后再试");case 12:e.$nextTick(function(){e.myAddressSlots[0].defaultIndex=0});case 13:case"end":return t.stop()}},t,e,[[2,9]])}))()},beforeDestroy:function(){document.body.className=""}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-box"},[e._m(0),e._v(" "),a("p",{staticClass:"common-txt"},[e._v("收货地址")]),e._v(" "),a("section",{staticClass:"form-box form-box3"},[a("ul",{staticClass:"form-list"},[a("li",[a("i",{staticClass:"form-icon icon-user"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"请输入收货人姓名",type:"text",name:"",value:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("li",[a("i",{staticClass:"form-icon icon-phone"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{placeholder:"请输入收货人的联系方式",type:"text",name:"",value:""},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),a("li",[a("i",{staticClass:"form-icon icon-place"}),e._v(" "),a("ul",{staticClass:"select-area",on:{click:e.selectArea}},[a("li",[a("span",[e._v(e._s(e.province||"请选择省份"))])]),e._v(" "),a("li",[a("span",[e._v(e._s(e.city||"选择市"))])]),e._v(" "),a("li",[a("span",[e._v(e._s(e.area||"选择区"))])])])]),e._v(" "),a("li",{staticClass:"textarea-li"},[a("i",{staticClass:"form-icon icon-place"}),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],attrs:{cols:"2",placeholder:"请填写详细地址，如街道名称，门派号码，楼层和房间号等信息"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value)}}})]),e._v(" "),a("li",[a("i",{staticClass:"form-icon icon-password"}),e._v(" "),a("emInput",{attrs:{star:!0,placeholder:"请输入您的信用卡密码"},on:{input:e.getInputpass}})],1)])]),e._v(" "),a("a",{staticClass:"fine-btn singe-finebtn btning",attrs:{href:"javascript:;"},on:{click:e.submit}},[e._v("申请补卡")]),e._v(" "),a("mt-popup",{staticClass:"region-popup",attrs:{position:"bottom"},model:{value:e.regionVisible,callback:function(t){e.regionVisible=t},expression:"regionVisible"}},[a("div",{staticClass:"picker-toolbar"},[a("span",{staticClass:"mint-datetime-action mint-datetime-cancel",staticStyle:{position:"relative","z-index":"2",color:"#666"},on:{click:e.cancleaddress}},[e._v("取消")]),e._v(" "),a("span",{staticClass:"mint-datetime-action mint-datetime-confirm",staticStyle:{position:"relative","z-index":"2",color:"#234623"},on:{click:e.selectaddress}},[e._v("确定")])]),e._v(" "),a("mt-picker",{attrs:{slots:e.myAddressSlots},on:{change:e.onMyAddressChange}})],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tit-title"},[t("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"}}),this._v("收货地址"),t("a",{staticClass:"house-icon",attrs:{href:"javascript:;"}})])}]},f=a("C7Lr")(m,v,!1,null,null,null);t.default=f.exports}});