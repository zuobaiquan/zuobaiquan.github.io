webpackJsonp([14],{"e+iX":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FWz8"),l={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,startEndTime:"",searchObj:{pageSize:20,type:"buy",keyword:""}}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(n.a)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},importOrder:function(){window.open("http://120.78.121.84:8086/api/order/xml","top")},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[e._v("创建时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.startEndTime,callback:function(t){e.startEndTime=t},expression:"startEndTime"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.importOrder}},[e._v("导出订单")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.parentSn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.orderSn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.nickname)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.servant&&t.row.servant.servant.wechat)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"柜子编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.count/2)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"投放医院",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"投放科室",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"租用时长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"合计金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"优惠金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"实付金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"订单状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"星级评价",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{width:"100",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])})],1),e._v(" "),e.totalNum/20>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,20,40,60],"page-size":20,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]},s=a("VU/8")(l,r,!1,null,null,null);t.default=s.exports}});