(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-toast-index"],{"1d9d":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var e={ccIcon:i("b2bc").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.showToast?i("v-uni-view",{ref:"cToast",staticClass:"cc-toast"},[i("v-uni-view",{staticClass:"cc-toast-content",style:{background:t.bgColor,top:t.top}},[t.iconValue?i("v-uni-view",{staticClass:"cc-toast-icon",class:{loading:t.isLoading}},[i("cc-icon",{attrs:{type:t.iconValue,color:"#fff",size:"14"}})],1):t._e(),i("v-uni-view",[t._v(t._s(t.text))])],1)],1):t._e()},c=[]},2766:function(t,n,i){"use strict";i.r(n);var e=i("36b7"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a},"36b7":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"cc-toast",components:{},props:{},data:function(){return{showToast:!1,text:"",bgColor:"",timer:null,iconValue:"",top:"",isLoading:!1}},methods:{show:function(t){var n=this;this.showToast=!0;var i=t.title,e=t.type,o=void 0===e?"info":e,c=t.icon,a=void 0===c||c,s=t.customIcon,r=void 0===s?"":s,u=t.loading,l=void 0!==u&&u,v=t.duration,f=void 0===v?2e3:v,d=t.position,p=void 0===d?"center":d,b=t.url,w=void 0===b?"":b,h=t.back,m=void 0!==h&&h,y=(t.query,t.callback);"top"===p&&(this.top="30%"),"bottom"===p&&(this.top="70%"),"center"===p&&(this.top="50%"),"primary"===o&&(this.bgColor="#0081ff",r?this.iconValue=r:l?(this.iconValue="spinner-cycle",this.isLoading=!0):this.iconValue=""),"success"===o&&(this.bgColor="#39b54a",r?this.iconValue=r:l?(this.iconValue="spinner-cycle",this.isLoading=!0):this.iconValue=a?"checkbox":""),"error"===o&&(this.bgColor="#e54d42",r?this.iconValue=r:l?(this.iconValue="spinner-cycle",this.isLoading=!0):this.iconValue=a?"close":""),"warning"===o&&(this.bgColor="#f37b1d",r?this.iconValue=r:l?(this.iconValue="spinner-cycle",this.isLoading=!0):this.iconValue=a?"info":""),"info"===o&&(this.bgColor="#333",r?this.iconValue=r:l?(this.iconValue="spinner-cycle",this.isLoading=!0):this.iconValue=""),this.text=i,this.timer=setTimeout((function(){n.showToast=!1,m?uni.navigateBack():w&&uni.navigateTo({url:"".concat(w)}),y&&y(),n.isLoading=!1}),f)}},mounted:function(){},destroyed:function(){this.timer=null,clearTimeout(this.timer)},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=e},"44ca":function(t,n,i){var e=i("627b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("67c7fdc0",e,!0,{sourceMap:!1,shadowMode:!1})},"56d6":function(t,n,i){"use strict";i.r(n);var e=i("1d9d"),o=i("2766");for(var c in o)"default"!==c&&function(t){i.d(n,t,(function(){return o[t]}))}(c);i("a421");var a,s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"15ed96f4",null,!1,e["a"],a);n["default"]=r.exports},"59dd":function(t,n,i){"use strict";i.r(n);var e=i("826b"),o=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(n,t,(function(){return e[t]}))}(c);n["default"]=o.a},"608b":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return c})),i.d(n,"a",(function(){return e}));var e={ccToast:i("56d6").default,ccButton:i("b893").default},o=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",[i("cc-toast",{ref:"cToast"}),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("基础语法")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"primary",callback:t.callback})}}},[t._v("primary")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"success"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"success"})}}},[t._v("success")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"warning"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"warning"})}}},[t._v("warning")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"error"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"error"})}}},[t._v("error")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"info"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"info"})}}},[t._v("info")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("不显示图标")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{attrs:{type:"success"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"success",icon:!1})}}},[t._v("success")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"warning"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"warning",icon:!1})}}},[t._v("warning")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"error"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"error",icon:!1})}}},[t._v("error")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("自定义图标")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"primary",customIcon:"search"})}}},[t._v("success")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"success"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"success",customIcon:"weibo"})}}},[t._v("success")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"warning"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"warning",customIcon:"chat"})}}},[t._v("warning")])],1),i("v-uni-view",[i("cc-button",{attrs:{type:"error"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",type:"error",customIcon:"person"})}}},[t._v("error")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("加载状态")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"等待,永久的等待",type:"primary",loading:!0})}}},[t._v("success")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("出现位置")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人"})}}},[t._v("center")])],1),i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",position:"top"})}}},[t._v("top")])],1),i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",position:"bottom"})}}},[t._v("bottom")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("持续时间")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人"})}}},[t._v("默认2000")])],1),i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",duration:3e3})}}},[t._v("3000")])],1),i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",duration:500})}}},[t._v("500")])],1)],1)],1),i("v-uni-view",[i("v-uni-view",{staticClass:"title"},[t._v("跳转路径")]),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",url:"/"})}}},[t._v("跳转首页")])],1),i("v-uni-view",[i("cc-button",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.open({title:"吃鲸鱼的人",back:!0})}}},[t._v("返回上一页")])],1)],1)],1)],1)},c=[]},"627b":function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-toast[data-v-15ed96f4]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:999;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cc-toast .cc-toast-content[data-v-15ed96f4]{position:absolute;font-size:14px;padding:%?20?% %?50?%;border-radius:%?4?%;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.cc-toast .cc-toast-content .cc-toast-icon[data-v-15ed96f4]{margin-right:%?8?%;position:relative;top:%?2?%}.loading[data-v-15ed96f4]{-webkit-animation:spin-data-v-15ed96f4 1s linear infinite;animation:spin-data-v-15ed96f4 1s linear infinite}@-webkit-keyframes spin-data-v-15ed96f4{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin-data-v-15ed96f4{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=n},6925:function(t,n,i){"use strict";i.r(n);var e=i("608b"),o=i("59dd");for(var c in o)"default"!==c&&function(t){i.d(n,t,(function(){return o[t]}))}(c);i("f8bc");var a,s=i("f0c5"),r=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"84b29fb8",null,!1,e["a"],a);n["default"]=r.exports},"826b":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={components:{},props:{},data:function(){return{}},methods:{callback:function(){console.log("callback")},open:function(t){this.$refs.cToast.show({title:t.title,type:t.type||"info",icon:t.icon,customIcon:t.customIcon||"",loading:t.loading,position:t.position||"center",duration:t.duration||2e3,url:t.url||"",query:t.query||null,callback:t.callback||null,back:t.back||!1})}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=e},a421:function(t,n,i){"use strict";var e=i("44ca"),o=i.n(e);o.a},d835:function(t,n,i){var e=i("e4b7");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=i("4f06").default;o("44c60c16",e,!0,{sourceMap:!1,shadowMode:!1})},e4b7:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-84b29fb8]{margin:%?20?%}.item[data-v-84b29fb8]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item uni-view[data-v-84b29fb8]{margin:%?20?%}',""]),t.exports=n},f8bc:function(t,n,i){"use strict";var e=i("d835"),o=i.n(e);o.a}}]);