(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-goodsAction-index"],{"0a23":function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-text",{staticClass:"uni-icons",class:[t.customIcons,t.customIcons?t.type:""],style:{color:t.color,"font-size":t.size+"px"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t._onClick.apply(void 0,arguments)}}},[t._v(t._s(t.icons[t.type]))])},a=[]},"1cc8":function(t,n,e){"use strict";e.r(n);var o=e("2811"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"1de5":function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},2442:function(t,n,e){"use strict";e.r(n);var o=e("e4db"),i=e("850a");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("3d56");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"84bd248a",null,!1,o["a"],c);n["default"]=r.exports},2811:function(t,n,e){"use strict";e("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"cc-goods-action",components:{},props:{options:{type:Array,required:!0},buttons:{type:[Array,Object],required:!0}},data:function(){return{}},methods:{handleClick:function(t,n){this.$emit("click",{item:t,index:n})},clickButton:function(t,n){this.$emit("clickButton",{item:t,index:n})}},mounted:function(){var t=this;this.options.map((function(n){n.iconColor||t.$set(n,"iconColor","#323233"),n.info&&!n.infoColor&&t.$set(n,"infoColor","#ee0a24")})),Array.isArray(this.buttons)&&this.buttons.map((function(n,e){0!==e||n.background||t.$set(n,"background","#ff8917"),1!==e||n.background||t.$set(n,"background","#ee0a24")})),Array.isArray(this.buttons)||this.buttons.background||this.$set(this.buttons,"background","#ff8917")},onLoad:function(){},filters:{},computed:{},watch:{},directives:{}};n.default=o},"370f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={components:{},props:{},data:function(){return{options1:[{text:"客服",icon:"chat"},{text:"收藏",icon:"heart"},{text:"购物车",icon:"cart"}],buttons1:[{text:"加入购物车"}],options2:[{text:"客服",icon:"chat",dot:!0},{text:"收藏",icon:"heart"},{text:"购物车",icon:"cart",info:"10"}],buttons2:[{text:"加入购物车"},{text:"立即购买"}],options3:[{text:"客服",icon:"chat",iconColor:"orange"},{text:"购物车",icon:"cart",info:"3",iconColor:"#258369",infoColor:"#abc123"}],buttons3:[{text:"加入购物车"},{text:"立即购买"}],options4:[{text:"客服",icon:"chat"},{text:"收藏",icon:"heart"},{text:"购物车",icon:"cart"}],buttons4:[{text:"加入购物车",background:"rgb(190, 153, 255)"},{text:"立即购买",background:"rgb(114, 50, 221)"}]}},methods:{},mounted:function(){},onLoad:function(){},onShow:function(){},filters:{},computed:{},watch:{}};n.default=o},"3d56":function(t,n,e){"use strict";var o=e("5bab"),i=e.n(o);i.a},"4a71":function(t,n,e){var o=e("24fb"),i=e("1de5"),a=e("86d9");n=o(!1);var c=i(a);n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:uniicons;src:url('+c+') format("truetype")}.uni-icons[data-v-2be89183]{font-family:uniicons;text-decoration:none;text-align:center}',""]),t.exports=n},5364:function(t,n,e){"use strict";var o=e("4ea4");e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("d7f5")),a={name:"cc-icon",props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customIcons:{type:String,default:""}},data:function(){return{icons:i.default}},methods:{_onClick:function(){this.$emit("click")}}};n.default=a},"53d4":function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-90dc6a48]{height:%?100?%;width:100%;padding:%?6?%}.flex[data-v-90dc6a48]{display:-webkit-box;display:-webkit-flex;display:flex}.f-col[data-v-90dc6a48]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.a-center[data-v-90dc6a48]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.j-center[data-v-90dc6a48]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.f-1[data-v-90dc6a48]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.icon[data-v-90dc6a48]{min-width:%?96?%}.icon .icon-item[data-v-90dc6a48]{margin:%?10?% %?24?%;font-size:14px;position:relative;top:%?10?%}.icon .icon-item .dot[data-v-90dc6a48]{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%;position:absolute;top:%?-8?%;right:%?-4?%}.icon .icon-item .text[data-v-90dc6a48]{color:#646566}.icon .icon-item .info[data-v-90dc6a48]{position:absolute;top:%?-12?%;right:%?-8?%;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;border:1px solid #fff;border-radius:16px}.btn[data-v-90dc6a48]{color:#fff;height:%?100?%;width:100%;font-size:14px}.btn .btn-icon[data-v-90dc6a48]{height:%?80?%;width:100%;position:relative;top:%?10?%}.btn .btn-icon[data-v-90dc6a48]:first-child{border-top-left-radius:999px;border-bottom-left-radius:999px}.btn .btn-icon[data-v-90dc6a48]:last-child{border-top-right-radius:999px;border-bottom-right-radius:999px;margin-right:%?10?%}.f-btn[data-v-90dc6a48]{background:#ff8917!important}.l-btn[data-v-90dc6a48]{background:#ee0a24!important}',""]),t.exports=n},"5bab":function(t,n,e){var o=e("7442");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("36eb2121",o,!0,{sourceMap:!1,shadowMode:!1})},"721d":function(t,n,e){var o=e("53d4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("78f230fd",o,!0,{sourceMap:!1,shadowMode:!1})},7442:function(t,n,e){var o=e("24fb");n=o(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.demo[data-v-84bd248a]{background:#f7f7f7;height:100vh}.demo .demo-content[data-v-84bd248a]{margin-bottom:%?40?%;padding:%?20?%}.demo-title[data-v-84bd248a]{padding:%?20?%}.demo-item[data-v-84bd248a]{padding:0 5px;margin-bottom:10px;background:#fff}',""]),t.exports=n},"850a":function(t,n,e){"use strict";e.r(n);var o=e("370f"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"86d9":function(t,n,e){t.exports=e.p+"static/fonts/uni.75745d34.ttf"},"9ba7":function(t,n,e){"use strict";var o=e("f7ee"),i=e.n(o);i.a},a243:function(t,n,e){"use strict";e.r(n);var o=e("5364"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},b2bc:function(t,n,e){"use strict";e.r(n);var o=e("0a23"),i=e("a243");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("9ba7");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"2be89183",null,!1,o["a"],c);n["default"]=r.exports},bf66:function(t,n,e){"use strict";var o=e("721d"),i=e.n(o);i.a},d7f5:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={pulldown:"",refreshempty:"",back:"",forward:"",more:"","more-filled":"",scan:"",qq:"",weibo:"",weixin:"",pengyouquan:"",loop:"",refresh:"","refresh-filled":"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",arrowthinup:"","undo-filled":"",undo:"",redo:"","redo-filled":"",bars:"",chatboxes:"",camera:"","chatboxes-filled":"","camera-filled":"","cart-filled":"",cart:"","checkbox-filled":"",checkbox:"",arrowleft:"",arrowdown:"",arrowright:"","smallcircle-filled":"",arrowup:"",circle:"","eye-filled":"","eye-slash-filled":"","eye-slash":"",eye:"","flag-filled":"",flag:"","gear-filled":"",reload:"",gear:"","hand-thumbsdown-filled":"","hand-thumbsdown":"","hand-thumbsup-filled":"","heart-filled":"","hand-thumbsup":"",heart:"",home:"",info:"","home-filled":"","info-filled":"","circle-filled":"","chat-filled":"",chat:"","mail-open-filled":"","email-filled":"","mail-open":"",email:"",checkmarkempty:"",list:"","locked-filled":"",locked:"","map-filled":"","map-pin":"","map-pin-ellipse":"",map:"","minus-filled":"","mic-filled":"",minus:"",micoff:"",mic:"",clear:"",smallcircle:"",close:"",closeempty:"",paperclip:"",paperplane:"","paperplane-filled":"","person-filled":"","contact-filled":"",person:"",contact:"","images-filled":"",phone:"",images:"",image:"","image-filled":"","location-filled":"",location:"","plus-filled":"",plus:"",plusempty:"","help-filled":"",help:"","navigate-filled":"",navigate:"","mic-slash-filled":"",search:"",settings:"",sound:"","sound-filled":"","spinner-cycle":"","download-filled":"","personadd-filled":"","videocam-filled":"",personadd:"",upload:"","upload-filled":"",starhalf:"","star-filled":"",star:"",trash:"","phone-filled":"",compose:"",videocam:"","trash-filled":"",download:"","chatbubble-filled":"",chatbubble:"","cloud-download":"","cloud-upload-filled":"","cloud-upload":"","cloud-download-filled":"",headphones:"",shop:""};n.default=o},dd20:function(t,n,e){"use strict";e.r(n);var o=e("e63a"),i=e("1cc8");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("bf66");var c,s=e("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"90dc6a48",null,!1,o["a"],c);n["default"]=r.exports},e4db:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={ccGoodsAction:e("dd20").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"demo"},[e("v-uni-view",{staticClass:"demo-content"},[e("v-uni-view",{staticClass:"demo-title"},[t._v("基础用法")]),e("v-uni-view",{staticClass:"demo-item"},[e("cc-goods-action",{attrs:{options:t.options1,buttons:t.buttons1}})],1)],1),e("v-uni-view",{staticClass:"demo-content"},[e("v-uni-view",{staticClass:"demo-title"},[t._v("徽标")]),e("v-uni-view",{staticClass:"demo-item"},[e("cc-goods-action",{attrs:{options:t.options2,buttons:t.buttons2}})],1)],1),e("v-uni-view",{staticClass:"demo-content"},[e("v-uni-view",{staticClass:"demo-title"},[t._v("自定义颜色")]),e("v-uni-view",{staticClass:"demo-item"},[e("cc-goods-action",{attrs:{options:t.options3,buttons:t.buttons3}})],1)],1),e("v-uni-view",{staticClass:"demo-content"},[e("v-uni-view",{staticClass:"demo-title"},[t._v("自定义按钮颜色")]),e("v-uni-view",{staticClass:"demo-item"},[e("cc-goods-action",{attrs:{options:t.options4,buttons:t.buttons4}})],1)],1)],1)},a=[]},e63a:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={ccIcon:e("b2bc").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"flex a-center container"},[e("v-uni-view",{staticClass:"flex icon"},t._l(t.options,(function(n,o){return e("v-uni-view",{key:o,staticClass:"flex f-col a-center icon-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick(n,o)}}},[e("v-uni-view",[e("cc-icon",{attrs:{type:n.icon,color:n.iconColor}}),n.info?e("v-uni-text",{staticClass:"info",style:{background:n.infoColor}},[t._v(t._s(n.info))]):t._e(),n.dot?e("v-uni-view",{staticClass:"dot"}):t._e()],1),e("v-uni-view",{staticClass:"text flex a-center j-center"},[t._v(t._s(n.text))])],1)})),1),Array.isArray(t.buttons)?e("v-uni-view",{staticClass:"f-1 flex a-center btn"},[e("v-uni-view",{staticClass:"btn-icon flex a-center j-center",class:{"f-btn":!t.buttons[0].background},style:{background:t.buttons[0].background},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickButton(t.buttons[0],0)}}},[t._v(t._s(t.buttons[0].text))]),t.buttons[1]?e("v-uni-view",{staticClass:"btn-icon flex a-center j-center",class:{"l-btn":!t.buttons[1].background},style:{background:t.buttons[1].background},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickButton(t.buttons[1],1)}}},[t._v(t._s(t.buttons[1].text))]):t._e()],1):e("v-uni-view",{staticClass:"f-1 flex a-center btn"},[e("v-uni-view",{staticClass:"btn-icon flex a-center j-center",class:{"f-btn":!t.buttons.background},style:{background:t.buttons.background},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clickButton(t.buttons,0)}}},[t._v(t._s(t.buttons.text))])],1)],1)},a=[]},f7ee:function(t,n,e){var o=e("4a71");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=e("4f06").default;i("201d0f9a",o,!0,{sourceMap:!1,shadowMode:!1})}}]);