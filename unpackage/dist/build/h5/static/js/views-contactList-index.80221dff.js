(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-contactList-index"],{"0e89":function(t,e,n){"use strict";n.r(e);var i=n("3eab"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},2202:function(t,e,n){"use strict";var i=n("4ea4");n("c740"),n("d81d"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=i(n("0644")),a={name:"cc-radio",components:{},props:{list:{type:Array,required:!0},value:{type:[String,Number,Boolean],default:""},vertical:{type:Boolean,default:!1}},data:function(){return{active:0,radioList:(0,c.default)(this.list)}},methods:{init:function(){var t=this;this.radioList.map((function(e){e.checkedColor||t.$set(e,"checkedColor","#0081ff"),e.size||t.$set(e,"size","20"),void 0===e.round&&t.$set(e,"round",!0),t.active=t.list.findIndex((function(e){return e.value===t.value}))}))},clickItem:function(t,e){t.disabled||(this.active=e,this.$emit("update:value",t.value),this.$emit("change",t.value))},clickText:function(t,e){t.labelDisabled||(this.active=e,this.$emit("update:value",t.value),this.$emit("change",t.value))}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{value:function(t){this.active=this.list.findIndex((function(e){return e.value===t}))}}};e.default=a},2615:function(t,e,n){var i=n("4369");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("2f1af049",i,!0,{sourceMap:!1,shadowMode:!1})},3586:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},props:{},data:function(){return{value:"1",list1:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000"}],list2:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000",disabled:!0}]}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=i},"38b2":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={ccContactList:n("fa7d").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{background:"#f7f7f7",height:"100vh"}},[n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-contact-list",{attrs:{list:t.list1,value:t.value}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("禁用联系人")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-contact-list",{attrs:{list:t.list2,value:t.value}})],1)],1)],1)},a=[]},3963:function(t,e,n){"use strict";n.r(e);var i=n("3586"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},"39a7":function(t,e,n){"use strict";var i=n("2615"),c=n.n(i);c.a},"3eab":function(t,e,n){"use strict";var i=n("4ea4");n("d81d"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=i(n("0644")),a={components:{},props:{value:{type:[Number,String],default:""},list:{type:Array,required:!0},addText:{type:String,default:"新建联系人"},addButtonColor:{type:String,default:"#ee0a24"},defaultTagText:{type:String,default:"默认"}},data:function(){return{contactList:(0,c.default)(this.list),currentValue:"",currentIndex:0}},methods:{init:function(){var t=this;this.contactList.map((function(e,n){e.disabled?t.$set(e,"radioList",[{value:e.id,checkedColor:"#e54d42",disabled:!0}]):t.$set(e,"radioList",[{value:e.id,checkedColor:"#e54d42"}]),t.value===e.id&&(t.currentIndex=n,t.currentValue=e.id),t.$set(e,"checked",!1),e.id===t.value&&(e.checked=!0)}))},clickItem:function(t,e){t.disabled||(this.currentValue=t.id,this.$emit("select",{item:t,index:e}))},edit:function(t,e){t.disabled||this.$emit("edit",{item:t,index:e})},add:function(){this.$emit("add")}},mounted:function(){this.init()},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},"42bc":function(t,e,n){"use strict";n("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cc-tag",components:{},props:{type:{type:String,default:"primary"},plain:{type:Boolean,defalut:!1},round:{type:Boolean,defalut:!1},circleLeft:{type:Boolean,defalut:!1},circleRight:{type:Boolean,defalut:!1},size:{type:String,default:""},color:{type:String,default:""},textColor:{type:String,default:""},closeable:{type:Boolean,default:!1}},data:function(){return{customColor:"",colorList:[{type:"primary",color:"#0081ff"},{type:"success",color:"#39b54a"},{type:"error",color:"#e54d42"},{type:"warning",color:"#f37b1d"},{type:"info",color:"#909399"}]}},methods:{close:function(){this.$emit("close")},handleClick:function(){this.$emit("click")}},mounted:function(){this.color&&(this.customColor={color:"#fff",border:"none"},this.plain&&(this.customColor={color:this.color,background:"#fff"}))},onLoad:function(){},onShow:function(){},filters:{},computed:{isPlain:function(){return this.plain?"cc-tag-".concat(this.type,"-plain"):""},iconColor:function(){var t=this;if(this.type){if(this.plain){var e=this.colorList.find((function(e){return e.type===t.type}));return e&&e.color}return"#fff"}return"#000"}},watch:{}};e.default=i},4369:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-tag[data-v-080d7bad]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?12?%;color:#fff;font-size:12px;line-height:%?16?%;border-radius:2px}.cc-tag-close[data-v-080d7bad]{z-index:999}.cc-tag-plain[data-v-080d7bad]::after{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid;border-color:inherit;border-radius:inherit;content:"";pointer-events:none}.cc-tag-round[data-v-080d7bad]{border-radius:%?48?%}.cc-tag-circle-left[data-v-080d7bad]{border-radius:%?48?% 0 0 %?48?%}.cc-tag-circle-right[data-v-080d7bad]{border-radius:0 %?48?% %?48?% 0}.cc-tag-medium[data-v-080d7bad]{padding:%?16?%}.cc-tag-large[data-v-080d7bad]{padding:%?20?%;font-size:14px}.cc-tag-primary[data-v-080d7bad]{background:#0081ff;color:#fff}.cc-tag-primary-plain[data-v-080d7bad]{background:#fff;color:#0081ff}.cc-tag-success[data-v-080d7bad]{background:#39b54a;color:#fff}.cc-tag-success-plain[data-v-080d7bad]{background:#fff;border-color:#39b54a;color:#39b54a}.cc-tag-warning[data-v-080d7bad]{background:#f37b1d;color:#fff}.cc-tag-warning-plain[data-v-080d7bad]{background:#fff;border-color:#f37b1d;color:#f37b1d}.cc-tag-info[data-v-080d7bad]{background:#909399;color:#fff}.cc-tag-info-plain[data-v-080d7bad]{background:#fff;border-color:#909399;color:#909399}.cc-tag-error[data-v-080d7bad]{background:#e54d42;color:#fff}.cc-tag-error-plain[data-v-080d7bad]{background:#fff;border-color:#e54d42;color:#e54d42}',""]),t.exports=e},"4d99":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={ccIcon:n("b2bc").default,ccTag:n("84182").default,ccRadio:n("55be").default,ccButton:n("b893").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-contact-list"},[t._l(t.contactList,(function(e,i){return n("v-uni-view",{key:e.id,staticClass:"cc-contact-list-item",class:{"cc-contact-list-item-disabled":e.disabled},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickItem(e,i)}}},[n("v-uni-view",{staticClass:"cc-contact-list-item-wrap"},[n("v-uni-view",{staticClass:"cc-contact-list-item-edit",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.edit(e,i)}}},[n("cc-icon",{attrs:{type:"paperclip",color:"#969799"}})],1),n("v-uni-view",{staticClass:"cc-contact-list-item-wrap-name"},[t._v(t._s(e.name)+",")]),n("v-uni-view",{staticClass:"cc-contact-list-item-wrap-tel"},[t._v(t._s(e.tel))]),e.isDefault?n("v-uni-view",[n("cc-tag",{attrs:{type:"error",round:!0}},[t._v(t._s(t.defaultTagText))])],1):t._e()],1),e.radioList?n("v-uni-view",{staticClass:"cc-contact-list-check"},[n("cc-radio",{attrs:{value:t.currentValue,list:e.radioList},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.currentValue=e}}})],1):t._e()],1)})),n("v-uni-view",{staticClass:"cc-contact-list-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[n("cc-button",{attrs:{round:!0,block:!0,color:t.addButtonColor}},[t._v(t._s(t.addText))])],1)],2)},a=[]},"55be":function(t,e,n){"use strict";n.r(e);var i=n("590b"),c=n("6fc7");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("cf30");var o,r=n("f0c5"),d=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"56ed5526",null,!1,i["a"],o);e["default"]=d.exports},"590b":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={ccIcon:n("b2bc").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-radio",class:{"cc-radio-vertical":t.vertical}},t._l(t.radioList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cc-radio-item"},[e.icon?n("v-uni-view",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickText(e,i)}}},[n("cc-icon",{attrs:{type:e.icon,color:e.disabled?"#c8c9cc":t.active===i?e.checkedColor?e.checkedColor:"#0081ff":e.incheckedColor?e.incheckedColor:"#c8c9cc",size:e.size?e.size:"14"}})],1):n("v-uni-view",{staticClass:"cc-radio-item-icon",class:{"cc-radio-item-icon-round":e.round,disabled:e.disabled},style:{background:t.active===i?e.checkedColor:e.incheckedColor?e.incheckedColor:"#fff",border:t.active===i?"1px solid "+e.checkedColor:"1px solid "+(e.incheckedColor?e.incheckedColor:"#c8c9cc"),width:e.size+"px",height:e.size+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickItem(e,i)}}},[t.active===i?n("cc-icon",{attrs:{type:e.icon?e.icon:"checkmarkempty",color:e.disabled?"#c8c9cc":"#fff",size:e.size?e.size:"14"}}):t._e()],1),n("v-uni-view",{staticClass:"cc-radio-item-text",class:{"cc-radio-item-text-disabled":e.labelDisabled},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickItem(e,i)}}},[t._v(t._s(e.label))])],1)})),1)},a=[]},"5b95":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-contact-list[data-v-273e2dbe]{background:#fff}.cc-contact-list-item[data-v-273e2dbe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?32?%}.cc-contact-list-item-disabled[data-v-273e2dbe]{opacity:.6}.cc-contact-list-item-wrap[data-v-273e2dbe]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-contact-list-item-wrap-name[data-v-273e2dbe]{margin:0 %?30?%}.cc-contact-list-item-wrap-tel[data-v-273e2dbe]{margin-right:%?30?%}.cc-contact-list-button[data-v-273e2dbe]{position:fixed;bottom:0;left:0;right:0;background:#fff;padding:%?16?% %?30?%}',""]),t.exports=e},"64da":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-radio-vertical[data-v-56ed5526]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-radio-vertical .cc-radio-item[data-v-56ed5526]{margin-bottom:0;height:100%;margin-left:%?24?%}.cc-radio-vertical .cc-radio-item[data-v-56ed5526]:first-child{margin-left:0}.cc-radio-item[data-v-56ed5526]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?12?%}.cc-radio-item[data-v-56ed5526]:last-child{margin-bottom:0}.cc-radio-item-icon[data-v-56ed5526]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cc-radio-item-icon-round[data-v-56ed5526]{border-radius:100%}.cc-radio-item-text[data-v-56ed5526]{margin-left:%?20?%}.cc-radio-item-text-disabled[data-v-56ed5526]{pointer-events:none}.disabled[data-v-56ed5526]{background:#ebedf0!important;border-color:#c8c9cc!important;pointer-events:none}',""]),t.exports=e},"6fc7":function(t,e,n){"use strict";n.r(e);var i=n("2202"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},84182:function(t,e,n){"use strict";n.r(e);var i=n("8a83"),c=n("bb50");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("39a7");var o,r=n("f0c5"),d=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"080d7bad",null,!1,i["a"],o);e["default"]=d.exports},8878:function(t,e,n){"use strict";var i=n("d48c"),c=n.n(i);c.a},"8a83":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={ccIcon:n("b2bc").default},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-tag",class:["cc-tag-"+t.type,""+t.isPlain,"cc-tag-"+t.size,{"cc-tag-plain":t.plain},{"cc-tag-round":t.round},{"cc-tag-circle-left":t.circleLeft},{"cc-tag-circle-right":t.circleRight}],style:{background:t.color,customColor:t.customColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[n("v-uni-text",{style:{color:t.textColor}},[t._t("default")],2),t.closeable?n("v-uni-text",{staticClass:"cc-tag-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[n("cc-icon",{attrs:{type:"closeempty",color:t.iconColor,size:"12"}})],1):t._e()],1)},a=[]},"8c42":function(t,e,n){var i=n("64da");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("21582da2",i,!0,{sourceMap:!1,shadowMode:!1})},"9e4c":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo-title[data-v-be6fe77e]{padding:%?40?%}.demo-item[data-v-be6fe77e]{margin-bottom:%?60?%}.demo-item[data-v-be6fe77e]:last-child{margin-bottom:0}',""]),t.exports=e},aba2:function(t,e,n){"use strict";n.r(e);var i=n("38b2"),c=n("3963");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("8878");var o,r=n("f0c5"),d=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"be6fe77e",null,!1,i["a"],o);e["default"]=d.exports},af47:function(t,e,n){var i=n("5b95");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("4b2aef22",i,!0,{sourceMap:!1,shadowMode:!1})},bb50:function(t,e,n){"use strict";n.r(e);var i=n("42bc"),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=c.a},cf30:function(t,e,n){"use strict";var i=n("8c42"),c=n.n(i);c.a},d48c:function(t,e,n){var i=n("9e4c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var c=n("4f06").default;c("8944446e",i,!0,{sourceMap:!1,shadowMode:!1})},e4f4:function(t,e,n){"use strict";var i=n("af47"),c=n.n(i);c.a},fa7d:function(t,e,n){"use strict";n.r(e);var i=n("4d99"),c=n("0e89");for(var a in c)"default"!==a&&function(t){n.d(e,t,(function(){return c[t]}))}(a);n("e4f4");var o,r=n("f0c5"),d=Object(r["a"])(c["default"],i["b"],i["c"],!1,null,"273e2dbe",null,!1,i["a"],o);e["default"]=d.exports}}]);