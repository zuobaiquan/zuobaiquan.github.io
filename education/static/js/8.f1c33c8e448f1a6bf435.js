webpackJsonp([8],{i5aX:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("ARhN"),l=e.n(s),v={mixins:[e("0W7K").a],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array},color:{type:Array,default:function(){return["#63C94C","#6089FA","#FFB93E","#EE522C"]}}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=this.data;this.chart=l.a.init(document.getElementById(this.id)),this.chart.setOption({color:this.color,series:[{type:"pie",radius:["50%","80%"],hoverAnimation:!1,legendHoverLink:!1,avoidLabelOverlap:!1,labelLine:{normal:{show:!0}},label:{fontSize:18,color:"#434343",lineHeight:25,align:"left",formatter:function(t){return t.name?String(t.name).split(",").join("\n"):""}},data:t}]})}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.className,staticStyle:{position:"relative"},style:{height:t.height,width:t.width}},[e("div",{style:{margin:"0 auto",height:t.height,width:t.width},attrs:{id:t.id}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]},_=e("/Xao")(v,i,!1,null,null,null).exports,d=(e("9rMa"),{name:"gbtc-box",data:function(){return{sylData:[76,24],selSchool:"",selectSchool:[{value:"中山实验小学",label:"中山实验小学"},{value:"中山实验小学",label:"中山实验小学"},{value:"中山实验小学",label:"中山实验小学"}],selGrade:"",selectGrade:[{value:"一年级",label:"一年级"},{value:"一年级",label:"一年级"},{value:"一年级",label:"一年级"}],selDate:"",selectType:[{value:"50米",label:"50米"},{value:"50米",label:"50米"},{value:"50米",label:"50米"}],selType:"",ylvtjData:[{value:335,name:"不及格32%,共71人"},{value:310,name:"优秀18%,共36人"},{value:234,name:"良好14%,共31人"},{value:135,name:"及格36%,共98人"}]}},components:{pieGrade:_},methods:{tableRowClassName:function(t){t.row;var a=t.rowIndex;return 1===a?"warning-row":3===a?"success-row":""}}}),n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gbtc-container"},[e("header",[e("span",{staticClass:"option-lable"},[t._v("学校")]),t._v(" "),e("el-select",{attrs:{placeholder:"全部"},model:{value:t.selSchool,callback:function(a){t.selSchool=a},expression:"selSchool"}},t._l(t.selectSchool,function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.value}})})),t._v(" "),e("span",{staticClass:"option-lable option-mgleft"},[t._v("年级")]),t._v(" "),e("el-select",{attrs:{placeholder:"全部"},model:{value:t.selGrade,callback:function(a){t.selGrade=a},expression:"selGrade"}},t._l(t.selectGrade,function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.value}})})),t._v(" "),e("span",{staticClass:"option-lable option-mgleft"},[t._v("体测时间")]),t._v(" "),e("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.selDate,callback:function(a){t.selDate=a},expression:"selDate"}}),t._v(" "),t._m(0)],1),t._v(" "),e("section",{staticClass:"gbtc-box"},[e("div",{staticClass:"gbtc-top"},[t._m(1),t._v(" "),e("div",{staticClass:"gbtc-topright"},[e("p",{staticClass:"gbtc-toprighttxt"},[t._v("学生优良率统计")]),t._v(" "),e("div",{staticClass:"ylvtj-echart"},[e("pie-grade",{staticClass:"ylvtj-pie",attrs:{id:"ylvtjEchart",data:t.ylvtjData,height:"392px",width:"564px"}},[e("div",{staticClass:"sbsyl-echartdes"},[t._v("优良率占比")])])],1)])]),t._v(" "),e("div",{staticClass:"gbtc-bottom"},[e("div",{staticClass:"gbtc-bottomtop"},[e("p",[t._v("班级单项得分")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("体测项目    "),e("el-select",{attrs:{placeholder:"全部"},model:{value:t.selType,callback:function(a){t.selType=a},expression:"selType"}},t._l(t.selectType,function(t,a){return e("el-option",{key:a,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),t._m(3)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"btn-operator"},[a("span",{staticClass:"search-btn"},[this._v("搜索")]),this._v(" "),a("span",{staticClass:"reset-btn"},[this._v("重置")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gbtc-topleft"},[e("div",{staticClass:"gbtc-toptxt"},[e("span",[t._v("班级综合得分")]),t._v(" "),e("span",[t._v("总班级数：4个")]),t._v(" "),e("span",[t._v("体测人数：总人数/实测人数 （255/236）")])]),t._v(" "),e("table",{staticClass:"gbtc-toptable"},[e("tr",[e("td",[t._v("排序")]),t._v(" "),e("td",[t._v("班级")]),t._v(" "),e("td",[t._v("优秀率")]),t._v(" "),e("td",[t._v("良好率")]),t._v(" "),e("td",[t._v("及格率")]),t._v(" "),e("td",[t._v("不及格率")]),t._v(" "),e("td",[t._v("综合得分")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",[t._v("26%")]),e("td",{staticClass:"orange"},[t._v("89.2")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("平均成绩："),a("span",[this._v("00:10:57")]),this._v("秒    平均得分："),a("span",[this._v("79.3分")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",{staticClass:"gbtc-bottmtable"},[e("tr",[e("td",[t._v("排序")]),t._v(" "),e("td",[t._v("班级")]),t._v(" "),e("td",[e("div",{staticClass:"table-unitbox"},[e("span",[t._v("优秀")]),t._v(" "),e("span",[t._v("良好")]),t._v(" "),e("span",[t._v("及格")]),t._v(" "),e("span",[t._v("不及格")])])]),t._v(" "),e("td",[t._v("平均得分")]),t._v(" "),e("td",[t._v("平均成绩")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),e("td",[t._v("三年3班")]),t._v(" "),e("td",[e("div",{staticClass:"class-level"},[e("span",{staticStyle:{width:"30%"}},[t._v("26%")]),t._v(" "),e("span",{staticStyle:{width:"20%"}},[t._v("42%")]),t._v(" "),e("span",{staticStyle:{width:"40%"}},[t._v("28%")]),t._v(" "),e("span",{staticStyle:{width:"10%"}},[t._v("4%")])])]),t._v(" "),e("td",{staticClass:"orange"},[t._v("81.5")]),e("td",{staticClass:"orange"},[t._v("00:11:55")])])])}]},c=e("/Xao")(d,n,!1,null,null,null);a.default=c.exports}});