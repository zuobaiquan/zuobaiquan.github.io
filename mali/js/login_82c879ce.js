"use strict";$(function(){$(".header-banner .loginreg-tit").text("用户登录"),$(".login-btn").click(function(){return""==$(".phone-input").val()?($("#loginTips").show().find("i").attr("class","right-icon error-icon"),void $("#loginTips").find("span").text("账号不为空")):""==$(".pass-input").val()?($("#loginTips").show().find("i").attr("class","right-icon error-icon"),void $("#loginTips").find("span").text("密码不为空")):void tool.ajax("user:users/mobile",{mobile:$(".phone-input").val()},function(i){if(0!=i.code||!i.hasOwnProperty("data"))return 0==i.code&&""==i.msg?($("#loginTips").show().find("i").attr("class","right-icon error-icon"),void $("#loginTips").find("span").text("此号码未注册")):($("#loginTips").show().find("i").attr("class","right-icon error-icon"),void $("#loginTips").find("span").text("稍后重试"));var o="Bearer "+i.data.userName;$.ajax({type:"post",url:rootApi+"oauth/token",data:params,headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:o},success:function(i){0==i.code},error:function(i){console.log(i.responseText)}})})})});