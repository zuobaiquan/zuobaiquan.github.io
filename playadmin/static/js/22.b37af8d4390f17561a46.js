webpackJsonp([22],{cnKL:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("FWz8"),n={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,startEndTime:"",searchObj:{pageSize:10,payway:"wechat",type:"donation",keyword:""},selectInputOptions:[{id:1,name:"总订单号"},{id:2,name:"子订单号"},{id:3,name:"微信号"}],selectPayOptions:[{id:"balance",name:"余额支付"},{id:"wechat",name:"微信支付"}]}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.status)||delete this.searchObj.status,String(this.searchObj.keyword)||delete this.searchObj.keyword,(!String(this.searchObj.createDay)||String(this.searchObj.createDay).length<5)&&delete this.searchObj.createDay,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(r.f)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},paywayText:function(e){var t="--";return this.selectPayOptions.map(function(a){a.id==e&&(t=a.name)}),t},deleteDonate:function(e){}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",[e._v("支付方式：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.payway,callback:function(t){e.$set(e.searchObj,"payway",t)},expression:"searchObj.payway"}},e._l(e.selectPayOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[e._v("捐单时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.searchObj.createDay,callback:function(t){e.$set(e.searchObj,"createDay",t)},expression:"searchObj.createDay"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"总订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.parentSn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"子订单号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.orderSn)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"手机号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.phone||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.nickname)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"子捐单时长/小时",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&t.row.subOrder.count/2)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"子捐单金额/元",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.subOrder&&parseFloat(t.row.subOrder.amount/100).toFixed(2))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.paywayText(t.row.subOrder&&t.row.subOrder.payWay))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"捐单时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.parseTime(t.row.subOrder&&t.row.subOrder.createTime))+"\n      ")]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]},s=a("VU/8")(n,l,!1,null,null,null);t.default=s.exports}});