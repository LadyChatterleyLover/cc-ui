(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-swiper-index"],{1160:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-swiper[data-v-70d9cfaf]{width:100%;position:relative}.cc-swiper-wrap[data-v-70d9cfaf]{width:100%;height:100%}.cc-swiper-item[data-v-70d9cfaf]{width:100%;height:100%}.cc-swiper-item-img[data-v-70d9cfaf]{width:100%;height:100%}.cc-swiper-item-img-content[data-v-70d9cfaf]{width:100%;height:100%}.cc-swiper-dot[data-v-70d9cfaf]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute}.cc-swiper-dot-translate[data-v-70d9cfaf]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.cc-swiper-dot-number[data-v-70d9cfaf]{padding:%?4?% %?12?%;background-color:rgba(0,0,0,.3);border-radius:%?48?%;font-size:12px;color:#fff;position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);bottom:%?20?%}.cc-swiper-dot-item[data-v-70d9cfaf]{margin:0 %?4?%;border-radius:%?16?%;-webkit-transition:all .3s;transition:all .3s;width:%?12?%;height:%?12?%}.cc-swiper-dot-item-round[data-v-70d9cfaf]{width:%?28?%}.cc-swiper-dot-item-rect[data-v-70d9cfaf]{width:%?20?%;height:%?6?%}',""]),t.exports=e},"12fe":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={components:{},props:{},data:function(){return{list:[{image:"https://cdn.uviewui.com/uview/swiper/1.jpg"},{image:"https://cdn.uviewui.com/uview/swiper/2.jpg"},{image:"https://cdn.uviewui.com/uview/swiper/3.jpg"}]}},methods:{handleClick:function(t){console.log(t)},handleChange:function(t){console.log(t)}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},"1f9b":function(t,e,i){"use strict";i.r(e);var n=i("5d71"),a=i("7e92");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("f6aa");var s,c=i("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"5fed78e5",null,!1,n["a"],s);e["default"]=o.exports},5342:function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"cc-swiper",components:{},props:{list:{type:Array,required:!0},mode:{type:String,default:"circle"},autoplay:{type:Boolean,default:!0},current:{type:[String,Number],default:0},interval:{type:[String,Number],default:5e3},duration:{type:[String,Number],default:500},circular:{type:Boolean,default:!0},vertical:{type:Boolean,default:!1},imgMode:{type:String,default:"aspectFill"},height:{type:[String,Number],default:300},bottom:{type:[String,Number],default:20},right:{type:[String,Number],default:""},indicatorActiveColor:{type:String,default:"#ccc"},activeColor:{type:String,default:"#fff"},dotStyle:{type:Object},disableTouch:{type:Boolean,default:!1}},data:function(){return{showDot:!0,currentIndex:0}},methods:{handleChange:function(t){this.currentIndex=t.detail.current,this.$emit("change",t.detail.current)},clickItem:function(t,e){this.$emit("click",{item:t,index:e})},longpress:function(t,e,i){i.preventDefault(),this.$emit("longpress",{item:t,index:e,e:i})}},mounted:function(){"none"===this.mode&&(this.showDot=!1),this.currentIndex=this.current},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=n},"5d71":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var n={ccSwiper:i("b31e").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),i("cc-swiper",{attrs:{list:t.list},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)},change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("指示点位置")]),i("cc-swiper",{attrs:{list:t.list,bottom:"30",right:"100"}})],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("指示点样式")]),i("cc-swiper",{attrs:{list:t.list,dotStyle:{width:"30rpx",height:"30rpx"},activeColor:"red",indicatorActiveColor:"#fff"}})],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("指示点模式")]),i("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[i("cc-swiper",{attrs:{list:t.list,mode:"round"}})],1),i("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[i("cc-swiper",{attrs:{list:t.list,mode:"rect"}})],1),i("v-uni-view",{staticStyle:{"margin-bottom":"20rpx"}},[i("cc-swiper",{attrs:{list:t.list,mode:"number"}})],1)],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义指示点")]),i("cc-swiper",{attrs:{list:t.list},scopedSlots:t._u([{key:"dot",fn:function(e){var n=e.current;return[i("v-uni-view",{staticClass:"demo-custom"},[t._v("第"+t._s(n)+"页 / 总共"+t._s(t.list.length)+"页")])]}}])})],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("不显示指示点")]),i("cc-swiper",{attrs:{list:t.list,mode:"none"}})],1),i("v-uni-view",{staticClass:"demo"},[i("v-uni-view",{staticClass:"demo-title"},[t._v("自定义内容")]),i("cc-swiper",{attrs:{list:t.list},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;t.index;return[i("v-uni-view",{staticClass:"custom-img"},[i("v-uni-image",{staticClass:"custom-img-item",attrs:{src:e.image}})],1)]}}])})],1)],1)},r=[]},7807:function(t,e,i){var n=i("1160");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("7c2ce3f9",n,!0,{sourceMap:!1,shadowMode:!1})},"7e92":function(t,e,i){"use strict";i.r(e);var n=i("12fe"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7fa6":function(t,e,i){"use strict";i.r(e);var n=i("5342"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7fc6":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cc-swiper",style:{height:t.height+"rpx"}},[i("v-uni-swiper",{staticClass:"cc-swiper-wrap",attrs:{autoplay:t.autoplay,duration:t.duration,"indicator-dots":!1,circular:t.circular,vertical:t.vertical,current:t.current,interval:t.interval,"disable-touch":t.disableTouch},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.handleChange.apply(void 0,arguments)}}},t._l(t.list,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"cc-swiper-item",on:{longpress:function(i){arguments[0]=i=t.$handleEvent(i),t.longpress(e,n,i)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickItem(e,n)}}},[i("v-uni-view",{staticClass:"cc-swiper-item-img"},[t.$scopedSlots.default?i("v-uni-view",[t._t("default",null,{current:t.currentIndex,item:e,index:n})],2):i("v-uni-image",{staticClass:"cc-swiper-item-img-content",attrs:{src:e.image,mode:t.imgMode}})],1)],1)})),1),t.$scopedSlots.dot?i("v-uni-view",[t._t("dot",null,{current:t.currentIndex+1})],2):i("v-uni-view",[t.showDot&&"number"!==t.mode?i("v-uni-view",{staticClass:"cc-swiper-dot",class:{"cc-swiper-dot-translate":!t.right},style:{bottom:t.bottom+"rpx",right:t.right+"rpx"}},t._l(t.list.length,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cc-swiper-dot-item",class:{"cc-swiper-dot-item-round":t.currentIndex===n&&"round"===t.mode,"cc-swiper-dot-item-rect":"rect"===t.mode},style:{background:t.currentIndex===n?t.activeColor:t.indicatorActiveColor,dotStyle:t.dotStyle}})})),1):t._e(),"number"===t.mode?i("v-uni-text",{staticClass:"cc-swiper-dot-number"},[i("v-uni-text",[t._v(t._s(t.currentIndex+1)+" / "+t._s(t.list.length))])],1):t._e()],1)],1)},r=[]},b31e:function(t,e,i){"use strict";i.r(e);var n=i("7fc6"),a=i("7fa6");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("b504");var s,c=i("f0c5"),o=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"70d9cfaf",null,!1,n["a"],s);e["default"]=o.exports},b39b:function(t,e,i){var n=i("efe0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("75d7ad91",n,!0,{sourceMap:!1,shadowMode:!1})},b504:function(t,e,i){"use strict";var n=i("7807"),a=i.n(n);a.a},efe0:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-5fed78e5]{padding-bottom:%?20?%}.demo-title[data-v-5fed78e5]{margin:%?16?%}.demo-custom[data-v-5fed78e5]{position:absolute;font-size:12px;color:#fff;right:%?50?%;bottom:%?30?%}.custom-img[data-v-5fed78e5]{width:90%;margin-left:5%}.custom-img-item[data-v-5fed78e5]{width:100%;height:%?300?%;border-radius:%?12?%}',""]),t.exports=e},f6aa:function(t,e,i){"use strict";var n=i("b39b"),a=i.n(n);a.a}}]);