(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-skeleton-index"],{"176d":function(t,e,a){"use strict";a.r(e);var n=a("4b29"),i=a("5f04");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8cfd");var s,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"69d3ad23",null,!1,n["a"],s);e["default"]=r.exports},"391f":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={ccSkeleton:a("176d").default,ccButton:a("b893").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("基础用法")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{title:!0,row:3}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("展示头像")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{title:!0,avatar:!0,row:3}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("头像大小")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{title:!0,avatar:!0,avatarSize:"40",row:3}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("方形头像")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{title:!0,avatar:!0,avatarSize:"40",round:!1,row:3}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("展示动画")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{animate:!0,title:!0,avatar:!0,row:5}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("自定义颜色")]),a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{bgcolor:"red",title:!0,avatar:!0,row:5}})],1)],1),a("v-uni-view",[a("v-uni-view",{staticClass:"title"},[t._v("控制显示")]),a("cc-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._v("点击2秒之后骨架屏消失")]),t.loading?a("v-uni-view",{staticClass:"item"},[a("cc-skeleton",{attrs:{loading:t.loading,title:!0,row:3}})],1):t._e(),t.loading?t._e():a("v-uni-view",[t._v("你的背包,让我走的好缓慢")])],1)],1)},o=[]},"3b2b":function(t,e,a){"use strict";a.r(e);var n=a("391f"),i=a("d504");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("884e");var s,c=a("f0c5"),r=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"4fbd99a6",null,!1,n["a"],s);e["default"]=r.exports},"4b29":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-uni-view",{staticClass:"cc-skeleton"},[t.avatar?a("v-uni-view",{staticClass:"cc-skeleton-avatar",class:{"cc-skeleton-avatar-round":t.round,"cc-skeleton-animate":t.animate},style:{width:t.avatarSize+"rpx",height:t.avatarSize+"rpx",background:t.bgColor}}):t._e(),a("v-uni-view",{staticClass:"cc-skeleton-wrap",class:{"cc-skeleton-wrap-hasavatar":t.avatar}},[t.title?a("v-uni-view",{staticClass:"cc-skeleton-content cc-skeleton-title",class:{"cc-skeleton-animate":t.animate},style:{background:t.bgColor}}):t._e(),t.row>0?t._l(t.row,(function(e){return a("v-uni-view",{key:e,staticClass:"cc-skeleton-content cc-skeleton-row",class:{"cc-skeleton-row-last":e===t.row,"cc-skeleton-animate":t.animate},style:{background:t.bgColor}})})):t._e()],2)],1):t._e()},o=[]},"4fb1":function(t,e,a){var n=a("6c2d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("1b0ee6ee",n,!0,{sourceMap:!1,shadowMode:!1})},"580b":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cc-skeleton",components:{},props:{row:{type:Number,default:0},animate:{type:Boolean,default:!1},title:{type:Boolean,default:!1},avatar:{type:Boolean,default:!1},loading:{type:Boolean,default:!0},avatarSize:{type:[Number,String],default:64},round:{type:Boolean,default:!0},bgColor:{type:String,default:"#f2f3f5"}},data:function(){return{}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},"5f04":function(t,e,a){"use strict";a.r(e);var n=a("580b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"6c2d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-4fbd99a6]{margin:%?20?%}.item[data-v-4fbd99a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item uni-button[data-v-4fbd99a6]{margin-right:%?10?%}',""]),t.exports=e},"884e":function(t,e,a){"use strict";var n=a("4fb1"),i=a.n(n);i.a},"8cfd":function(t,e,a){"use strict";var n=a("ec4d"),i=a.n(n);i.a},c9c0:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:{},data:function(){return{loading:!0}},methods:{handleClick:function(){var t=this;setTimeout((function(){t.loading=!1}),2e3)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},d504:function(t,e,a){"use strict";a.r(e);var n=a("c9c0"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},e507:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-skeleton[data-v-69d3ad23]{display:-webkit-box;display:-webkit-flex;display:flex}.cc-skeleton-animate[data-v-69d3ad23]{-webkit-animation:skeleton-animate-data-v-69d3ad23 1.2s ease-in-out infinite;animation:skeleton-animate-data-v-69d3ad23 1.2s ease-in-out infinite}.cc-skeleton-title[data-v-69d3ad23]{width:%?300?%}.cc-skeleton-wrap[data-v-69d3ad23]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cc-skeleton-wrap-hasavatar[data-v-69d3ad23]{padding-top:%?16?%}.cc-skeleton-content[data-v-69d3ad23]{height:16px}.cc-skeleton-avatar[data-v-69d3ad23]{margin-right:%?32?%}.cc-skeleton-avatar-round[data-v-69d3ad23]{border-radius:100%}.cc-skeleton-row[data-v-69d3ad23]{width:%?750?%;margin-top:%?40?%}.cc-skeleton-row-last[data-v-69d3ad23]{width:%?450?%}@-webkit-keyframes skeleton-animate-data-v-69d3ad23{from{opacity:1}to{opacity:.6}}@keyframes skeleton-animate-data-v-69d3ad23{from{opacity:1}to{opacity:.6}}',""]),t.exports=e},ec4d:function(t,e,a){var n=a("e507");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("09882aae",n,!0,{sourceMap:!1,shadowMode:!1})}}]);