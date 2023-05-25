---
home: true
icon: home
# layout: BlogHome
title: 开飞机文档
heroImage: /logo.png
heroText: 开飞机
tagline: 开飞机的相关文档
# heroFullScreen: true
actions:
  - text: 快速开始 👉
    link: /guide/
    type: primary
  - text: 文章列表
    link: /article/
    type: primary

features:
  - title: 关于我们
    details: 我们不只是开飞机，任何有趣的东西我们都喜欢。
  - title: 关于文档
    details: 采用 VuePress 开发，记录一些教程和有用的东西。
  - title: 我们干什么
    details: 主要是打比赛，但更重要的是学到些有用的东西。

footer: <a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备2023016076号-1</a> | <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png" /></a> 2021-present <a href="https://github.com/We-Fly">We-Fly</a> organization

---

## 贡献指南

正如你所看到，本站所有内容都是开源的。任何人都可以向[本仓库](https://github.com/We-Fly/doc)贡献教程、文章。并采用 `署名-非商业性使用-相同方式共享 4.0 国际` [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)许可证进行许可。  
你可以对本创作进行转载、节选、混编、二次创作，但不得运用于商业目的，且使用时须进行署名，采用本创作的内容必须同样采用本协议进行授权。

本文档采用了`Vuepress`强力驱动。请参考手册[Vuepress](https://vuepress.github.io/)[vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/)

文档相关页面均采用`Markdown`语法编写

若您希望为本站提供资源，请确保您的系统已安装 [node.js](https://nodejs.org/zh-cn/) 及 [pnpm](https://pnpm.io/zh/installation)。

以下为本项目的相关命令：

``` bash
pnpm install      # 安装依赖
pnpm run docs:dev     # 本地运行项目
pnpm run docs:build   # 将项目构建为静态 HTML 文件
```
