(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"085e":function(t,e){},"758b":function(t,e,a){"use strict";a.d(e,"c",(function(){return d})),a.d(e,"e",(function(){return h})),a.d(e,"d",(function(){return m})),a.d(e,"b",(function(){return k})),a.d(e,"g",(function(){return g})),a.d(e,"f",(function(){return f})),a.d(e,"a",(function(){return c}));a("551c"),a("06db");var i=a("2b0e"),o=a("bc3a"),n=a.n(o),s=a("18d6"),c="http://127.0.0.1:8000/",r=n.a.create({baseURL:c,timeout:5e3}),l=n.a.create({baseURL:c,timeout:5e3}),u=n.a.create({baseURL:c,timeout:5e3}),p=n.a.create({baseURL:c,timeout:5e3});function d(t,e){return r.get(t,{params:e})}function h(t,e,a){return r.post(t,a,{params:e})}function g(t,e){return l.post(t,e)}function f(t,e){return u.post(t,e)}function m(t,e,a){return r.patch(t,a,{params:e})}function k(t,e,a){return p.delete(t,a,{params:e})}u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=s["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),p.interceptors.request.use((function(t){var e=s["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),p.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),i["a"].prototype.$axios=r},"9d6c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,filter:t.filter,loading:t.loading,"selected-rows-label":t.getSelectedString,selection:"multiple",selected:t.selected,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:selected":function(e){t.selected=e},"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"拣货确认",icon:"assignment_turned_in"},on:{click:function(e){return t.picked()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认一张订单的拣货完成\n        ")]),a("q-dialog",{model:{value:t.pickForm,callback:function(e){t.pickForm=e},expression:"pickForm"}},[a("q-card",{staticClass:"shadow-24",staticStyle:{width:"600px"}},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("出库单号："+t._s(t.so_number))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-markup-table",{staticStyle:{"max-height":"400px",height:"400px"}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("序号")]),a("th",{staticClass:"text-left"},[t._v("库位")]),a("th",{staticClass:"text-left"},[t._v("商品编码")]),a("th",{staticClass:"text-left"},[t._v("商品名称")]),a("th",{staticClass:"text-left"},[t._v("需要拣货数量")]),a("th",{staticClass:"text-left"},[t._v("实际拣货数量")])])]),a("tbody",t._l(t.pickFormData,(function(e,i){return a("tr",{key:e.index},[a("td",{staticClass:"text-left",staticStyle:{width:"10%"}},[t._v(t._s(i+1))]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.bin_name)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.goods_code)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.goods_name)+"\n            ")]),a("td",{staticClass:"text-left"},[t._v("\n              "+t._s(e.pick_stock)+"\n            ")]),a("td",{staticClass:"text-right",staticStyle:{width:"10%"}},[a("q-input",{attrs:{type:"number",dense:""},model:{value:t.pickFormData[i].picked_stock,callback:function(e){t.$set(t.pickFormData[i],"picked_stock",e)},expression:"pickFormData[i].picked_stock"}})],1)])})),0)]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.pickFormDataCheckCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.pickFormDataCheck()}}},[t._v("确认提交\n          "),a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          提交拣货确认后的数据不可逆\n        ")]),a("q-dialog",{model:{value:t.pickDataCheckDialog,callback:function(e){t.pickDataCheckDialog=e},expression:"pickDataCheckDialog"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("拣货完成")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[t._v("\n            确认拣货结果后，数据不可逆\n        ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.pickFormDataCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.pickFormDataSubmit()}}},[t._v("确认提交")])],1)],1)],1)],1)],1)],1)],1)],1),a("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),a("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1),a("q-btn-dropdown",{attrs:{"menu-anchor":"bottom right",label:"日期筛选"}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("起始日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("结束日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)]),a("q-btn",{attrs:{label:"日期查询",icon:"search"},on:{click:function(e){return t.DatereFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认以日期查询数据\n        ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var i=e.icon,o=e.message,n=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(o)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:n?"filter_b_and_w":i}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},o=[],n=(a("7f7f"),a("758b")),s=a("b06b"),c={name:"Pageprepick",data:function(){return{pathname:"solist/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,separator:"cell",loading:!1,filter:"",selected:[],totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"入库单号",align:"left",field:"name"},{name:"so_status",label:"订单状态",field:"so_status"},{name:"customer",label:"供应商名称",field:"customer"},{name:"create_name",label:"创建人",field:"create_name"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{pickBy:"create_time",descending:!0,page:1,rowsPerPage:50},so_number:"10086",pickForm:!1,pickFormData:[],pickFormDataconfirm:[],pickDataCheckDialog:!1,pickcheck:0,status_check:0,date1:"",date2:""}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50,so_status:3,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.date1="",this.date2="",this.getList()},DatereFresh:function(){this.current=1,this.getList()},picked:function(){var t=this;if(this.authorization_post)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(n["a"]+"sodetail/pick/",{headers:{"Content-Type":"application/json; charset=utf-8"},params:{openid:e,page:1,max_page:50,picking_status:0,so_number:this.selected[0].name,date1:this.date1,date2:this.date2}}).then((function(e){"200"===e.data.results.code?(console.log(e.data.results.data),t.so_number=t.selected[0].name,t.pickFormData=e.data.results.data,t.pickForm=!0):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.pickFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},pickFormDataCheck:function(){var t=this;this.pickFormData.forEach((function(e){if(e.picked_stock>e.pick_stock)t.pickcheck=1;else{var a={t_code:e.t_code,picked_stock:e.picked_stock};t.pickFormDataconfirm.push(a)}})),1===this.pickcheck?(this.$q.notify({message:"实际拣货数量不可以大于需要拣货数量",icon:"close",color:"negative",position:"right",timeout:2500}),this.pickcheck=0,this.pickFormDataconfirm=[]):this.pickDataCheckDialog=!0},pickFormDataCheckCancel:function(){this.so_number="",this.pickFormData=[],this.pickFormDataconfirm=[],this.pickDataCheckDialog=!1,this.pickForm=!1},pickFormDataSubmit:function(){var t=this;if(this.authorization_patch)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.put(n["a"]+"sodetail/pick/",{data:this.pickFormDataconfirm},{headers:{"Content-Type":"application/json; charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.pickFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.pickFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},pickFormDataCancel:function(){this.so_number="",this.pickFormData=[],this.pickFormDataconfirm=[],this.pickDataCheckDialog=!1,this.pickForm=!1,this.getList()},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(s["a"])(n["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},r=c,l=a("2877"),u=a("be9e"),p=a("eebe"),d=a.n(p),h=a("eaac"),g=a("e7a9"),f=a("9c40"),m=a("05c0"),k=a("24e8"),_=a("f09f"),b=a("d847"),q=a("2c91"),v=a("2bb1"),x=a("27f9"),y=a("a370"),C=a("f20b"),D=a("52ee"),z=a("eb85"),$=a("0016"),F=a("3b16"),S=a("7f67"),w=Object(l["a"])(r,i,o,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(w);e["default"]=w.exports;d()(w,"components",{QTable:h["a"],QBtnGroup:g["a"],QBtn:f["a"],QTooltip:m["a"],QDialog:k["a"],QCard:_["a"],QBar:b["a"],QSpace:q["a"],QMarkupTable:v["a"],QInput:x["a"],QCardSection:y["a"],QBtnDropdown:C["a"],QDate:D["a"],QSeparator:z["a"],QIcon:$["a"],QPagination:F["a"]}),d()(w,"directives",{ClosePopup:S["a"]})},be9e:function(t,e,a){"use strict";var i=a("085e"),o=a.n(i);e["default"]=o.a}}]);