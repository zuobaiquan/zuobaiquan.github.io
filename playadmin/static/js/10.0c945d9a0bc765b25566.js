webpackJsonp([10],{T452:function(t,e,a){"use strict";e.d=function(t){return Object(l.a)({url:"api/style/search",method:"POST",data:n()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})},e.a=function(t){return Object(l.a)({url:"/api/style",method:"post",data:n()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})},e.c=function(t){return Object(l.a)({url:"/api/style",method:"PUT",data:n()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})},e.b=function(t){return Object(l.a)({url:"/api/style",method:"DELETE",params:t})},e.e=function(t){return Object(l.a)({url:"/api/config",method:"PUT",data:n()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})};var i=a("mvHQ"),n=a.n(i),l=a("vLgD")},dIjT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("T452"),n={data:function(){return{rules:{title:[{required:!0,message:"不能为空",trigger:"blur"}]},configObj:{title:""},dialogVisible:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){},submitRes:function(t){var e=this;this.$refs[t].validate(function(t){t&&Object(i.e)(e.configObj).then(function(t){200==t.status&&0==t.data.code?e.$message({message:"修改成功",type:"success"}):e.$message({message:"修改失败",type:"warning"})})})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container edit-ads"},[a("el-form",{ref:"configObj",attrs:{model:t.configObj,"label-width":"230px"}},[a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"第一名：",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入第一名"},model:{value:t.configObj.title,callback:function(e){t.$set(t.configObj,"title",e)},expression:"configObj.title"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"第二三名：",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入第二三名"},model:{value:t.configObj.title,callback:function(e){t.$set(t.configObj,"title",e)},expression:"configObj.title"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"500px"},attrs:{label:"第四至十名：",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入第四至十名"},model:{value:t.configObj.title,callback:function(e){t.$set(t.configObj,"title",e)},expression:"configObj.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:""}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes("configObj")}}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]},s=a("VU/8")(n,l,!1,null,null,null);e.default=s.exports}});