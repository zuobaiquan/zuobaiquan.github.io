webpackJsonp([1],{"/LYx":function(n,e,t){var o=t("QXdF");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("8bSs")("3824b4fb",o,!0)},QXdF:function(n,e,t){(n.exports=t("BkJT")(!1)).push([n.i,"/* reset element-ui css */\n.login-container .el-input {\n  display: inline-block;\n  height: 47px;\n  width: 85%;\n}\n.login-container .el-input input {\n    background: transparent;\n    border: 0px;\n    -webkit-appearance: none;\n    border-radius: 0px;\n    padding: 12px 5px 12px 15px;\n    color: #eee;\n    height: 47px;\n}\n.login-container .el-input input:-webkit-autofill {\n      -webkit-box-shadow: 0 0 0px 1000px #2d3a4b inset !important;\n      -webkit-text-fill-color: #fff !important;\n}\n.login-container .el-form-item {\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  color: #454545;\n}\n",""])},"T+/8":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("2sCs"),i=t.n(o),a=t("M9A7");var r=t("TIfe"),s={name:"login",data:function(){return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:function(n,e,t){var o;o=(o=e).replace(/(^\s*)|(\s*$)/g,""),/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o)?t():t(new Error("請輸入正確的用戶名"))}}],password:[{required:!0,trigger:"blur",validator:function(n,e,t){e.length<5?t(new Error("密碼長度過短")):t()}}]},loading:!1,pwdType:"password"}},methods:{showPwd:function(){"password"===this.pwdType?this.pwdType="":this.pwdType="password"},handleLogin:function(){var n=this;this.$refs.loginForm.validate(function(e){if(!e)return console.log("表單驗證失敗"),!1;n.loading=!0,n.$store.dispatch("Login",n.loginForm).then(function(e){n.loading=!1;var t="Bearer "+e.data.access_token;i.a.defaults.headers.common.Authorization=t,Object(a.a)({Authorization:t}).then(function(e){var t=e.data.data.profileType;if("Parent"==t)return Object(r.f)(),void n.$message({message:"抱歉，無權限登錄！",type:"error"});var o=e.data.data.id,i=0;"Platform"==t&&(i=1),"School"==t&&(i=2),Object(r.h)(i),Object(r.g)(o),n.$router.push({path:"/"})})}).catch(function(){n.loading=!1})})}}},l={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:n.loginForm,rules:n.loginRules,"label-position":"left"}},[t("h3",{staticClass:"title"},[n._v("學校繳費後台管理系統")]),n._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container svg-container_login"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),n._v(" "),t("el-input",{attrs:{name:"username",type:"text",placeholder:"請輸入登錄名稱"},model:{value:n.loginForm.username,callback:function(e){n.$set(n.loginForm,"username",e)},expression:"loginForm.username"}})],1),n._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),n._v(" "),t("el-input",{attrs:{name:"password",type:n.pwdType,placeholder:"請輸入登錄密碼"},nativeOn:{keyup:function(e){if(!("button"in e)&&n._k(e.keyCode,"enter",13,e.key))return null;n.handleLogin(e)}},model:{value:n.loginForm.password,callback:function(e){n.$set(n.loginForm,"password",e)},expression:"loginForm.password"}}),n._v(" "),t("span",{staticClass:"show-pwd",on:{click:n.showPwd}},[t("svg-icon",{attrs:{"icon-class":"eye"}})],1)],1),n._v(" "),t("el-form-item",[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:n.loading},nativeOn:{click:function(e){e.preventDefault(),n.handleLogin(e)}}},[n._v("\n        登錄\n      ")])],1)],1)],1)},staticRenderFns:[]};var d=t("/Xao")(s,l,!1,function(n){t("/LYx"),t("ndlr")},"data-v-157dc8de",null);e.default=d.exports},ndlr:function(n,e,t){var o=t("wb8L");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("8bSs")("753f2d07",o,!0)},wb8L:function(n,e,t){(n.exports=t("BkJT")(!1)).push([n.i,"\n.login-container[data-v-157dc8de] {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  background-color: #2d3a4b;\n}\n.login-container .login-form[data-v-157dc8de] {\n    position: absolute;\n    left: 0;\n    right: 0;\n    width: 520px;\n    padding: 35px 35px 15px 35px;\n    margin: 120px auto;\n}\n.login-container .tips[data-v-157dc8de] {\n    font-size: 14px;\n    color: #fff;\n    margin-bottom: 10px;\n}\n.login-container .tips span[data-v-157dc8de]:first-of-type {\n      margin-right: 16px;\n}\n.login-container .svg-container[data-v-157dc8de] {\n    padding: 6px 5px 6px 15px;\n    color: #889aa4;\n    vertical-align: middle;\n    width: 30px;\n    display: inline-block;\n}\n.login-container .svg-container_login[data-v-157dc8de] {\n      font-size: 20px;\n}\n.login-container .title[data-v-157dc8de] {\n    font-size: 26px;\n    font-weight: 400;\n    color: #eee;\n    margin: 0px auto 40px auto;\n    text-align: center;\n    font-weight: bold;\n}\n.login-container .show-pwd[data-v-157dc8de] {\n    position: absolute;\n    right: 10px;\n    top: 7px;\n    font-size: 16px;\n    color: #889aa4;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n",""])}});