"use strict";$(function(){function e(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.href)||[,""])[1].replace(/\+/g,"%20"))||null}if($(".banner-right li:eq(5)").addClass("active").siblings().removeClass("active"),e("tag")){var a=e("tag")-1;$(".my-left .left-ulist li").eq(a).addClass("active").siblings().removeClass("active"),$(".my-right").eq(a).show().siblings(".my-right").hide()}$.jqPaginator("#pagination",{totalPages:100,visiblePages:3,currentPage:1,prev:'<li class="prev"><a href="javascript:;">上一页</a></li>',next:'<li class="next"><a href="javascript:;">下一页</a></li>',page:'<li class="page"><a href="javascript:;">{{page}}</a></li>',onPageChange:function(e,a){$("#p2").text(a+"："+e)}})});