webpackJsonp([17],{"0lAT":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("byaH"),r=a("/dGt"),o=(a("9rMa"),{name:"gbtc-box",data:function(){return{selectValue:null,radio:"",selectClass:[],selectDatelist:[],genderScore:"unknown",genderSport:"unknown",selectDate:"",reportDada:"",scoreDada:"",sportList:[],sportItem:"",sportId:"",sportName:"",loadScore:!1,loadSport:!1}},components:{pie:r.a},created:function(){this.selectDate=this.$route.params.reportDate,this.fetchData(),this.getReportsScore()},methods:{scoreRankText:function(t){return"excellent"==t?"优秀":"good"==t?"良好":"pass"==t?"及格":"fail"==t?"不及格":void 0},fetchData:function(){var t=this;Object(s.a)({gender:this.genderScore,classId:parseInt(this.$route.params.classId),reportDate:this.selectDate,schoolId:this.$route.params.schoolId}).then(function(e){if(200==e.status){for(var a in t.loadScore=!1,t.reportDada=e.data.data,t.selectDatelist=t.reportDada.reportDateList.map(function(e){return t.parseTime(e,"{y}-{m}-{d}")}),t.reportDada.scoreRankArr=[],t.reportDada.scoreRankMap)t.reportDada.scoreRankArr.push({name:t.scoreRankText(t.reportDada.scoreRankMap[a].rank),ratio:t.formatePercent(t.reportDada.scoreRankMap[a].ratio),studentCount:t.reportDada.scoreRankMap[a].studentCount,studentRank:t.reportDada.scoreRankMap[a].studentRank});t.loadScore=!0}})},changeScore:function(t){this.genderScore=t,this.fetchData()},changeSport:function(t){this.genderSport=t,this.getReportsScore()},navLevelText:function(t){return"excellent"==t?"优秀":"good"==t?"良好":"pass"==t?"及格":"fail"==t?"不及格":void 0},getReportsScore:function(){var t=this;Object(s.b)({sportId:this.sportId,sport:this.sportName,gender:this.genderSport,classId:parseInt(this.$route.params.classId),reportDate:this.selectDate,schoolId:this.$route.params.schoolId}).then(function(e){200==e.status&&(t.loadSport=!1,t.scoreDada=e.data.data,t.sportList=t.scoreDada.sportList,t.sportItem=t.sportList[0].sportId,t.loadSport=!0)})},changeType:function(t){var e=this;this.sportList.map(function(a){a.sportId==t&&(e.sportId=a.sportId,e.sportName=a.sportName)})},tcgbDetail:function(t){var e=t.studentId||t.classId||t.id;this.$router.push({path:"/gbtc/tcbgdetail/"+e+"/"+this.selectDate})}}}),n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tcbg-container"},[a("div",{staticClass:"sjtj-box"},[a("p",[t._v(t._s(t.reportDada.className)+"体测练习数据统计")]),t._v(" "),a("ul",[a("li",[t._v("学校名称："+t._s(t.reportDada.schoolName)+" "+t._s(t.reportDada.className))]),t._v(" "),a("li",[t._v("统计时间："+t._s(t.parseTime(t.reportDada.reportDate,"{y}-{m}-{d}")))]),t._v(" "),a("li",[t._v("练习人数：总人数/实测人数 （"+t._s(t.reportDada.totalStudentCnt)+"/"+t._s(t.reportDada.actualStudentCnt)+"）")])])]),t._v(" "),t.reportDada&&t.reportDada.scoreRankArr&&t.reportDada.scoreRankArr.length>0&&t.loadScore?a("div",{staticClass:"ghdf-box"},[a("div",{staticClass:"ghdf-top"},[a("span",[t._v("体测练习综合得分")]),t._v(" "),a("span",[t._v("平均得分："),a("em",[t._v(t._s(t.reportDada.avgScore))]),t._v("分")]),t._v(" "),a("el-select",{staticClass:"fr",staticStyle:{margin:"-5px 0 0 20px"},attrs:{placeholder:"全部"},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}},t._l(t.selectDatelist,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})})),t._v(" "),a("div",{staticClass:"ghdf-radio"},[a("el-radio-group",{on:{change:t.changeScore},model:{value:t.genderScore,callback:function(e){t.genderScore=e},expression:"genderScore"}},[a("el-radio",{attrs:{label:"unknown"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"male"}},[t._v("男生")]),t._v(" "),a("el-radio",{attrs:{label:"female"}},[t._v("女生")])],1)],1)],1),t._v(" "),a("ul",{staticClass:"ghdf-list"},t._l(t.reportDada.scoreRankArr,function(e,s){return a("li",[a("div",{staticClass:"ghdf-toptxt",class:{green:"优秀"==e.name,blue:"良好"==e.name,yellow:"及格"==e.name,red:"不及格"==e.name}},[t._v(t._s(e.name)+"-占比"+t._s(e.ratio)),a("span",[t._v("合计"+t._s(e.studentCount)+"人")])]),t._v(" "),a("table",{staticClass:"ghdf-table"},[t._m(0,!0),t._v(" "),t._l(e.studentRank,function(e,s){return a("tr",{on:{click:function(a){t.tcgbDetail(e)}}},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name)),a("span",{class:{xy:"male"==e.gender,xx:"female"==e.gender}})]),t._v(" "),a("td",[t._v(t._s(e.score))])])})],2)])}))]):t._e(),t._v(" "),t.scoreDada&&t.scoreDada.sportRankList&&t.scoreDada.sportRankList.length>0&&t.loadSport?a("div",{staticClass:"ghdf-box"},[a("div",{staticClass:"ghdf-top"},[a("span",[t._v("体测练习单项得分")]),t._v(" "),a("span",[t._v("平均成绩："),a("em",[t._v(t._s(t.scoreDada.avgRecord))])]),t._v(" "),a("span",[t._v("平均得分："),a("em",[t._v(t._s(t.scoreDada.avgScore))])]),t._v(" "),a("div",{staticClass:"fr"},[a("span",{staticClass:"tcxl"},[t._v("体测项目")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeType},model:{value:t.sportItem,callback:function(e){t.sportItem=e},expression:"sportItem"}},t._l(t.sportList,function(t,e){return a("el-option",{key:e,attrs:{label:t.sportName,value:t.sportId}})}))],1),t._v(" "),a("div",{staticClass:"ghdf-radio"},[a("el-radio-group",{on:{change:t.changeSport},model:{value:t.genderSport,callback:function(e){t.genderSport=e},expression:"genderSport"}},[a("el-radio",{attrs:{label:"unknown"}},[t._v("全部")]),t._v(" "),a("el-radio",{attrs:{label:"male"}},[t._v("男生")]),t._v(" "),a("el-radio",{attrs:{label:"female"}},[t._v("女生")])],1)],1)]),t._v(" "),a("ul",{staticClass:"ghdf-list ghdfdx-list"},t._l(t.scoreDada.sportRankList,function(e,s){return a("li",[a("div",{staticClass:"ghdf-toptxt",class:{green:"excellent"==e.rank,blue:"good"==e.rank,yellow:"pass"==e.rank,red:"fail"==e.rank}},[t._v(t._s(t.navLevelText(e.rank))+"-占比"+t._s(t.formatePercent(e.ratio))),a("span",[t._v("合计"+t._s(e.studentSportList.length)+"人")])]),t._v(" "),a("table",{staticClass:"ghdf-table"},[t._m(1,!0),t._v(" "),t._l(e.studentSportList,function(e,s){return a("tr",{on:{click:function(a){t.tcgbDetail(e)}}},[a("td",[t._v(t._s(e.studentId))]),t._v(" "),a("td",[t._v(t._s(e.studentName)),a("span",{class:{xy:"male"==e.gender,xx:"female"==e.gender}})]),t._v(" "),a("td",[t._v(t._s(e.studentRecord))]),t._v(" "),a("td",[t._v(t._s(e.studentScore))]),t._v(" "),a("td",[a("div",{staticClass:"bcyx-td"},[a("span",[t._v(t._s(e.targetGap))]),t._v(" "),a("span",{staticClass:"bcyx-level"},[a("em",{style:{width:t.formatePercent(e.process>=1?1:e.process)}})]),t._v(" "),a("span",[t._v(t._s(e.studentTarget))])])])])})],2)])}))]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("序号")]),this._v(" "),e("td",[this._v("姓名")]),this._v(" "),e("td",[this._v("综合得分")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("序号")]),t._v(" "),a("td",[t._v("姓名")]),t._v(" "),a("td",[t._v("成绩")]),t._v(" "),a("td",[t._v("体测得分")]),t._v(" "),a("td",[t._v("提升目标")])])}]},l=a("/Xao")(o,n,!1,null,null,null);e.default=l.exports}});