"use strict";var rootApi="http://api.damali.net/api/",rootUpload="http://damali.oss-cn-shenzhen.aliyuncs.com/",xhr=null;jQuery.support.cors=!0;var tool={ajax:function(t,e,n){var o=arguments.length<=3||void 0===arguments[3]?!0:arguments[3];$.ajax({type:"Get",url:rootApi+t,data:e,dataType:"json",async:o,success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},ajax2:function(t,e,n){$.ajax({type:"POST",url:rootApi+t,data:JSON.stringify(e),contentType:"application/json; charset=utf-8",success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},jsonp:function(t,e,n,o){$.ajax({url:rootApi+t,type:o||"GET",async:!1,dataType:"jsonp",jsonp:"callback",data:e,timeout:5e3,success:function(t){n&&n(t)},error:function(t){console.log(t)}})},getUrlParam:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},getDate:function(t){return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy-MM-dd hh:mm"):"0000-00-00 00:00"},getDate2:function(t){var e=arguments.length<=1||void 0===arguments[1]?"-":arguments[1];return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy"+e+"MM"+e+"dd"):"0000-00-00"},getDate3:function(t){return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy年MM月dd日"):"暂无"}};$(function(){$(".distribute-text span").text($.cookie("districtName")&&$.cookie("districtName").length>0?$.cookie("districtName"):"全国"),Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t}});