"use strict";var rootApi="http://api.damali.net/api/",rootUpload="http://damali.oss-cn-shenzhen.aliyuncs.com/",xhr=null;jQuery.support.cors=!0;var tool={ajax:function(e,t,o){var n=arguments.length<=3||void 0===arguments[3]?!0:arguments[3];$.ajax({type:"Get",url:rootApi+e,data:t,dataType:"json",async:n,success:function(e){o&&o(e)},error:function(e){console.log(e.responseText)}})},ajax2:function(e,t,o){$.ajax({type:"POST",url:rootApi+e,data:JSON.stringify(t),contentType:"application/json; charset=utf-8",success:function(e){o&&o(e)},error:function(e){console.log(e.responseText)}})},ajax3:function(e,t,o){$.ajax({type:"delete",url:rootApi+e,success:function(e){o&&o(e)},error:function(e){console.log(e.responseText)}})},ajax4:function(e,t,o){$.ajax({type:"PATCH",url:rootApi+e,data:JSON.stringify(t),contentType:"application/json; charset=utf-8",success:function(e){o&&o(e)},error:function(e){console.log(e.responseText)}})},getUrlParam:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},getDate:function(e){return"number"!=typeof e&&(e=1e3*parseInt(e)),e?new Date(e).Format("yyyy-MM-dd hh:mm"):"0000-00-00 00:00"},getDate2:function(e){var t=arguments.length<=1||void 0===arguments[1]?"-":arguments[1];return"number"!=typeof e&&(e=1e3*parseInt(e)),e?new Date(e).Format("yyyy"+t+"MM"+t+"dd"):"0000-00-00"},getDate3:function(e){return"number"!=typeof e&&(e=1e3*parseInt(e)),e?new Date(e).Format("yyyy年MM月dd日"):"暂无"},getDate4:function(e){var t=arguments.length<=1||void 0===arguments[1]?"/":arguments[1];return"number"!=typeof e&&(e=1e3*parseInt(e)),e?new Date(e).Format("MM"+t+"dd"):"--"}};$(function(){if($(".header-right li:last-child").click(function(){$(".kefu-list,.mask").show()}),$(".kefu-list .close-form,.kefu-list .my-know").click(function(){$(".kefu-list,.mask").hide()}),$(".distribute-text span").text($.cookie("districtName")&&$.cookie("districtName").length>0?$.cookie("districtName"):"全国"),$.cookie("userId")){var e=$.cookie("nickName")||$.cookie("userMobile");$(".header-right .nick-name span").text(e),$.cookie("avatarFull")&&$(".user-avatar").attr("src",$.cookie("avatarFull")),$(".header-right .nick-name").hover(function(){$(this).find(".logout-box").show()},function(){$(this).find(".logout-box").hide()}),$(".logout-box").click(function(){$.cookie("userId","",{expires:7}),$.cookie("userMobile","",{expires:7}),$.cookie("avatarFull")&&$.cookie("avatarFull","",{expires:7}),$.cookie("nickName")&&$.cookie("nickName","",{expires:7}),window.location.href="login.html"}),$(".header-right:last-child").show().siblings(".header-right").hide()}else $(".header-right").eq(0).show().siblings(".header-right").hide();Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}}),window.onload=function(){$(".pagination")&&$(".pagination").each(function(){$(this).find("li").hasClass("disabled")&&$(this).find("li.disabled a").attr("href","javascript:;")})};