(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{344:function(e,t,n){"use strict";n.r(t);var o=n(6),a=n(7),i=n(10),r=n(8),s=n(9),l=n(3),c=n(0),u=n.n(c),h=n(12),d=n.n(h),m=n(36),p=n(358),f=n(161),g=n.n(f),v=n(37);n(4);var y=n(22),b=n.n(y),S=(n(348),n(177),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).sizeYears=[],n.sizeEchartData=[],n.timer=null,n.chartConfig=function(e){var t="w"==window.globalTheme?"#ea5504":"#3074c2",o=document.body.clientWidth;return{animation:!1,grid:[{x:40,y:50,x2:18,y2:20}],tooltip:{position:[0,11],show:!0,trigger:"axis",transitionDuration:0,padding:0,backgroundColor:"transparent",formatter:function(e){if(e&&e.length>0)var n="<div style='background-color:".concat(t,";border-radius:4px;width:").concat(o-48,"px;margin:0 auto;text-align:center;position:relative;z-index:100;left:24px;top:0;font-size: 13px;height:28px;line-height:28px;'>\n             <span>").concat(e[0].name,'</span>\n             <span style="margin:0 30px 0 60px">商誉').concat(e[0].data,"亿元</span>\n            </div>");return unescape(n.replace(/%/g,""))},axisPointer:{z:1,type:"cross",animation:!1,label:{show:!!e,color:"#fff",fontSize:10,margin:0,padding:[2,2,2,2],backgroundColor:"w"==window.globalTheme?"#ea5504":"#3074c2",shadowBlur:0},lineStyle:{color:"w"==window.globalTheme?"#ea5504":"#3074c2",type:"dashed",width:e?1:0},crossStyle:{color:"w"==window.globalTheme?"#ea5504":"#3074c2",type:"dashed",width:e?1:0}}},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{lineStyle:{color:"w"==window.globalTheme?"#eee":"#262626"}},axisLabel:{textStyle:{color:"w"==window.globalTheme?"#666":"#8e8e93",fontSize:10},formatter:function(e,t){return e},rich:{a:{fontSize:10,padding:[0,0,0,55]},b:{fontSize:10,padding:[0,60,0,0]}}},data:n.sizeYears}],yAxis:[{type:"value",axisTick:{show:!1},splitLine:{lineStyle:{color:["w"==window.globalTheme?"#eee":"#262626"]}},splitNumber:4,axisLine:{show:!1},axisLabel:{textStyle:{color:"w"==window.globalTheme?"#666":"#8e8e93",fontSize:10}}}],series:[{type:"line",symbol:"circle",symbolSize:1,showSymbol:!1,itemStyle:{normal:{color:"w"==window.globalTheme?"#ea5504":"#3074c2",shadowBlur:5,shadowColor:"w"==window.globalTheme?"#ea5504":"#3074c2",lineStyle:{color:"w"==window.globalTheme?"#ea5504":"#3074c2",width:1}}},data:n.sizeEchartData}]}},n.changeFund=function(e){return String(e).replace(/.SZ|.SH/gi,function(e){return".SH"==e?1:2})},n.jumpHq=function(){window.location.href="https://emwap.eastmoney.com/quota/stock/index/"+n.changeFund(n.code)},n.hangqing=function(){var e=Object(l.a)(Object(l.a)(n));window.jsonpCb=function(t){if("string"==typeof t){var n=t.split(",");e.setState({zx:n[3],zf:n[5],zd:n[4]})}};var t=n.changeFund(n.code),o="https://nufm.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=".concat(t,"&sty=CTF&st=a&sr=1&p=1&ps=1000&cb=&js=jsonpCb((x))&token=de1161e2380d231908d46298ae339369");g()(o,null,function(e,t){})},n._renderHeader=function(){var e=n.state,t=e.zx,o=e.zf,a=e.zd;n.code.substring(7,9),n.code.substring(0,6);return u.a.createElement("div",{onClick:n.jumpHq,className:"shangyuheaderBox"},u.a.createElement("div",{className:"headerLeft"},u.a.createElement("span",{className:"leftName"},n.name),u.a.createElement("span",{className:"leftCode"},n.code.substring(0,6))),u.a.createElement("div",{className:"headerRight"},u.a.createElement("span",{className:n.changeRage(o)},t),u.a.createElement("span",{className:n.changeRage(o)},o),u.a.createElement("span",{className:n.changeRage(a)},a),u.a.createElement("i",{className:"arrowRight"})))},n._renderDetailEchart=function(){var e=n.state,t=e.GoodwillSituation;if(e.showChart){var o=t.REPORTDATE.substring(0,4)+n.jd[t.TIMETYPE],a=t.GOODWILL>0?parseFloat(t.GOODWILL/1e8).toFixed(2):"";return u.a.createElement("div",{className:"detailEchart"},u.a.createElement("div",{className:"echartInfo"},u.a.createElement("span",{className:"echartInfoText"},o),u.a.createElement("i",{className:"echartInfoline"}),u.a.createElement("span",{className:"echartInfoText"},"商誉",a,"亿元")),u.a.createElement("div",{style:{height:250},id:"detailEchart"}))}},n.touchstart=function(e){return function(){n.debounce(1,e)}},n.debounce=function(e,t){n.timer&&clearTimeout(n.timer),n.timer=setTimeout(function(){t.setOption(n.chartConfig(e))},75)},n.touchend=function(e){return function(){e.dispatchAction({type:"hideTip"}),n.debounce(0,e)}},n.touchmove=function(e){e.stopPropagation(),e.preventDefault()},n.componentDidMount=function(){v.a.GoodwillSituation({securitycode:n.code}).then(function(e){e&&e.length>0&&(e=e[0],n.setState({GoodwillSituation:e})),v.a.GoodwillIndustrySize({SECURITYCODE:n.code}).then(function(t){if(t&&t.length>0){var o=[],a=[];(t=t.reverse()).map(function(n,i){var r=n.GOODWILL>0?parseFloat(n.GOODWILL/1e8).toFixed(2):0,s=n.REPORTDATE.substring(0,4);i==t.length-1&&"FY"!=e.TIMETYPE&&(s+="Q"+String(e.TIMETYPE).replace(/[^0-9]/gi,"")),o.push(s),a.push(r)}),n.setState({showChart:!0});var i=document.getElementById("detailEchart"),r=b.a.init(i),s=n.chartConfig();s.xAxis[0].data=o,s.series[0].data=a,n.sizeYears=o,n.sizeEchartData=a,r.setOption(s),i.addEventListener("touchstart",n.touchstart(r)),i.addEventListener("touchmove",n.touchmove),i.addEventListener("touchend",n.touchend(r))}})}),v.a.GoodwillPerformance({securitycode:n.code}).then(function(e){e&&e.length>0&&(e=e[0],n.setState({GoodwillPerformance:e}))}),n.hangqing(),n.timer=setInterval(function(){n.hangqing()},15e3)},n.shouldComponentUpdate=d.a.shouldComponentUpdate.bind(Object(l.a)(Object(l.a)(n))),n.state={showChart:!1,chartInfo:{yAxis:"2019三季度",xAxis:"5"},GoodwillSituation:{},GoodwillPerformance:{}},n.jd={Q3:"一季报",Q6:"中报",Q9:"三季报",FY:"年报"},n.yjd={"01":"一季报","03":"中报","06":"三季报","07":"年报"},n.code=n.props.match.params.code,n.name=n.props.match.params.name,n}return Object(s.a)(t,e),Object(a.a)(t,[{key:"changeRage",value:function(e){var t=parseFloat(e);return t>0?"rightText red":t<0?"rightText green":"rightText"}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.timer=null}},{key:"renderYG",value:function(){var e=this.state,t=e.GoodwillSituation,n=e.GoodwillPerformance;if(t&&n){var o=new Date(t.REPORTDATE).getTime(),a=new Date(n.REPORTDATE).getTime();if(a>o)return u.a.createElement("div",null,u.a.createElement(m.b,{obj:t,jd:this.jd[t.TIMETYPE]}),u.a.createElement(m.a,{obj:n,jd:this.yjd[n.TIMETYPE]}));if(a==o)return u.a.createElement(m.b,{obj:t,jd:this.jd[t.TIMETYPE],yg:n});if(a<o)return u.a.createElement(m.b,{obj:t,jd:this.jd[t.TIMETYPE]})}}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},this._renderHeader(),this._renderDetailEchart(),this.renderYG(),u.a.createElement(m.d,null))}}]),t}(c.Component));t.default=Object(p.a)(S)},346:function(e,t,n){var o=n(1),a=n(105).createSymbol,i=n(17),r=n(20).parsePercent,s=n(175).getDefaultLabel;function l(e,t,n){i.Group.call(this),this.updateData(e,t,n)}var c=l.prototype,u=l.getSymbolSize=function(e,t){var n=e.getItemVisual(t,"symbolSize");return n instanceof Array?n.slice():[+n,+n]};function h(e){return[e[0]/2,e[1]/2]}function d(e,t){this.parent.drift(e,t)}c._createSymbol=function(e,t,n,o,i){this.removeAll();var r=t.getItemVisual(n,"color"),s=a(e,-1,-1,2,2,r,i);s.attr({z2:100,culling:!0,scale:h(o)}),s.drift=d,this._symbolType=e,this.add(s)},c.stopSymbolAnimation=function(e){this.childAt(0).stopAnimation(e)},c.getSymbolPath=function(){return this.childAt(0)},c.getScale=function(){return this.childAt(0).scale},c.highlight=function(){this.childAt(0).trigger("emphasis")},c.downplay=function(){this.childAt(0).trigger("normal")},c.setZ=function(e,t){var n=this.childAt(0);n.zlevel=e,n.z=t},c.setDraggable=function(e){var t=this.childAt(0);t.draggable=e,t.cursor=e?"move":"pointer"},c.updateData=function(e,t,n){this.silent=!1;var o=e.getItemVisual(t,"symbol")||"circle",a=e.hostModel,r=u(e,t),s=o!==this._symbolType;if(s){var l=e.getItemVisual(t,"symbolKeepAspect");this._createSymbol(o,e,t,r,l)}else{(c=this.childAt(0)).silent=!1,i.updateProps(c,{scale:h(r)},a,t)}if(this._updateCommon(e,t,r,n),s){var c=this.childAt(0),d=n&&n.fadeIn,m={scale:c.scale.slice()};d&&(m.style={opacity:c.style.opacity}),c.scale=[0,0],d&&(c.style.opacity=0),i.initProps(c,m,a,t)}this._seriesModel=a};var m=["itemStyle"],p=["emphasis","itemStyle"],f=["label"],g=["emphasis","label"];function v(){!i.isInEmphasis(this)&&b.call(this)}function y(){!i.isInEmphasis(this)&&S.call(this)}function b(){if(!this.incremental&&!this.useHoverLayer){var e=this.__symbolOriginalScale,t=e[1]/e[0];this.animateTo({scale:[Math.max(1.1*e[0],e[0]+3),Math.max(1.1*e[1],e[1]+3*t)]},400,"elasticOut")}}function S(){this.incremental||this.useHoverLayer||this.animateTo({scale:this.__symbolOriginalScale},400,"elasticOut")}c._updateCommon=function(e,t,n,a){var l=this.childAt(0),c=e.hostModel,u=e.getItemVisual(t,"color");"image"!==l.type&&l.useStyle({strokeNoScale:!0});var d=a&&a.itemStyle,x=a&&a.hoverItemStyle,w=a&&a.symbolRotate,I=a&&a.symbolOffset,_=a&&a.labelModel,E=a&&a.hoverLabelModel,O=a&&a.hoverAnimation,N=a&&a.cursorStyle;if(!a||e.hasItemOption){var T=a&&a.itemModel?a.itemModel:e.getItemModel(t);d=T.getModel(m).getItemStyle(["color"]),x=T.getModel(p).getItemStyle(),w=T.getShallow("symbolRotate"),I=T.getShallow("symbolOffset"),_=T.getModel(f),E=T.getModel(g),O=T.getShallow("hoverAnimation"),N=T.getShallow("cursor")}else x=o.extend({},x);var D=l.style;l.attr("rotation",(w||0)*Math.PI/180||0),I&&l.attr("position",[r(I[0],n[0]),r(I[1],n[1])]),N&&l.attr("cursor",N),l.setColor(u,a&&a.symbolInnerColor),l.setStyle(d);var P=e.getItemVisual(t,"opacity");null!=P&&(D.opacity=P);var A=e.getItemVisual(t,"liftZ"),k=l.__z2Origin;null!=A?null==k&&(l.__z2Origin=l.z2,l.z2+=A):null!=k&&(l.z2=k,l.__z2Origin=null);var M=a&&a.useNameLabel;i.setLabelStyle(D,x,_,E,{labelFetcher:c,labelDataIndex:t,defaultText:function(t,n){return M?e.getName(t):s(e,t)},isRectText:!0,autoColor:u}),l.off("mouseover").off("mouseout").off("emphasis").off("normal"),l.hoverStyle=x,i.setHoverStyle(l),l.__symbolOriginalScale=h(n),O&&c.isAnimationEnabled()&&l.on("mouseover",v).on("mouseout",y).on("emphasis",b).on("normal",S)},c.fadeOut=function(e,t){var n=this.childAt(0);this.silent=n.silent=!0,(!t||!t.keepLabel)&&(n.style.text=null),i.updateProps(n,{style:{opacity:0},scale:[0,0]},this._seriesModel,this.dataIndex,e)},o.inherits(l,i.Group);var x=l;e.exports=x},347:function(e,t,n){var o=n(56).isDimensionStacked,a=n(1).map;t.prepareDataCoordInfo=function(e,t,n){var i,r=e.getBaseAxis(),s=e.getOtherAxis(r),l=function(e,t){var n=0,o=e.scale.getExtent();return"start"===t?n=o[0]:"end"===t?n=o[1]:o[0]>0?n=o[0]:o[1]<0&&(n=o[1]),n}(s,n),c=r.dim,u=s.dim,h=t.mapDimension(u),d=t.mapDimension(c),m="x"===u||"radius"===u?1:0,p=a(e.dimensions,function(e){return t.mapDimension(e)}),f=t.getCalculationInfo("stackResultDimension");return(i|=o(t,p[0]))&&(p[0]=f),(i|=o(t,p[1]))&&(p[1]=f),{dataDimsForPoint:p,valueStart:l,valueAxisDim:u,baseAxisDim:c,stacked:!!i,valueDim:h,baseDim:d,baseDataOffset:m,stackedOverDimension:t.getCalculationInfo("stackedOverDimension")}},t.getStackedOnPoint=function(e,t,n,o){var a=NaN;e.stacked&&(a=n.get(n.getCalculationInfo("stackedOverDimension"),o)),isNaN(a)&&(a=e.valueStart);var i=e.baseDataOffset,r=[];return r[i]=n.get(e.baseDim,o),r[1-i]=a,t.dataToPoint(r)}},348:function(e,t,n){var o=n(22);n(349),n(350);var a=n(354),i=n(355),r=n(356);n(176),o.registerVisual(a("line","circle","line")),o.registerLayout(i("line")),o.registerProcessor(o.PRIORITY.PROCESSOR.STATISTIC,r("line"))},349:function(e,t,n){n(13).__DEV__;var o=n(104),a=n(102).extend({type:"series.line",dependencies:["grid","polar"],getInitialData:function(e,t){return o(this.getSource(),this)},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,hoverAnimation:!0,clipOverflow:!0,label:{position:"top"},lineStyle:{width:2,type:"solid"},step:!1,smooth:!1,smoothMonotone:null,symbol:"emptyCircle",symbolSize:4,symbolRotate:null,showSymbol:!0,showAllSymbol:"auto",connectNulls:!1,sampling:"none",animationEasing:"linear",progressive:0,hoverLayerThreshold:1/0}});e.exports=a},350:function(e,t,n){n(13).__DEV__;var o=n(1),a=n(351),i=n(346),r=n(352),s=n(17),l=n(5),c=n(353),u=c.Polyline,h=c.Polygon,d=n(174),m=n(20).round,p=n(347),f=p.prepareDataCoordInfo,g=p.getStackedOnPoint;function v(e,t){if(e.length===t.length){for(var n=0;n<e.length;n++){var o=e[n],a=t[n];if(o[0]!==a[0]||o[1]!==a[1])return}return!0}}function y(e){return"number"==typeof e?e:e?.5:0}function b(e){var t=e.getGlobalExtent();if(e.onBand){var n=e.getBandWidth()/2-1,o=t[1]>t[0]?1:-1;t[0]+=o*n,t[1]-=o*n}return t}function S(e,t,n,o){return"polar"===e.type?function(e,t,n,o){var a=e.getAngleAxis(),i=e.getRadiusAxis().getExtent().slice();i[0]>i[1]&&i.reverse();var r=a.getExtent(),l=Math.PI/180;n&&(i[0]-=.5,i[1]+=.5);var c=new s.Sector({shape:{cx:m(e.cx,1),cy:m(e.cy,1),r0:m(i[0],1),r:m(i[1],1),startAngle:-r[0]*l,endAngle:-r[1]*l,clockwise:a.inverse}});return t&&(c.shape.endAngle=-r[0]*l,s.initProps(c,{shape:{endAngle:-r[1]*l}},o)),c}(e,t,n,o):function(e,t,n,o){var a=b(e.getAxis("x")),i=b(e.getAxis("y")),r=e.getBaseAxis().isHorizontal(),l=Math.min(a[0],a[1]),c=Math.min(i[0],i[1]),u=Math.max(a[0],a[1])-l,h=Math.max(i[0],i[1])-c;if(n)l-=.5,u+=.5,c-=.5,h+=.5;else{var d=o.get("lineStyle.width")||2,m=o.get("clipOverflow")?d/2:Math.max(u,h);r?(c-=m,h+=2*m):(l-=m,u+=2*m)}var p=new s.Rect({shape:{x:l,y:c,width:u,height:h}});return t&&(p.shape[r?"width":"height"]=0,s.initProps(p,{shape:{width:u,height:h}},o)),p}(e,t,n,o)}function x(e,t,n){for(var o=t.getBaseAxis(),a="x"===o.dim||"radius"===o.dim?0:1,i=[],r=0;r<e.length-1;r++){var s=e[r+1],l=e[r];i.push(l);var c=[];switch(n){case"end":c[a]=s[a],c[1-a]=l[1-a],i.push(c);break;case"middle":var u=(l[a]+s[a])/2,h=[];c[a]=h[a]=u,c[1-a]=l[1-a],h[1-a]=s[1-a],i.push(c),i.push(h);break;default:c[a]=l[a],c[1-a]=s[1-a],i.push(c)}}return e[r]&&i.push(e[r]),i}function w(e,t,n){var a=e.get("showAllSymbol"),r="auto"===a;if(!a||r){var s=n.getAxesByScale("ordinal")[0];if(s&&(!r||!function(e,t){var n=e.getExtent(),o=Math.abs(n[1]-n[0])/e.scale.count();isNaN(o)&&(o=0);for(var a=t.count(),r=Math.max(1,Math.round(a/5)),s=0;s<a;s+=r)if(1.5*i.getSymbolSize(t,s)[e.isHorizontal()?1:0]>o)return!1;return!0}(s,t))){var l=t.mapDimension(s.dim),c={};return o.each(s.getViewLabels(),function(e){c[e.tickValue]=1}),function(e){return!c.hasOwnProperty(t.get(l,e))}}}}var I=d.extend({type:"line",init:function(){var e=new s.Group,t=new a;this.group.add(t.group),this._symbolDraw=t,this._lineGroup=e},render:function(e,t,n){var a=e.coordinateSystem,i=this.group,r=e.getData(),l=e.getModel("lineStyle"),c=e.getModel("areaStyle"),u=r.mapArray(r.getItemLayout),h="polar"===a.type,d=this._coordSys,m=this._symbolDraw,p=this._polyline,b=this._polygon,I=this._lineGroup,_=e.get("animation"),E=!c.isEmpty(),O=c.get("origin"),N=function(e,t,n){if(!n.valueDim)return[];for(var o=[],a=0,i=t.count();a<i;a++)o.push(g(n,e,t,a));return o}(a,r,f(a,r,O)),T=e.get("showSymbol"),D=T&&!h&&w(e,r,a),P=this._data;P&&P.eachItemGraphicEl(function(e,t){e.__temp&&(i.remove(e),P.setItemGraphicEl(t,null))}),T||m.remove(),i.add(I);var A=!h&&e.get("step");p&&d.type===a.type&&A===this._step?(E&&!b?b=this._newPolygon(u,N,a,_):b&&!E&&(I.remove(b),b=this._polygon=null),I.setClipPath(S(a,!1,!1,e)),T&&m.updateData(r,{isIgnore:D,clipShape:S(a,!1,!0,e)}),r.eachItemGraphicEl(function(e){e.stopAnimation(!0)}),v(this._stackedOnPoints,N)&&v(this._points,u)||(_?this._updateAnimation(r,N,a,n,A,O):(A&&(u=x(u,a,A),N=x(N,a,A)),p.setShape({points:u}),b&&b.setShape({points:u,stackedOnPoints:N})))):(T&&m.updateData(r,{isIgnore:D,clipShape:S(a,!1,!0,e)}),A&&(u=x(u,a,A),N=x(N,a,A)),p=this._newPolyline(u,a,_),E&&(b=this._newPolygon(u,N,a,_)),I.setClipPath(S(a,!0,!1,e)));var k=function(e,t){var n=e.getVisual("visualMeta");if(n&&n.length&&e.count()&&"cartesian2d"===t.type){for(var a,i,r=n.length-1;r>=0;r--){var l=n[r].dimension,c=e.dimensions[l],u=e.getDimensionInfo(c);if("x"===(a=u&&u.coordDim)||"y"===a){i=n[r];break}}if(i){var h=t.getAxis(a),d=o.map(i.stops,function(e){return{coord:h.toGlobalCoord(h.dataToCoord(e.value)),color:e.color}}),m=d.length,p=i.outerColors.slice();m&&d[0].coord>d[m-1].coord&&(d.reverse(),p.reverse());var f=d[0].coord-10,g=d[m-1].coord+10,v=g-f;if(v<.001)return"transparent";o.each(d,function(e){e.offset=(e.coord-f)/v}),d.push({offset:m?d[m-1].offset:.5,color:p[1]||"transparent"}),d.unshift({offset:m?d[0].offset:.5,color:p[0]||"transparent"});var y=new s.LinearGradient(0,0,0,0,d,!0);return y[a]=f,y[a+"2"]=g,y}}}(r,a)||r.getVisual("color");p.useStyle(o.defaults(l.getLineStyle(),{fill:"none",stroke:k,lineJoin:"bevel"}));var M=e.get("smooth");if(M=y(e.get("smooth")),p.setShape({smooth:M,smoothMonotone:e.get("smoothMonotone"),connectNulls:e.get("connectNulls")}),b){var C=r.getCalculationInfo("stackedOnSeries"),z=0;b.useStyle(o.defaults(c.getAreaStyle(),{fill:k,opacity:.7,lineJoin:"bevel"})),C&&(z=y(C.get("smooth"))),b.setShape({smooth:M,stackedOnSmooth:z,smoothMonotone:e.get("smoothMonotone"),connectNulls:e.get("connectNulls")})}this._data=r,this._coordSys=a,this._stackedOnPoints=N,this._points=u,this._step=A,this._valueOrigin=O},dispose:function(){},highlight:function(e,t,n,o){var a=e.getData(),r=l.queryDataIndex(a,o);if(!(r instanceof Array)&&null!=r&&r>=0){var s=a.getItemGraphicEl(r);if(!s){var c=a.getItemLayout(r);if(!c)return;(s=new i(a,r)).position=c,s.setZ(e.get("zlevel"),e.get("z")),s.ignore=isNaN(c[0])||isNaN(c[1]),s.__temp=!0,a.setItemGraphicEl(r,s),s.stopSymbolAnimation(!0),this.group.add(s)}s.highlight()}else d.prototype.highlight.call(this,e,t,n,o)},downplay:function(e,t,n,o){var a=e.getData(),i=l.queryDataIndex(a,o);if(null!=i&&i>=0){var r=a.getItemGraphicEl(i);r&&(r.__temp?(a.setItemGraphicEl(i,null),this.group.remove(r)):r.downplay())}else d.prototype.downplay.call(this,e,t,n,o)},_newPolyline:function(e){var t=this._polyline;return t&&this._lineGroup.remove(t),t=new u({shape:{points:e},silent:!0,z2:10}),this._lineGroup.add(t),this._polyline=t,t},_newPolygon:function(e,t){var n=this._polygon;return n&&this._lineGroup.remove(n),n=new h({shape:{points:e,stackedOnPoints:t},silent:!0}),this._lineGroup.add(n),this._polygon=n,n},_updateAnimation:function(e,t,n,o,a,i){var l=this._polyline,c=this._polygon,u=e.hostModel,h=r(this._data,e,this._stackedOnPoints,t,this._coordSys,n,this._valueOrigin,i),d=h.current,m=h.stackedOnCurrent,p=h.next,f=h.stackedOnNext;a&&(d=x(h.current,n,a),m=x(h.stackedOnCurrent,n,a),p=x(h.next,n,a),f=x(h.stackedOnNext,n,a)),l.shape.__points=h.current,l.shape.points=d,s.updateProps(l,{shape:{points:p}},u),c&&(c.setShape({points:d,stackedOnPoints:m}),s.updateProps(c,{shape:{points:p,stackedOnPoints:f}},u));for(var g=[],v=h.status,y=0;y<v.length;y++){if("="===v[y].cmd){var b=e.getItemGraphicEl(v[y].idx1);b&&g.push({el:b,ptIdx:y})}}l.animators&&l.animators.length&&l.animators[0].during(function(){for(var e=0;e<g.length;e++){g[e].el.attr("position",l.shape.__points[g[e].ptIdx])}})},remove:function(e){var t=this.group,n=this._data;this._lineGroup.removeAll(),this._symbolDraw.remove(!0),n&&n.eachItemGraphicEl(function(e,o){e.__temp&&(t.remove(e),n.setItemGraphicEl(o,null))}),this._polyline=this._polygon=this._coordSys=this._points=this._stackedOnPoints=this._data=null}});e.exports=I},351:function(e,t,n){var o=n(17),a=n(346),i=n(1).isObject;function r(e){this.group=new o.Group,this._symbolCtor=e||a}var s=r.prototype;function l(e,t,n,o){return t&&!isNaN(t[0])&&!isNaN(t[1])&&!(o.isIgnore&&o.isIgnore(n))&&!(o.clipShape&&!o.clipShape.contain(t[0],t[1]))&&"none"!==e.getItemVisual(n,"symbol")}function c(e){return null==e||i(e)||(e={isIgnore:e}),e||{}}function u(e){var t=e.hostModel;return{itemStyle:t.getModel("itemStyle").getItemStyle(["color"]),hoverItemStyle:t.getModel("emphasis.itemStyle").getItemStyle(),symbolRotate:t.get("symbolRotate"),symbolOffset:t.get("symbolOffset"),hoverAnimation:t.get("hoverAnimation"),labelModel:t.getModel("label"),hoverLabelModel:t.getModel("emphasis.label"),cursorStyle:t.get("cursor")}}s.updateData=function(e,t){t=c(t);var n=this.group,a=e.hostModel,i=this._data,r=this._symbolCtor,s=u(e);i||n.removeAll(),e.diff(i).add(function(o){var a=e.getItemLayout(o);if(l(e,a,o,t)){var i=new r(e,o,s);i.attr("position",a),e.setItemGraphicEl(o,i),n.add(i)}}).update(function(c,u){var h=i.getItemGraphicEl(u),d=e.getItemLayout(c);l(e,d,c,t)?(h?(h.updateData(e,c,s),o.updateProps(h,{position:d},a)):(h=new r(e,c)).attr("position",d),n.add(h),e.setItemGraphicEl(c,h)):n.remove(h)}).remove(function(e){var t=i.getItemGraphicEl(e);t&&t.fadeOut(function(){n.remove(t)})}).execute(),this._data=e},s.isPersistent=function(){return!0},s.updateLayout=function(){var e=this._data;e&&e.eachItemGraphicEl(function(t,n){var o=e.getItemLayout(n);t.attr("position",o)})},s.incrementalPrepareUpdate=function(e){this._seriesScope=u(e),this._data=null,this.group.removeAll()},s.incrementalUpdate=function(e,t,n){function o(e){e.isGroup||(e.incremental=e.useHoverLayer=!0)}n=c(n);for(var a=e.start;a<e.end;a++){var i=t.getItemLayout(a);if(l(t,i,a,n)){var r=new this._symbolCtor(t,a,this._seriesScope);r.traverse(o),r.attr("position",i),this.group.add(r),t.setItemGraphicEl(a,r)}}},s.remove=function(e){var t=this.group,n=this._data;n&&e?n.eachItemGraphicEl(function(e){e.fadeOut(function(){t.remove(e)})}):t.removeAll()};var h=r;e.exports=h},352:function(e,t,n){var o=n(347),a=o.prepareDataCoordInfo,i=o.getStackedOnPoint;e.exports=function(e,t,n,o,r,s,l,c){for(var u=function(e,t){var n=[];return t.diff(e).add(function(e){n.push({cmd:"+",idx:e})}).update(function(e,t){n.push({cmd:"=",idx:t,idx1:e})}).remove(function(e){n.push({cmd:"-",idx:e})}).execute(),n}(e,t),h=[],d=[],m=[],p=[],f=[],g=[],v=[],y=a(r,t,l),b=a(s,e,c),S=0;S<u.length;S++){var x=u[S],w=!0;switch(x.cmd){case"=":var I=e.getItemLayout(x.idx),_=t.getItemLayout(x.idx1);(isNaN(I[0])||isNaN(I[1]))&&(I=_.slice()),h.push(I),d.push(_),m.push(n[x.idx]),p.push(o[x.idx1]),v.push(t.getRawIndex(x.idx1));break;case"+":var E=x.idx;h.push(r.dataToPoint([t.get(y.dataDimsForPoint[0],E),t.get(y.dataDimsForPoint[1],E)])),d.push(t.getItemLayout(E).slice()),m.push(i(y,r,t,E)),p.push(o[E]),v.push(t.getRawIndex(E));break;case"-":E=x.idx;var O=e.getRawIndex(E);O!==E?(h.push(e.getItemLayout(E)),d.push(s.dataToPoint([e.get(b.dataDimsForPoint[0],E),e.get(b.dataDimsForPoint[1],E)])),m.push(n[E]),p.push(i(b,s,e,E)),v.push(O)):w=!1}w&&(f.push(x),g.push(g.length))}g.sort(function(e,t){return v[e]-v[t]});var N=[],T=[],D=[],P=[],A=[];for(S=0;S<g.length;S++)E=g[S],N[S]=h[E],T[S]=d[E],D[S]=m[E],P[S]=p[E],A[S]=f[E];return{current:N,next:T,stackedOnCurrent:D,stackedOnNext:P,status:A}}},353:function(e,t,n){var o=n(14),a=n(18),i=n(173),r=a.min,s=a.max,l=a.scaleAndAdd,c=a.copy,u=[],h=[],d=[];function m(e){return isNaN(e[0])||isNaN(e[1])}function p(e,t,n,o,i,p,f,g,v,y,b){return"none"!==y&&y?function(e,t,n,o,a,i,r,s,l,u,p){for(var f=0,g=n,v=0;v<o;v++){var y=t[g];if(g>=a||g<0)break;if(m(y)){if(p){g+=i;continue}break}if(g===n)e[i>0?"moveTo":"lineTo"](y[0],y[1]);else if(l>0){var b=t[f],S="y"===u?1:0,x=(y[S]-b[S])*l;c(h,b),h[S]=b[S]+x,c(d,y),d[S]=y[S]-x,e.bezierCurveTo(h[0],h[1],d[0],d[1],y[0],y[1])}else e.lineTo(y[0],y[1]);f=g,g+=i}return v}.apply(this,arguments):function(e,t,n,o,i,p,f,g,v,y,b){for(var S=0,x=n,w=0;w<o;w++){var I=t[x];if(x>=i||x<0)break;if(m(I)){if(b){x+=p;continue}break}if(x===n)e[p>0?"moveTo":"lineTo"](I[0],I[1]),c(h,I);else if(v>0){var _=x+p,E=t[_];if(b)for(;E&&m(t[_]);)E=t[_+=p];var O=.5,N=t[S],E=t[_];if(!E||m(E))c(d,I);else{var T,D;if(m(E)&&!b&&(E=I),a.sub(u,E,N),"x"===y||"y"===y){var P="x"===y?0:1;T=Math.abs(I[P]-N[P]),D=Math.abs(I[P]-E[P])}else T=a.dist(I,N),D=a.dist(I,E);l(d,I,u,-v*(1-(O=D/(D+T))))}r(h,h,g),s(h,h,f),r(d,d,g),s(d,d,f),e.bezierCurveTo(h[0],h[1],d[0],d[1],I[0],I[1]),l(h,I,u,v*O)}else e.lineTo(I[0],I[1]);S=x,x+=p}return w}.apply(this,arguments)}function f(e,t){var n=[1/0,1/0],o=[-1/0,-1/0];if(t)for(var a=0;a<e.length;a++){var i=e[a];i[0]<n[0]&&(n[0]=i[0]),i[1]<n[1]&&(n[1]=i[1]),i[0]>o[0]&&(o[0]=i[0]),i[1]>o[1]&&(o[1]=i[1])}return{min:t?n:o,max:t?o:n}}var g=o.extend({type:"ec-polyline",shape:{points:[],smooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},style:{fill:null,stroke:"#000"},brush:i(o.prototype.brush),buildPath:function(e,t){var n=t.points,o=0,a=n.length,i=f(n,t.smoothConstraint);if(t.connectNulls){for(;a>0&&m(n[a-1]);a--);for(;o<a&&m(n[o]);o++);}for(;o<a;)o+=p(e,n,o,a,a,1,i.min,i.max,t.smooth,t.smoothMonotone,t.connectNulls)+1}}),v=o.extend({type:"ec-polygon",shape:{points:[],stackedOnPoints:[],smooth:0,stackedOnSmooth:0,smoothConstraint:!0,smoothMonotone:null,connectNulls:!1},brush:i(o.prototype.brush),buildPath:function(e,t){var n=t.points,o=t.stackedOnPoints,a=0,i=n.length,r=t.smoothMonotone,s=f(n,t.smoothConstraint),l=f(o,t.smoothConstraint);if(t.connectNulls){for(;i>0&&m(n[i-1]);i--);for(;a<i&&m(n[a]);a++);}for(;a<i;){var c=p(e,n,a,i,i,1,s.min,s.max,t.smooth,r,t.connectNulls);p(e,o,a+c-1,c,i,-1,l.min,l.max,t.stackedOnSmooth,r,t.connectNulls),a+=c+1,e.closePath()}}});t.Polyline=g,t.Polygon=v},354:function(e,t){e.exports=function(e,t,n){return{seriesType:e,performRawSeries:!0,reset:function(e,o,a){var i=e.getData(),r=e.get("symbol")||t,s=e.get("symbolSize"),l=e.get("symbolKeepAspect");if(i.setVisual({legendSymbol:n||r,symbol:r,symbolSize:s,symbolKeepAspect:l}),!o.isSeriesFiltered(e)){var c="function"==typeof s;return{dataEach:i.hasItemOption||c?function(t,n){if("function"==typeof s){var o=e.getRawValue(n),a=e.getDataParams(n);t.setItemVisual(n,"symbolSize",s(o,a))}if(t.hasItemOption){var i=t.getItemModel(n),r=i.getShallow("symbol",!0),l=i.getShallow("symbolSize",!0),c=i.getShallow("symbolKeepAspect",!0);null!=r&&t.setItemVisual(n,"symbol",r),null!=l&&t.setItemVisual(n,"symbolSize",l),null!=c&&t.setItemVisual(n,"symbolKeepAspect",c)}}:null}}}}}},355:function(e,t,n){var o=n(1).map,a=n(103),i=n(56).isDimensionStacked;e.exports=function(e){return{seriesType:e,plan:a(),reset:function(e){var t=e.getData(),n=e.coordinateSystem,a=e.pipelineContext.large;if(n){var r=o(n.dimensions,function(e){return t.mapDimension(e)}).slice(0,2),s=r.length,l=t.getCalculationInfo("stackResultDimension");return i(t,r[0])&&(r[0]=l),i(t,r[1])&&(r[1]=l),s&&{progress:function(e,t){for(var o=e.end-e.start,i=a&&new Float32Array(o*s),l=e.start,c=0,u=[],h=[];l<e.end;l++){var d;if(1===s){var m=t.get(r[0],l);d=!isNaN(m)&&n.dataToPoint(m,null,h)}else{m=u[0]=t.get(r[0],l);var p=u[1]=t.get(r[1],l);d=!isNaN(m)&&!isNaN(p)&&n.dataToPoint(u,null,h)}a?(i[c++]=d?d[0]:NaN,i[c++]=d?d[1]:NaN):t.setItemLayout(l,d&&d.slice()||[NaN,NaN])}a&&t.setLayout("symbolPoints",i)}}}}}}},356:function(e,t){var n={average:function(e){for(var t=0,n=0,o=0;o<e.length;o++)isNaN(e[o])||(t+=e[o],n++);return 0===n?NaN:t/n},sum:function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n]||0;return t},max:function(e){for(var t=-1/0,n=0;n<e.length;n++)e[n]>t&&(t=e[n]);return isFinite(t)?t:NaN},min:function(e){for(var t=1/0,n=0;n<e.length;n++)e[n]<t&&(t=e[n]);return isFinite(t)?t:NaN},nearest:function(e){return e[0]}},o=function(e,t){return Math.round(e.length/2)};e.exports=function(e){return{seriesType:e,modifyOutputEnd:!0,reset:function(e,t,a){var i=e.getData(),r=e.get("sampling"),s=e.coordinateSystem;if("cartesian2d"===s.type&&r){var l,c=s.getBaseAxis(),u=s.getOtherAxis(c),h=c.getExtent(),d=h[1]-h[0],m=Math.round(i.count()/d);m>1&&("string"==typeof r?l=n[r]:"function"==typeof r&&(l=r),l&&e.setData(i.downSample(i.mapDimension(u.dim),1/m,l,o)))}}}}}}]);