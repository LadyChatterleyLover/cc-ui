(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-addressList-index"],{"0f4c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={ccIcon:i("b2bc").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-radio",class:{"cc-radio-vertical":t.vertical}},t._l(t.radioList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cc-radio-item"},[e.icon?i("v-uni-view",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickText(e,n)}}},[i("cc-icon",{attrs:{type:e.icon,color:e.disabled?"#c8c9cc":t.active===n?e.checkedColor?e.checkedColor:"#0081ff":e.incheckedColor?e.incheckedColor:"#c8c9cc",size:e.size?e.size:"14"}})],1):i("v-uni-view",{staticClass:"cc-radio-item-icon",class:{"cc-radio-item-icon-round":e.round,disabled:e.disabled},style:{background:t.active===n?e.checkedColor:e.incheckedColor?e.incheckedColor:"#fff",border:t.active===n?"1px solid "+e.checkedColor:"1px solid "+(e.incheckedColor?e.incheckedColor:"#c8c9cc"),width:e.size+"px",height:e.size+"px"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e,n)}}},[t.active===n?i("cc-icon",{attrs:{type:e.icon?e.icon:"checkmarkempty",color:e.disabled?"#c8c9cc":"#fff",size:e.size?e.size:"14"}}):t._e()],1),i("v-uni-view",{staticClass:"cc-radio-item-text",class:{"cc-radio-item-text-disabled":e.labelDisabled},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e,n)}}},[t._v(t._s(e.label))])],1)})),1)},c=[]},2202:function(t,e,i){"use strict";var n=i("4ea4");i("c740"),i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("0644")),c={name:"cc-radio",components:{},props:{list:{type:Array,required:!0},value:{type:[String,Number,Boolean],default:""},vertical:{type:Boolean,default:!1}},data:function(){return{active:0,radioList:(0,a.default)(this.list)}},methods:{init:function(){var t=this;this.radioList.map((function(e){e.checkedColor||t.$set(e,"checkedColor","#0081ff"),e.size||t.$set(e,"size","20"),void 0===e.round&&t.$set(e,"round",!0),t.active=t.list.findIndex((function(e){return e.value===t.value}))}))},clickItem:function(t,e){t.disabled||(this.active=e,this.$emit("update:value",t.value),this.$emit("change",t.value))},clickText:function(t,e){t.labelDisabled||(this.active=e,this.$emit("update:value",t.value),this.$emit("change",t.value))}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{value:function(t){this.active=this.list.findIndex((function(e){return e.value===t}))}}};e.default=c},"286e":function(t,e,i){"use strict";i.r(e);var n=i("9ac2"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},"2aa5":function(t,e,i){"use strict";var n=i("9675"),a=i.n(n);a.a},"30bd":function(t,e,i){"use strict";var n=i("aa04"),a=i.n(n);a.a},4287:function(t,e,i){"use strict";i.r(e);var n=i("8e68"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},"42bc":function(t,e,i){"use strict";i("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cc-tag",components:{},props:{type:{type:String,default:"primary"},plain:{type:Boolean,defalut:!1},round:{type:Boolean,defalut:!1},circleLeft:{type:Boolean,defalut:!1},circleRight:{type:Boolean,defalut:!1},size:{type:String,default:""},color:{type:String,default:""},textColor:{type:String,default:""},closeable:{type:Boolean,default:!1}},data:function(){return{customColor:"",colorList:[{type:"primary",color:"#0081ff"},{type:"success",color:"#39b54a"},{type:"error",color:"#e54d42"},{type:"warning",color:"#f37b1d"},{type:"info",color:"#909399"}]}},methods:{close:function(){this.$emit("close")},handleClick:function(){this.$emit("click")}},mounted:function(){this.color&&(this.customColor={color:"#fff",border:"none"},this.plain&&(this.customColor={color:this.color,background:"#fff"}))},onLoad:function(){},onShow:function(){},filters:{},computed:{isPlain:function(){return this.plain?"cc-tag-".concat(this.type,"-plain"):""},iconColor:function(){var t=this;if(this.type){if(this.plain){var e=this.colorList.find((function(e){return e.type===t.type}));return e&&e.color}return"#fff"}return"#000"}},watch:{}};e.default=n},4693:function(t,e,i){"use strict";var n=i("47aa"),a=i.n(n);a.a},"47aa":function(t,e,i){var n=i("5573");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("e6a9b0ae",n,!0,{sourceMap:!1,shadowMode:!1})},5573:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-radio-vertical[data-v-15c2a658]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-radio-vertical .cc-radio-item[data-v-15c2a658]{margin-bottom:0;height:100%;margin-left:%?24?%}.cc-radio-vertical .cc-radio-item[data-v-15c2a658]:first-child{margin-left:0}.cc-radio-item[data-v-15c2a658]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:%?12?%}.cc-radio-item[data-v-15c2a658]:last-child{margin-bottom:0}.cc-radio-item-icon[data-v-15c2a658]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.cc-radio-item-icon-round[data-v-15c2a658]{border-radius:100%}.cc-radio-item-text[data-v-15c2a658]{margin-left:%?20?%}.cc-radio-item-text-disabled[data-v-15c2a658]{pointer-events:none}.disabled[data-v-15c2a658]{background:#ebedf0!important;border-color:#c8c9cc!important;pointer-events:none}',""]),t.exports=e},"55be":function(t,e,i){"use strict";i.r(e);var n=i("0f4c"),a=i("6fc7");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("4693");var o,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"15c2a658",null,!1,n["a"],o);e["default"]=s.exports},"5ab8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-address-list-item[data-v-910af6e6]{position:relative;padding:%?24?%;background-color:#fff;border-radius:%?16?%;margin-bottom:%?24?%;border-radius:%?16?%}.cc-address-list-item[data-v-910af6e6]:last-child{margin-bottom:0}.cc-address-list-item-disabled[data-v-910af6e6]{opacity:.4}.cc-address-list-item-edit[data-v-910af6e6]{position:absolute;right:%?60?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:999}.cc-address-list-item-content[data-v-910af6e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-right:%?80?%}.cc-address-list-item-content-info[data-v-910af6e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.cc-address-list-item-content-info-top[data-v-910af6e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-address-list-item-content-info-address[data-v-910af6e6]{font-size:12px;color:#323233;margin-top:%?20?%}.cc-address-list-disabled-text[data-v-910af6e6]{padding:%?40?% 0 %?32?%;color:#969799;font-size:14px}.cc-address-list-btn[data-v-910af6e6]{position:fixed;bottom:0;left:0;z-index:999;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;padding:%?20?% %?32?%;background:#fff}',""]),t.exports=e},"5ca7":function(t,e,i){"use strict";i.r(e);var n=i("dffb"),a=i("286e");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("30bd");var o,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"910af6e6",null,!1,n["a"],o);e["default"]=s.exports},"6fc7":function(t,e,i){"use strict";i.r(e);var n=i("2202"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},84182:function(t,e,i){"use strict";i.r(e);var n=i("b5ba"),a=i("bb50");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("2aa5");var o,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"30e7b37a",null,!1,n["a"],o);e["default"]=s.exports},"89d8":function(t,e,i){"use strict";i.r(e);var n=i("e05d"),a=i("4287");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);var o,r=i("f0c5"),s=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"77b68355",null,!1,n["a"],o);e["default"]=s.exports},"8e68":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:{},data:function(){return{chosenAddressId:"1",list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",isDefault:!0},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}]}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},9675:function(t,e,i){var n=i("b343");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("b82dcaee",n,!0,{sourceMap:!1,shadowMode:!1})},"9ac2":function(t,e,i){"use strict";var n=i("4ea4");i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("0644")),c={components:{},props:{value:{type:[Number,String],default:""},list:{type:Array,default:function(){return[]}},disabledList:{type:Array,default:function(){return[]}},disabledText:{type:String,default:""},switchable:{type:Boolean,default:!0},addButtonText:{type:String,default:"新增地址"},defaultTagText:{type:String,default:""}},data:function(){return{addressList:(0,a.default)(this.list),currentIndex:-1,currentValue:""}},methods:{clickItem:function(t,e){this.$emit("click",{item:t,index:e}),this.currentValue=t.id,this.currentValue===t.id&&this.$emit("select",{item:t,index:e})},edit:function(t,e){this.$emit("edit",{item:t,index:e})},add:function(){this.$emit("add")},editDisabled:function(t,e){this.$emit("edit-disabled",{item:t,index:e})},clickDisabledItem:function(t,e){this.$emit("click",{item:t,index:e}),this.$emit("select-disabled",{item:t,index:e})}},mounted:function(){var t=this;this.addressList.map((function(e,i){t.$set(e,"radioList",[{value:e.id,checkedColor:"#e54d42"}]),t.value===e.id&&(t.currentIndex=i,t.currentValue=e.id)}))},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=c},aa04:function(t,e,i){var n=i("5ab8");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("53cdca68",n,!0,{sourceMap:!1,shadowMode:!1})},b343:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-tag[data-v-30e7b37a]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?12?%;color:#fff;font-size:12px;line-height:%?16?%;border-radius:2px}.cc-tag-close[data-v-30e7b37a]{z-index:999}.cc-tag-plain[data-v-30e7b37a]::after{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid;border-color:inherit;border-radius:inherit;content:"";pointer-events:none}.cc-tag-round[data-v-30e7b37a]{border-radius:%?48?%}.cc-tag-circle-left[data-v-30e7b37a]{border-radius:%?48?% 0 0 %?48?%}.cc-tag-circle-right[data-v-30e7b37a]{border-radius:0 %?48?% %?48?% 0}.cc-tag-medium[data-v-30e7b37a]{padding:%?16?%}.cc-tag-large[data-v-30e7b37a]{padding:%?20?%;font-size:14px}.cc-tag-primary[data-v-30e7b37a]{background:#0081ff;color:#fff}.cc-tag-primary-plain[data-v-30e7b37a]{background:#fff;color:#0081ff}.cc-tag-success[data-v-30e7b37a]{background:#39b54a;color:#fff}.cc-tag-success-plain[data-v-30e7b37a]{background:#fff;border-color:#39b54a;color:#39b54a}.cc-tag-warning[data-v-30e7b37a]{background:#f37b1d;color:#fff}.cc-tag-warning-plain[data-v-30e7b37a]{background:#fff;border-color:#f37b1d;color:#f37b1d}.cc-tag-info[data-v-30e7b37a]{background:#909399;color:#fff}.cc-tag-info-plain[data-v-30e7b37a]{background:#fff;border-color:#909399;color:#909399}.cc-tag-error[data-v-30e7b37a]{background:#e54d42;color:#fff}.cc-tag-error-plain[data-v-30e7b37a]{background:#fff;border-color:#e54d42;color:#e54d42}',""]),t.exports=e},b5ba:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={ccIcon:i("b2bc").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-tag",class:["cc-tag-"+t.type,""+t.isPlain,"cc-tag-"+t.size,{"cc-tag-plain":t.plain},{"cc-tag-round":t.round},{"cc-tag-circle-left":t.circleLeft},{"cc-tag-circle-right":t.circleRight}],style:{background:t.color,customColor:t.customColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[i("v-uni-text",{style:{color:t.textColor}},[t._t("default")],2),t.closeable?i("v-uni-text",{staticClass:"cc-tag-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("cc-icon",{attrs:{type:"closeempty",color:t.iconColor,size:"12"}})],1):t._e()],1)},c=[]},bb50:function(t,e,i){"use strict";i.r(e);var n=i("42bc"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},dffb:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={ccRadio:i("55be").default,ccTag:i("84182").default,ccIcon:i("b2bc").default,ccButton:i("b893").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-address-list"},[t._l(t.addressList,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"cc-address-list-item",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e,n)}}},[i("v-uni-view",{staticClass:"cc-address-list-item-content"},[e.radioList&&e.radioList.length?i("v-uni-view",{staticClass:"cc-address-list-item-content-radio"},[i("cc-radio",{attrs:{value:t.currentValue,list:e.radioList},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.currentValue=e}}})],1):t._e(),i("v-uni-view",{staticClass:"cc-address-list-item-content-info"},[i("v-uni-view",{staticClass:"cc-address-list-item-content-info-top"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",{staticStyle:{"margin-left":"16rpx"}},[t._v(t._s(e.tel))]),t.currentIndex===n?i("v-uni-view",{staticStyle:{"margin-left":"16rpx"}},[i("cc-tag",{attrs:{round:!0,type:"error"}},[t._v(t._s(t.defaultTagText))])],1):t._e()],1),i("v-uni-view",{staticClass:"cc-address-list-item-content-info-address"},[t._v(t._s(e.address))])],1),i("v-uni-view",{staticClass:"cc-address-list-item-edit",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.edit(e,n)}}},[i("cc-icon",{attrs:{type:"paperclip",color:"#969799"}})],1)],1)],1)})),i("v-uni-view",{staticClass:"cc-address-list-disabled-text"},[t._v(t._s(t.disabledText))]),t._l(t.disabledList,(function(e,n){return i("v-uni-view",{key:e.id,staticClass:"cc-address-list-item cc-address-list-item-disabled",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickDisabledItem(e,n)}}},[i("v-uni-view",{staticClass:"cc-address-list-item-content"},[i("v-uni-view",{staticClass:"cc-address-list-item-content-info"},[i("v-uni-view",{staticClass:"cc-address-list-item-content-info-top"},[i("v-uni-view",[t._v(t._s(e.name))]),i("v-uni-view",{staticStyle:{"margin-left":"16rpx"}},[t._v(t._s(e.tel))])],1),i("v-uni-view",{staticClass:"cc-address-list-item-content-info-address"},[t._v(t._s(e.address))])],1),i("v-uni-view",{staticClass:"cc-address-list-item-edit",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.editDisabled(e,n)}}},[i("cc-icon",{attrs:{type:"paperclip",color:"#969799"}})],1)],1)],1)})),i("v-uni-view",{staticClass:"cc-address-list-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.add.apply(void 0,arguments)}}},[i("cc-button",{attrs:{type:"error",round:!0,block:!0}},[t._v(t._s(t.addButtonText))])],1)],2)},c=[]},e05d:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={ccAddressList:i("5ca7").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticStyle:{background:"#f7f7f7",height:"100vh"}},[i("cc-address-list",{attrs:{value:t.chosenAddressId,list:t.list,"disabled-list":t.disabledList,"disabled-text":"以下地址超出配送范围","default-tag-text":"默认"}})],1)},c=[]}}]);