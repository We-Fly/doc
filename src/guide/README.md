---
title: 指南
icon: creative
---

## 欢迎

欢迎来到无人机项目的wiki,这边汇总了入门需要的几乎所有知识点，并持续更新中

希望小伙伴们不要掉队哦

### 快速上手

想快速加入工作流的小伙伴，请自行学习`Git的基操`和`markdown语法`等基础知识。这是加入我们的第一步哦

一些[前置小知识](intro-preknowledge.md)

#### Git的基操

自行学习Git操作可以在哔哩哔哩网站上随意找一个视频跟着配置。可以拿这个网站做为[Cheatsheet](https://www.runoob.com/git/git-tutorial.html)

[Git官网下载地址](https://git-scm.com/)

[Git下载慢用这个](https://nas.dustella.net/s/wncP)

windows下安装全部默认就可以，可以把默认文本编辑器修改为vscode,其他都一路默认就好了。

#### Markdown语法

我们大部分的文档包括wiki都是通过markdown语法编写的，这边不需要你背出所有的操作，只需要认识有哪些功能并且知道如何使用就行了，可以使用这个[Cheatsheet](https://www.runoob.com/markdown/md-tutorial.html)，需要用到什么功能直接查询就行

这边推荐使用`vscode`的`Markdown Preview Enhanced`插件即时预览markdown渲染结果。

#### Python

现在的视觉代码都是用的Python语言编写

参考这边的[Python Opencv 环境搭建](guide-python-opencv-env-config)

::: details 已经过时的部分

#### VSCode

我们的项目几乎都是用vscode来编写的，如果你使用的是其他的编辑器也可以，就是略微有点不同。

这边推荐使用vscode[官网地址](https://code.visualstudio.com/)

#### VSCode 插件

vscode本身几乎不包含任何功能，它的强大体现在插件的丰富上。我们这边推荐你安装以下这些插件

C++ 插件推荐

|插件名称|作用|备注|
| --- | --- | --- |
|[C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)|C/C++语法提示，调试等||
|[C/C++ Themes](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes)|C++主题||
|[Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)|汉化包|需要重启vscode生效|
|[CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)|CMake工具||
|[CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)|CMake工具||
|[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)|Markdown预览工具|打开方式有ctrl+shift+P搜索markdown或者先按ctrl+k松手再按v,注意vscode底部会有提示|
|[Workspace Sidebar](https://marketplace.visualstudio.com/items?itemName=sketchbuch.vsc-workspace-sidebar)|快速切换工作区|需要先设置存放工作区配置的文件夹|
|[Doxygen Documentation Generator](https://marketplace.visualstudio.com/items?itemName=cschlosser.doxdocgen)|生成代码注释的小工具|自行百度如何使用|
|[vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)|图标美化||
|[Better C++ Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-cpp-syntax)|不知道干啥的，装一下||

:::

### 硬件知识

如果不清楚一个无人机由哪些硬件组成，以及各种硬件分别有什么作用，请参考以下内容[硬件关键词介绍](flight/intro-hardware-keywords.md)


### 飞控相关页面

- [飞控介绍](flight/intro-flight-control-computer.md)
- ...

### 视觉相关页面

- [OpenCV介绍](opencv/intro-opencv.md)
- ...
