(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-noticeBar-index"],{"0a23":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},o=[]},"163f":function(t,e,n){"use strict";n.r(e);var i=n("6102"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},1732:function(t,e,n){"use strict";var i=n("7bc7"),a=n.n(i);a.a},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"26f4":function(t,e,n){"use strict";n.r(e);var i=n("33bc"),a=n("d7b3");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("1732");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"38e9fdb5",null,!1,i["a"],c);e["default"]=s.exports},"33bc":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={ccIcon:n("b2bc").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-notify-bar",style:{background:t.bgColor}},[n("v-uni-view",{staticClass:"cc-notify-bar-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)}}},[t.volume?n("v-uni-view",[n("cc-icon",{attrs:{color:t.color,type:"sound",size:"16"}})],1):n("v-uni-view",[t.$slots.left?t._t("left"):n("cc-icon",{attrs:{color:t.color,type:t.leftIcon}})],2)],1),n("v-uni-view",{staticClass:"cc-notify-bar-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cc-notify-bar-wrap-content",style:{color:t.color,animationDuration:t.animationDuration}},[t.$slots.default?t._t("default"):n("v-uni-view",[t._v(t._s(t.text))])],2)],1),n("v-uni-view",{staticClass:"cc-notify-bar-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[t.closeable||t.link?n("v-uni-view",[t.closeable?n("cc-icon",{attrs:{type:"closeempty",color:t.color,size:"16"}}):n("cc-icon",{attrs:{type:"arrowright",color:t.color,size:"16"}})],1):n("v-uni-view",[t.$slots.right?t._t("right"):n("cc-icon",{attrs:{type:t.$slots.right}})],2)],1)],1)},o=[]},"356d":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo[data-v-2da44a5d]{margin:%?40?% 0}.title[data-v-2da44a5d]{margin:%?20?%}.content[data-v-2da44a5d]{padding:%?20?%}.text[data-v-2da44a5d]{height:%?80?%;line-height:%?80?%}',""]),t.exports=e},"4a71":function(t,e,n){var i=n("24fb"),a=n("1de5"),o=n("86d9");e=i(!1);var c=a(o);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+c+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},5364:function(t,e,n){"use strict";var i=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("d7f5")),o={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:a.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=o},"59c7":function(t,e,n){var i=n("356d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("4a53c758",i,!0,{sourceMap:!1,shadowMode:!1})},"5df4":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={ccNoticeBar:n("26f4").default,ccIcon:n("b2bc").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{volume:!0,closeable:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickBar.apply(void 0,arguments)},clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.clickLeft.apply(void 0,arguments)},clickRight:function(e){arguments[0]=e=t.$handleEvent(e),t.clickRight.apply(void 0,arguments)}}},[t._v("闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪")])],1),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{volume:!0,link:!0}},[t._v("闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪")])],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"title"},[t._v("滚动速度")]),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{text:"拥不拥有也会记住谁,快不快乐有天总过去",speed:"160",volume:!0,link:!0}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"title"},[t._v("无图标")]),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{text:"拥不拥有也会记住谁,快不快乐有天总过去",volume:!0}})],1),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{text:"拥不拥有也会记住谁,快不快乐有天总过去"}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"title"},[t._v("自定义内容")]),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{text:"当你孤单你会想起谁"},scopedSlots:t._u([{key:"left",fn:function(){return[n("cc-icon",{attrs:{type:"person"}})]},proxy:!0}])})],1),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{bgcolor:"#ecf9ff"},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-uni-view",{staticStyle:{color:"#1989fa"}},[t._v("你想不想找个人来陪")])]},proxy:!0}])})],1),n("v-uni-view",{staticClass:"content"},[n("cc-notice-bar",{attrs:{text:"你的快乐伤悲,只有我能体会"},scopedSlots:t._u([{key:"right",fn:function(){return[n("v-uni-view",{staticClass:"text"},[t._v("体会")])]},proxy:!0}])})],1)],1)],1)},o=[]},6102:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},props:{},data:function(){return{}},methods:{clickBar:function(){console.log("click")},clickLeft:function(){console.log("clickLeft")},clickRight:function(){console.log("clickRight")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=i},"75ef":function(t,e,n){"use strict";var i=n("59c7"),a=n.n(i);a.a},"7bc7":function(t,e,n){var i=n("7beb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6c3d6913",i,!0,{sourceMap:!1,shadowMode:!1})},"7beb":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-notify-bar[data-v-38e9fdb5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding:0 %?32?%;font-size:14px}.cc-notify-bar-left[data-v-38e9fdb5]{margin-right:%?16?%}.cc-notify-bar-wrap[data-v-38e9fdb5]{position:relative;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden}.cc-notify-bar-wrap-content[data-v-38e9fdb5]{white-space:nowrap;position:absolute;padding-left:100%;-webkit-animation:loop-data-v-38e9fdb5 10s linear infinite both;animation:loop-data-v-38e9fdb5 10s linear infinite both}.cc-notify-bar-right[data-v-38e9fdb5]{position:relative;left:%?16?%}@-webkit-keyframes loop-data-v-38e9fdb5{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes loop-data-v-38e9fdb5{0%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}',""]),t.exports=e},"86d9":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},"885c":function(t,e,n){"use strict";n.r(e);var i=n("5df4"),a=n("163f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("75ef");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"2da44a5d",null,!1,i["a"],c);e["default"]=s.exports},"96a0":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"cc-notice-bar",components:{},props:{volume:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1},link:{type:Boolean,default:!1},text:{type:String},bgColor:{type:String,default:"#fff7cc"},color:{type:String,default:"#f60"},leftIcon:{type:String},speed:{type:[Number,String],default:60}},data:function(){return{timer:null,textWidth:0,animationDuration:"10s"}},methods:{init:function(){var t=document.getElementsByClassName("cc-notify-bar-wrap-content")[0];this.textWidth=t.clientWidth,this.animationDuration=this.textWidth/this.speed+"s"},onClick:function(){this.$emit("click")},clickLeft:function(){(this.volume||this.$slots.left)&&this.$emit("clickLeft")},clickRight:function(){(this.closeable||this.link||this.$slots.right)&&this.$emit("clickRight")}},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=i},"9ba7":function(t,e,n){"use strict";var i=n("f7ee"),a=n.n(i);a.a},a243:function(t,e,n){"use strict";n.r(e);var i=n("5364"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b2bc:function(t,e,n){"use strict";n.r(e);var i=n("0a23"),a=n("a243");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9ba7");var c,l=n("f0c5"),s=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"2be89183",null,!1,i["a"],c);e["default"]=s.exports},d7b3:function(t,e,n){"use strict";n.r(e);var i=n("96a0"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d7f5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=i},f7ee:function(t,e,n){var i=n("4a71");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("201d0f9a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);