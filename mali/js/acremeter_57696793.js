"use strict";$(function(){$(".banner-right li:eq(2)").addClass("active").siblings().removeClass("active");var a=+tool.getUrlParam("p")||1,e={};e={page:a-1,size:9},tool.ajax("shop:goods",e,function(e){var t="";$(".product-list").children("li").remove();var i=e.data.content;if(i.length>0)for(var r=0;r<i.length;r++)t+='<li>\n  				<img src="'+i[r].imageFull+'" alt="">\n  				<p class="product-title">'+i[r].name+'</p>\n  				<p class="product-price">￥'+i[r].price.toFixed(2)+'</p>\n  				<a class="product-advisory" target="_blank" href="acremeterdetail.html?id='+i[r].id+'">预定/购买</a>\n  			</li>';else t='<div class="no-data">暂无数据</div>';if($.jqPaginator){if(e.data.totalPages<a)return;$.jqPaginator("#indexPagination",{totalPages:e.data.totalPages,visiblePages:5,currentPage:a,prev:'<li class="prev"><a href="acremeter.html?p='+(a-1)+'">上一页</a></li>',next:'<li class="next"><a href="acremeter.html?p='+(a+1)+'">下一页</a></li>',page:'<li class="page"><a href="#">{{page}}</a></li>',onPageChange:function(){$("#indexPagination .page").each(function(){var a=+$(this).find("a").text();$(this).find("a").attr("href","acremeter.html?p="+a)})}})}$(".product-list").append(t)})});