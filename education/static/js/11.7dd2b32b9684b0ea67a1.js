webpackJsonp([11],{i5aX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("byaH"),l=a("ARhN"),r=a.n(l),n={mixins:[a("0W7K").a],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array},color:{type:Array,default:function(){return["#63C94C","#6089FA","#FFB93E","#EE522C"]}}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=this.data;this.chart=r.a.init(document.getElementById(this.id)),this.chart.setOption({color:this.color,series:[{type:"pie",radius:["50%","80%"],hoverAnimation:!1,legendHoverLink:!1,avoidLabelOverlap:!1,labelLine:{normal:{show:!0}},label:{fontSize:18,color:"#434343",lineHeight:25,align:"left",formatter:function(t){return t.name?String(t.name).split(",").join("\n"):""}},data:t}]})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,staticStyle:{position:"relative"},style:{height:t.height,width:t.width}},[a("div",{style:{margin:"0 auto",height:t.height,width:t.width},attrs:{id:t.id}}),t._v(" "),t._t("default")],2)},staticRenderFns:[]},c=a("/Xao")(n,o,!1,null,null,null).exports,i=(a("9rMa"),{name:"gbtc-box",data:function(){return{sylData:[76,24],schoolId:"",selectSchool:[],gradeId:"",selectGrade:[],reportDate:"",reportsData:"",selectType:[],selType:"",ylvtjData:[],sportScoreObj:"",SingleSportObj:"",selectDatelist:[]}},components:{pieGrade:c},created:function(){this.getReportsData()},methods:{changeSchool:function(t){var e=this;this.gradeId="",Object(s.c)({schoolId:t}).then(function(t){200==t.status&&(e.selectGrade=t.data.data,e.selectGrade.length>0&&(e.gradeId=e.selectGrade[0].id,e.filterSearch()))})},getReportsData:function(){var t=this;Object(s.e)().then(function(e){if(200==e.status){var a=e.data.data;t.reportsData=a,t.selectSchool=a.schoolList,t.selectSchool.length>0&&(t.schoolId=t.selectSchool[0].id,t.changeSchool(t.schoolId)),t.selectDatelist=t.reportsData.reportDateList.map(function(e){return t.parseTime(e,"{y}-{m}-{d}")}),t.reportDate=t.selectDatelist[0]}})},filterSearch:function(){var t=this,e={};this.gradeId&&(e.schoolId=this.schoolId,e.gradeId=this.gradeId),this.reportDate&&(e.reportDate=this.reportDate),this.schoolId||(e={}),Object(s.e)(e).then(function(e){if(200==e.status){var a=e.data.data;t.reportsData=a;var s=a.failStudentCnt+a.excellentStudentCnt+a.goodStudentCnt+a.passStudentCnt;t.ylvtjData=[{value:a.failStudentCnt,name:"不及格"+t.formatePercent(a.failStudentCnt/s)+",共"+a.failStudentCnt+"人"},{value:a.excellentStudentCnt,name:"优秀"+t.formatePercent(a.excellentStudentCnt/s)+",共"+a.excellentStudentCnt+"人"},{value:a.goodStudentCnt,name:"良好"+t.formatePercent(a.goodStudentCnt/s)+",共"+a.goodStudentCnt+"人"},{value:a.passStudentCnt,name:"及格"+t.formatePercent(a.passStudentCnt/s)+"%,共"+a.passStudentCnt+"人"}],t.selectType=[];var l=t.sportScoreObj=a.gradeSingleSportScoreList;for(var r in l)t.selectType.push({value:r,lable:r});t.selType=t.selectType[0].value,t.changeType(t.selType)}})},changeType:function(t){for(var e in this.sportScoreObj)e==t&&(this.selType=t,this.SingleSportObj=this.sportScoreObj[e])},selectClass:function(t){this.$router.push({path:"tcbg/"+this.schoolId+"/"+this.gradeId+"/"+this.reportDate})},resetSearch:function(){this.gradeId="",this.reportDate="",this.schoolId="",this.getReportsData()}}}),d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gbtc-container"},[a("header",[a("span",{staticClass:"option-lable"},[t._v("学校")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeSchool},model:{value:t.schoolId,callback:function(e){t.schoolId=e},expression:"schoolId"}},t._l(t.selectSchool,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"option-lable option-mgleft"},[t._v("年级")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.gradeId,callback:function(e){t.gradeId=e},expression:"gradeId"}},t._l(t.selectGrade,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"option-lable option-mgleft"},[t._v("体测时间")]),t._v(" "),a("el-select",{staticStyle:{"margin-left":"20px"},attrs:{placeholder:"选择日期"},model:{value:t.reportDate,callback:function(e){t.reportDate=e},expression:"reportDate"}},t._l(t.selectDatelist,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),t._v(" "),a("div",{staticClass:"btn-operator"},[a("span",{staticClass:"search-btn",on:{click:function(e){t.filterSearch()}}},[t._v("搜索")]),t._v(" "),a("span",{staticClass:"reset-btn",on:{click:function(e){t.resetSearch()}}},[t._v("重置")])])],1),t._v(" "),a("section",{staticClass:"gbtc-box"},[a("div",{staticClass:"gbtc-top"},[a("div",{staticClass:"gbtc-topleft"},[a("div",{staticClass:"gbtc-toptxt"},[a("span",[t._v("班级综合得分")]),t._v(" "),a("span",[t._v("总班级数："+t._s(t.reportsData&&t.reportsData.classScoreList&&t.reportsData.classScoreList.length)+"个")]),t._v(" "),a("span",[t._v("体测人数：总人数/实测人数 （"+t._s(t.reportsData&&t.reportsData.totalStudentCnt)+"/"+t._s(t.reportsData&&t.reportsData.actualStudentCnt)+"）")])]),t._v(" "),a("table",{staticClass:"gbtc-toptable"},[t._m(0),t._v(" "),t._l(t.reportsData.classScoreList,function(e,s){return t.reportsData&&t.reportsData.classScoreList.length>0?a("tr",{on:{click:function(a){t.selectClass(e)}}},[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(t.formatePercent2(e.excellentRate)))]),t._v(" "),a("td",[t._v(t._s(t.formatePercent2(e.goodRate)))]),t._v(" "),a("td",[t._v(t._s(t.formatePercent2(e.passRate)))]),t._v(" "),a("td",[t._v(t._s(t.formatePercent2(e.failRate)))]),t._v(" "),a("td",{staticClass:"orange"},[t._v(t._s(e.totalScore))])]):t._e()})],2)]),t._v(" "),a("div",{staticClass:"gbtc-topright"},[a("p",{staticClass:"gbtc-toprighttxt"},[t._v("学生优良率统计")]),t._v(" "),t.ylvtjData.length>0?a("div",{staticClass:"ylvtj-echart"},[a("pie-grade",{staticClass:"ylvtj-pie",attrs:{id:"ylvtjEchart",data:t.ylvtjData,height:"392px",width:"564px"}},[a("div",{staticClass:"sbsyl-echartdes"},[t._v("优良率占比")])])],1):t._e()])]),t._v(" "),a("div",{staticClass:"gbtc-bottom"},[a("div",{staticClass:"gbtc-bottomtop"},[a("p",[t._v("班级单项得分")]),t._v(" "),a("p",[t._v("平均成绩："),a("span",[t._v(t._s(t.SingleSportObj.avgRecord))]),t._v("    平均得分："),a("span",[t._v(t._s(t.SingleSportObj.avgScore))])]),t._v(" "),a("p",[t._v("体测项目    "),a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeType},model:{value:t.selType,callback:function(e){t.selType=e},expression:"selType"}},t._l(t.selectType,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),a("table",{staticClass:"gbtc-bottmtable"},[t._m(1),t._v(" "),t._l(t.SingleSportObj.classSportScoreList,function(e,s){return a("tr",[a("td",[t._v(t._s(s+1))]),a("td",[t._v(t._s(e.className))]),t._v(" "),a("td",[a("div",{staticClass:"class-level"},[a("span",{style:{width:t.formatePercent2(e.excellentRate)}},[t._v(t._s(t.formatePercent2(e.excellentRate)))]),t._v(" "),a("span",{style:{width:t.formatePercent2(e.goodRate)}},[t._v(t._s(t.formatePercent2(e.goodRate)))]),t._v(" "),a("span",{style:{width:t.formatePercent2(e.passRate)}},[t._v(t._s(t.formatePercent(e.passRate)))]),t._v(" "),a("span",{style:{width:t.formatePercent2(e.failRate)}},[t._v(t._s(t.formatePercent2(e.failRate)))])])]),t._v(" "),a("td",{staticClass:"orange"},[t._v(t._s(e.avgScore))]),a("td",{staticClass:"orange"},[t._v(t._s(e.avgRecord))])])})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("排序")]),t._v(" "),a("td",[t._v("班级")]),t._v(" "),a("td",[t._v("优秀率")]),t._v(" "),a("td",[t._v("良好率")]),t._v(" "),a("td",[t._v("及格率")]),t._v(" "),a("td",[t._v("不及格率")]),t._v(" "),a("td",[t._v("综合得分")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("排序")]),t._v(" "),a("td",[t._v("班级")]),t._v(" "),a("td",[a("div",{staticClass:"table-unitbox"},[a("span",[t._v("优秀")]),t._v(" "),a("span",[t._v("良好")]),t._v(" "),a("span",[t._v("及格")]),t._v(" "),a("span",[t._v("不及格")])])]),t._v(" "),a("td",[t._v("平均得分")]),t._v(" "),a("td",[t._v("平均成绩")])])}]},v=a("/Xao")(i,d,!1,null,null,null);e.default=v.exports}});