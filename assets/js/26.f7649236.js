(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{444:function(t,s,a){"use strict";a.r(s);var e=a(28),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git提交规范-husky"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git提交规范-husky"}},[t._v("#")]),t._v(" git提交规范-husky")]),t._v(" "),a("blockquote",[a("p",[t._v("管理原生的git hooks的命令钩子")])]),t._v(" "),a("h2",{attrs:{id:"基础使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save-dev husky\n")])])]),a("h3",{attrs:{id:"配置npm-prepare"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置npm-prepare"}},[t._v("#")]),t._v(" 配置npm prepare")]),t._v(" "),a("blockquote",[a("p",[t._v("prepare 会在npm install 之前执行")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" set-script prepare "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"husky install"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 高版本的npm 才有npm set-script钩子")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# husky install 内部执行了设置 git config core.hooksPath=.hooks")]),t._v("\n")])])]),a("h3",{attrs:{id:"新增一个钩子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增一个钩子"}},[t._v("#")]),t._v(" 新增一个钩子")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("    npx husky "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" .husky/pre-commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm test"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参考git hooks 原生钩子的作用 https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90")]),t._v("\n")])])]),a("h2",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[t._v("#")]),t._v(" 常用配置")]),t._v(" "),a("h3",{attrs:{id:"commit-msg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit-msg"}},[t._v("#")]),t._v(" commit-msg")]),t._v(" "),a("p",[t._v("通常配合 @commitlint/cli 约束提交信息的规范")]),t._v(" "),a("h3",{attrs:{id:"pre-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-commit"}},[t._v("#")]),t._v(" pre-commit")]),t._v(" "),a("p",[t._v("通常用于lint校验工具的规范打断提交，可以使用--no-verify跳过校验工具。")])])}),[],!1,null,null,null);s.default=r.exports}}]);