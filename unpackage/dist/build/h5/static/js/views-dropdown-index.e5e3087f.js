(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-dropdown-index"],{"09d9":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"cc-cell",components:{},props:{title:{type:String},value:{type:String},label:{type:String},icon:{type:String},border:{type:Boolean,default:!0},size:{type:String},isLink:{type:Boolean,default:!1},arrowDirection:{type:String,default:"right"},iconSize:{type:String,default:"16"}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")}},mounted:function(){console.log()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};t.default=n},"09e7":function(e,t,i){"use strict";i.r(t);var n=i("09d9"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},"1b95":function(e,t,i){"use strict";i.r(t);var n=i("226e"),a=i("09e7");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("497b");var o,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"868e5dc6",null,!1,n["a"],o);t["default"]=s.exports},"1fd1":function(e,t,i){var n=i("a8fc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("e8c7a0da",n,!0,{sourceMap:!1,shadowMode:!1})},"226e":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={ccIcon:i("b2bc").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cc-cell",class:[{"cc-cell-large":e.size},{"cc-cell-border":e.border}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[i("v-uni-view",[i("v-uni-view",{staticClass:"cc-cell-title"},[e.icon?i("v-uni-view",{staticClass:"cc-cell-left-icon"},[i("cc-icon",{attrs:{size:e.iconSize,type:e.icon,color:"#323233"}}),e._t("left-icon")],2):e._e(),i("v-uni-view",[e.title?i("v-uni-text",[e._v(e._s(e.title))]):e._t("title")],2)],1),i("v-uni-view",{staticClass:"cc-cell-label"},[e.label?i("v-uni-text",[e._v(e._s(e.label))]):e._t("label")],2)],1),i("v-uni-view",{staticClass:"cc-cell-value"},[i("v-uni-view",{staticClass:"cc-cell-value-wrap"},[e.value?i("v-uni-text",[e._v(e._s(e.value))]):i("v-uni-view",{staticStyle:{width:"100%",display:"flex","align-items":"center"}},[e._t("value")],2)],1),i("v-uni-view",{staticClass:"cc-cell-right-icon"},[e.isLink?i("cc-icon",{attrs:{color:"#969799",type:"arrow"+e.arrowDirection,size:e.iconSize}}):e._e(),e._t("right-icon")],2)],1)],1)},c=[]},3944:function(e,t,i){var n=i("97d0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("47835a5a",n,!0,{sourceMap:!1,shadowMode:!1})},"44b0":function(e,t,i){"use strict";var n=i("84cf"),a=i.n(n);a.a},4658:function(e,t,i){"use strict";i.r(t);var n=i("9a9b"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},"497b":function(e,t,i){"use strict";var n=i("3944"),a=i.n(n);a.a},"4a11":function(e,t,i){"use strict";i.r(t);var n=i("a310"),a=i("4658");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("6876");var o,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"ec8d3982",null,!1,n["a"],o);t["default"]=s.exports},"554f":function(e,t,i){"use strict";var n=i("db8d"),a=i.n(n);a.a},6030:function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cc-switch"},[i("v-uni-view",{staticClass:"cc-switch-wrap",class:{disabled:e.disabled},style:{background:e.value?e.activeColor:e.inactiveColor,fontSize:e.size+"px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clickSwitch.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cc-switch-wrap-node",style:{transform:"translateX("+e.move+")"}})],1),e.activeText?i("v-uni-view",{staticClass:"cc-switch-text",style:{color:e.value?e.activeTextColor:e.inactiveTextColor}},[e._v(e._s(e.value?e.activeText:e.inactiveText?e.inactiveText:e.activeText))]):e._e()],1)},c=[]},6876:function(e,t,i){"use strict";var n=i("1fd1"),a=i.n(n);a.a},"7a72":function(e,t,i){"use strict";var n=i("4ea4");i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("0644")),c={name:"cc-dropdown",components:{},props:{list:{type:Array,required:!0},activeColor:{type:String,default:"#ee0a24"},closeOnClickOverlay:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},data:function(){return{cloneList:[],checked:[],zIndex:!1}},methods:{init:function(){var e=this;this.cloneList=(0,a.default)(this.list),this.cloneList.map((function(t){if(t.options&&t.options.length)t.options.map((function(i,n){i.value===t.value&&(e.$set(t,"activeIndex",n),e.$set(t,"activeItem",i),e.$set(t.activeItem,"actived",!1),e.$set(t.activeItem,"display","none"),e.checked.push(i.value))}));else{var i={value:"",label:"",disabled:!1,actived:!1,display:"none"};e.$set(t,"activeItem",i)}}))},clickHeader:function(e){this.disabled||(e.activeItem.actived=!e.activeItem.actived,"none"===e.activeItem.display?e.activeItem.display="block":setTimeout((function(){e.activeItem.display="none"}),80),this.cloneList.map((function(t){e!==t&&(t.activeItem.actived=!1,t.activeItem.display="none")})),e.activeItem.actived?(this.$emit("open"),this.zIndex=!0):(this.$emit("close"),this.zIndex=!1))},clickItem:function(e,t,i,n){var a=this;t.disabled||(e.activeItem=t,e.activeItem.actived=!1,e.activeIndex=n,setTimeout((function(){a.$set(e.activeItem,"display","none")}),80),e.value!==t.value&&(e.value=t.value,this.$set(this.checked,i,t.value),this.$emit("change",this.checked)),this.$emit("close"),this.zIndex=!1)},clickMask:function(e){this.closeOnClickOverlay&&this.clickHeader(e)}},mounted:function(){this.init()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{checked:{handler:function(e){this.$emit("change",e)},deep:!0,immediate:!0}}};t.default=c},"7dde":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={ccIcon:i("b2bc").default,ccCell:i("1b95").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"cc-dropdown"},e._l(e.cloneList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"cc-dropdown-item"},[i("v-uni-view",{staticClass:"cc-dropdown-item-mask",class:{"cc-dropdown-item-mask-active":t.activeItem&&t.activeItem.actived},style:{display:t.activeItem&&t.activeItem.display},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.clickMask(t)}}}),i("v-uni-view",{staticClass:"cc-dropdown-item-header",class:{"cc-dropdown-item-header-active":e.zIndex},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.clickHeader(t)}}},[i("v-uni-view",{staticClass:"cc-dropdown-item-header-title",class:{disabled:e.disabled},style:{color:t.activeItem&&t.activeItem.actived?e.activeColor:"#323233"}},[e._v(e._s(t.title?t.title:t.activeItem&&t.activeItem.label))]),i("v-uni-view",{staticClass:"cc-dropdown-item-header-icon",class:{"cc-dropdown-item-header-icon-active":t.activeItem&&t.activeItem.actived}},[i("cc-icon",{attrs:{type:"arrowdown",color:t.activeItem&&t.activeItem.actived?e.activeColor:"#c0c4cc",size:"14"}})],1)],1),i("v-uni-view",{staticClass:"cc-dropdown-item-wrap",class:{"cc-dropdown-item-wrap-active":t.activeItem&&t.activeItem.actived}},[t.slots&&t.activeItem&&t.activeItem.actived?e._t(t.slots):e._e(),t.slots?e._e():e._l(t.options,(function(a,c){return i("v-uni-view",{key:c,staticClass:"cc-dropdown-item-wrap-content",style:{display:t.activeItem.display}},[i("cc-cell",{on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.clickItem(t,a,n,c)}},scopedSlots:e._u([{key:"title",fn:function(){return[i("v-uni-view",{class:{disabled:a.disabled},style:{color:t.activeIndex===c?e.activeColor:"#323233"}},[e._v(e._s(a.label))])]},proxy:!0},{key:"right-icon",fn:function(){return[t.activeIndex===c?i("cc-icon",{attrs:{type:"checkmarkempty",size:"16",color:t.activeIndex===c?e.activeColor:"#323233"}}):e._e()]},proxy:!0}],null,!0)})],1)}))],2)],1)})),1)},c=[]},"84cf":function(e,t,i){var n=i("eabc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6dc1f420",n,!0,{sourceMap:!1,shadowMode:!1})},"956d":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"cc-switch",components:{},props:{value:{type:[String,Number,Boolean],default:!1},text:{type:String,default:""},activeColor:{type:String,default:"#0081ff"},inactiveColor:{type:String,default:"#fff"},activeTextColor:{type:String,default:"#0081ff"},inactiveTextColor:{type:String,default:"#303133"},activeText:{type:String,default:""},inactiveText:{type:String,default:""},disabled:{type:Boolean,default:!1},size:{type:String,default:"24"}},data:function(){return{move:0,checked:!1}},methods:{clickSwitch:function(){this.$emit("update:value",!this.value)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{value:{handler:function(e){this.checked=e,this.move=this.value?"1em":"0",this.$emit("change",e)},deep:!0,immediate:!0}}};t.default=n},9772:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-switch[data-v-28a83e2b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-switch .cc-switch-wrap[data-v-28a83e2b]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-sizing:content-box;box-sizing:initial;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:2em;height:1em;background-color:#fff;border:1px solid rgba(0,0,0,.1);border-radius:1em;-webkit-transition:background-color .3s;transition:background-color .3s}.cc-switch .cc-switch-wrap-node[data-v-28a83e2b]{position:absolute;top:0;left:0;width:1em;height:1em;background-color:#fff;border-radius:100%;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.cc-switch-text[data-v-28a83e2b]{font-size:16px;margin-left:%?12?%}.disabled[data-v-28a83e2b]{cursor:not-allowed;opacity:.5;pointer-events:none}',""]),e.exports=t},"97d0":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-cell[data-v-868e5dc6]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:%?20?% %?32?%;overflow:hidden;color:#323233;font-size:14px;background-color:#fff}.cc-cell-border[data-v-868e5dc6]::after{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;content:" ";pointer-events:none;right:%?32?%;bottom:0;left:%?32?%;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.cc-cell-left-icon[data-v-868e5dc6]{margin-right:%?8?%;-webkit-flex-shrink:0;flex-shrink:0}.cc-cell-large[data-v-868e5dc6]{padding-top:%?24?%;padding-bottom:%?24?%}.cc-cell-title[data-v-868e5dc6], .cc-cell-value[data-v-868e5dc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cc-cell-title[data-v-868e5dc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-cell-value[data-v-868e5dc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.cc-cell-value-wrap[data-v-868e5dc6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.cc-cell-value .cc-cell-right-icon[data-v-868e5dc6]{position:relative;top:%?2?%;margin-left:%?8?%}.cc-cell-label[data-v-868e5dc6]{margin-top:%?8?%;color:#969799;font-size:12px;line-height:%?36?%}',""]),e.exports=t},"9a9b":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={components:{},props:{},data:function(){return{list1:[{value:1,options:[{label:"全部商品",value:0},{label:"新款商品",value:1},{label:"活动商品",value:2}]},{value:"a",options:[{label:"默认排序",value:"a"},{label:"好评排序",value:"b"},{label:"销量排序",value:"c",disabled:!0}]}],list2:[{value:"a",options:[{label:"默认排序",value:"a"},{label:"好评排序",value:"b"},{label:"销量排序",value:"c",disabled:!0}]}],list3:[{value:1,options:[{label:"全部商品",value:0},{label:"新款商品",value:1},{label:"活动商品",value:2}]}],list4:[{value:1,options:[{label:"全部商品",value:0},{label:"新款商品",value:1},{label:"活动商品",value:2}]},{slots:"choose",title:"筛选"}],value:[],switch1:!1,switch2:!1}},methods:{onChange:function(e){this.value=e},open:function(){console.log("open")},close:function(e){console.log("close")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};t.default=n},a310:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return n}));var n={ccDropdown:i("f490").default,ccCell:i("1b95").default,ccSwitch:i("ee20").default,ccButton:i("b893").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"padding-bottom":"30px"}},[i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[e._v("基础用法")]),i("v-uni-view",[e._v("当前选中值: "+e._s(e.value.join(",")))]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-dropdown",{attrs:{list:e.list1},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)},open:function(t){arguments[0]=t=e.$handleEvent(t),e.open.apply(void 0,arguments)},close:function(t){arguments[0]=t=e.$handleEvent(t),e.close.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[e._v("禁用状态")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-dropdown",{attrs:{list:e.list1,disabled:!0}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[e._v("自定义选中颜色")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-dropdown",{attrs:{list:e.list3,activeColor:"#0081ff"}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[e._v("自定义菜单内容")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-dropdown",{attrs:{list:e.list4,activeColor:"#0081ff"},scopedSlots:e._u([{key:"choose",fn:function(){return[i("cc-cell",{attrs:{center:!0,title:"包邮"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[i("cc-switch",{attrs:{value:e.switch1,size:"24","active-color":"#ee0a24"},on:{"update:value":function(t){arguments[0]=t=e.$handleEvent(t),e.switch1=t}}})]},proxy:!0}])}),i("cc-cell",{attrs:{center:!0,title:"团购"},scopedSlots:e._u([{key:"right-icon",fn:function(){return[i("cc-switch",{attrs:{value:e.switch2,size:"24","active-color":"#ee0a24"},on:{"update:value":function(t){arguments[0]=t=e.$handleEvent(t),e.switch2=t}}})]},proxy:!0}])}),i("v-uni-view",{staticStyle:{padding:"5px 16px"}},[i("cc-button",{attrs:{type:"pimary",block:!0,round:!0}},[e._v("确认")])],1)]},proxy:!0}])})],1)],1)],1)},c=[]},a8fc:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo[data-v-ec8d3982]{margin-bottom:%?200?%}.demo-title[data-v-ec8d3982]{padding:%?20?%}.demo-item[data-v-ec8d3982]{margin-bottom:10px}',""]),e.exports=t},bbcf:function(e,t,i){"use strict";i.r(t);var n=i("956d"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},cfc9:function(e,t,i){"use strict";i.r(t);var n=i("7a72"),a=i.n(n);for(var c in n)"default"!==c&&function(e){i.d(t,e,(function(){return n[e]}))}(c);t["default"]=a.a},db8d:function(e,t,i){var n=i("9772");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3088ab84",n,!0,{sourceMap:!1,shadowMode:!1})},eabc:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-dropdown[data-v-045de138]{display:-webkit-box;display:-webkit-flex;display:flex}.cc-dropdown .cc-dropdown-item[data-v-045de138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}.cc-dropdown .cc-dropdown-item-mask[data-v-045de138]{position:fixed;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.7);-webkit-transition:all .3s;transition:all .3s;opacity:0;z-index:100}.cc-dropdown .cc-dropdown-item-mask-active[data-v-045de138]{opacity:1}.cc-dropdown .cc-dropdown-item-header[data-v-045de138]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;background:#fff;-webkit-box-shadow:0 2px 12px #fff;box-shadow:0 2px 12px #fff;height:%?96?%}.cc-dropdown .cc-dropdown-item-header-active[data-v-045de138]{z-index:999}.cc-dropdown .cc-dropdown-item-header-title[data-v-045de138]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-dropdown .cc-dropdown-item-header-icon[data-v-045de138]{-webkit-transition:all .3s;transition:all .3s;margin-left:%?12?%}.cc-dropdown .cc-dropdown-item-header-icon-active[data-v-045de138]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.cc-dropdown .cc-dropdown-item-wrap[data-v-045de138]{width:100%;position:absolute;top:0;-webkit-transition:all .3s;transition:all .3s;z-index:999;background:#fff}.cc-dropdown .cc-dropdown-item-wrap-active[data-v-045de138]{top:%?96?%}.disabled[data-v-045de138]{color:#969799!important;pointer-events:none}',""]),e.exports=t},ee20:function(e,t,i){"use strict";i.r(t);var n=i("6030"),a=i("bbcf");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("554f");var o,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"28a83e2b",null,!1,n["a"],o);t["default"]=s.exports},f490:function(e,t,i){"use strict";i.r(t);var n=i("7dde"),a=i("cfc9");for(var c in a)"default"!==c&&function(e){i.d(t,e,(function(){return a[e]}))}(c);i("44b0");var o,l=i("f0c5"),s=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"045de138",null,!1,n["a"],o);t["default"]=s.exports}}]);