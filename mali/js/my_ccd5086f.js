"use strict";$(function(){if($(".banner-right li:eq(5)").addClass("active").siblings().removeClass("active"),tool.getUrlParam("tag")){var a=tool.getUrlParam("tag")-1;$(".my-left .left-ulist li").eq(a).addClass("active").siblings().removeClass("active"),$(".my-right").eq(a).show().siblings(".my-right").hide()}$.jqPaginator("#pagination",{totalPages:100,visiblePages:3,currentPage:1,prev:'<li class="prev"><a href="javascript:;">上一页</a></li>',next:'<li class="next"><a href="javascript:;">下一页</a></li>',page:'<li class="page"><a href="javascript:;">{{page}}</a></li>',onPageChange:function(a,e){$("#p2").text(e+"："+a)}})});