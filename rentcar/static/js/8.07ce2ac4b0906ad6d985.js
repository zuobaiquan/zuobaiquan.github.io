webpackJsonp([8],{"3VyT":function(t,e,a){var r=a("DAd3");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("8bSs")("7ccc8b16",r,!0)},DAd3:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,"\n.box-card[data-v-7362fd9c] {\n  margin-bottom: 10px;\n}\n.item-listbox[data-v-7362fd9c] {\n  font-size: 0;\n  overflow: hidden;\n}\n.list-left[data-v-7362fd9c] {\n  margin: 0;\n  width: 70%;\n  float: left;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-right: 1px dashed #ebeef5;\n  border-bottom: 1px dashed #ebeef5;\n}\n.list-left ul[data-v-7362fd9c] {\n    padding: 0;\n    padding-left: 30px;\n    margin: 0;\n    font-size: 0;\n    width: 100%;\n}\n.list-left ul li[data-v-7362fd9c] {\n      padding: 6px 0;\n      width: 33.33%;\n      display: inline-block;\n      list-style: none;\n      font-size: 14px;\n      color: #666;\n}\n.clearfix[data-v-7362fd9c] {\n  line-height: 28px;\n}\n.list-right[data-v-7362fd9c] {\n  margin-left: 70%;\n  vertical-align: middle;\n}\n.list-bottomtext[data-v-7362fd9c] {\n  padding: 10px 0 0 30px;\n}\n.list-onetext[data-v-7362fd9c] {\n  margin: 45px 0;\n  color: #990000;\n  font-size: 18px;\n  text-align: center;\n}\n.list-carone[data-v-7362fd9c] {\n  position: relative;\n}\n.list-carone img[data-v-7362fd9c] {\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    border-radius: 50%;\n}\n.list-carone ul[data-v-7362fd9c] {\n    margin: 0;\n    padding: 0;\n    font-size: 0;\n    margin-left: 50px;\n}\n.list-carone ul li[data-v-7362fd9c] {\n      list-style: none;\n      margin: 0;\n      width: 50%;\n      display: inline-block;\n      margin: 2px 0 10px 0;\n      font-size: 13px;\n      color: #666;\n}\n.list-carone ul li.listwhole[data-v-7362fd9c] {\n        width: 100%;\n}\n.search-list[data-v-7362fd9c] {\n  margin: 0 30px;\n  padding: 0;\n  text-align: left;\n}\n.search-list li[data-v-7362fd9c] {\n    margin: 0;\n    list-style: none;\n    padding: 0;\n    height: 60px;\n    line-height: 60px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #ddd;\n}\n.search-list li img[data-v-7362fd9c] {\n      display: inline-block;\n      vertical-align: middle;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n}\n.status-text[data-v-7362fd9c] {\n  position: absolute;\n  right: 200px;\n  top: 0;\n}\n",""])},"W+8A":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("3cXf"),i=a.n(r),s=a("vLgD");var l={data:function(){return{dialogVisible:!1,dialogTitle:"",dialogFormVisible:!1,dialogImageUrl:"",list:null,listLoading:!0,currentPage:1,baseURL:"http://47.106.224.185:8086/api/upload",totalNum:1,searchObj:{pageSize:10},form:{status:""},orderStatus:[{id:"wait",name:"等待接单"},{id:"accept",name:"已接单"},{id:"start",name:"到达开始地点"},{id:"begin",name:"开始服务"},{id:"end",name:"已完成"},{id:"cancel",name:"订单取消"}],checkList:[],startEndTime:"",dialogOrderVisible:!1,rules2:{reason:[{required:!0,message:"理由不为空",trigger:"blur"}]},form2:{reason:""},ordercountObj:{}}},created:function(){var t,e=this;this.handleFilter(),(t={},Object(s.a)({url:"/api/order/count",method:"get",params:t})).then(function(t){e.ordercountObj=t.data.data,console.log(e.ordercountObj)})},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.orderSn)||delete this.searchObj.orderSn,String(this.searchObj.organizationName)||delete this.searchObj.organizationName,String(this.searchObj.status)||delete this.searchObj.status,String(this.searchObj.driverName)||delete this.searchObj.driverName,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},fetchData:function(){var t,e=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,(t=this.searchObj,Object(s.a)({url:"/api/order/search",method:"post",data:i()(t),headers:{"Content-Type":"application/json;charset=utf-8"}})).then(function(t){e.list=t.data.data.records,e.totalNum=t.data.data.total,e.listLoading=!1})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.avatar,this.dialogVisible=!0},handleImageScucess:function(t,e,a){this.form.coverUrl=t.data},getDriver:function(){this.dialogFormVisible=!0},beforeAvatarUpload:function(t){console.log(t);var e=["image/jpeg","image/gif","image/png"].includes(t.type);return e||this.$message.error("图片格式不正确!"),e},cancleOrder:function(t){t&&(this.form2.orderSn=t.orderSn,this.dialogOrderVisible=!0)},submitCancle:function(t){var e=this;this.$refs[t].validate(function(t){var a;t&&(a="orderSn="+e.form2.orderSn+"&reason="+e.form2.reason,Object(s.a)({url:"/api/order/cancel",method:"POST",data:a,headers:{"Content-Type":"application/x-www-form-urlencoded"}})).then(function(t){0==t.data.code?(e.$message({message:"已取消",type:"success"}),e.dialogOrderVisible=!1,e.fetchData()):e.$message({message:t.data.message||"操作失败",type:"warning"})})})},importOrder:function(){window.open("http://47.106.224.185:8086/api/order/xml?pageSize=10000&pageNo=1","top")},putOrder:function(t){this.$router.push({path:"reservecar/"+t})},orderText:function(t){return"wait"==t?"等待接单":"accept"==t?"已接单":"start"==t?"到达开始地点":"begin"==t?"开始服务":"end"==t?"已完成":"cancel"==t?"订单取消":"--"},submitRes:function(){}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t.ordercountObj?a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总服务次数:"+t._s(t.ordercountObj.allServiceCount))]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天服务中："+t._s(t.ordercountObj.todayServiceCount))])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总完成次数:"+t._s(t.ordercountObj.allFinishCount))]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天完成："+t._s(t.ordercountObj.todayFinishCount))])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总接单次数:"+t._s(t.ordercountObj.allAcceptCount))]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天接单："+t._s(t.ordercountObj.todayAcceptCount))])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总取消次数:"+t._s(t.ordercountObj.allCancelCount))]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天取消："+t._s(t.ordercountObj.todayCancelCount))])])],1)],1):t._e(),t._v(" "),a("span",{staticClass:"label"},[t._v("单位名称")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入单位名称"},model:{value:t.searchObj.organizationName,callback:function(e){t.$set(t.searchObj,"organizationName",e)},expression:"searchObj.organizationName"}}),t._v(" "),a("span",{staticClass:"label"},[t._v("订单编号")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入订单编号"},model:{value:t.searchObj.orderSn,callback:function(e){t.$set(t.searchObj,"orderSn",e)},expression:"searchObj.orderSn"}}),t._v(" "),a("span",{staticClass:"label"},[t._v("司机")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入司机姓名"},model:{value:t.searchObj.driverName,callback:function(e){t.$set(t.searchObj,"driverName",e)},expression:"searchObj.driverName"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"label"},[t._v("订单状态")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchObj.status,callback:function(e){t.$set(t.searchObj,"status",e)},expression:"searchObj.status"}},t._l(t.orderStatus,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"label"},[t._v("日期")]),t._v(" "),a("el-date-picker",{staticStyle:{"vertical-align":"middle"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.startEndTime,callback:function(e){t.startEndTime=e},expression:"startEndTime"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.importOrder()}}},[t._v("导出约车订单")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.putOrder(1)}}},[t._v("录入约车订单")]),t._v(" "),a("br"),a("br"),t._v(" "),t._l(t.list,function(e,r){return t.list&&t.list.length>0?a("el-card",{key:r,staticClass:"box-card"},[a("div",{staticClass:"clearfix",staticStyle:{position:"relative"},attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"label"},[t._v("订单编号："+t._s(e.order&&e.order.orderSn||"--"))]),t._v(" "),a("span",{staticClass:"label"},[t._v("订单来源："+t._s(e.order&&e.order.organizationName||"--"))]),t._v(" "),a("span",{staticClass:"label"},[t._v("订单时间："+t._s(e.order&&e.order.createTime||"--"))]),t._v(" "),a("span",{staticClass:"label status-text",staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v(t._s(t.orderText(e.order&&e.order.status)))]),t._v(" "),e.order&&"wait"==e.order.status?a("div",{staticStyle:{float:"right"}},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.cancleOrder(e.order)}}},[t._v("取消")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.getDriver()}}},[t._v("派单")])],1):t._e()]),t._v(" "),a("div",{staticClass:"text item item-listbox"},[a("div",{staticClass:"list-left"},[a("ul",[a("li",[t._v("客户："+t._s(e.order&&e.order.customerName||"--"))]),a("li",[t._v("电话："+t._s(e.order&&e.order.customerPhone||"--"))]),a("li",[t._v("人数："+t._s(e.order&&e.order.customerCount||"--"))])]),t._v(" "),a("ul",[a("li",[t._v("订单类型："+t._s(e.order.customerType||"--"))]),a("li",[t._v("区域："+t._s(e.order&&e.order.province+e.order.city+e.order.area||"--"))])]),t._v(" "),a("ul",[a("li",[t._v("出发地："+t._s(e.order&&e.order.startAddress||"--"))]),a("li",[t._v("目的地："+t._s(e.order&&e.order.endAddress||"--"))]),a("li",[t._v("路程/时间："+t._s(e.order&&e.order.roadPrediction||"--"))])]),t._v(" "),a("ul",[a("li",[t._v("预约时间："+t._s(e.order&&e.order.customerAppointment||"--"))]),a("li",[t._v("车型要求："+t._s(e.carType&&e.carType.name+"-"+e.carDetailType.name||"--"))]),a("li",[t._v("航班："+t._s(e.order&&e.order.customerPlaneNo||"--"))])])]),t._v(" "),a("div",{staticClass:"list-right"},[e.order&&"cancel"==e.order.status?a("p",{staticClass:"list-onetext"},[t._v("订单已取消")]):e.order&&"wait"==e.order.status?a("p",{staticClass:"list-onetext"},[t._v("待司机接单")]):a("div",{staticClass:"list-carone"},[a("img",{attrs:{src:e.driver&&e.driver.user&&e.driver.user.avatar}}),t._v(" "),a("ul",[a("li",[t._v("司机："+t._s(e.driver&&e.driver.user&&e.driver.user.nickname||"--"))]),t._v(" "),a("li",[t._v("电话："+t._s(e.driver&&e.driver.user&&e.driver.user.phone||"--"))]),t._v(" "),a("li",[t._v("车型："+t._s(e.driver&&e.driver.car&&e.driver.car.carType.name+"-"+e.driver.car.carDetailType.name||"--"))]),t._v(" "),a("li",[t._v("车牌："+t._s(e.driver&&e.driver.car&&e.driver.car.car&&e.driver.car.car.carNumber||"--"))]),t._v(" "),a("li",{staticClass:"listwhole"},[t._v("服务开始时间："+t._s(e.order&&e.order.serviceStartTime||"--"))]),t._v(" "),a("li",{staticClass:"listwhole"},[t._v("服务结束时间："+t._s(e.order&&e.order.serviceEndTime||"--"))])])])])]),t._v(" "),e.order&&e.order.customerRemark&&"cancel"!==e.order.status?a("div",{staticClass:"label list-bottomtext"},[t._v("备注："+t._s(e.order.customerRemark))]):t._e(),t._v(" "),"cancel"==e.order.status?a("div",{staticClass:"label list-bottomtext"},[t._v("取消："+t._s(e.order.cancelReason))]):t._e()]):t._e()}),t._v(" "),t.list&&0!=t.list.length?t._e():a("p",{staticClass:"label",staticStyle:{"text-align":"center","font-size":"18px"}},[t._v("暂无数据")]),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-dialog",{staticStyle:{width:"50%",margin:"0 auto","text-align":"center"},attrs:{title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",[a("el-input",{staticClass:"input-radius",staticStyle:{display:"inline-block",width:"80%"},attrs:{"prefix-icon":"el-icon-search","auto-complete":"off",placeholder:"请输入司机名字"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("el-button",{staticStyle:{display:"inline-block",padding:"10px"},attrs:{type:"text"}},[t._v("搜索")])],1),t._v(" "),a("el-form-item",[a("span",{staticClass:"label",staticStyle:{"padding-left":"0"}},[t._v("车型筛选")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"35%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l([{id:1,name:"宝马1"},{id:2,name:"宝马2"}],function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"35%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l([{id:1,name:"宝马1"},{id:2,name:"宝马2"}],function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("ul",{staticClass:"search-list"},t._l(["司机1","司机1","司机1","司机1"],function(e){return a("li",[a("img",{attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}),t._v(" "),a("span",{staticClass:"label"},[t._v(t._s(e))])])}))],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.submitRes()}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{staticStyle:{width:"60%",margin:"0 auto"},attrs:{visible:t.dialogOrderVisible},on:{"update:visible":function(e){t.dialogOrderVisible=e}}},[a("el-form",{ref:"form2",attrs:{model:t.form2,rules:t.rules2}},[a("el-form-item",{attrs:{label:"理由：",prop:"reason"}},[a("el-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入内容"},model:{value:t.form2.reason,callback:function(e){t.$set(t.form2,"reason",e)},expression:"form2.reason"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.dialogOrderVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){t.submitCancle("form2")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],2)},staticRenderFns:[]};var o=a("/Xao")(l,n,!1,function(t){a("3VyT")},"data-v-7362fd9c",null);e.default=o.exports}});