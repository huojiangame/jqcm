(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-description-description~pages-gonglue-gonglue"],{"32f3":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("80b1").default},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse-item"},[i("v-uni-view",{staticClass:"uni-collapse-item__title",class:{"is-open":t.isOpen&&"auto"===t.titleBorder,"uni-collapse-item-border":"none"!==t.titleBorder},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(!t.isOpen)}}},[i("v-uni-view",{staticClass:"uni-collapse-item__title-wrap"},[t._t("title",[i("v-uni-view",{staticClass:"uni-collapse-item__title-box",class:{"is-disabled":t.disabled}},[t.thumb?i("v-uni-image",{staticClass:"uni-collapse-item__title-img",attrs:{src:t.thumb}}):t._e(),i("v-uni-text",{staticClass:"uni-collapse-item__title-text"},[t._v(t._s(t.title))])],1)])],2),t.showArrow?i("v-uni-view",{staticClass:"uni-collapse-item__title-arrow",class:{"uni-collapse-item__title-arrow-active":t.isOpen,"uni-collapse-item--animation":!0===t.showAnimation}},[i("uni-icons",{attrs:{color:t.disabled?"#ddd":"#bbb",size:"14",type:"arrowdown"}})],1):t._e()],1),i("v-uni-view",{staticClass:"uni-collapse-item__wrap",class:{"is--transition":t.showAnimation},style:{height:(t.isOpen?t.height:0)+"px"}},[i("v-uni-view",{ref:"collapse--hook",staticClass:"uni-collapse-item__wrap-content",class:{open:t.isheight,"uni-collapse-item--border":t.border&&t.isOpen},attrs:{id:t.elId}},[t._t("default")],2)],1)],1)},a=[]},"4c60":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-collapse[data-v-1de35e38]{width:100%;display:flex;flex-direction:column;background-color:#fff}',""]),t.exports=e},"6bc4":function(t,e,i){var n=i("4c60");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("2e44dc9f",n,!0,{sourceMap:!1,shadowMode:!1})},"6e5d":function(t,e,i){"use strict";var n=i("6bc4"),o=i.n(n);o.a},"786f":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-collapse-item[data-v-a8d8138e]{box-sizing:border-box}.uni-collapse-item__title[data-v-a8d8138e]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;transition:border-bottom-color .3s}.uni-collapse-item__title-wrap[data-v-a8d8138e]{width:100%;flex:1}.uni-collapse-item__title-box[data-v-a8d8138e]{padding:0 15px;display:flex;width:100%;box-sizing:border-box;flex-direction:row;justify-content:space-between;align-items:center;height:48px;line-height:48px;background-color:#fff;color:#303133;font-size:13px;font-weight:500;cursor:pointer;outline:none}.uni-collapse-item__title-box.is-disabled .uni-collapse-item__title-text[data-v-a8d8138e]{color:silver}.uni-collapse-item__title.uni-collapse-item-border[data-v-a8d8138e]{border-bottom:1px solid #ebeef5}.uni-collapse-item__title.is-open[data-v-a8d8138e]{border-bottom-color:transparent}.uni-collapse-item__title-img[data-v-a8d8138e]{height:%?52?%;width:%?52?%;margin-right:10px}.uni-collapse-item__title-text[data-v-a8d8138e]{flex:1;font-size:%?28?%;white-space:nowrap;color:inherit;overflow:hidden;text-overflow:ellipsis}.uni-collapse-item__title-arrow[data-v-a8d8138e]{display:flex;box-sizing:border-box;align-items:center;justify-content:center;width:20px;height:20px;margin-right:10px;-webkit-transform:rotate(0deg);transform:rotate(0deg)}.uni-collapse-item__title-arrow-active[data-v-a8d8138e]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-collapse-item__wrap[data-v-a8d8138e]{will-change:height;box-sizing:border-box;background-color:#fff;overflow:hidden;position:relative;height:0}.uni-collapse-item__wrap.is--transition[data-v-a8d8138e]{transition-property:height,border-bottom-width;transition-duration:.3s;will-change:height}.uni-collapse-item__wrap-content[data-v-a8d8138e]{position:absolute;font-size:13px;color:#303133;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:0}.uni-collapse-item__wrap-content.uni-collapse-item--border[data-v-a8d8138e]{border-bottom-width:1px;border-bottom-color:red;border-bottom-color:#ebeef5}.uni-collapse-item__wrap-content.open[data-v-a8d8138e]{position:relative}.uni-collapse-item--animation[data-v-a8d8138e]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;transition-timing-function:ease}',""]),t.exports=e},"821f":function(t,e,i){"use strict";i.r(e);var n=i("e02a"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"8f1e":function(t,e,i){"use strict";i.r(e);var n=i("9d24"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"9d24":function(t,e,i){"use strict";i("4160"),i("c975"),i("a434"),i("a9e3"),i("d3b7"),i("ac1f"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniCollapseItem",props:{title:{type:String,default:""},name:{type:[Number,String],default:""},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!0},open:{type:Boolean,default:!1},thumb:{type:String,default:""},titleBorder:{type:String,default:"auto"},border:{type:Boolean,default:!0},showArrow:{type:Boolean,default:!0}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{isOpen:!1,isheight:null,height:0,elId:t,nameSync:0}},watch:{open:function(t){this.isOpen=t,this.onClick(t,"init")}},updated:function(t){var e=this;this.$nextTick((function(){e.init(!0)}))},created:function(){this.collapse=this.getCollapse(),this.oldHeight=0},destroyed:function(){this.__isUnmounted||this.uninstall()},mounted:function(){this.collapse&&(""!==this.name?this.nameSync=this.name:this.nameSync=this.collapse.childrens.length+"",-1===this.collapse.names.indexOf(this.nameSync)?this.collapse.names.push(this.nameSync):console.warn("name 值 ".concat(this.nameSync," 重复")),-1===this.collapse.childrens.indexOf(this)&&this.collapse.childrens.push(this),this.init())},methods:{init:function(t){this.getCollapseHeight(t)},uninstall:function(){var t=this;this.collapse&&(this.collapse.childrens.forEach((function(e,i){e===t&&t.collapse.childrens.splice(i,1)})),this.collapse.names.forEach((function(e,i){e===t.nameSync&&t.collapse.names.splice(i,1)})))},onClick:function(t,e){this.disabled||(this.isOpen=t,this.isOpen&&this.collapse&&this.collapse.setAccordion(this),"init"!==e&&this.collapse.onChange(t,this))},getCollapseHeight:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=uni.createSelectorQuery().in(this);n.select("#".concat(this.elId)).fields({size:!0},(function(n){if(!(i>=10)){if(!n)return i++,void e.getCollapseHeight(!1,i);e.height=n.height,e.isheight=!0,t||e.onClick(e.open,"init")}})).exec()},getNvueHwight:function(t){var e=this;dom.getComponentRect(this.$refs["collapse--hook"],(function(i){if(i&&i.result&&i.size){if(e.height=i.size.height,e.isheight=!0,t)return;e.onClick(e.open,"init")}}))},getCollapse:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniCollapse",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}};e.default=n},adad:function(t,e,i){"use strict";var n=i("e728"),o=i.n(n);o.a},aff8:function(t,e,i){"use strict";i.r(e);var n=i("32f3"),o=i("8f1e");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("adad");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"a8d8138e",null,!1,n["a"],r);e["default"]=l.exports},b17f:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},a=[]},dc09:function(t,e,i){"use strict";i.r(e);var n=i("b17f"),o=i("821f");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("6e5d");var r,s=i("f0c5"),l=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"1de35e38",null,!1,n["a"],r);e["default"]=l.exports},e02a:function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"uniCollapse",emits:["change","activeItem","input","update:modelValue"],props:{value:{type:[String,Array],default:""},modelValue:{type:[String,Array],default:""},accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},computed:{dataValue:function(){var t="string"===typeof this.value&&""===this.value||Array.isArray(this.value)&&0===this.value.length;"string"===typeof this.modelValue&&""===this.modelValue||Array.isArray(this.modelValue)&&this.modelValue.length;return t?this.modelValue:this.value}},watch:{dataValue:function(t){this.setOpen(t)}},created:function(){this.childrens=[],this.names=[]},mounted:function(){this.setOpen(this.dataValue)},methods:{setOpen:function(t){var e=this,i="string"===typeof t,n=Array.isArray(t);this.childrens.forEach((function(o,a){if(i&&t===o.nameSync){if(!e.accordion)return void console.warn("accordion 属性为 false ,v-model 类型应该为 array");o.isOpen=!0}n&&t.forEach((function(t){if(t===o.nameSync){if(e.accordion)return void console.warn("accordion 属性为 true ,v-model 类型应该为 string");o.isOpen=!0}}))})),this.emit(t)},setAccordion:function(t){this.accordion&&this.childrens.forEach((function(e,i){t!==e&&(e.isOpen=!1)}))},resize:function(){this.childrens.forEach((function(t,e){t.getCollapseHeight()}))},onChange:function(t,e){var i=[];this.accordion?i=t?e.nameSync:"":this.childrens.forEach((function(t,e){t.isOpen&&i.push(t.nameSync)})),this.$emit("change",i),this.emit(i)},emit:function(t){this.$emit("input",t),this.$emit("update:modelValue",t)}}};e.default=n},e728:function(t,e,i){var n=i("786f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("e5120d92",n,!0,{sourceMap:!1,shadowMode:!1})}}]);