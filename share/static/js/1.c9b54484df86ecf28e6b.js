webpackJsonp([1],{"0Qpo":function(t,s,e){t.exports=e.p+"static/img/share-bg.f5239c2.jpg"},ZjSN:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("0Qpo"),n=e.n(a),i={name:"index",data:function(){return{page:0,size:10,imglist:n.a,UserInfo:{}}},methods:{getUserInfo:function(t,s){t.$ajax({method:"GET",url:t.api+"/dist:users/findByUserId/"+s+"?projection=withUser"}).then(function(s){t.UserInfo=s.data.data}).catch(function(t){console.log(t)})}},created:function(){document.body.className="bgcover",this.getUserInfo(this,100)},beforeDestroy:function(){document.body.className=""}},r={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"share-box"},[e("div",{staticClass:"mask-box"},[e("img",{staticClass:"avatar",attrs:{src:t.UserInfo.user?t.UserInfo.user.avatarFull:"--",alt:""}}),t._v(" "),e("div",{staticClass:"nickname"},[t._v(t._s(t.UserInfo.user?t.UserInfo.user.nickName:"--"))]),t._v(" "),e("div",{staticClass:"code-text"},[t._v("邀请码")]),t._v(" "),e("div",{staticClass:"code-name"},[t._v(t._s(t.UserInfo.inviteCode))]),t._v(" "),e("a",{staticClass:"copy-btn",attrs:{href:"javascript:;"}},[t._v("长按复制")])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bottom-box"},[s("span",[this._v("行业社交")]),this._v(" "),s("a",{attrs:{href:"#"}},[this._v("下载")])])}]},o=e("vSla")(i,r,!1,null,null,null);s.default=o.exports}});