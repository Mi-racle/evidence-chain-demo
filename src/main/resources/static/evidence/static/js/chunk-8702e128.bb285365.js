(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8702e128"],{ad8f:function(t,e,i){"use strict";i.d(e,"j",(function(){return a})),i.d(e,"f",(function(){return o})),i.d(e,"e",(function(){return r})),i.d(e,"a",(function(){return c})),i.d(e,"q",(function(){return d})),i.d(e,"k",(function(){return s})),i.d(e,"m",(function(){return u})),i.d(e,"t",(function(){return l})),i.d(e,"i",(function(){return p})),i.d(e,"d",(function(){return f})),i.d(e,"g",(function(){return h})),i.d(e,"l",(function(){return b})),i.d(e,"b",(function(){return m})),i.d(e,"r",(function(){return v})),i.d(e,"h",(function(){return g})),i.d(e,"p",(function(){return y})),i.d(e,"c",(function(){return C})),i.d(e,"u",(function(){return S})),i.d(e,"s",(function(){return w})),i.d(e,"n",(function(){return j})),i.d(e,"o",(function(){return x}));var n=i("b775");function a(t){return Object(n["a"])({url:"/eviChain/product/list",method:"post",data:t})}function o(){return Object(n["a"])({url:"/eviChain/user/chainInfo",method:"post"})}function r(t){return Object(n["a"])({url:"/eviChain/user/deployContract",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/eviChain/product/add",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/eviChain/product/modify",method:"post",data:t})}function s(){return Object(n["a"])({url:"/eviChain/product/selectList",method:"post"})}function u(t){return Object(n["a"])({url:"/eviChain/step/selectList",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/eviChain/file/upload",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/eviChain/field/selectList",method:"post",data:t})}function f(t){return Object(n["a"])({url:"/eviChain/field/add",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/eviChain/data/list",method:"post",data:t})}function b(t){return Object(n["a"])({url:"/eviChain/step/list",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/eviChain/step/add",method:"post",data:t})}function v(t){return Object(n["a"])({url:"/eviChain/step/modify",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/eviChain/field/list",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/eviChain/field/modify",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/eviChain/data/bqSave",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/eviChain/data/validChain",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/eviChain/data/previewChain",method:"post",data:t})}function j(){return Object(n["a"])({url:"/eviChain/data/getTotalInfo",method:"post"})}function x(t){return Object(n["a"])({url:"/eviChain/user/"+t,method:"post"})}},ada3:function(t,e,i){"use strict";i("d1e6")},d1e6:function(t,e,i){},e6e2:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"btn-top"},[i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.createProduct}},[t._v("新建")]),i("div",{staticClass:"text-left-label",staticStyle:{"margin-left":"20px"}},[i("span",[t._v("产品名称：")]),i("el-input",{staticStyle:{width:"150px"},model:{value:t.productName,callback:function(e){t.productName=e},expression:"productName"}})],1),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",plain:""},on:{click:t.search}},[t._v("查询")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading"}},[i("el-table-column",{attrs:{align:"center",label:"序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),i("el-table-column",{attrs:{label:"产品名称",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.productName)+" ")]}}])}),i("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.openStatus?i("div",[i("el-tag",{attrs:{size:"small"}},[t._v("正常")])],1):i("div",[i("el-tag",{attrs:{type:"info",size:"small"}},[t._v("停用")])],1)]}}])}),i("el-table-column",{attrs:{label:"产品KEY",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.productCode)+" ")]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("a",{staticClass:"btn-link",on:{click:function(i){return t.handleModify(e.$index,e.row)}}},[t._v("修改")])]}}])})],1),i("el-pagination",{staticClass:"page",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,50],"page-size":t.pageSize,layout:" sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),i("el-dialog",{staticClass:"dialog-wrapper",attrs:{title:"初始化",visible:t.dialogInitVisible,"before-close":t.modelClose,width:"433px",center:!0,"show-close":!1},on:{"update:visible":function(e){t.dialogInitVisible=e}}},[i("div",[i("span",[t._v("是否使用国密：")]),i("el-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:t.chainInfo.encryptTypeStr,callback:function(e){t.$set(t.chainInfo,"encryptTypeStr",e)},expression:"chainInfo.encryptTypeStr"}})],1),i("div",{staticStyle:{"margin-top":"10px"}},[i("span",[t._v("FISCO-BCOS：")]),i("el-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:t.chainInfo.fiscoBcosVersion,callback:function(e){t.$set(t.chainInfo,"fiscoBcosVersion",e)},expression:"chainInfo.fiscoBcosVersion"}})],1),i("div",{staticStyle:{"margin-top":"10px"}},[i("span",[t._v("WeBASE版本：")]),i("el-input",{staticStyle:{width:"200px"},attrs:{disabled:!0},model:{value:t.chainInfo.webaseVersion,callback:function(e){t.$set(t.chainInfo,"webaseVersion",e)},expression:"chainInfo.webaseVersion"}})],1),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{staticClass:"input-top",attrs:{type:"primary"},on:{click:t.deployContract}},[t._v("部署存证合约")])],1)]),i("el-dialog",{attrs:{title:"添加产品",visible:t.dialogAddVisible,width:"433px",center:!0},on:{"update:visible":function(e){t.dialogAddVisible=e}}},[i("div",[i("span",[t._v("产品名称：")]),i("el-input",{staticStyle:{width:"300px"},model:{value:t.productAddData.productName,callback:function(e){t.$set(t.productAddData,"productName",e)},expression:"productAddData.productName"}})],1),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{staticClass:"input-top",attrs:{type:"primary"},on:{click:t.sumbitAdd}},[t._v("提交")])],1)]),i("el-dialog",{attrs:{title:"修改产品",visible:t.dialogModifyVisible,width:"433px",center:!0},on:{"update:visible":function(e){t.dialogModifyVisible=e}}},[i("div",[i("span",[t._v("产品名称：")]),i("el-input",{staticStyle:{width:"300px"},model:{value:t.productModifyData.productName,callback:function(e){t.$set(t.productModifyData,"productName",e)},expression:"productModifyData.productName"}})],1),i("div",{staticStyle:{"text-align":"center"}},[i("el-button",{staticClass:"input-top",attrs:{type:"primary"},on:{click:t.sumbitModify}},[t._v("提交")])],1)])],1)},a=[],o=i("ad8f"),r=i("5f87"),c={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{currentPage:1,pageSize:10,total:0,list:null,listLoading:!0,dialogAddVisible:!1,dialogModifyVisible:!1,dialogInitVisible:!1,chainInfo:{initStatus:!1,encryptType:"",encryptTypeStr:"",fiscoBcosVersion:"",webaseVersion:""},productAddData:{productName:""},productModifyData:{id:"",productName:""},productName:""}},created:function(){var t=this;Object(o["f"])().then((function(e){t.chainInfo=e.data,t.chainInfo.initStatus?t.dialogInitVisible=!1:t.dialogInitVisible=!0,1===t.chainInfo.encryptType?t.chainInfo.encryptTypeStr="国密":t.chainInfo.encryptTypeStr="非国密"})),this.fetchData()},methods:{createProduct:function(){this.dialogAddVisible=!0},deployContract:function(){var t=this,e=Object(r["b"])(),i={userId:e};Object(o["e"])(i).then((function(e){0===e.code&&(t.$message({message:"合约部署成功",type:"success"}),t.dialogInitVisible=!1)}))},handleModify:function(t,e){this.dialogModifyVisible=!0,this.productModifyData.productName=e.productName,this.productModifyData.id=e.id},sumbitAdd:function(){var t=this;if(""===this.productAddData.productName)return this.$message({message:"产品名称不能为空",type:"warning"}),!1;Object(o["a"])(this.productAddData).then((function(e){0===e.code&&(t.dialogAddVisible=!1,t.fetchData())}))},sumbitModify:function(){var t=this;if(""===this.productModifyData.productName)return this.$message({message:"产品名称不能为空",type:"warning"}),!1;Object(o["q"])(this.productModifyData).then((function(e){0===e.code&&(t.dialogModifyVisible=!1,t.fetchData())}))},search:function(){this.currentPage=1,this.fetchData()},clearText:function(){this.fetchData()},handleSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.fetchData()},handleCurrentChange:function(t){this.currentPage=t,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0;var e={currentPage:this.currentPage,pageSize:this.pageSize,productName:this.productName};Object(o["j"])(e).then((function(e){t.list=e.data.records,t.total=e.data.total,t.listLoading=!1}))},modelClose:function(){this.$emit("close")}}},d=c,s=(i("ada3"),i("2877")),u=Object(s["a"])(d,n,a,!1,null,null,null);e["default"]=u.exports}}]);