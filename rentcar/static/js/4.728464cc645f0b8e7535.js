webpackJsonp([4],{"0Vq8":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.box-card[data-v-7eedcd29] {\n  margin-bottom: 10px;\n}\n.item-listbox[data-v-7eedcd29] {\n  font-size: 0;\n  overflow: hidden;\n}\n.list-left[data-v-7eedcd29] {\n  margin: 0;\n  width: 70%;\n  float: left;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-right: 1px dashed #ebeef5;\n  border-bottom: 1px dashed #ebeef5;\n}\n.list-left ul[data-v-7eedcd29] {\n    padding: 0;\n    padding-left: 30px;\n    margin: 0;\n    font-size: 0;\n    width: 100%;\n}\n.list-left ul li[data-v-7eedcd29] {\n      padding: 6px 0;\n      width: 33.33%;\n      display: inline-block;\n      list-style: none;\n      font-size: 14px;\n      color: #666;\n}\n.clearfix[data-v-7eedcd29] {\n  line-height: 28px;\n}\n.list-right[data-v-7eedcd29] {\n  margin-left: 70%;\n  vertical-align: middle;\n}\n.list-bottomtext[data-v-7eedcd29] {\n  padding: 10px 0 0 30px;\n}\n.list-onetext[data-v-7eedcd29] {\n  margin: 45px 0;\n  color: #990000;\n  font-size: 18px;\n  text-align: center;\n}\n.list-carone[data-v-7eedcd29] {\n  position: relative;\n}\n.list-carone img[data-v-7eedcd29] {\n    position: absolute;\n    top: 0px;\n    left: 10px;\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n    border-radius: 50%;\n}\n.list-carone ul[data-v-7eedcd29] {\n    margin: 0;\n    padding: 0;\n    font-size: 0;\n    margin-left: 50px;\n}\n.list-carone ul li[data-v-7eedcd29] {\n      list-style: none;\n      margin: 0;\n      width: 50%;\n      display: inline-block;\n      margin: 2px 0 10px 0;\n      font-size: 13px;\n      color: #666;\n}\n.list-carone ul li.listwhole[data-v-7eedcd29] {\n        width: 100%;\n}\n.search-list[data-v-7eedcd29] {\n  margin: 0 30px;\n  padding: 0;\n  text-align: left;\n}\n.search-list li[data-v-7eedcd29] {\n    margin: 0;\n    list-style: none;\n    padding: 0;\n    height: 60px;\n    line-height: 60px;\n    margin-bottom: 10px;\n    border-bottom: 1px solid #ddd;\n}\n.search-list li img[data-v-7eedcd29] {\n      display: inline-block;\n      vertical-align: middle;\n      width: 30px;\n      height: 30px;\n      border-radius: 50%;\n}\n",""])},"0rTl":function(t,e,a){var i=a("0Vq8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("53243664",i,!0)},"W+8A":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("vMJZ"),l={data:function(){return{dialogVisible:!1,dialogTitle:"",dialogFormVisible:!1,dialogImageUrl:"",list:null,listLoading:!0,currentPage:1,baseURL:"http://120.78.121.84:8086/api/upload",totalNum:1,searchObj:{pageSize:10,keyword:"",status:""},form:{status:""},orderStatus:[{id:"1",name:"待接单"},{id:"2",name:"服务中"}],checkList:[],startEndTime:""}},created:function(){this.handleFilter()},methods:{handleFilter:function(){this.currentPage=1,String(this.searchObj.keyword)||delete this.searchObj.keyword,this.startEndTime?(this.searchObj.startDay=this.parseTime(this.startEndTime[0],"{y}-{m}-{d}"),this.searchObj.endDay=this.parseTime(this.startEndTime[1],"{y}-{m}-{d}")):(delete this.searchObj.startDay,delete this.searchObj.endDay),this.fetchData()},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,this.searchObj.pageNo=this.currentPage,Object(i.b)(this.searchObj).then(function(e){t.list=e.data.data.records,t.totalNum=e.data.data.total,t.listLoading=!1})},handlePictureCardPreview:function(t){this.dialogImageUrl=t.avatar,this.dialogVisible=!0},handleImageScucess:function(t,e,a){this.form.coverUrl=t.data},getDriver:function(){this.dialogFormVisible=!0},beforeAvatarUpload:function(t){console.log(t);var e=["image/jpeg","image/gif","image/png"].includes(t.type);return e||this.$message.error("图片格式不正确!"),e},putOrder:function(t){this.$router.push({path:"reservecar/"+t})},submitRes:function(){}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-row",{staticStyle:{"margin-bottom":"10px"},attrs:{gutter:12}},[a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总服务次数:00")]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天服务中：00")])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总完成次数:00")]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天完成：00")])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总接单次数:00")]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天接单：00")])])],1),t._v(" "),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{shadow:"always"}},[a("div",{staticClass:"label"},[t._v("总取消次数:00")]),t._v(" "),a("div",{staticClass:"label",staticStyle:{"margin-top":"4px"}},[t._v("当天取消：00")])])],1)],1),t._v(" "),a("span",{staticClass:"label"},[t._v("单位名称")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"请输入单位名称"},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}}),t._v(" "),a("span",{staticClass:"label"},[t._v("订单编号")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"请输入订单编号"},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}}),t._v(" "),a("span",{staticClass:"label"},[t._v("司机")]),t._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"160px"},attrs:{clearable:"",placeholder:"请输入司机姓名"},model:{value:t.searchObj.keyword,callback:function(e){t.$set(t.searchObj,"keyword",e)},expression:"searchObj.keyword"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("span",{staticClass:"label"},[t._v("订单状态")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"125px"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.searchObj.status,callback:function(e){t.$set(t.searchObj,"status",e)},expression:"searchObj.status"}},t._l(t.orderStatus,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("span",{staticClass:"label"},[t._v("日期")]),t._v(" "),a("el-date-picker",{staticStyle:{"vertical-align":"middle"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.startEndTime,callback:function(e){t.startEndTime=e},expression:"startEndTime"}}),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{size:"small",type:"primary"},on:{click:t.handleFilter}},[t._v("搜索")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small",type:"primary"}},[t._v("导出约车订单")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{float:"right"},attrs:{size:"small",type:"primary"},on:{click:function(e){t.putOrder(1)}}},[t._v("录入约车订单")]),t._v(" "),a("br"),a("br"),t._v(" "),t._l(t.list,function(e,i){return a("el-card",{key:i,staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"label"},[t._v("订单编号：20194586124425")]),t._v(" "),a("span",{staticClass:"label"},[t._v("订单来源：番禺长隆香江大酒店")]),t._v(" "),a("span",{staticClass:"label"},[t._v("订单时间：2019-3-26 18：58：00")]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("span",{staticClass:"label",staticStyle:{"font-weight":"bold","margin-right":"20px"}},[t._v("待接单")]),t._v(" "),a("el-button",{attrs:{size:"mini"}},[t._v("取消")]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"mini",type:"primary"},on:{click:function(e){t.getDriver()}}},[t._v("派单")])],1)]),t._v(" "),a("div",{staticClass:"text item item-listbox"},[a("div",{staticClass:"list-left"},[a("ul",[a("li",[t._v("客户：小明")]),a("li",[t._v("电话：1520000000")]),a("li",[t._v("人数：3")])]),t._v(" "),a("ul",[a("li",[t._v("订单类型：接机")]),a("li",[t._v("区域：广州番禺区洛溪街")])]),t._v(" "),a("ul",[a("li",[t._v("出发地：番禺南浦")]),a("li",[t._v("目的地：番禺广场")]),a("li",[t._v("路程/时间：3公里 20分钟")])]),t._v(" "),a("ul",[a("li",[t._v("预约时间：2019-3-26 18：09")]),a("li",[t._v("车型要求：商务车")]),a("li",[t._v("航班：23232")])])]),t._v(" "),a("div",{staticClass:"list-right"},[0==i?a("p",{staticClass:"list-onetext"},[t._v("尚未安排司机")]):t._e(),t._v(" "),0!==i?a("div",{staticClass:"list-carone"},[a("img",{attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}),t._v(" "),a("ul",[a("li",[t._v("司机：张三")]),t._v(" "),a("li",[t._v("电话：0000000")]),t._v(" "),a("li",[t._v("车型：豪华车·奔驰E")]),t._v(" "),a("li",[t._v("车牌：GT")]),t._v(" "),a("li",{staticClass:"listwhole"},[t._v("服务开始时间")]),t._v(" "),a("li",{staticClass:"listwhole"},[t._v("服务结束时间")])])]):t._e()])]),t._v(" "),a("div",{staticClass:"label list-bottomtext"},[t._v("取消：订单已经取消，客户临时有事取消订单。")])])}),t._v(" "),t.totalNum/10>1?a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[1,10,20,30],"page-size":10,layout:"total, prev, pager, next, jumper",total:t.totalNum},on:{"current-change":t.handleCurrentChange}}):t._e(),t._v(" "),a("el-dialog",{staticStyle:{width:"50%",margin:"0 auto","text-align":"center"},attrs:{title:t.dialogTitle,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",[a("el-input",{staticClass:"input-radius",staticStyle:{display:"inline-block",width:"80%"},attrs:{"prefix-icon":"el-icon-search","auto-complete":"off",placeholder:"请输入司机名字"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("el-button",{staticStyle:{display:"inline-block",padding:"10px"},attrs:{type:"text"}},[t._v("搜索")])],1),t._v(" "),a("el-form-item",[a("span",{staticClass:"label",staticStyle:{"padding-left":"0"}},[t._v("车型筛选")]),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"35%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l([{id:1,name:"宝马1"},{id:2,name:"宝马2"}],function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),t._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"35%"},attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l([{id:1,name:"宝马1"},{id:2,name:"宝马2"}],function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("ul",{staticClass:"search-list"},t._l(["司机1","司机1","司机1","司机1"],function(e){return a("li",[a("img",{attrs:{src:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}}),t._v(" "),a("span",{staticClass:"label"},[t._v(t._s(e))])])}))],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitRes()}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],2)},staticRenderFns:[]};var n=a("VU/8")(l,s,!1,function(t){a("0rTl")},"data-v-7eedcd29",null);e.default=n.exports}});