webpackJsonp([9],{GcRn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("lC5x"),i=a.n(r),n=a("J0Oq"),s=a.n(n),c=a("GKmE"),o=a("vLgD");function d(e){return Object(o.a)({url:"/api/upload",method:"post",data:e,headers:{"Content-Type":"multipart/form-data"}})}var l=a("V/8j"),p=a("vMJZ"),m="",u={name:"userauth",data:function(){return{auth:-1,isAutocert:!1,showstartpicker:!1,showendpicker:!1,styleHide:{height:0},styleShow:{height:"5rem"},idcardBackendImg:"",idcardFrontImg:"",idcardPeopleImg:"",address:"",realname:"",certId:"",nation:"",beginTime:"",endTime:"",department:"",sex:"",born:"",certDetail:{}}},methods:{goBack:function(){this.$router.replace({path:"personcenter"})},formatDate:function(e){return e?String(e).replace(/^(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3"):"--"},selectStart:function(){this.isAutocert||(this.showstartpicker=!0,this.$refs.pickerstart.open())},selectEnd:function(){this.isAutocert||(this.showendpicker=!0,this.$refs.pickerend.open())},handleStartConfirm:function(e){this.beginTime=Object(c.b)(e,"{y}-{m}-{d}"),this.$nextTick(function(){this.$refs.pickerstart.close(),this.showstartpicker=!1})},handleEndConfirm:function(e){this.endTime=Object(c.b)(e,"{y}-{m}-{d}"),this.$nextTick(function(){this.$refs.pickerend.close(),this.showendpicker=!1})},handleStartCancel:function(){this.$nextTick(function(){this.$refs.pickerstart.close(),this.showstartpicker=!1})},handleEndCancel:function(){this.$nextTick(function(){this.$refs.pickerend.close(),this.showendpicker=!1})},changeCardImage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"front",a=arguments[1];return s()(i.a.mark(function r(){var n,s,c,l;return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=a.target.files).length>1)){r.next=6;break}return Toast("只能选择一张图片"),r.abrupt("return");case 6:Indicator.open({text:"正在上传...",spinnerType:"fading-circle"});case 7:if((s=new FormData).append("file",n[0]),"people"!==t&&s.append("type",t),r.prev=10,c=void 0,"people"===t){r.next=16;break}return r.next=15,i=s,Object(o.a)({url:"/api/cert/ocr",method:"post",data:i,headers:{"Content-Type":"multipart/form-data"}});case 15:c=r.sent;case 16:if("people"!=t){r.next=20;break}return r.next=19,d(s);case 19:c=r.sent;case 20:if(200!=c.status||!c.data){r.next=42;break}if("people"===t||!c.data.data.ocrResponse||!c.data.data.ocrResponse.idcard&&!c.data.data.ocrResponse.department){r.next=30;break}return Indicator.close(),Toast("front"==t?"身份证正面识别成功":"身份证反面识别成功"),l=c.data.data.ocrResponse,"front"==t&&(e.idcardFrontImg=c.data.data.fileUrl,e.realname=l.realname,e.certId=l.idcard,e.born=l.born,e.nation=l.nation,e.sex=l.sex),"back"==t&&(e.idcardBackendImg=c.data.data.fileUrl,e.beginTime=l.begin,e.endTime=l.end,e.department=l.department),r.abrupt("return");case 30:if("people"!=t){r.next=37;break}return e.idcardPeopleImg=c.data.data,Indicator.close(),Toast("手持身份证上传成功"),r.abrupt("return");case 37:return Indicator.close(),Toast("请重新选择照片"),r.abrupt("return");case 40:r.next=45;break;case 42:return Indicator.close(),Toast("请重新选择照片"),r.abrupt("return");case 45:r.next=51;break;case 47:r.prev=47,r.t0=r.catch(10),Indicator.close(),Toast("接口异常，稍后再试");case 51:case"end":return r.stop()}var i},r,e,[[10,47]])}))()},submit:function(){var e=this;return s()(i.a.mark(function t(){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.isAutocert||e.isEmpty(e.idcardFrontImg,"请上传身份证正面")&&e.isEmpty(e.idcardBackendImg,"请上传身份证反面")&&e.isEmpty(e.idcardPeopleImg,"请上传手持身份证照片")){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,a={idcardBackendImg:e.idcardBackendImg,idcardFrontImg:e.idcardFrontImg,idcardPeopleImg:e.idcardPeopleImg},e.isAutocert||(a.address=e.address,a.beginTime=e.beginTime,a.born=e.born,a.certId=e.certId,a.department=e.department,a.endTime=e.endTime,a.nation=e.nation,a.realname=e.realname,a.sex=e.sex),t.next=7,Object(p.b)(a);case 7:if(200!=(r=t.sent).status||!r.data){t.next=19;break}if(0!=r.data.code){t.next=15;break}return m=Toast("认证成功"),setTimeout(function(){this.$router.replace({path:"userinfo"})}.bind(e),1500),t.abrupt("return");case 15:return Toast(r.data.message||"认证失败"),t.abrupt("return");case 17:t.next=21;break;case 19:return Toast("认证失败"),t.abrupt("return");case 21:t.next=26;break;case 23:t.prev=23,t.t0=t.catch(2),Toast("接口异常，稍后再试");case 26:case"end":return t.stop()}},t,e,[[2,23]])}))()}},created:function(){var e=this;return s()(i.a.mark(function t(){var a,r;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.c)({name:"auto_cert"});case 3:return 200==(a=t.sent).status&&a.data?e.isAutocert=+a.data.data.value:Toast("接口异常，稍后再试"),t.next=7,Object(p.e)();case 7:(r=t.sent).data&&0==r.data.code?(e.certDetail=r.data.data,e.auth=+e.certDetail.status,0==e.auth&&(e.idcardBackendImg=e.certDetail.idcardBackendImg,e.idcardFrontImg=e.certDetail.idcardFrontImg,e.idcardPeopleImg=e.certDetail.idcardPeopleImg,e.realname=e.certDetail.realname,e.certId=e.certDetail.certId,e.beginTime=e.certDetail.beginTime,e.endTime=e.certDetail.endTime)):r.data&&-1==r.data.code?e.auth=-1:Toast(r.data.message||"接口异常，稍后再试"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),Toast("接口异常，稍后再试");case 14:case"end":return t.stop()}},t,e,[[0,11]])}))()},beforeDestroy:function(){m&&m.close()}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-box"},[a("div",{staticClass:"tit-title"},[a("a",{staticClass:"arrow-left",attrs:{href:"javascript:;"},on:{click:e.goBack}}),e._v("实名认证"),a("a",{staticClass:"house-icon",attrs:{href:"javascript:;"},on:{click:e.userPage}})]),e._v(" "),a("section",{staticClass:"form-box"},[a("p",{staticClass:"auth-tit"},[e._v("识别身份证正反面")]),e._v(" "),a("div",{staticClass:"pic-upload"},[a("i"),e._v(" "),a("p",[e._v("正面")]),e._v(" "),e.idcardFrontImg?a("img",{staticClass:"upload-img",attrs:{src:e.idcardFrontImg,alt:""}}):e._e(),e._v(" "),a("input",{attrs:{type:"file",name:"avatarfront",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(t){e.changeCardImage("front",t)}}})]),e._v(" "),a("div",{staticClass:"pic-upload pic-upload2"},[a("i"),e._v(" "),a("p",[e._v("反面")]),e._v(" "),e.idcardBackendImg?a("img",{staticClass:"upload-img",attrs:{src:e.idcardBackendImg,alt:""}}):e._e(),e._v(" "),a("input",{attrs:{type:"file",name:"avatarback",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(t){e.changeCardImage("back",t)}}})]),e._v(" "),a("p",{staticClass:"auth-tit"},[e._v("上传手持身份证照片")]),e._v(" "),a("div",{staticClass:"pic-upload"},[a("i"),e._v(" "),a("p",[e._v("手持身份证")]),e._v(" "),e.idcardPeopleImg?a("img",{staticClass:"upload-img",attrs:{src:e.idcardPeopleImg,alt:""}}):e._e(),e._v(" "),a("input",{attrs:{type:"file",name:"avatarcommon",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(t){e.changeCardImage("people",t)}}})]),e._v(" "),a("p",{staticClass:"auth-tit"},[e._v("资料填写")]),e._v(" "),a("ul",{staticClass:"form-list",class:{"hide-formlist":e.showstartpicker||e.showendpicker}},[a("li",[a("i",{staticClass:"form-icon icon-user"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.realname,expression:"realname"}],attrs:{disabled:e.isAutocert,type:"text",name:"",placeholder:e.isAutocert?"姓名":"请填写您真实的姓名"},domProps:{value:e.realname},on:{input:function(t){t.target.composing||(e.realname=t.target.value)}}})]),e._v(" "),a("li",[a("i",{staticClass:"form-icon icon-idcard"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.certId,expression:"certId"}],attrs:{disabled:e.isAutocert,type:"tel",maxlength:"18",name:"",placeholder:e.isAutocert?"身份证":"请输入您有效的身份证号码"},domProps:{value:e.certId},on:{input:function(t){t.target.composing||(e.certId=t.target.value)}}})]),e._v(" "),a("li",[a("i",{staticClass:"form-icon icon-datetime"}),e._v(" "),a("div",{staticStyle:{flex:"1",position:"relative",display:"flex","align-items":"center","z-index":"2"},style:e.showstartpicker?e.styleHide:e.styleShow,on:{click:e.selectStart}},[a("span",{staticStyle:{color:"#666","font-size":"1.3rem"},style:{fontSize:e.isAutocert?"1.5rem":"1.3rem"}},[e._v(e._s(e.beginTime?e.formatDate(e.beginTime)+"~"+e.formatDate(e.endTime):e.isAutocert?"有效期":"点击选择证件开始时间"))]),e._v(" "),e.isAutocert?e._e():a("mt-datetime-picker",{ref:"pickerstart",attrs:{type:"date","year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:e.handleStartConfirm,cancel:e.handleStartCancel},model:{value:e.beginTime,callback:function(t){e.beginTime=t},expression:"beginTime"}})],1),e._v(" "),e.isAutocert?e._e():a("div",{staticStyle:{flex:"1",position:"relative",display:"flex","align-items":"center","z-index":"2"},style:e.showendpicker?e.styleHide:e.styleShow,on:{click:e.selectEnd}},[a("span",{staticStyle:{color:"#666","font-size":"1.3rem"}},[e._v(e._s(!e.showstartpicker&&e.endTime?e.endTime:e.showstartpicker?"":"点击选择证件结束时间"))]),e._v(" "),e.isAutocert?e._e():a("mt-datetime-picker",{ref:"pickerend",attrs:{type:"date","year-format":"{value} 年","month-format":"{value} 月","date-format":"{value} 日"},on:{confirm:e.handleEndConfirm,cancel:e.handleEndCancel},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)])]),e._v(" "),a("a",{staticClass:"fine-btn",class:{btning:0!==e.auth},attrs:{href:"javascript:;"},on:{click:e.submit}},[e._v(e._s(0==e.auth?"审核中":"提交申请"))]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"protocol-txt"},[this._v("提交申请即代表我阅读并同意"),t("a",{attrs:{href:"javascript:;"}},[this._v("《服务条款》")])])}]},g=a("C7Lr")(u,f,!1,null,null,null);t.default=g.exports}});