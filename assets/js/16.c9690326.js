(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{433:function(e,r,t){"use strict";t.r(r);var o=t(28),s=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("homebrew长时间停在Updating Homebrew 这个步骤\n在国内的网络环境下使用 Homebrew 安装软件的过程中可能会长时间卡在 Updating Homebrew 这个步骤。")]),e._v(" "),t("p",[e._v("例：执行 brew install composer 命令")]),e._v(" "),t("p",[e._v("➜  ~ brew install composer\nUpdating Homebrew... # 如果碰到长时间卡在这里，参考以下 2 种处理方法")]),e._v(" "),t("h2",{attrs:{id:"方法-1-按住-control-c-取消本次更新操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法-1-按住-control-c-取消本次更新操作"}},[e._v("#")]),e._v(" 方法 1：按住 control + c 取消本次更新操作")]),e._v(" "),t("p",[e._v("➜  ~ brew install composer\nUpdating Homebrew...\n^C\n*** 按住 control + c 之后命令行会显示 ^C，就代表已经取消了 Updating Homebrew 操作 ***")]),e._v(" "),t("p",[e._v("大概不到 1 秒钟之后就会去执行我们真正需要的安装操作了")]),e._v(" "),t("p",[e._v("➜  ~ brew install composer\nUpdating Homebrew...\n^C==> Satisfying dependencies\n==> Downloading https://getcomposer.org/download/1.7.2/composer.phar\n...\n这个方法是临时的、一次性的")]),e._v(" "),t("h2",{attrs:{id:"方法-2-使用-alibaba-的-homebrew-镜像源进行加速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法-2-使用-alibaba-的-homebrew-镜像源进行加速"}},[e._v("#")]),e._v(" 方法 2：使用 Alibaba 的 Homebrew 镜像源进行加速")]),e._v(" "),t("blockquote",[t("p",[e._v("平时我们执行 brew 命令安装软件的时候，跟以下 3 个仓库地址有关：")])]),e._v(" "),t("p",[e._v("brew.git")]),e._v(" "),t("p",[e._v("homebrew-core.git")]),e._v(" "),t("p",[e._v("homebrew-bottles")]),e._v(" "),t("p",[e._v("通过以下操作将这 3 个仓库地址全部替换为 Alibaba 提供的地址")]),e._v(" "),t("ol",[t("li",[e._v("替换 / 还原 brew.git 仓库地址")])]),e._v(" "),t("h1",{attrs:{id:"替换成阿里巴巴的-brew-git-仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换成阿里巴巴的-brew-git-仓库地址"}},[e._v("#")]),e._v(" 替换成阿里巴巴的 brew.git 仓库地址:")]),e._v(" "),t("p",[e._v('cd "$(brew --repo)"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git')]),e._v(" "),t("p",[e._v("#=======================================================")]),e._v(" "),t("h1",{attrs:{id:"还原为官方提供的-brew-git-仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原为官方提供的-brew-git-仓库地址"}},[e._v("#")]),e._v(" 还原为官方提供的 brew.git 仓库地址")]),e._v(" "),t("p",[e._v('cd "$(brew --repo)"\ngit remote set-url origin https://github.com/Homebrew/brew.git')]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("替换 / 还原 homebrew-core.git 仓库地址")])]),e._v(" "),t("h1",{attrs:{id:"替换成阿里巴巴的-homebrew-core-git-仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换成阿里巴巴的-homebrew-core-git-仓库地址"}},[e._v("#")]),e._v(" 替换成阿里巴巴的 homebrew-core.git 仓库地址:")]),e._v(" "),t("p",[e._v('cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git')]),e._v(" "),t("p",[e._v("#=======================================================")]),e._v(" "),t("h1",{attrs:{id:"还原为官方提供的-homebrew-core-git-仓库地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原为官方提供的-homebrew-core-git-仓库地址"}},[e._v("#")]),e._v(" 还原为官方提供的 homebrew-core.git 仓库地址")]),e._v(" "),t("p",[e._v('cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin https://github.com/Homebrew/homebrew-core.git')]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("替换 / 还原 homebrew-bottles 访问地址\n这个步骤跟你的 macOS 系统使用的 shell 版本有关系")])]),e._v(" "),t("p",[e._v("所以，先来查看当前使用的 shell 版本")]),e._v(" "),t("p",[e._v("echo $SHELL")]),e._v(" "),t("h1",{attrs:{id:"如果你的输出结果是-bin-zsh-参考-的-zsh-终端操作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果你的输出结果是-bin-zsh-参考-的-zsh-终端操作方式"}},[e._v("#")]),e._v(" 如果你的输出结果是 /bin/zsh，参考?的 zsh 终端操作方式")]),e._v(" "),t("h1",{attrs:{id:"如果你的输出结果是-bin-bash-参考-的-bash-终端操作方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如果你的输出结果是-bin-bash-参考-的-bash-终端操作方式"}},[e._v("#")]),e._v(" 如果你的输出结果是 /bin/bash，参考?的 bash 终端操作方式")]),e._v(" "),t("p",[e._v("3.1 zsh 终端操作方式")]),e._v(" "),t("h1",{attrs:{id:"替换成阿里巴巴的-homebrew-bottles-访问地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换成阿里巴巴的-homebrew-bottles-访问地址"}},[e._v("#")]),e._v(" 替换成阿里巴巴的 homebrew-bottles 访问地址:")]),e._v(" "),t("p",[e._v("echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc\nsource ~/.zshrc")]),e._v(" "),t("p",[e._v("#=======================================================")]),e._v(" "),t("h1",{attrs:{id:"还原为官方提供的-homebrew-bottles-访问地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原为官方提供的-homebrew-bottles-访问地址"}},[e._v("#")]),e._v(" 还原为官方提供的 homebrew-bottles 访问地址")]),e._v(" "),t("p",[e._v("vi ~/.zshrc")]),e._v(" "),t("h1",{attrs:{id:"然后-删除-homebrew-bottle-domain-这一行配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#然后-删除-homebrew-bottle-domain-这一行配置"}},[e._v("#")]),e._v(" 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置")]),e._v(" "),t("p",[e._v("source ~/.zshrc")]),e._v(" "),t("p",[e._v("3.2 bash 终端操作方式")]),e._v(" "),t("h1",{attrs:{id:"替换-homebrew-bottles-访问-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#替换-homebrew-bottles-访问-url"}},[e._v("#")]),e._v(" 替换 homebrew-bottles 访问 URL:")]),e._v(" "),t("p",[e._v("echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile\nsource ~/.bash_profile")]),e._v(" "),t("p",[e._v("#=======================================================")]),e._v(" "),t("h1",{attrs:{id:"还原为官方提供的-homebrew-bottles-访问地址-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原为官方提供的-homebrew-bottles-访问地址-2"}},[e._v("#")]),e._v(" 还原为官方提供的 homebrew-bottles 访问地址")]),e._v(" "),t("p",[e._v("vi ~/.bash_profile")]),e._v(" "),t("h1",{attrs:{id:"然后-删除-homebrew-bottle-domain-这一行配置-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#然后-删除-homebrew-bottle-domain-这一行配置-2"}},[e._v("#")]),e._v(" 然后，删除 HOMEBREW_BOTTLE_DOMAIN 这一行配置")]),e._v(" "),t("p",[e._v("source ~/.bash_profile")])])}),[],!1,null,null,null);r.default=s.exports}}]);