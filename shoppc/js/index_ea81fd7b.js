"use strict";$(function(){$(".zssl-tablist li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".news-tablist li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),tool.ajax("/mall/ad/banner",{},function(a){for(var t=a.data.records,e="",i=0;i<t.length;i++)e+='<li>\n        <a target="_blank" href="'+t[i].jumpResource+'">\n          <img class="banner-img" src="'+t[i].img+'" alt="">\n        </a>\n      </li>';$(".banner-box").append(e),jQuery(".index").slide&&jQuery(".index").slide({mainCell:".banner-box",titCell:".dot-list li",effect:"fold",autoPlay:!0,delayTime:1e3})}),tool.ajax("/product/productType/findByParentIdTreeShape",{parentId:0},function(a){var t=a.data,e="",i="",l=!0,n=!1,r=void 0;try{for(var s,o=t[Symbol.iterator]();!(l=(s=o.next()).done);l=!0){var c=s.value;if(e+=c.image?'<li><div class="leftnav-top"><img src="'+c.image+'" /><span class="nav-title">'+c.typeName+'</span><i class="arrowright-icon"></i></div>':'<li><div class="leftnav-top"><span class="nav-title">'+c.typeName+'</span><i class="arrowright-icon"></i></div>',c.sonProductType.length>0){e+='<ul class="leftnav-second">';for(var v=0;v<c.sonProductType.length;v++)e+="<li>"+c.sonProductType[v].typeName+"</li>";e+="</ul>"}if(e+="</li>",c.sonProductType.length>0){i+='<div class="right-navbox"><div class="right-navtitle"><span>'+c.typeName+'</span><a href="javascript:;">更多<i class="arrowright-icon"></i></a></div><ul class="navright-tab">';var d=!0,p=!1,f=void 0;try{for(var u,y=c.sonProductType[Symbol.iterator]();!(d=(u=y.next()).done);d=!0){var h=u.value;if(i+="<li>",0==h.sonProductType.length)i+='<p class="no-navdatap">'+h.typeName+"：</p>";else{i+="<p>"+h.typeName+'：</p><ul class="levelthree-box">';var b=!0,g=!1,m=void 0;try{for(var x,T=h.sonProductType[Symbol.iterator]();!(b=(x=T.next()).done);b=!0){var P=x.value;i+="<li>"+P.typeName+"</li>"}}catch(w){g=!0,m=w}finally{try{!b&&T["return"]&&T["return"]()}finally{if(g)throw m}}i+="</ul>"}i+="</li>"}}catch(w){p=!0,f=w}finally{try{!d&&y["return"]&&y["return"]()}finally{if(p)throw f}}i+="</ul></div>"}}}catch(w){n=!0,r=w}finally{try{!l&&o["return"]&&o["return"]()}finally{if(n)throw r}}$(".navleft-tab").append(e),$(".navright-box").append(i),$(".navleft-tab li").hover(function(){var a=$(this).index();$(".right-navbox").eq(a).show().siblings().hide()},function(){$(".navleft-tab").removeClass("navleft-tabactive")})})});