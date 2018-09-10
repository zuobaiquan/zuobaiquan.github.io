"use strict";$(function(){function a(){r||(r=!0,tool.ajax("machine:machine?userId="+s+"&page="+(m-1)+"&size=4",{},function(a){var t="",e=a.data.content;if(e.length>0)for(var i=function(a){tool.ajax("area:areas/batch",{ids:[e[a].provinceId,e[a].cityId,e[a].districtId].join(",")},function(i){var s=i.data.content,n=s[0].name+s[1].name+s[2].name;e[a].placeName=n,0==a&&$("#onetabmySell").append('<div class="item-content">\n                <img class="item-img fl" src="'+e[0].images[0]+'" alt="">\n                <div class="content-box fr">\n                  <p class="box-name"><span>［拍卖］</span>'+e[0].title+'</p>\n                  <div class="addr"><i></i><span>'+e[0].placeName+'</span></div>\n                  <div class="time"><i></i>'+tool.getDate2(e[0].createTime)+"</div>\n                </div>\n              </div>"),t+='<li class="item">\n              <div class="item-content">\n                <img class="item-img fl" src="'+e[a].images[0]+'" alt="">\n                <div class="content-box fr">\n                  <p class="box-name">'+e[a].title+'<span class="status-name">'+(0==e[a].audit?"审核中":1==e[a].audit?"在卖":"审核不通过")+'</span></p>\n                  <p class="box-price">￥'+e[a].price.toFixed(2)+'</p>\n                  <div class="addr">\n                    <i></i><span>'+e[a].placeName+'</span>\n                    <div class="time"><i></i>'+tool.getDate2(e[a].createTime)+'</div>\n                    <div class="box-btn fr">\n                      <a class="not-sell" data-delflag="1" data-id="'+e[a].id+'" style="display:'+(1==e[a].audit?"block":"none")+'" href="javascript:;">我不卖了</a>\n                      <a class="detail" href="indexdetail.html?id='+e[a].id+'&s=-1">查看详情</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>'},!1)},s=0;s<e.length;s++)i(s);else t='<div class="no-data">暂无内容</div>';if($("#mysell .mysell-content").append(t),$.jqPaginator){if(a.data.totalPages<m)return;$.jqPaginator("#paginationSell",{totalPages:a.data.totalPages,visiblePages:4,currentPage:m,prev:'<li class="prev"><a href="my.html?tag=2&p='+(m-1)+'">上一页</a></li>',next:'<li class="next"><a href="my.html?tag=2&p='+(m+1)+'">下一页</a></li>',page:'<li class="page"><a href="#">{{page}}</a></li>',onPageChange:function(){$("#paginationSell .page").each(function(){var a=+$(this).find("a").text();$(this).find("a").attr("href","my.html?tag=2&p="+a)})}})}}))}function t(a){l&&0==a||c&&1==a||(0==a&&(l=!0),1==a&&(c=!0),tool.ajax("machine:order",{userId:s,page:m-1,size:4,systemStatus:a,projection:"withMachine"},function(t){if(0==t.code){var e="",i=t.data.content;if(i.length>0)for(var s=0;s<i.length;s++)e+='<li class="item last-item">\n              <div class="item-content">\n                <img class="item-img fl" src="'+i[s].machine.images[0]+'" alt="">\n                <div class="content-box fr">\n                  <p class="box-name">'+i[s].machine.title+'<span class="status-name">'+tool.getDate4(i[s].createTime)+'</span></p>\n                  <p class="box-price">'+(0==i[s].payStatus?"待付款":2==i[s].payStatus?"已缴纳定金￥"+i[s].baseOrder.price.toFixed(2):"处理中")+'</p>\n                  <div class="addr">\n                    <i></i><span>'+i[s].machine.city.name+" "+i[s].machine.district.name+'</span>\n                    <div class="box-btn fr">\n                      <a href="javascript:;">取消订单</a>\n                      <a class="detail" href="javascript:;">完成</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </li>';else e='<div class="no-data">暂无内容</div>';if(0==a&&($(".orderMachine").html(e),$.jqPaginator)){if(t.data.totalPages<m)return;$.jqPaginator(".paginationOrder1",{totalPages:t.data.totalPages,visiblePages:5,currentPage:m,prev:'<li class="prev"><a href="my.html?tag=4&p='+(m-1)+'">上一页</a></li>',next:'<li class="next"><a href="my.html?tag=4&p='+(m+1)+'">下一页</a></li>',page:'<li class="page"><a href="#">{{page}}</a></li>',onPageChange:function(){$(".paginationOrder1 .page").each(function(){var a=+$(this).find("a").text();$(this).find("a").attr("href","my.html?tag=4&p="+a)})}})}if(1==a&&($(".selfMachine").html(e),$.jqPaginator)){if(t.data.totalPages<m)return;$.jqPaginator(".paginationOrder2",{totalPages:t.data.totalPages,visiblePages:5,currentPage:m,prev:'<li class="prev"><a href="my.html?tag=5&p='+(m-1)+'">上一页</a></li>',next:'<li class="next"><a href="my.html?tag=5&p='+(m+1)+'">下一页</a></li>',page:'<li class="page"><a href="#">{{page}}</a></li>',onPageChange:function(){$(".paginationOrder2 .page").each(function(){var a=+$(this).find("a").text();$(this).find("a").attr("href","my.html?tag=5&p="+a)})}})}}}))}function e(){tool.ajax("machine:favorite",{userId:s,page:0,size:100},function(a){for(var t=a.data.content,e=function(a){tool.ajax("machine:machine",{userId:s,categoryId:t[a].category.categoryId,audit:1,page:0,size:100,projection:"withRegion"},function(e){var i=e.data.content;$("#myCollection .center-list").append('\n            <div class="item-top">\n  						<span>我的关注：'+t[a].category.name+"（"+i.length+'）</span>\n  						<a class="fr" href="javascript:;">分类</a>\n  					</div>\n            ');var s="";if(i.length>0)for(var n=0;n<i.length;n++)s+='<li class="item">\n      						<div class="item-content item-content2">\n      							<img class="item-img fl" src="'+i[n].images[0]+'" alt="">\n      							<div class="content-box fr">\n      								<p class="box-name">'+i[n].title+'</p>\n      								<p class="box-price">￥'+i[n].price.toFixed(2)+'</p>\n      								<div class="addr">\n      									<i></i><span>'+(i[n].province.name+i[n].city.name+i[n].district.name)+'</span>\n      									<div class="time"><i></i>'+tool.getDate2(i[n].createTime)+'</div>\n      									<div class="box-btn fr">\n      										<a class="detail" href="indexdetail.html?id='+i[n].id+"&s="+(1==i[n].systemStatus?1:-1)+'">查看详情</a>\n      									</div>\n      								</div>\n      							</div>\n      						</div>\n      					</li>';else s+='<div class="no-data">暂无数据</div>';$("#myCollection .center-list").append(s)})},i=0;i<t.length;i++)e(i)})}function i(){var a=arguments.length<=0||void 0===arguments[0]?-1:arguments[0],t=arguments.length<=1||void 0===arguments[1]?-1:arguments[1];if(!d){d=!0;var e={userId:s,page:m-1,size:4,payStatus:a,shipStatus:t};-1!==a?delete e.shipStatus:-1!==t?e.payStatus=2:-1==t&&-1==a&&(delete e.payStatus,delete e.shipStatus),tool.ajax("shop:orders",e,function(a){var t="",e=a.data.content;if(e.length>0)for(var i=function(a){tool.ajax("addr:addr",{id:e[a].receiveAddrId,projection:"withArea"},function(i){var s=i.data.content[0],n=n=s.province.name+s.city.name+s.district.name;t+='<li class="item">\n							<div class="item-content item-content2">\n								<img class="item-img fl" src="'+e[a].items[0].goods.imageFull+'" alt="">\n								<div class="content-box fr">\n									<p class="box-name">'+e[a].items[0].goods.name+e[a].items[0].goods.specification+'<a style="display:'+(0==e[a].closeStatus?"block":"none")+'" href="javascript:;" class="status-pay">'+(0==e[a].payStatus?"待付款":1==e[a].payStatus?"处理中":"已付款")+'</a>\n                  <a style="display:'+(1==e[a].closeStatus?"block":"none")+'" href="javascript:;" class="status-pay status-payclose">交易关闭</a>\n                  </p>\n									<p style="display:'+(2==e[a].payStatus?"block":"none")+'" class="box-price">已缴纳定金：￥'+e[a].price+'</p>\n									<div class="addr">\n										<i></i><span>'+n+'</span>\n										<div class="box-btn fr" style="display:'+(2!==e[a].payStatus&&0==e[a].closeStatus?"block":"none")+'">\n											<a class="cancle" data-orderno="'+e[a].orderNo+'" href="javascript:;">取消</a>\n											<a class="detail order-paymoney" data-orderno="'+e[a].orderNo+'" href="javascript:;">立即付款</a>\n										</div>\n                    <div class="box-btn fr" style="display:'+(1==e[a].closeStatus?"block":"none")+'">\n											<a class="status-delpay"\n                      data-delflag="2" data-id="'+e[a].id+'" href="javascript:;">删除订单</a>\n										</div>\n									</div>\n								</div>\n							</div>\n						</li>'},!1)},s=0;s<e.length;s++)i(s);else t='<div class="no-data">暂无内容</div>';if($(".cmylistOrder").html(t),$.jqPaginator){if(a.data.totalPages<m)return;$.jqPaginator(".paginationOrdercm",{totalPages:a.data.totalPages,visiblePages:4,currentPage:m,prev:'<li class="prev"><a href="my.html?tag=5&p='+(m-1)+'">上一页</a></li>',next:'<li class="next"><a href="my.html?tag=5&p='+(m+1)+'">下一页</a></li>',page:'<li class="page"><a href="#">{{page}}</a></li>',onPageChange:function(){$(".paginationOrdercm .page").each(function(){var a=+$(this).find("a").text();$(this).find("a").attr("href","my.html?tag=5&p="+a)})}})}})}}$(".banner-right li:eq(5)").addClass("active").siblings().removeClass("active");var s=parseInt($.cookie("userId")),n=null,o=null,r=!1,c=!1,l=!1,d=!1,m=+tool.getUrlParam("p")||1,p=null,h=null;if(s?($(".mycenter-top .avatar").attr("src",$.cookie("avatarFull")),$(".user-info span:last-child").text($.cookie("userMobile")),$.cookie("nickName")&&$(".user-info span.name").text($.cookie("nickName"))):($(".error-tipsbox div").text("请先登陆，再查看个人中心！"),$(".form-tipxbox,.mask").show(),$(".my-know").click(function(){window.location.href="login.html"}),setTimeout(function(){window.location.href="login.html"},2e3)),$(".my-left .left-ulist li").click(function(){m=1;var e=$(this).index();$(this).addClass("active").siblings().removeClass("active"),1!=e||r||a(),3!=e||l||t(0),4!=e||c||t(1),5!=e||d||i(),$(".my-right").eq(e).show().siblings(".my-right").hide()}),tool.getUrlParam("tag")){var f=tool.getUrlParam("tag")-1;$(".my-left .left-ulist li").eq(f).addClass("active").siblings().removeClass("active"),$(".my-right").eq(f).show().siblings(".my-right").hide(),3==f&&t(0),4==f&&t(1),5==f&&i(),7!==f&&(a(),e())}else a(),e();$(".ordermachine-tab a").click(function(){var a=$(this).data("paystatus"),t=$(this).data("shipstatus"),e=$(this).index();switch($(".ordermachine-tab a").eq(e).addClass("active").siblings().removeClass("active"),$(".ordermachine-content").eq(e).show().siblings(".ordermachine-content").hide(),e){case 0:d=!1,i();break;case 1:d=!1,i(a);break;case 2:case 3:case 4:d=!1,i(-1,t)}}),$(".cmyorder-tab a").click(function(){var a=$(this).data("paystatus"),t=$(this).data("shipstatus"),e=$(this).index();switch($(".cmyorder-tab a").eq(e).addClass("active").siblings().removeClass("active"),$(".cmyorder-content").eq(e).show().siblings(".cmyorder-content").hide(),e){case 0:d=!1,i();break;case 1:d=!1,i(a);break;case 2:case 3:case 4:d=!1,i(-1,t)}}),$("#mysell").on("click",".not-sell",function(){o=parseInt($(this).data("delflag")),$(".confirm-box,.mask").show(),$(".confirm-box .text").text("确定取消出售该农机？"),n=$(this).data("id")}),$(".btn-confirm .confirm-delorder").click(function(){var t="";1==o&&(t="machine:publish/"+n),2==o&&(t="shop:orders/"+n),tool.ajax3(t,{},function(t){0==t.code?($(".confirm-box").hide(),$("#form-errorbox,.mask").show(),$(".form-tipxbox").addClass("form-successbox").find(".error-tipsbox div").text("删除成功"),1==o&&a(),2==o&&(d=!1,i())):($(".error-tipsbox div").text(t.msg||"删除失败，稍后重试！"),$(".form-tipxbox,.mask").show())})}),$(".btn-confirm .cancle-delorder").click(function(){$(".confirm-box,.mask").hide()}),$(".close-form,.my-know").click(function(){$(".form-tipxbox,.mask").hide()}),$(".cmylistOrder").on("click",".cancle",function(){$(".reasonlist-box,.mask").show(),p=$(this).data("orderno")}),$(".pay-way li").click(function(){$(this).addClass("active").siblings().removeClass("active")}),$(".reasonlist-box .list-item li").click(function(){$(this).children("i").addClass("active")}),$(".reasonlist-box .cancle-order").click(function(){$(".reasonlist-box,.mask").hide()}),$(".reasonlist-box li").click(function(){$(this).addClass("active").siblings().removeClass("active"),$(".list-item li.active").length>0&&$(".reasonlist-box .error-msgtips").hide()}),$(".confirm-cancle").click(function(){return 0==$(".list-item li.active").length?void $(".reasonlist-box .error-msgtips").show():void tool.ajax4("order:orders/cancelStatus",{cancelStatus:1,orderNo:p,reason:$(".list-item li.active").text(),userId:s},function(a){$(".reasonlist-box,.mask").hide(),0==a.code?($("#form-errorbox,.mask").show(),$(".form-tipxbox").addClass("form-successbox").find(".error-tipsbox div").text("订单取消成功"),d=!1,i()):($(".error-tipsbox div").text(a.msg||"订单取消失败！"),$(".form-tipxbox,.mask").show())})}),$(".cmylistOrder").on("click",".status-delpay",function(){o=parseInt($(this).data("delflag")),$(".confirm-box,.mask").show(),$(".confirm-box .text").text("确定删除该订单吗？"),n=$(this).data("id")}),$(".cmylistOrder").on("click",".order-paymoney",function(){h=$(this).data("orderno"),$(".payway-chosenbox,.mask").show()}),$(".cancle-pay").click(function(){$(".payway-chosenbox,.mask").hide()}),$(".qrcode-box i").click(function(){$(".mask,.qrcode-box,.payway-chosenbox").hide(),$(".qrcode-box").find(".weixin-img").children().remove(),setTimeout(function(){$("#form-errorbox,.mask").show(),$(".form-tipxbox").find(".error-tipsbox div").text("您已取消支付，支付失败！")},1e3)}),$(".payway-chosenbox .confirm-pay").click(function(){return $(".payway-chosenbox .pay-way li").hasClass("active")?void($(".pay-way li:last-child").hasClass("active")?tool.ajax2("payOrder:pay/wx",{orderNo:h,userId:s,wxTradeType:"NATIVE"},function(a){var t=a.data.code_url;$(".mask,.qrcode-box").show(),$("#qrcodeCanvas").qrcode({render:"canvas",text:t,width:"250",height:"250",background:"#ffffff",foreground:"#000000",src:"../images/logo2.jpg"});var e=setInterval(function(){tool.ajax("shop:orders",{userId:s,orderNo:h,page:0,size:1},function(a){0==a.code&&2==a.data.content[0].payStatus&&(clearInterval(e),$(".mask,.qrcode-box,.payway-chosenbox").hide(),$("#form-errorbox").show(),$(".form-tipxbox").addClass("form-successbox").find(".error-tipsbox div").text("支付成功!"),setTimeout(function(){d=!1,i()},4e3))})},3e3)}):tool.ajax2("payOrder:pay/aliPay",{orderNo:h,userId:s,aliTradeType:"PagePay"},function(a){$("body").append(a.data.orderStr),setTimeout(function(){document.punchout_form.submit()},200)})):void $(".payway-chosenbox .error-msgtips").show()})});