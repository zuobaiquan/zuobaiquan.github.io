webpackJsonp([25],{OLfI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FWz8"),l={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10,payWay:"",keyword:"",type:"",tradeDate:""},selectTradeOptions:[{id:"sell",name:"出售服务"},{id:"buy",name:"购买服务"},{id:"withdraw",name:"提现"},{id:"refund",name:"退款"},{id:"reward",name:"分享奖励"},{id:"free",name:"免单"},{id:"recharge",name:"充值余额"},{id:"deduction",name:"扣除余额"},{id:"donation",name:"捐单"}],selectPayOptions:[{id:"balance",name:"余额支付"},{id:"wechat",name:"微信支付"},{id:"system",name:"系统支出"}],selectStatusOptions:[{id:"0",name:"待付款"},{id:"1",name:"待接单"},{id:"2",name:"服务中"},{id:"3",name:"已完成"},{id:"4",name:"已失效"}]}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,String(this.searchObj.payWay)||delete this.searchObj.payWay,String(this.searchObj.type)||delete this.searchObj.type,(!String(this.searchObj.tradeDate)||String(this.searchObj.tradeDate).length<5)&&delete this.searchObj.tradeDate,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(n.d)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},financeDetail:function(e){this.$router.push({path:"financeDetail/"+e.id})},paywayText:function(e){var t="--";return this.selectPayOptions.map(function(a){a.id==e&&(t=a.name)}),t},tradeText:function(e){var t="--";return this.selectTradeOptions.map(function(a){a.id==e&&(t=a.name)}),t},deleteFinance:function(e){var t=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({id:e.bill.id}).then(function(e){200==e.status&&0==e.data.code?(t.$message({type:"success",message:"已删除"}),t.fetchData()):t.$message({message:e.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("交易事项：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.type,callback:function(t){e.$set(e.searchObj,"type",t)},expression:"searchObj.type"}},e._l(e.selectTradeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("支付方式：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.payWay,callback:function(t){e.$set(e.searchObj,"payWay",t)},expression:"searchObj.payWay"}},e._l(e.selectPayOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[e._v("交易时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.searchObj.tradeDate,callback:function(t){e.$set(e.searchObj,"tradeDate",t)},expression:"searchObj.tradeDate"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"总订单编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&t.row.bill.targetId||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.nickname)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易金额/元",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&parseFloat(t.row.bill.amount/100).toFixed(2))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.paywayText(t.row.bill&&t.row.bill.payWay))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易事项",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.tradeText(t.row.bill&&t.row.bill.type))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收支类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&"系统支出"==e.paywayText(t.row.bill&&t.row.bill.payWay)?"支出":"收入")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",width:"280",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.financeDetail(t.row)}}},[e._v("查看详情")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.deleteFinance(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]},i=a("VU/8")(l,r,!1,null,null,null);t.default=i.exports}});