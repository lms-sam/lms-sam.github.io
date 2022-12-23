(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{488:function(a,t,s){"use strict";s.r(t);var e=s(28),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" mysql")]),a._v(" "),s("h2",{attrs:{id:"_1-安装-启动-停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装-启动-停止"}},[a._v("#")]),a._v(" 1.安装 启动/停止")]),a._v(" "),s("h3",{attrs:{id:"mac"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mac"}},[a._v("#")]),a._v(" mac")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装")]),a._v("\nbrew "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#开启")]),a._v("\nmysql.server start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止")]),a._v("\nmysql.server stop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#开机启动")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" -p ~/Library/LaunchAgents\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /usr/local/Cellar/mysql/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Mysql版本号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/homebrew.mxcl.mysql.plist \n~/Library/LaunchAgents/\nlaunchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist\n")])])]),s("h3",{attrs:{id:"window"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window"}},[a._v("#")]),a._v(" window")]),a._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" linux")]),a._v(" "),s("h2",{attrs:{id:"_2-用户管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户管理"}},[a._v("#")]),a._v(" 2.用户管理")]),a._v(" "),s("h3",{attrs:{id:"查看呀用户列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看呀用户列表"}},[a._v("#")]),a._v(" 查看呀用户列表")]),a._v(" "),s("h3",{attrs:{id:"新增用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新增用户"}},[a._v("#")]),a._v(" 新增用户")]),a._v(" "),s("h3",{attrs:{id:"删除用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除用户"}},[a._v("#")]),a._v(" 删除用户")]),a._v(" "),s("h3",{attrs:{id:"配置权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置权限"}},[a._v("#")]),a._v(" 配置权限")]),a._v(" "),s("h3",{attrs:{id:"查看用户权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看用户权限"}},[a._v("#")]),a._v(" 查看用户权限")]),a._v(" "),s("h3",{attrs:{id:"修改密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改密码"}},[a._v("#")]),a._v(" 修改密码")]),a._v(" "),s("h2",{attrs:{id:"_3-数据库操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据库操作"}},[a._v("#")]),a._v(" 3.数据库操作")]),a._v(" "),s("p",[a._v("1.查看数据库列表 show\nshow database")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SHOW DATABASES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("2.创建 create\ncreate database <数据库名称>")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" CREATE DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("database_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("3.删除 drop\ndrop database <数据库名称>")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" DROP DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("databse_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("4.使用 use\nuse databases <数据库名称>")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" DROP DATABASE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("databse_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("5.查看 select\nselect databases();")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" SELECT DATABASES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"_4-表的操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-表的操作"}},[a._v("#")]),a._v(" 4.表的操作")]),a._v(" "),s("p",[a._v("1.创建 create")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名称")]),a._v(" "),s("th",[a._v("解析")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("key_name")]),a._v(" "),s("td",[a._v("\b\b字段名")])]),a._v(" "),s("tr",[s("td",[a._v("type")]),a._v(" "),s("td",[a._v("数据类型")])]),a._v(" "),s("tr",[s("td",[a._v("is null")]),a._v(" "),s("td",[a._v("是否为空")])]),a._v(" "),s("tr",[s("td",[a._v("PRIMARY KEY")]),a._v(" "),s("td",[a._v("主键")])]),a._v(" "),s("tr",[s("td",[a._v("AUTO_INCREMENT")]),a._v(" "),s("td",[a._v("自增")])]),a._v(" "),s("tr",[s("td",[a._v("COMMENT")]),a._v(" "),s("td",[a._v("备注")])])])]),a._v(" "),s("p",[a._v("eg:foreign key(pid) references province(pId) 添加外键")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("CREATE TABLE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("key_name1 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("type")]),a._v(" NULL/NOT NULL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("PRIMARY KEY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("AUTO_INCREMENT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("COMMENT "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("2.查看")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 查看列详情")]),a._v("\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("SHOW CLUMNS FROM "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("3.更新")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 添加字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 删除字段")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改原有字段")]),a._v("\n")])])]),s("p",[a._v("4.删除\ndrop table <table_name>")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" DROP TABLE "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"参考地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考地址"}},[a._v("#")]),a._v(" 参考地址")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/bluealine/p/7832219.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mysql常用命令大全"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);