webpackJsonp([13],{Rajv:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("vMJZ"),r={data:function(){return{posterList:[],workList:[],userInfo:[],uid:this.$route.params.uid,type:this.$route.params.type,dialogVisible:!1,dialogImageUrl:""}},created:function(){var t=this;Object(a.e)({id:this.uid}).then(function(e){t.userInfo=e.data.data}),Object(a.g)({uid:this.uid,type:"works"}).then(function(e){t.workList=e.data.data}),Object(a.g)({uid:this.uid,type:"poster"}).then(function(e){t.posterList=e.data.data})},methods:{handlePictureCardPreview:function(t){this.dialogImageUrl=t,this.dialogVisible=!0},backTolist:function(){this.$router.push({name:"teacher"==this.type?"Teacher":"Stuednt"})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container userInfo"},[i("el-form",[i("el-form-item",{attrs:{label:"头像：","label-width":"80px"}},[i("img",{staticStyle:{width:"100px",height:"100px","border-radius":"50%"},attrs:{src:t.userInfo.avatar,alt:""},on:{click:function(e){t.handlePictureCardPreview(t.userInfo.avatar)}}})]),t._v(" "),i("el-form-item",{attrs:{label:"昵称：","label-width":"80px"}},[t._v("\n      "+t._s(t.userInfo.nickName||"--")+"\n    ")]),t._v(" "),i("el-form-item",{attrs:{label:"电话：","label-width":"80px"}},[t._v("\n      "+t._s(t.userInfo.phone||"--")+"\n    ")]),t._v(" "),i("el-form-item",{attrs:{label:"介绍：","label-width":"80px"}},[t._v("\n      "+t._s(t.userInfo.intro||"--")+"\n    ")]),t._v(" "),i("el-form-item",{attrs:{label:"海报：","label-width":"80px"}},[t.posterList.length>0?i("el-row",t._l(t.posterList,function(e,a){return i("el-col",{key:a,staticStyle:{"margin-right":"20px"},attrs:{span:4}},[i("el-card",{staticStyle:{padding:"0"},attrs:{"body-style":{padding:"0px;"}}},[e.imageUrl?i("img",{staticClass:"image",staticStyle:{width:"100%",height:"180px",cursor:"pointer"},attrs:{src:e.imageUrl},on:{click:function(i){t.handlePictureCardPreview(e.imageUrl)}}}):t._e()])],1)})):t._e(),t._v(" "),0==t.posterList.length?i("span",[t._v("暂无海报信息")]):t._e()],1),t._v(" "),i("el-form-item",{attrs:{label:"作品：","label-width":"80px"}},[t.workList.length>0?[i("el-row",t._l(t.workList,function(e,a){return i("el-col",{key:a,attrs:{span:8}},[i("el-card",{attrs:{"body-style":{padding:"0px;"}}},[e.videoUrl?i("div",[i("video",{staticStyle:{"object-fit":"contain"},attrs:{poster:e.videoCoverUrl,src:e.videoUrl,width:"463",height:"260",controls:"controls"}},[t._v("\n                Your browser does not support the video tag.\n                ")])]):t._e(),t._v(" "),i("img",{staticClass:"image",staticStyle:{width:"100%",height:"120px","object-fit":"cover"},attrs:{src:e.imageUrl},on:{click:function(i){t.handlePictureCardPreview(e.imageUrl)}}}),t._v(" "),i("div",{staticStyle:{"text-align":"center"}},[t._v("\n                背景音乐："+t._s(e.musicName)+"\n              ")])])],1)}))]:t._e(),t._v(" "),0==t.workList.length?[t._v("暂无作品信息\n      ")]:t._e()],2),t._v(" "),i("el-form-item",{attrs:{label:"","label-width":"80px"}},[i("el-button",{on:{click:function(e){t.backTolist()}}},[t._v("返回列表")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},s=i("VU/8")(r,l,!1,null,null,null);e.default=s.exports}});