(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-contactCard-index"],{"0591":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{type:{type:String,default:"edit"},name:{type:String,default:""},tel:{type:String,default:""},addText:{type:String,default:"添加联系人"},editable:{type:Boolean,default:!0}},data:function(){return{}},methods:{handleClick:function(){this.editable&&this.$emit("click")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},"0a23":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},c=[]},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"29b3":function(t,e,n){"use strict";var a=n("4c26"),i=n.n(a);i.a},"2af4":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo-title[data-v-0a71b827]{padding:%?40?%}.demo-item[data-v-0a71b827]{margin-bottom:%?60?%}.demo-item[data-v-0a71b827]:last-child{margin-bottom:0}',""]),t.exports=e},"4a71":function(t,e,n){var a=n("24fb"),i=n("1de5"),c=n("86d9");e=a(!1);var o=i(c);e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+o+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=e},"4c26":function(t,e,n){var a=n("2af4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("c88bfc30",a,!0,{sourceMap:!1,shadowMode:!1})},"527d":function(t,e,n){"use strict";n.r(e);var a=n("0591"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},5364:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d7f5")),c={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};e.default=c},"7d3a":function(t,e,n){"use strict";var a=n("8883"),i=n.n(a);i.a},"86d9":function(t,e,n){t.exports=n.p+"static/fonts/uni.75745d34.ttf"},"87fc":function(t,e,n){"use strict";n.r(e);var a=n("d9e8"),i=n("a730");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("29b3");var o,l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"0a71b827",null,!1,a["a"],o);e["default"]=r.exports},8883:function(t,e,n){var a=n("fc1e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("086f1e9a",a,!0,{sourceMap:!1,shadowMode:!1})},"9ba7":function(t,e,n){"use strict";var a=n("f7ee"),i=n.n(a);i.a},"9c6f":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={ccIcon:n("b2bc").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cc-contact-card",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},["add"===t.type?n("v-uni-view",{staticClass:"cc-contact-card-icon"},[n("cc-icon",{attrs:{type:"plusempty",color:"#fff",size:"24"}})],1):n("v-uni-view",[n("cc-icon",{staticStyle:{"margin-right":"30rpx"},attrs:{type:"person",size:"18"}})],1),n("v-uni-view",{staticClass:"cc-contact-card-content"},["add"===t.type?n("v-uni-view",[t._v(t._s(t.addText))]):n("v-uni-view",{staticStyle:{color:"#323233"}},[n("v-uni-view",[t._v("姓名: "+t._s(t.name))]),n("v-uni-view",[t._v("电话: "+t._s(t.tel))])],1)],1),t.editable?n("v-uni-view",{staticClass:"cc-contact-card-arrow"},[n("cc-icon",{attrs:{type:"arrowright",color:"#969799"}})],1):t._e()],1)},c=[]},a243:function(t,e,n){"use strict";n.r(e);var a=n("5364"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},a730:function(t,e,n){"use strict";n.r(e);var a=n("c4c6"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=i.a},b1ee:function(t,e,n){"use strict";n.r(e);var a=n("9c6f"),i=n("527d");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("7d3a");var o,l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"70f33d94",null,!1,a["a"],o);e["default"]=r.exports},b2bc:function(t,e,n){"use strict";n.r(e);var a=n("0a23"),i=n("a243");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("9ba7");var o,l=n("f0c5"),r=Object(l["a"])(i["default"],a["b"],a["c"],!1,null,"2be89183",null,!1,a["a"],o);e["default"]=r.exports},c4c6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{},data:function(){return{}},methods:{onAdd:function(){console.log("add")}},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};e.default=a},d7f5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};e.default=a},d9e8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var a={ccContactCard:n("b1ee").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticStyle:{background:"#f7f7f7",height:"100vh"}},[n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-contact-card",{attrs:{type:"add"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAdd.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("编辑联系人")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-contact-card",{attrs:{type:"edit",name:"eason",tel:"13888888888"}})],1)],1),n("v-uni-view",{staticClass:"demo"},[n("v-uni-view",{staticClass:"demo-title"},[t._v("不可编辑")]),n("v-uni-view",{staticClass:"demo-item"},[n("cc-contact-card",{attrs:{type:"edit",name:"eason",tel:"13888888888",editable:!1},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAdd.apply(void 0,arguments)}}})],1)],1)],1)},c=[]},f7ee:function(t,e,n){var a=n("4a71");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("201d0f9a",a,!0,{sourceMap:!1,shadowMode:!1})},fc1e:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.cc-contact-card[data-v-70f33d94]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:24px;position:relative;background:#fff}.cc-contact-card[data-v-70f33d94]::before{position:absolute;right:0;bottom:0;left:0;height:2px;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px;content:""}.cc-contact-card-icon[data-v-70f33d94]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#1989fa;border-radius:%?10?%;margin-right:%?30?%}.cc-contact-card-content[data-v-70f33d94]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;color:#323233}',""]),t.exports=e}}]);