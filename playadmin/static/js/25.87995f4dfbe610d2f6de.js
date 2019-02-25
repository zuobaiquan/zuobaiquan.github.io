webpackJsonp([25],{OLfI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("FWz8"),i={data:function(){return{list:null,listLoading:!0,currentPage:1,totalNum:1,searchObj:{pageSize:10,payWay:"",keyword:"",type:"",tradeDate:""},form:{},selectTradeOptions:[{id:"sell",name:"出售服务"},{id:"buy",name:"购买服务"},{id:"withdraw",name:"提现"},{id:"refund",name:"退款"},{id:"reward",name:"分享奖励"},{id:"free",name:"免单"},{id:"recharge",name:"充值余额"},{id:"deduction",name:"扣除余额"},{id:"donation",name:"捐单"}],selectPayOptions:[{id:"balance",name:"余额支付"},{id:"wechat",name:"微信支付"},{id:"system",name:"系统支出"}],selectrefundOptions:[{id:"wait",name:"待退款"},{id:"success",name:"已退款"},{id:"fail",name:"退款失败"}],selectStatusOptions:[{id:"unpay",name:"待付款"},{id:"payed",name:"已付款"},{id:"accept",name:"已接单"},{id:"finish",name:"已完成"},{id:"expired",name:"已失效"},{id:"refund",name:"已退款"}],dialogVisible:!1,dialogImageUrl:"",dialogFormVisible:!1}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,String(this.searchObj.payWay)||delete this.searchObj.payWay,String(this.searchObj.type)||delete this.searchObj.type,(!String(this.searchObj.tradeDate)||String(this.searchObj.tradeDate).length<5)&&delete this.searchObj.tradeDate,this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(n.d)(this.searchObj).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handleCurrentChange:function(e){this.currentPage=e,this.fetchData()},handlePictureCardPreview:function(e){this.dialogImageUrl=e,this.dialogVisible=!0},financeDetail:function(e){var t=this;"refund"==e.bill.type?Object(n.j)({id:e.bill.id}).then(function(e){t.form=e.data.data,t.dialogFormVisible=!0}):this.$router.push({path:"financeDetail/"+e.bill.targetId})},statusText:function(e){var t="--";return this.selectStatusOptions.map(function(a){a.id==e&&(t=a.name)}),t},refundTextStatus:function(e){var t="--";return this.selectrefundOptions.map(function(a){a.id==e&&(t=a.name)}),t},paywayText:function(e){var t="--";return this.selectPayOptions.map(function(a){a.id==e&&(t=a.name)}),t},tradeText:function(e){var t="--";return this.selectTradeOptions.map(function(a){a.id==e&&(t=a.name)}),t},deleteFinance:function(e){var t=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.a)({id:e.bill.id}).then(function(e){200==e.status&&0==e.data.code?(t.$message({type:"success",message:"已删除"}),t.fetchData()):t.$message({message:e.data.message||"操作失败",type:"warning"})})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px","margin-right":"10px"},attrs:{clearable:"",placeholder:"请输入关键字"},model:{value:e.searchObj.keyword,callback:function(t){e.$set(e.searchObj,"keyword",t)},expression:"searchObj.keyword"}}),e._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("交易事项：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"105px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.type,callback:function(t){e.$set(e.searchObj,"type",t)},expression:"searchObj.type"}},e._l(e.selectTradeOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"20px"}},[e._v("支付方式：")]),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"搜索项"},model:{value:e.searchObj.payWay,callback:function(t){e.$set(e.searchObj,"payWay",t)},expression:"searchObj.payWay"}},e._l(e.selectPayOptions,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e._v(" "),a("span",{staticStyle:{"margin-left":"30px"}},[e._v("交易时间：")]),e._v(" "),a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.searchObj.tradeDate,callback:function(t){e.$set(e.searchObj,"tradeDate",t)},expression:"searchObj.tradeDate"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("搜索")]),e._v(" "),a("br"),a("br"),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(10*(e.currentPage-1)+t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"总订单编号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&t.row.bill.targetId||"--")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"用户昵称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.user&&t.row.user.nickname)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易金额/元",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&parseFloat(t.row.bill.amount/100).toFixed(2))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"支付方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.paywayText(t.row.bill&&t.row.bill.payWay))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易事项",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.tradeText(t.row.bill&&t.row.bill.type))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"收支类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill&&"系统支出"==e.paywayText(t.row.bill&&t.row.bill.payWay)?"支出":"收入")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"交易时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bill.createTime)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",width:"280",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.financeDetail(t.row)}}},[e._v("查看详情")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){e.deleteFinance(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:e.totalNum},on:{"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{title:"退款详情",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form}},[a("el-form-item",{attrs:{label:""}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"column-three"},[e._v("退款状态："+e._s(e.refundTextStatus(e.form.refundStatus)))]),e._v(" "),a("div",{staticClass:"column-three"},[a("span",{staticClass:"three-item"},[e._v("下单用户微信号："+e._s(e.form.customWx))]),e._v(" "),a("span",{staticClass:"three-item"},[e._v("下单用户昵称："+e._s(e.form.customNickname))])]),e._v(" "),a("div",{staticClass:"column-three"},[a("span",{staticClass:"three-item"},[e._v("服务技师微信号："+e._s(e.form.servantWx))]),e._v(" "),a("span",{staticClass:"three-item"},[e._v("服务技师昵称："+e._s(e.form.servantNickname))])]),e._v(" "),a("div",{staticClass:"column-three"},[a("span",{staticClass:"three-item"},[e._v("订单编号："+e._s(e.form.orderSn))]),e._v(" "),a("span",{staticClass:"three-item"},[e._v("订单状态："+e._s(e.statusText(e.form.orderStatus)))])]),e._v(" "),a("div",{staticClass:"column-three"},[a("span",{staticClass:"three-item"},[e._v("订单总额："+e._s(parseFloat(e.form.orderAmount/100).toFixed(2)))]),e._v(" "),a("span",{staticClass:"three-item"},[e._v("支付方式："+e._s(e.paywayText(e.form.orderPayWay)))])]),e._v(" "),a("div",{staticClass:"column-three"},[e._v("\n            申请退款时间："+e._s(e.form.createTime)+"\n          ")]),e._v(" "),a("div",{staticClass:"column-three"},[e._v("\n            退款理由："+e._s(e.form.content)+"\n          ")]),e._v(" "),e.form.photoUrl?a("img",{staticStyle:{width:"100px",height:"100px",display:"inline-block","vertical-align":"middle","border-radius":"50%"},attrs:{src:e.form.photoUrl,alt:""},on:{click:function(t){e.handlePictureCardPreview(e.form.photoUrl)}}}):e._e(),e._v(" "),a("br"),a("br"),e._v(" "),e.form.videoUrl?a("video",{staticStyle:{width:"180px"},attrs:{controls:"controls",preload:"",loop:"loop",src:e.form.videoUrl}}):e._e()])],1)],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")(i,r,!1,null,null,null);t.default=l.exports}});