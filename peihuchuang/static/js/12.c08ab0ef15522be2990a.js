webpackJsonp([12],{"e+iX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),r=n.n(a),l=n("vLgD");var o={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,startEndTime:"",searchObj:{pageSize:10,keyword:""}}},created:function(){"hospital"==adminType&&(this.searchObj.hospitalId=+adminId),this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},fetchData:function(){var e,t=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,(e=this.searchObj,Object(l.a)({url:"/api/order/search",method:"post",data:r()(e),headers:{"Content-Type":"application/json;charset=utf-8"}})).then(function(e){t.list=e.data.data.records,t.totalNum=e.data.data.total,t.listLoading=!1})},importOrder:function(){window.open("http://120.78.121.84:8086/api/order/xml","top")},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},orderStatus:function(e){return"accept"==e?"已下单":"unpay"==e?"待付款":"payed"==e?"已付款":"finish"==e?"已完成":"refund"==e?"已退款":"expired"==e?"已失效":"--"},dateLength:function(e,t){if(!e||!t)return"--";var n=new Date(e),a=new Date(t);return parseInt(a-n)/1e3/60+"分"}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"30px"}},[e._v("创建时间：")]),e._v(" "),n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.startEndTime,callback:function(t){e.startEndTime=t},expression:"startEndTime"}}),e._v(" "),n("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),n("br"),n("br"),e._v(" "),n("el-button",{staticClass:"filter-item",staticStyle:{"margin-right":"50px"},attrs:{type:"primary"},on:{click:e.importOrder}},[e._v("导出订单")]),e._v(" "),n("br"),n("br"),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.orderSn)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.createTime||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.phone||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.nickname||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"柜子编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&t.row.cabinet.sn||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"投放医院",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.hospital&&t.row.hospital.name||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"投放科室",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.office&&t.row.office.name||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"租用时长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.cabinet&&e.dateLength(t.row.cabinet.createTime,t.row.cabinet.updateTime))+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"合计金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.amount)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"优惠金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.couponAmount)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"实付金额（元）",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.amount&&t.row.couponAmount&&t.row.amount-t.row.couponAmount||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"订单状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.orderStatus(t.row.status))+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s("wechat"==t.row.payWay?"微信支付":"balance"==t.row.payWay?"余额支付":"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"星级评价",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.evaluation&&t.row.evaluation.score+"星"||"--")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"100",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){}}])})],1),e._v(" "),e.totalNum/10>1?n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]},i=n("VU/8")(o,s,!1,null,null,null);t.default=i.exports}});