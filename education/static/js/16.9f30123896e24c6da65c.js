webpackJsonp([16],{"3m8R":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("byaH"),l=a("/dGt"),o=(a("9rMa"),{name:"gbtc-box",data:function(){return{inputName:"",startEndTime:"",schoolId:"",selectSchool:[],gradeId:"",selectGrade:[],list:[],multipleSelection:[],listLoading:!0,currentPage:1,totalNum:1,searchObj:{},dialogImport:!1,dialogExport:!1,fileList:[],exportStatus:"success",loadclass:!0,selGrade:"",selClass:""}},components:{pie:l.a},created:function(){this.getSchoolList()},methods:{getSchoolList:function(){var t=this;Object(s.n)().then(function(e){200==e.status&&(t.selectSchool=e.data.data)})},changeSchool:function(t){var e=this;this.searchObj.classId="",Object(s.m)({schoolId:t}).then(function(t){200==t.status&&(e.selectGrade=t.data.data)})},changeClass:function(t){this.loadclass=!1,this.searchObj.classId=t,this.loadclass=!0},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+t.length+" 个文件，共选择了 "+(t.length+e.length)+" 个文件")},importTable:function(){this.dialogImport=!0},exportTable:function(){this.dialogExport=!0},handleFilter:function(){this.currentPage=1,String(this.searchObj.classId)||delete this.searchObj.classId,String(this.searchObj.schoolId)||delete this.searchObj.schoolId,this.startEndTime?(this.searchObj.reportBeginDate=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.reportEndDate=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.reportBeginDate,delete this.searchObj.reportEndDate),this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,this.searchObj.pageNumber=this.currentPage,Object(s.o)(this.searchObj).then(function(e){e.data.success&&(t.list=e.data.data.sportVOList,t.totalNum=e.data.data.totalRecordCount,t.listLoading=!1)})},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},handleSelectionChange:function(t){this.multipleSelection=t},jlEdit:function(t){this.$router.push({path:"tcdxjldetail/"+t.sportId+"/"+t.studentId+"/"+this.parseTime(t.testDate,"{y}-{m}-{d}")})}}}),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gbtc-container"},[a("header",[a("span",{staticClass:"option-lable"},[t._v("学校")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeSchool},model:{value:t.searchObj.schoolId,callback:function(e){t.$set(t.searchObj,"schoolId",e)},expression:"searchObj.schoolId"}},t._l(t.selectSchool,function(t,e){return a("el-option",{key:e,attrs:{label:t.schoolName,value:t.schoolId}})})),t._v(" "),a("span",{staticClass:"option-lable option-mgleft"},[t._v("年级")]),t._v(" "),t.loadclass?a("el-select",{attrs:{placeholder:"全部"},on:{change:t.changeClass},model:{value:t.searchObj.classId,callback:function(e){t.$set(t.searchObj,"classId",e)},expression:"searchObj.classId"}},t._l(t.selectGrade,function(t,e){return a("el-option",{key:e,attrs:{label:t.schoolName,value:t.schoolId}})})):t._e(),t._v(" "),a("span",{staticClass:"option-lable option-mgleft"},[t._v("体测时间")]),t._v(" "),a("el-date-picker",{attrs:{type:"daterange","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.startEndTime,callback:function(e){t.startEndTime=e},expression:"startEndTime"}}),t._v(" "),a("div",{staticClass:"btn-operator"},[a("span",{staticClass:"search-btn",on:{click:function(e){t.handleFilter()}}},[t._v("搜索")]),t._v(" "),a("span",{staticClass:"reset-btn"},[t._v("重置")])])],1),t._v(" "),a("div",{staticClass:"jlop-box"},[a("div",[a("span",{on:{click:function(e){t.importTable()}}},[t._v("导入")]),t._v(" "),a("span",{on:{click:function(e){t.exportTable()}}},[t._v("导出")])]),t._v(" "),a("a",{attrs:{href:"javascript:;"}},[t._v("批量删除")])]),t._v(" "),a("div",{staticClass:"jl-table"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.list,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{label:"序号",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sportId))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"体测项目",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sportName))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"体测学员姓名","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.studentName))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"性别","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s("male"==e.row.gender?"男":"female"==e.row.gender?"女":"未知"))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"体测结果","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.record))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"体测班级","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.className))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"体测日期","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.parseTime(e.row.testDate,"{y}-{m}-{d}")))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"jl-edit",on:{click:function(a){t.jlEdit(e.row)}}}),t._v(" "),a("span",{staticClass:"jl-delete"})]}}])})],1),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),t.dialogImport?a("div",{staticClass:"dialog-box"},[a("p",{staticClass:"dialog-title"},[t._v("导入数据文件")]),t._v(" "),a("ul",{staticClass:"dialog-selectitem"},[a("li",[a("span",{staticClass:"option-dialog"},[t._v("所属学校")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.selGrade,callback:function(e){t.selGrade=e},expression:"selGrade"}},t._l(t.selectGrade,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("li",[a("span",{staticClass:"option-dialog"},[t._v("班级")]),t._v(" "),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.selClass,callback:function(e){t.selClass=e},expression:"selClass"}},t._l(t.selectGrade,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("li",[a("span",{staticClass:"option-dialog"},[t._v("上传文件")]),t._v(" "),a("el-upload",{staticStyle:{display:"inline-block","margin-left":"24px"},attrs:{action:"https://jsonplaceholder.typicode.com/posts/",limit:1,"on-exceed":t.handleExceed,"file-list":t.fileList}},[a("div",{staticClass:"upload-box"},[a("a",{attrs:{href:"javascript:;"}},[t._v("选择文件")]),t._v(" "),a("span",[t._v("未选择任何文件")])])])],1)]),t._v(" "),a("div",{staticClass:"dialog-btn"},[a("span",{staticClass:"dialog-cancle",on:{click:function(e){t.dialogImport=!1}}},[t._v("取消")]),t._v(" "),a("span",{staticClass:"dialog-confirm",on:{click:function(e){t.dialogImport=!1}}},[t._v("确定导入")])])]):t._e(),t._v(" "),t.dialogExport?a("div",{staticClass:"dialog-box"},[a("p",{staticClass:"dialog-title"},[t._v("导入提示")]),t._v(" "),a("i",{staticClass:"dialog-icon",class:{"export-status":"success"==t.exportStatus}}),t._v(" "),"success"==t.exportStatus?a("div",{staticClass:"dialog-tips"},[t._v("已经成功导入全部数据：100")]):t._e(),t._v(" "),"success"!==t.exportStatus?a("div",{staticClass:"dialog-tips"},[a("p",[t._v("已经成功导入数量：10")]),t._v(" "),a("p",[t._v("本次导入失败数量：90")])]):t._e(),t._v(" "),a("div",{staticClass:"dialog-btn"},[a("span",{staticClass:"dialog-cancle",on:{click:function(e){t.dialogExport=!1}}},[t._v("返回")])])]):t._e()],1)])},staticRenderFns:[]},n=a("/Xao")(o,i,!1,null,null,null);e.default=n.exports}});