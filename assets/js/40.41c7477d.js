(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{458:function(s,t,e){"use strict";e.r(t);var a=e(28),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vuepress引入element-ui"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress引入element-ui"}},[s._v("#")]),s._v(" vuepress引入element-ui")]),s._v(" "),e("h2",{attrs:{id:"下载安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),e("ol",[e("li",[s._v("下载element-ui")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --save element-ui\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or yarn add element-ui")]),s._v("\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("配置enhanceApp.js使用element-ui")])]),s._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ElementUI "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'element-ui/lib/theme-chalk/index.css'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ElementUI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),e("h2",{attrs:{id:"处理异常"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理异常"}},[s._v("#")]),s._v(" 处理异常")]),s._v(" "),e("p",[s._v("配置没有问题，但是在运行vuepress dev docs时报错Cannot find module 'core-js/library/fn/object/assign等错误信息，错误完全围绕core-js")]),s._v(" "),e("p",[s._v("跟着google走，大部分文档都让我升级core-js，然而并没有用")]),s._v(" "),e("p",[s._v("最后在https://github.com/vuejs/vuepress/issues/2275中发现，原来是element ui依赖core-js的2.x版本，而web项目依赖core-js的3.x版本导致的（错误信息中没有关于element-ui的，真坑爹）")]),s._v(" "),e("p",[s._v("改core-js的版本是不可能的，安装依赖yarn add async-validator@1.11.5 / npm install async-validator@1.11.5就可以解决问题了！")])])}),[],!1,null,null,null);t.default=n.exports}}]);