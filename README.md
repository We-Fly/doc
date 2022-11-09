# doc

开飞机的各种文档

>本文档采用 `署名-非商业性使用-相同方式共享 4.0 国际` [CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh)许可证进行许可。  
你可以对本创作进行转载、节选、混编、二次创作，但不得运用于商业目的，且使用时须进行署名，采用本创作的内容必须同样采用本协议进行授权。

## 贡献指南

正如你所看到，本站所有内容都是开源的。任何人都可以向[本仓库](https://github.com/We-Fly/doc)贡献教程、文章。并采用[CC-BY-NC-SA-4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)许可证进行许可。

注意，每次在`main`分支提交的更改都会触发网页更新，请将更改提交到`dev`分支，通过检查后再进行合并。

```bash
git clone -b dev https://github.com/We-Fly/doc.git  # 使用https克隆
git clone -b dev git@github.com:We-Fly/doc.git      # 使用ssh克隆
```

本文档采用了`Vuepress`强力驱动。请参考手册 [Vuepress](https://vuepress.github.io/) [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/)

文档相关页面均采用`Markdown`语法编写

若您希望为本站提供资源，请确保您的系统已安装 [node.js](https://nodejs.org/zh-cn/) 及 [pnpm](https://pnpm.io/zh/installation)。

以下为本项目的相关命令：

``` bash
pnpm install      # 安装依赖
pnpm run docs:dev     # 本地运行项目
pnpm run docs:build   # 将项目构建为静态 HTML 文件
```
