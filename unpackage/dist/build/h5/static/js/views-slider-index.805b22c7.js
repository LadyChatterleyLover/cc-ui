(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-slider-index"],{"02ae":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-slider",style:{background:t.inactiveColor,height:t.height+"rpx"},attrs:{id:"cc-slider-"+t.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickSlider.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cc-slider-wrap",class:{"cc-slider-wrap-transition":t.isTransition},style:{width:t.move+"%",background:t.activeColor}},[i("v-uni-view",{staticClass:"cc-slider-button-wrap",style:{right:t.buttonPosition+"%"},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchmove.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)}}},[t.$slots.button?t._t("button"):i("v-uni-view",{staticClass:"cc-slider-button-wrap-content"})],2)],1)],1)},s=[]},1423:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-slider[data-v-89a4314c]{position:relative;width:100%;background-color:#ebedf0;border-radius:999px;cursor:pointer}.cc-slider-wrap[data-v-89a4314c]{width:100%;height:100%;background-color:#1989fa;border-radius:inherit}.cc-slider-wrap-transition[data-v-89a4314c]{-webkit-transition:all .2s;transition:all .2s}.cc-slider-button-wrap[data-v-89a4314c]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.cc-slider-button-wrap-content[data-v-89a4314c]{height:20px;width:20px;background-color:#fff;border-radius:50%;-webkit-box-shadow:0 1px 2px #fff;box-shadow:0 1px 2px #fff}.disabled[data-v-89a4314c]{cursor:not-allowed;opacity:.5;pointer-events:none}',""]),t.exports=e},"331d":function(t,e,i){var n=i("c97f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("12b327f4",n,!0,{sourceMap:!1,shadowMode:!1})},"359c":function(t,e,i){"use strict";i("a9e3"),i("b680"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cc-slider",components:{},props:{value:{type:Number,default:0},step:{type:[Number,String],default:1},activeColor:{type:String,default:"#0081ff"},inactiveColor:{type:String,default:"#e5e5e5"},disabled:{type:Boolean,default:!1},min:{type:[Number,String],default:0},max:{type:[Number,String],default:100},height:{type:[String,Number],default:2}},data:function(){return{id:"",sliderValue:0,move:0,containerWidth:0,isTransition:!0,touchStatus:"",startX:0}},methods:{touchstart:function(t){this.disabled||(this.startX=t.touches[0].pageX,this.$emit("touchstart"))},touchmove:function(t){if(!this.disabled){this.isTransition=!1;var e=Math.ceil(this.startX-t.touches[0].pageX);if(void 0===this.step)this.move=Math.abs(100*((e-this.startX)/this.containerWidth).toFixed(2)).toFixed(0);else{var i=Math.abs(100*((e-this.startX)/this.containerWidth).toFixed(2)).toFixed(0),n=Math.round((Number(i)+Number(this.step))/Number(this.step))*Number(this.step);n%Number(this.step)===0&&(this.move=n)}this.max?Number(this.move)>=Number(this.max)&&(this.move=Number(this.max)):Number(this.move)>=100&&(this.move=100),this.min?Number(this.move)<=Number(this.min)&&(this.move=Number(this.min)):Number(this.move)<=0&&(this.move=0),this.$emit("input",Number(this.move))}},touchend:function(t){this.disabled||(this.isTransition=!0,this.touchStatus="end",this.$emit("touchend"))},clickSlider:function(t){if(!this.disabled){this.isTransition=!1;var e=t.detail.x,i=Math.abs(100*((Number(e)-Number(this.startX))/Number(this.containerWidth)).toFixed(2)).toFixed(0),n=Math.round((Number(i)+Number(this.step))/Number(this.step))*Number(this.step);n%Number(this.step)===0&&1!==n&&(this.move=n)}}},mounted:function(){var t=this;this.id=this._uid,this.sliderValue=this.value,this.$nextTick((function(){t.containerWidth=1*document.getElementById("cc-slider-".concat(t.id)).offsetWidth}))},onLoad:function(){},onShow:function(){},filters:{},computed:{buttonPosition:function(){return 100-Number(this.move)}},watch:{move:function(t){this.$emit("update:value",t)},touchStatus:function(t){"end"===t&&this.$emit("change",Number(this.move))},value:{handler:function(t){this.move=t},immediate:!0}}};e.default=n},"3b04":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={ccSlider:i("6d57").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{value:t.sliderValue1},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue1=e},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchstart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.onChange.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInput.apply(void 0,arguments)}}})],1),i("v-uni-view",[t._v("当前滑块值: "+t._s(t.sliderValue1))])],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("禁用状态")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{value:t.sliderValue2,disabled:!0},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue2=e}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义样式")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{value:t.sliderValue3,activeColor:"#ee0a24",inactiveColor:"#abc123"},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue3=e}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义按钮")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{value:t.sliderValue4},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue4=e}},scopedSlots:t._u([{key:"button",fn:function(){return[i("v-uni-view",{staticClass:"custom-button"},[t._v(t._s(t.sliderValue4))])]},proxy:!0}])})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("最大值和最小值")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{min:"10",max:"80",value:t.sliderValue6},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue6=e}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("步进")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{step:"5",value:t.sliderValue7},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue7=e}}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义高度")]),i("v-uni-view",{staticClass:"demo-item"},[i("cc-slider",{attrs:{height:"6",value:t.sliderValue8},on:{"update:value":function(e){arguments[0]=e=t.$handleEvent(e),t.sliderValue8=e}}})],1)],1)],1)},s=[]},5761:function(t,e,i){"use strict";i.r(e);var n=i("3b04"),a=i("e755");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ec97");var o,u=i("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"617b1fe7",null,!1,n["a"],o);e["default"]=r.exports},"6be4":function(t,e,i){"use strict";i.r(e);var n=i("359c"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"6d57":function(t,e,i){"use strict";i.r(e);var n=i("02ae"),a=i("6be4");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("a2b8");var o,u=i("f0c5"),r=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"89a4314c",null,!1,n["a"],o);e["default"]=r.exports},"835d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:{},data:function(){return{sliderValue1:20,sliderValue2:20,sliderValue3:20,sliderValue4:20,sliderValue5:20,sliderValue6:20,sliderValue7:20,sliderValue8:20}},methods:{touchstart:function(){console.log("touchstart")},touchend:function(){console.log("touchend")},onInput:function(t){console.log("input",t)},onChange:function(t){console.log("change",t)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},"9ea5":function(t,e,i){var n=i("1423");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6d765e8d",n,!0,{sourceMap:!1,shadowMode:!1})},a2b8:function(t,e,i){"use strict";var n=i("9ea5"),a=i.n(n);a.a},c97f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo[data-v-617b1fe7]{margin-bottom:%?40?%}.demo-title[data-v-617b1fe7]{padding:%?20?%}.demo-item[data-v-617b1fe7]{padding:0 5px;margin-bottom:10px}.custom-button[data-v-617b1fe7]{width:26px;color:#fff;font-size:10px;line-height:18px;text-align:center;background-color:#ee0a24;border-radius:100px}',""]),t.exports=e},e755:function(t,e,i){"use strict";i.r(e);var n=i("835d"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},ec97:function(t,e,i){"use strict";var n=i("331d"),a=i.n(n);a.a}}]);