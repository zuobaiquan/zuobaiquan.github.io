webpackJsonp([7],{A3DY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/dGt"),i=s("lScC"),l=(s("9rMa"),s("b5u4")),n={name:"gbtc-box",data:function(){return{isCheckxl:!1,selGrade:"",selectGrade:[],selectClass:[],selClass:"",selectCourse:[],selCourse:"",selBiaozhun:"",selectBiaozhun:[{value:"国标标准",label:"国标标准"},{value:"中考标准",label:"中考标准"}],dbuserList:[],bdbuserList:[],personImg:"data:image/png;base64,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",lineData:[],detailInfo:"",loadlineChart:!1,selectIndex:0,isDabiao:!0,showbzsm:!1,showbjbzsm:!1,showktbzsm:!1,showxlbzsm:!1}},components:{pie:a.a,LineChart:i.a},created:function(){this.getGradeData()},methods:{getGradeData:function(){var t=this;Object(l.e)().then(function(e){200==e.status&&(t.selectGrade=e.data.data,t.selectGrade.length>0&&(t.selGrade=t.selectGrade[0].id,t.changeGrade(t.selGrade)))})},changeGrade:function(t){this.selClass="",this.selCourse="",this.selGrade=t,this.detailInfo="",this.lineData=[],this.bdbuserList=[],this.dbuserList=[],this.getClassData(t)},changeClass:function(t){this.selCourse="",this.selClass=t,this.getCourseData(t)},changeCourseReport:function(t){this.selCourse=t,this.getStudentData(t)},bmiStatusText:function(t){return"underweight"==t?"低体重":"normal"==t?"正常":"overweight"==t?"超重":"fat"==t?"肥胖":void 0},getCourseData:function(t){var e=this;Object(l.c)({classOrgId:t}).then(function(t){200==t.status&&(e.selectCourse=t.data.data,e.selectCourse.length>0&&(e.selCourse=e.selectCourse[0].courseReportId,e.getStudentData(e.selCourse)))})},getClassData:function(t){var e=this;Object(l.a)({gradeOrgId:t}).then(function(t){200==t.status&&(e.selectClass=t.data.data,e.selectClass.length>0&&(e.selClass=e.selectClass[0].id,e.getCourseData(e.selClass)))})},studentClick:function(t,e){var s=this;this.selectIndex=e,Object(l.h)({courseStudentReportId:t.courseStudentReportId}).then(function(t){200==t.status&&(s.detailInfo=t.data.data,s.loadlineChart=!1,s.lineData=[{value:"",date:""}],s.detailInfo.heartRateList.length>0&&s.detailInfo.heartRateList.map(function(t){s.lineData.push({value:t.heartRate,date:s.parseTime(t.time,"{h}:{i}")})}),s.loadlineChart=!0)})},getStudentData:function(t){var e=this;Object(l.i)({courseReportId:t}).then(function(t){if(200==t.status){var s=t.data.data;s.length>0&&(e.dbuserList=s.filter(function(t){return"reach-standard"==t.reachStandardStatus}),e.bdbuserList=s.filter(function(t){return"not-reach-standard"==t.reachStandardStatus}),e.dbuserList.length>0?(e.isDabiao=!0,e.studentClick(e.dbuserList[0],0)):e.bdbuserList.length>0&&(e.isDabiao=!1,e.studentClick(e.bdbuserList[0],0)))}})}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"gbtc-container tykt-container"},[s("header",{staticClass:"tykt-header"},[s("div",{staticClass:"tykt-top"},[s("span",{staticClass:"option-lable"},[t._v("年级")]),t._v(" "),s("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeGrade},model:{value:t.selGrade,callback:function(e){t.selGrade=e},expression:"selGrade"}},t._l(t.selectGrade,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),t._v(" "),s("span",{staticClass:"option-lable option-mgleft"},[t._v("班级")]),t._v(" "),s("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeClass},model:{value:t.selClass,callback:function(e){t.selClass=e},expression:"selClass"}},t._l(t.selectClass,function(t,e){return s("el-option",{key:e,attrs:{label:t.name,value:t.id}})})),t._v(" "),s("span",{staticClass:"option-lable option-mgleft"},[t._v("课堂")]),t._v(" "),s("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"全部"},on:{change:t.changeCourseReport},model:{value:t.selCourse,callback:function(e){t.selCourse=e},expression:"selCourse"}},t._l(t.selectCourse,function(t,e){return s("el-option",{key:e,attrs:{label:t.courseReportName,value:t.courseReportId}})}))],1),t._v(" "),t.dbuserList.length>0||t.bdbuserList.length>0?s("div",{staticClass:"tykt-headerbtm"},[s("p",{staticClass:"tykt-txt"},[t._v("学生列表（共"+t._s(t.dbuserList.length+t.bdbuserList.length)+"人）")]),t._v(" "),s("div",{staticClass:"tykt-db-box"},[s("span",{staticClass:"db-item db"},[t._v("达标("+t._s(t.dbuserList.length)+"人)")]),t._v(" "),s("ul",t._l(t.dbuserList,function(e,a){return s("li",{class:{active:t.selectIndex==a&&t.isDabiao},on:{click:function(s){t.isDabiao=!0,t.studentClick(e,a)}}},[s("span",{staticClass:"num"},[t._v(t._s(a+1))]),t._v(t._s(e.studentName))])}))]),t._v(" "),s("div",{staticClass:"tykt-db-box"},[s("span",{staticClass:"db-item bdb"},[t._v("不达标("+t._s(t.bdbuserList.length)+"人)")]),t._v(" "),s("ul",t._l(t.bdbuserList,function(e,a){return s("li",{class:{active:t.selectIndex==a&&!t.isDabiao},on:{click:function(s){t.isDabiao=!1,t.studentClick(e,a)}}},[s("span",{staticClass:"num"},[t._v(t._s(a+1))]),t._v(t._s(e.studentName))])}))])]):t._e()]),t._v(" "),s("div",{staticClass:"tykt-userbox"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"tykt-userinfo"},[s("img",{attrs:{src:t.personImg,alt:""}}),t._v(" "),s("ul",[s("li",{staticClass:"info"},[s("span",{staticClass:"user-name"},[t._v(t._s(t.detailInfo.studentName))]),s("span",{staticClass:"sex",class:{xy:"male"==t.detailInfo.gender,xx:"female"==t.detailInfo.gender}},[t._v(t._s("male"==t.detailInfo.gender?"男":"female"==t.detailInfo.gender?"女":"未知"))]),t._v(t._s(t.detailInfo.age)+"岁")]),t._v(" "),s("li",{staticClass:"bmi"},[s("span",[t._v("BMI："+t._s(t.detailInfo.bmiValue)+t._s(t.bmiStatusText(t.detailInfo.bmiStatus)))])]),t._v(" "),s("li",{staticClass:"xh"},[t._v("学号："+t._s(t.detailInfo.studentNumber))]),t._v(" "),s("li",{staticClass:"bj"},[t._v("学校班级："+t._s(t.detailInfo.schoolName)+" "+t._s(t.detailInfo.className))]),t._v(" "),s("li",{staticClass:"mc"},[t._v("课堂名称："+t._s(t.detailInfo.courseReportName))]),t._v(" "),s("li",{staticClass:"sj"},[t._v("上课时间："+t._s(t.parseTime(t.detailInfo.startTime,"{y}-{m}-{d}"))+" "+t._s(t.parseTime(t.detailInfo.startTime,"{h}:{i}:{s}"))+"~"+t._s(t.parseTime(t.detailInfo.endTime,"{h}:{i}:{s}")))])]),t._v(" "),s("span",{class:{"dabiao-icon":t.isDabiao&&t.detailInfo,"bdabiao-icon":!t.isDabiao&&t.detailInfo}})]),t._v(" "),s("p",{staticClass:"tykt-txt"},[t._v("课堂强度"),s("em",{staticClass:"bzsm-icon",on:{click:function(e){t.showbzsm=!t.showbzsm}}},[t._v("标准说明"),s("a",{directives:[{name:"show",rawName:"v-show",value:t.showbzsm,expression:"showbzsm"}],staticClass:"bzsm-txt",attrs:{href:"javascript:;"}},[t._v("学生整个课堂的心率平均值")])])]),t._v(" "),s("div",{staticClass:"ktqdu-box"},[s("div",{staticClass:"ktqdubox-item"},[s("pie",{attrs:{className:"qdumdchart-box",id:"qdumdEchart1",color:["#D7E8FF","#F2F2F2"],data:[100,0],height:"130px",width:"130px"}},[s("div",{staticClass:"qdmddes"})]),t._v(" "),s("div",{staticClass:"ktqdubox-lcontent"},[s("div",[s("span",[t._v("运动强度")]),t._v(" "),s("span",[t._v(t._s(t.detailInfo.studentAverageHeartRate)),s("sub",[t._v("bpm")])])])])],1),t._v(" "),s("div",{staticClass:"ktqdubox-compare"},[s("div",[s("p",[t._v("对比情况")]),t._v(" "),s("p",{class:{red:t.formateNum(t.detailInfo.studentAverageHeartRate-t.detailInfo.classAverageHeartRate)<0,green:t.formateNum(t.detailInfo.studentAverageHeartRate-t.detailInfo.classAverageHeartRate)>0}},[t._v(t._s(t.formateNum(t.detailInfo.studentAverageHeartRate-t.detailInfo.classAverageHeartRate)>0?"+":"")+t._s(t.formateNum(t.detailInfo.studentAverageHeartRate-t.detailInfo.classAverageHeartRate))+"bpm")])])]),t._v(" "),s("div",{staticClass:"ktqdubox-item"},[s("pie",{attrs:{className:"qdumdchart-box",id:"qdumdEchart3",color:["#D7E8FF","#F1F1F1"],data:[100,0],height:"130px",width:"130px"}},[s("div",{staticClass:"qdmddes nianji"})]),t._v(" "),s("div",{staticClass:"ktqdubox-lcontent"},[s("div",[s("span",[t._v("班级运动强度")]),t._v(" "),s("span",{staticClass:"graynth2"},[t._v(t._s(t.detailInfo.classAverageHeartRate)),s("sub",[t._v("bpm")])])])])],1)]),t._v(" "),t.loadlineChart?s("p",{staticClass:"tykt-txt"},[t._v("课堂密度"),s("em",{staticClass:"bzsm-icon",on:{click:function(e){t.showktbzsm=!t.showktbzsm}}},[t._v("标准说明"),s("a",{directives:[{name:"show",rawName:"v-show",value:t.showktbzsm,expression:"showktbzsm"}],staticClass:"bzsm-txt",attrs:{href:"javascript:;"}},[t._v("计算公式：练习密度=运动时长/上课时长*100%；")])])]):t._e(),t._v(" "),s("div",{staticClass:"ktqdu-box"},[t.loadlineChart?s("div",{staticClass:"ktqdubox-item"},[s("pie",{attrs:{className:"qdumdchart-box",id:"qdumdEchart4",color:["#3DD6B7","#F2F2F2"],data:[t.detailInfo.studentAverageDensity,100-t.detailInfo.studentAverageDensity],height:"130px",width:"130px"}},[s("div",{staticClass:"qdmddes mdicon"})]),t._v(" "),s("div",{staticClass:"ktqdubox-lcontent"},[s("div",[s("span",[t._v("练习密度")]),t._v(" "),s("span",{staticClass:"greennth2"},[t._v(t._s(t.detailInfo.studentAverageDensity)),s("sub",[t._v("%")])])])])],1):t._e(),t._v(" "),s("div",{staticClass:"ktqdubox-compare"},[s("div",[s("p",[t._v("对比情况")]),t._v(" "),s("p",{class:{red:t.detailInfo.studentAverageDensity-t.detailInfo.classAverageDensity<0,green:t.detailInfo.studentAverageDensity-t.detailInfo.classAverageDensity>0}},[t._v(t._s(t.formateNum(t.detailInfo.studentAverageDensity-t.detailInfo.classAverageDensity)>0?"+":"")+t._s(t.formateNum(t.detailInfo.studentAverageDensity-t.detailInfo.classAverageDensity))+"%")])])]),t._v(" "),t.loadlineChart?s("div",{staticClass:"ktqdubox-item"},[s("pie",{attrs:{className:"qdumdchart-box",id:"qdumdEchart6",color:["#3DD6B7","#F1F1F1"],data:[t.detailInfo.classAverageDensity,100-t.detailInfo.classAverageDensity],height:"130px",width:"130px"}},[s("div",{staticClass:"qdmddes nianji"})]),t._v(" "),s("div",{staticClass:"ktqdubox-lcontent"},[s("div",[s("span",[t._v("班级练习密度")]),t._v(" "),s("span",{staticClass:"graynth2"},[t._v(t._s(t.detailInfo.classAverageDensity)),s("sub",[t._v("%")])])])])],1):t._e()]),t._v(" "),t.loadlineChart?s("p",{staticClass:"tykt-txt"},[t._v("课堂心率记录"),s("em",{staticClass:"bzsm-icon",on:{click:function(e){t.showxlbzsm=!t.showxlbzsm}}},[t._v("标准说明"),s("a",{directives:[{name:"show",rawName:"v-show",value:t.showxlbzsm,expression:"showxlbzsm"}],staticClass:"bzsm-txt",attrs:{href:"javascript:;"}},[t._v("学生整个课堂的心率平均值")])])]):t._e(),t._v(" "),t.loadlineChart?s("div",{staticClass:"xlchart-box"},[s("line-chart",{attrs:{data:t.lineData,id:"tcbgdetailChart",height:"433px",width:"100%"}},[s("div",[s("span",{staticClass:"grxl-span"},[t._v("个人心率")])])]),t._v(" "),t._m(2)],1):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"tykt-top-bg"},[e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tykt-txt"},[this._v("个人信息"),e("em",{staticClass:"bzsm-icon"},[this._v("标准说明")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"xlchart-linebox threeli-list"},[e("li",[this._v("热身运动 平均心率90bpm"),e("a",{staticClass:"xlchart-linehover",attrs:{href:"javascript:;"}},[this._v("预估心率 100bpm")])]),this._v(" "),e("li",[this._v("50米 平均心率149bpm")]),this._v(" "),e("li",[this._v("放松运动 平均心率106bpm")])])}]},o=s("/Xao")(n,r,!1,null,null,null);e.default=o.exports},b5u4:function(t,e,s){"use strict";e.e=function(t){return Object(a.a)({url:"/edu/studentcourserecord/getgradelist",method:"get",params:t})},e.a=function(t){return Object(a.a)({url:"/edu/studentcourserecord/getclasslist",method:"get",params:t})},e.c=function(t){return Object(a.a)({url:"/edu/studentcourserecord/getcouseteportlist",method:"get",params:t})},e.i=function(t){return Object(a.a)({url:"/edu/studentcourserecord/getcousestudentreportlist",method:"get",params:t})},e.h=function(t){return Object(a.a)({url:"/edu/studentcourserecord/getcousestudentreportdetail",method:"get",params:t})},e.f=function(t){return Object(a.a)({url:"/edu/classcourserecord/getgradelist",method:"get",params:t})},e.b=function(t){return Object(a.a)({url:"/edu/classcourserecord/getclasslist",method:"get",params:t})},e.d=function(t){return Object(a.a)({url:"/edu/classcourserecord/getcouseteportlist",method:"get",params:t})},e.g=function(t){return Object(a.a)({url:"/edu/classcourserecord/getcouseteportdetail",method:"get",params:t})};var a=s("vLgD")}});