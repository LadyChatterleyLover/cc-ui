(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-goodsCard-index"],{"09a5":function(t,e,n){var a=n("0ee3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("19b6e7d0",a,!0,{sourceMap:!1,shadowMode:!1})},"0a23":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},c=[]},"0ee3":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-goods-card[data-v-0363ad94]{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:16px 32px;color:#323233;font-size:12px;background-color:#fafafa}.cc-goods-card-wrap[data-v-0363ad94]{display:-webkit-box;display:-webkit-flex;display:flex}.cc-goods-card-thumb[data-v-0363ad94]{width:%?190?%;height:%?190?%;argin-right:8px;position:relative}.cc-goods-card-thumb-tag[data-v-0363ad94]{position:absolute;top:0;left:0}.cc-goods-card-content[data-v-0363ad94]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;min-height:%?180?%;font-size:12px}.cc-goods-card-content-info-desc[data-v-0363ad94]{color:#646566;margin-bottom:%?10?%}.cc-goods-card-content-tags[data-v-0363ad94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-goods-card-content-bottom[data-v-0363ad94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cc-goods-card-content-bottom-price[data-v-0363ad94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.cc-goods-card-content-bottom-price-p[data-v-0363ad94]{margin-right:%?10?%;font-weight:500}.cc-goods-card-content-bottom-price-o[data-v-0363ad94]{color:#969799;text-decoration:line-through;position:relative;top:%?2?%}.cc-goods-card-content-bottom-num[data-v-0363ad94]{color:#969799}.cc-goods-card-footer[data-v-0363ad94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"269f":function(t,e,n){"use strict";n.r(e);var a=n("8b5e"),i=n("9d68");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("f466");var o,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"0363ad94",null,!1,a["a"],o);e["default"]=l.exports},"2aa5":function(t,e,n){"use strict";var a=n("9675"),i=n.n(a);i.a},"42bc":function(t,e,n){"use strict";n("7db0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"cc-tag",components:{},props:{type:{type:String,default:"primary"},plain:{type:Boolean,defalut:!1},round:{type:Boolean,defalut:!1},circleLeft:{type:Boolean,defalut:!1},circleRight:{type:Boolean,defalut:!1},size:{type:String,default:""},color:{type:String,default:""},textColor:{type:String,default:""},closeable:{type:Boolean,default:!1}},data:function(){return{customColor:"",colorList:[{type:"primary",color:"#0081ff"},{type:"success",color:"#39b54a"},{type:"error",color:"#e54d42"},{type:"warning",color:"#f37b1d"},{type:"info",color:"#909399"}]}},methods:{close:function(){this.$emit("close")},handleClick:function(){this.$emit("click")}},mounted:function(){this.color&&(this.customColor={color:"#fff",border:"none"},this.plain&&(this.customColor={color:this.color,background:"#fff"}))},onLoad:function(){},onShow:function(){},filters:{},computed:{isPlain:function(){return this.plain?"cc-tag-".concat(this.type,"-plain"):""},iconColor:function(){var t=this;if(this.type){if(this.plain){var e=this.colorList.find((function(e){return e.type===t.type}));return e&&e.color}return"#fff"}return"#000"}},watch:{}};e.default=a},"4a71":function(t,e,n){var a=n("24fb"),i=n("1de5"),c=n("86d9");e=a(!1);var o=i(c);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+o+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},"4cc6":function(t,e,n){var a=n("ccd7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("0d69de44",a,!0,{sourceMap:!1,shadowMode:!1})},5364:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d7f5")),c={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=c},"60e3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{},data:function(){return{}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},84182:function(t,e,n){"use strict";n.r(e);var a=n("b5ba"),i=n("bb50");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("2aa5");var o,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"30e7b37a",null,!1,a["a"],o);e["default"]=l.exports},"86d9":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},8839:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={ccGoodsCard:n("269f").default,ccTag:n("84182").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-goods-card",{attrs:{num:"2",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg"}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("营销信息")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-goods-card",{attrs:{num:"2",tag:"标签",price:"2.00",desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg","origin-price":"10.00"}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("自定义内容")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-goods-card",{attrs:{num:"2",price:2,desc:"描述信息",title:"商品标题",thumb:"https://img01.yzcdn.cn/vant/ipad.jpeg"},scopedSlots:t._u([{key:"tags",fn:function(){return[n("cc-tag",{staticStyle:{"margin-right":"10rpx"},attrs:{plain:!0,type:"error"}},[t._v("标签")]),n("cc-tag",{attrs:{plain:!0,type:"error"}},[t._v("标签")])]},proxy:!0},{key:"footer",fn:function(){return[n("cc-tag",{staticStyle:{"margin-right":"10rpx"},attrs:{size:"mini"}},[t._v("按钮")]),n("cc-tag",{attrs:{size:"mini"}},[t._v("按钮")])]},proxy:!0}])})],1)],1)],1)},c=[]},"8b5e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={ccTag:n("84182").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-goods-card"},[n("v-uni-view",{staticClass:"cc-goods-card-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cc-goods-card-thumb"},[n("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.thumb},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickImage.apply(void 0,arguments)}}}),t.tag?n("v-uni-view",{staticClass:"cc-goods-card-thumb-tag"},[n("cc-tag",{attrs:{type:"error",circleRight:!0}},[t._v(t._s(t.tag))])],1):t._e()],1),n("v-uni-view",{staticClass:"cc-goods-card-content"},[n("v-uni-view",{staticClass:"cc-goods-card-content-info"},[t.title?n("v-uni-view",{staticClass:"cc-goods-card-content-info-title"},[t._v(t._s(t.title))]):t._e(),t.desc?n("v-uni-view",{staticClass:"cc-goods-card-content-info-desc"},[t._v(t._s(t.desc))]):t._e(),t.$slots.tags?n("v-uni-view",{staticClass:"cc-goods-card-content-info-tags"},[t._t("tags")],2):t._e()],1),n("v-uni-view",{staticClass:"cc-goods-card-content-bottom"},[n("v-uni-view",{staticClass:"cc-goods-card-content-bottom-price"},[t.price?n("v-uni-view",{staticClass:"cc-goods-card-content-bottom-price-p"},[t._v(t._s(t.currency)),n("v-uni-text",{staticStyle:{"font-size":"16px"}},[t._v(t._s(String(t.price).slice(0,1)))]),t._v(t._s(String(t.price).slice(1)))],1):t._e(),t.originPrice?n("v-uni-view",{staticClass:"cc-goods-card-content-bottom-price-o"},[t._v(t._s(t.currency)+t._s(t.originPrice))]):t._e()],1),t.num?n("v-uni-view",{staticClass:"cc-goods-card-content-bottom-num"},[t._v("x"+t._s(t.num))]):t._e()],1)],1)],1),n("v-uni-view",{staticClass:"cc-goods-card-footer"},[t._t("footer")],2)],1)},c=[]},9675:function(t,e,n){var a=n("b343");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("b82dcaee",a,!0,{sourceMap:!1,shadowMode:!1})},"9ba7":function(t,e,n){"use strict";var a=n("f7ee"),i=n.n(a);i.a},"9d68":function(t,e,n){"use strict";n.r(e);var a=n("e170"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},a243:function(t,e,n){"use strict";n.r(e);var a=n("5364"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},a38e:function(t,e,n){"use strict";n.r(e);var a=n("8839"),i=n("af54");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("d82a");var o,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"c867328c",null,!1,a["a"],o);e["default"]=l.exports},af54:function(t,e,n){"use strict";n.r(e);var a=n("60e3"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},b2bc:function(t,e,n){"use strict";n.r(e);var a=n("0a23"),i=n("a243");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("9ba7");var o,r=n("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"2be89183",null,!1,a["a"],o);e["default"]=l.exports},b343:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-tag[data-v-30e7b37a]{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?12?%;color:#fff;font-size:12px;line-height:%?16?%;border-radius:2px}.cc-tag-close[data-v-30e7b37a]{z-index:999}.cc-tag-plain[data-v-30e7b37a]::after{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid;border-color:inherit;border-radius:inherit;content:"";pointer-events:none}.cc-tag-round[data-v-30e7b37a]{border-radius:%?48?%}.cc-tag-circle-left[data-v-30e7b37a]{border-radius:%?48?% 0 0 %?48?%}.cc-tag-circle-right[data-v-30e7b37a]{border-radius:0 %?48?% %?48?% 0}.cc-tag-medium[data-v-30e7b37a]{padding:%?16?%}.cc-tag-large[data-v-30e7b37a]{padding:%?20?%;font-size:14px}.cc-tag-primary[data-v-30e7b37a]{background:#0081ff;color:#fff}.cc-tag-primary-plain[data-v-30e7b37a]{background:#fff;color:#0081ff}.cc-tag-success[data-v-30e7b37a]{background:#39b54a;color:#fff}.cc-tag-success-plain[data-v-30e7b37a]{background:#fff;border-color:#39b54a;color:#39b54a}.cc-tag-warning[data-v-30e7b37a]{background:#f37b1d;color:#fff}.cc-tag-warning-plain[data-v-30e7b37a]{background:#fff;border-color:#f37b1d;color:#f37b1d}.cc-tag-info[data-v-30e7b37a]{background:#909399;color:#fff}.cc-tag-info-plain[data-v-30e7b37a]{background:#fff;border-color:#909399;color:#909399}.cc-tag-error[data-v-30e7b37a]{background:#e54d42;color:#fff}.cc-tag-error-plain[data-v-30e7b37a]{background:#fff;border-color:#e54d42;color:#e54d42}',""]),t.exports=e},b5ba:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={ccIcon:n("b2bc").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-tag",class:["cc-tag-"+t.type,""+t.isPlain,"cc-tag-"+t.size,{"cc-tag-plain":t.plain},{"cc-tag-round":t.round},{"cc-tag-circle-left":t.circleLeft},{"cc-tag-circle-right":t.circleRight}],style:{background:t.color,customColor:t.customColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[n("v-uni-text",{style:{color:t.textColor}},[t._t("default")],2),t.closeable?n("v-uni-text",{staticClass:"cc-tag-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[n("cc-icon",{attrs:{type:"closeempty",color:t.iconColor,size:"12"}})],1):t._e()],1)},c=[]},bb50:function(t,e,n){"use strict";n.r(e);var a=n("42bc"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},ccd7:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo-title[data-v-c867328c]{padding:%?20?%}.demo-item[data-v-c867328c]{margin-bottom:%?60?%}.demo-item[data-v-c867328c]:last-child{margin-bottom:0}',""]),t.exports=e},d7f5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=a},d82a:function(t,e,n){"use strict";var a=n("4cc6"),i=n.n(a);i.a},e170:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{thumb:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},tag:{type:String,default:""},num:{type:[Number,String],default:""},price:{type:[Number,String],default:""},originPrice:{type:[Number,String],default:""},currency:{type:String,default:"￥"}},data:function(){return{}},methods:{handleClick:function(){this.$emit("click")},clickImage:function(){this.$emit("click-thumb")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},f466:function(t,e,n){"use strict";var a=n("09a5"),i=n.n(a);i.a},f7ee:function(t,e,n){var a=n("4a71");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("201d0f9a",a,!0,{sourceMap:!1,shadowMode:!1})}}]);