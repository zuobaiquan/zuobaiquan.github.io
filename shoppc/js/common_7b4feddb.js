"use strict";var rootApi="http://http://10.108.85.249//api/",rootUpload="http://http://10.108.85.249/upload/",xhr=null;jQuery.support.cors=!0;var tool={ajax:function(t,e,n){var o=arguments.length<=3||void 0===arguments[3]?!0:arguments[3];$.ajax({type:"Get",url:rootApi+t,data:e,dataType:"json",async:o,success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},ajax2:function(t,e,n){$.ajax({type:"POST",url:rootApi+t,data:JSON.stringify(e),contentType:"application/json; charset=utf-8",success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},ajax3:function(t,e,n){$.ajax({type:"delete",url:rootApi+t,success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},ajax4:function(t,e,n){$.ajax({type:"PATCH",url:rootApi+t,data:JSON.stringify(e),contentType:"application/json; charset=utf-8",success:function(t){n&&n(t)},error:function(t){console.log(t.responseText)}})},getUrlParam:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null},getDate:function(t){return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy-MM-dd hh:mm"):"0000-00-00 00:00"},getDate2:function(t){var e=arguments.length<=1||void 0===arguments[1]?"-":arguments[1];return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy"+e+"MM"+e+"dd"):"0000-00-00"},getDate3:function(t){return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("yyyy年MM月dd日"):"暂无"},getDate4:function(t){var e=arguments.length<=1||void 0===arguments[1]?"/":arguments[1];return"number"!=typeof t&&(t=1e3*parseInt(t)),t?new Date(t).Format("MM"+e+"dd"):"--"}};Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t},window.onload=function(){$(".pagination").length>0&&$(".pagination").each(function(){$(this).find("li").hasClass("disabled")&&$(this).find("li.disabled a").attr("href","javascript:;")})};