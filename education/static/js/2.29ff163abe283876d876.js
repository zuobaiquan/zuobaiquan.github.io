webpackJsonp([2],{"K/j1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("byaH"),r=a("xMGi"),i=(a("9rMa"),{name:"tcbg-detail",data:function(){return{personImg:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAMAAABiiJHFAAAC+lBMVEX/+vX/+/Xn7fP6+PXj6e7/+vT/+fX/+/f/+vV9suT/1bhjMBn18Ov07+r/+/b28ex5r+P8+PP//Pn9+fT/1Ld7seT79vH59O/48+7////69fD/07T/1LX/1rn//fv/+vT/277/2bv/uKFiLhhhLRZ6sOR2ruN3ruL/0bTJ4/+CteZ/s+V4r+NfKxVcKBFaJg/91Lf80rTN5f/+/v282viGt+Zxp9r/28L10bX/uqNqNyBvpNb81rn30rf1z7P/zbL0zrHqtY1eKhLL5P/8+/Xi7PLc6fH18u7+8+qOvOd1reNyrOLs5eF1qt3/3b//17r/1bltPSdlMh3J4/z++/b6+vX19/Xx9fX/9/H49PH/9e2lyOqcxeqZwefm29VsotX+5NJqoNJkm87/3cf/2L711b751brLuK+vg2h4STJiMBrp9P/Z6//P5v//+/j8+fbu8/Tp8PPl7vL/8/G30+2z0e2UweyszOqgxuiLuuf/8Ob67OD/6tv45tj+5tVontD/4cz53Mb/4sL/38H62b731rr31Lf007ftzbL6z7HvzK7/wqnUuKDzw5+/qpzbtpvquJPfpoClhnejdVyMZVN6TTlxPyfz+f/Q5Pf//faz1fb6+PS72PTf6vHU5PHL3/GiyvGsz/D28+/G2+6Yw+3Y4eu61Ov07uiVwOj/6+dvquLq4dz14dL54dDh1tDg1M7d0cvVxr7Ovrb/x67qya3gxq32yqrvxqj/uaLfvaHErZ/svZy8pZa4oJT/wJGskIO+l3u3jXKxh23/qWhmWFlYTVCGXU1SR019Uj93RDUmJDFwQSxYIg7E3/u62/rP4e/C2u3/6OLv6OLe293/5tvh3Npelsrw18bazcbYysPnzLHDsafiv6X/vKXXuqTWsZXXrpTks5C1oZCzoI/ksY7iroqhin/aoHmfgXn/sXiWc2WYdWSWcmFxYWCkeV//nlaeb1ZcUFP/nFKUYUqDWUaNXUVDPEOKWUE0MDs0LzomIzEeHS0aGipSHAeanUHKAAAACHRSTlP3f39/f3biP2CRP0EAAAZzSURBVFjD7dd1VNtAHAfwuZTkQlKFlgp0G8MHY0AHjG3YBmODubu7u7u7u7u7u7u7u7tv7+1ySdq0GUtl+2/f92jTC/fJL7+7QpslZ5Z/kFxZsub5B8nyn/3P/medZXUUpaOA7u+wOkBRlBaG0jZ+1np3LeAqi0xtauNxEyYeT09v+uHFzkPPn6xarXCZBVVHHQk8Eejj4wbj41OiRGC6ad054BoLWu00BbvZxCd9FOUSC1InQlSY4COpwHkWXGXuXRhjszXAWRasLeGWWZoFQtcpFtQKtDBCt1mqc2zV47wOCGOc2FrnBEuNQy3IPEG7KSfYWkFuIglc7jirPWQUY40TtI6yuuWwWLEEr3aUpXbYwQaOoxxlJ2QYxd2mWkfZjBF7gzPSTUGCvetj4oaMRh/cQTbVLdowLMYQvXW8m80+Mw78yPQnaM++n6scZK8c7S+hI9NHNrGGTdFpr4KNsOpJA+JOrAUOsaDx+zSIMvDgJhlBltXfp5fpR3/OCJq0wav/0caUQyx1vUlZiTn6gXsnwQJhjMHj02RwpH+jYQMkkrJNtjnGatftkfBj0I8e39Rkavpmqx6q5tzepnWElfa9MVpikzS9waBPsx4bdmdAsgPswNgYL4kdCYmMjEu2m+0eF7fdwurRffOyYVQ0d7hpc2Rfyk6WWhnzcKyBmzno4EuDldrv4I8d7KHX9seRMZmxJBspbKonjKJn5N2x5o2w8dvXQdbs4WP3OXbM2MiG0z1RpDasFGcDTyjQweLY2AchZvbYF4Ydcs2LZb/fY8+VHbM5tqcKhsAxBvRUkSxL4hhGYxg9io6TVsTFmNnBn94aGPbACOR63Xo0mDsZE9uwKs0qcIJhMZzPKujA1yoMI0gSS1oRW8iyZw3sM2LRkYzbCXENcQIFVyFViuFSloUVEtxbm8AwFQAERlStoxHspiFlbYciVJ5KNgoSsTgGWFaJoagYFieUsFE42V3N/EUo5ivYwWi0HHzS1JlHmEOSqGoMPihplkAqrkStYYKrAEHPk/hu8fYeLnB9o5hRdTVPWkE/0jxKHAatEsGyBOw6iVqDQsA2J/WlG7jeOyrK29dG9RoeFRW1BZ5uAFQ4LBInAQFbSsLlITAVfCRpFsPgOEDdJXHUclQ36oIM1nWTftbImKCOF/P29l4Pi+0BUEmws9z+UuEKdt9KIaX0hIEvFXBTMKwUT2ogQUQxtDatKCbV1KgLTMdJ9E7CcHrFGBZWzrL8bQuvCp/YunuqeUvuwaaKZVCzsjVaJVgwDFvMYinLKnAmBLoYt63h6LwImYWowrK9LGx0EsmsL04/KplqULGoCSQbNEqyrZXCo2oWQhZBUe3btw/jDfl2q5BHyov9n2978O64wYWlS8/y3iOaOsDZT+NUH1571RoYi1of6JxldaA+coXRRLj2TaeP7+9Udf08LrE60EMjs0Vlvr2Ay1/3qtRXy6xQtT4Z6FxiUajkPuXU5VjUSxPRjfpL39ApXa+RQwuFhBQaumlkFeovfvFPHlkcZcxQpLrMAhDfpl2byt1kIYXolGvgWTkhIaFd20oAOM2CCgmLlvgHpCwo2NC8Yc9PW5aSkpJf3rVzYjxwhgUV53fN756XTvmFapZt1LKTPC+KvHT4mYrAYXbqab/8eZnk6xR6EbmaRrOmwQtxyR+eCBxkK9cojaaybvmFl6MljWpNmQtVXkp3jHeEBW395fzp8rxzCpYvX/BUOFJ5CegSbz8LEuRI5cU/NLRFwcIF8trGvctUu9m2+QTT/Uo2n9xSyMJ6OwA72UrhciEbWpKr1j28ZngAb+Fm2seC6rBYIduiOcMGdAwLC+tgceWl4u1iE9EeyLQJXcNa7QIepeSWcmfZw1ZAM4TVFgxlqq3usf/dfo+5vF+qCexgE+G7QBj5jJIlGXaJx9PXuzxq8Nh8lcRZUB1NEMTdb87JBfSpArPDtGFT+NcunSjOVvQXiFxR7swFA2rMqBFgtcfmA1F2JqxDJHLk8663SJQFs0VZ4W10FGc7cJu2SAERrUAZrvrO4mxn7gbrlRFhi9bl2C7ibHVuVu8iYmxtjq0pztbkZtUVY2sX5Y5KibOlBLMyib/luuHirJ/lHkVYS5f8Koix03krIsJa1tS/ohhb2fxvpUhvu1l5JTG23TJ3NkXq5XP/U+SXynCHKW1s2dxZrZM9mzk5smUS4fns1kjOX5kYFuD+x1M+AAAAAElFTkSuQmCC",sylData:[76,24],selectDate:"",selectDatelist:[],selType:"",scoreHistoryData:[],SingleSportArr:[],AllSportArr:[],selectType:[],personDada:"",isloadSportChart:!1}},created:function(){this.selectDate=this.$route.params.reportDate,this.fetchData()},components:{LineChart:r.a},methods:{fetchData:function(){var t=this;Object(s.i)({studentId:this.$route.params.studentId,reportDate:this.selectDate}).then(function(e){if(200==e.status){for(var a in t.personDada=e.data.data,t.selectDatelist=t.personDada.reportDateList.map(function(e){return t.parseTime(e,"{y}-{m}-{d}")}),t.personDada.sportInfoArr=[],t.personDada.sportInfoList)t.personDada.sportInfoArr.push({ratio:t.formatePercent(t.personDada.sportInfoList[a].ratio),score:t.personDada.sportInfoList[a].score,name:t.personDada.sportInfoList[a].name});for(var s in t.scoreHistoryData=[],t.personDada.scoreHistoryList.length>0&&t.personDada.scoreHistoryList.map(function(e){t.scoreHistoryData.push({value:e.score,date:t.parseTime(e.testDate,"{m}/{d}")})}),t.selectType=[],t.AllSportArr=t.personDada.sportHistoryMap,t.AllSportArr)t.selectType.push({value:s,lable:s});t.selType=t.selectType[0].value,t.changeType(t.selType)}})},levelText:function(t){return"excellent"==t?"优秀":"good"==t?"良好":"pass"==t?"及格":"fail"==t?"不及格":"normal"==t?"正常":"overweigth"==t?"超重":"underweigth"==t?"低体重":"肥胖"==t?"fat":"--"},changeType:function(t){var e=this;for(var a in this.isloadSportChart=!1,this.AllSportArr)if(a==t){this.selType=t;var s=this.AllSportArr[a];this.SingleSportArr=[],s.length>0&&s.map(function(t){e.SingleSportArr.push({value:t.score,date:e.parseTime(t.testDate,"{m}/{d}")})}),this.isloadSportChart=!0}},tcgbDetail:function(){}}}),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tcbg-container gbtc-container"},[a("div",{staticClass:"peroson-info"},[a("img",{attrs:{src:t.personImg,alt:""}}),t._v(" "),a("div",{staticClass:"perosoninfo-box"},[a("div",[t._v(t._s(t.personDada.studentName)),a("span",{class:{xy:"male"==t.personDada.gender,xx:"female"==t.personDada.gender}},[t._v(t._s(t.personDada.studentAge)+"岁")])]),t._v(" "),a("div",[t._v("学号："+t._s(t.personDada.studentSchoolId)),a("span",[t._v("学校名称："+t._s(t.personDada.schoolName)+" "+t._s(t.personDada.className))])])])]),t._v(" "),a("div",{staticClass:"tcbgdetail-box"},[a("div",{staticClass:"tcbgdetail-txt"},[t._v("个人综合得分\n      "),a("div",{staticClass:"tc-ecl"},[a("span",{staticClass:"option-lable"},[t._v("体测历史")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.selectDate,callback:function(e){t.selectDate=e},expression:"selectDate"}},t._l(t.selectDatelist,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:t}})}))],1)]),t._v(" "),a("div",{staticClass:"tcbg-debox"},[a("div",{staticClass:"zg"},[t._m(0),t._v(" "),a("span",[t._v(t._s(t.personDada.totalScore)),a("sub",[t._v("分")])])]),t._v(" "),t._l(t.personDada.sportInfoArr,function(e,s){return a("div",{staticClass:"zg-item"},[a("p",[t._v(t._s(e.name))]),t._v(" "),a("p",[t._v("占"+t._s(e.ratio))]),t._v(" "),a("p",[t._v(t._s(e.score)+"分")])])})],2),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"ghdf-list ghdfdx-list"},[a("table",{staticClass:"list-table ghdf-table"},[t._m(2),t._v(" "),t._l(t.personDada.sportDetailList,function(e,s){return a("tr",[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(t.parseTime(e.testDate,"{y}-{m}-{d}")))]),t._v(" "),a("td",[t._v(t._s(e.record))]),t._v(" "),a("td",[t._v(t._s(e.score))]),t._v(" "),a("td",{staticStyle:{width:"10%"}},[t._v(t._s(t.levelText(e.rank)))]),t._v(" "),a("td",{staticStyle:{width:"40%"}},[a("div",{staticClass:"bcyx-td"},[a("span",[t._v(t._s(e.target))]),t._v(" "),a("span",{staticClass:"bcyx-level"},[a("em",{style:{width:t.formatePercent(e.process>=1?1:e.process)}})]),t._v(" "),a("span",[t._v(t._s(t.levelText(e.notice)))])])])])})],2)])]),t._v(" "),a("div",{staticClass:"dfquxt-box"},[t.scoreHistoryData.length>0?a("div",{staticClass:"dfquxtbox-left"},[a("p",{staticClass:"tcbgdetail-txt"},[t._v("综合得分曲线图")]),t._v(" "),a("div",{staticClass:"linechart-box"},[a("line-chart",{attrs:{data:t.scoreHistoryData,id:"tcbgdetailChart",height:"433px",width:"560px"}})],1)]):t._e(),t._v(" "),t.SingleSportArr.length>0?a("div",{staticClass:"dfquxtbox-right"},[a("div",{staticClass:"tcbgdetail-txt"},[t._v("单项得分曲线图\n        "),a("div",{staticClass:"tcbg-option"},[a("span",{staticClass:"option-lable"},[t._v("体测项目")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeType},model:{value:t.selType,callback:function(e){t.selType=e},expression:"selType"}},t._l(t.selectType,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1)]),t._v(" "),t.isloadSportChart?a("div",{staticClass:"linechart-box"},[a("line-chart",{attrs:{data:t.SingleSportArr,id:"dxbgdetailChart",height:"433px",color:"#80A4FF",width:"560px"}})],1):t._e()]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",[this._v("最新综")]),this._v(" "),e("span",[this._v("合得分")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"tcbgdetail-txt"},[this._v("体测报告项目记录"),e("span",[this._v("查看国标标准")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v("体测项目")]),t._v(" "),a("td",[t._v("体测日期")]),t._v(" "),a("td",[t._v("结果")]),t._v(" "),a("td",[t._v("得分")]),t._v(" "),a("td",{staticStyle:{width:"10%"}},[t._v("等级")]),t._v(" "),a("td",{staticStyle:{width:"40%"}},[t._v("提升目标")])])}]},o=a("/Xao")(i,l,!1,null,null,null);e.default=o.exports},a3Yh:function(t,e,a){"use strict";e.__esModule=!0;var s,r=a("liLe"),i=(s=r)&&s.__esModule?s:{default:s};e.default=function(t,e,a){return e in t?(0,i.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},lbsL:function(t,e,a){a("ngi5");var s=a("Rv9F").Object;t.exports=function(t,e,a){return s.defineProperty(t,e,a)}},liLe:function(t,e,a){t.exports={default:a("lbsL"),__esModule:!0}},ngi5:function(t,e,a){var s=a("8leu");s(s.S+s.F*!a("berT"),"Object",{defineProperty:a("Mr+r").f})},xMGi:function(t,e,a){"use strict";var s=a("a3Yh"),r=a.n(s),i=a("ARhN"),l=a.n(i),o={mixins:[a("0W7K").a],props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"200px"},height:{type:String,default:"200px"},data:{type:Array,default:function(){return[0,0]}},color:{type:String,default:"#FF8951"}},watch:{data:{deep:!0,handler:function(){this.initChart()}}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t,e=[],a=[];this.data.forEach(function(t){e.push(t.value),a.push(t.date)}),this.chart=l.a.init(document.getElementById(this.id)),this.chart.setOption({tooltip:{formatter:"{c}分"},xAxis:{type:"category",boundaryGap:!1,data:a,axisLabel:{color:"#555",fontSize:14},axisLine:{lineStyle:{width:1,type:"dashed",color:"#d1d1d1"}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#e6e6e6"}}},yAxis:{type:"value",splitNumber:9,axisLine:{lineStyle:{width:0}},axisTick:{show:!1},axisLabel:{color:"#343434",fontSize:14,formatter:function(t){return t?t+"分":""}},splitLine:{show:!0,lineStyle:{type:"dashed",color:"#e6e6e6"}}},series:[(t={type:"line",areaStyle:{},data:e,symbol:"circle",symbolSize:6,smooth:!1},r()(t,"areaStyle",{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:this.color},{offset:1,color:"#FFFFFF"}],globalCoord:!1}},origin:"start"}),r()(t,"itemStyle",{normal:{color:this.color,lineStyle:{color:this.color}}}),t)]})}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width},attrs:{id:this.id}})},staticRenderFns:[]},c=a("/Xao")(o,n,!1,null,null,null);e.a=c.exports}});