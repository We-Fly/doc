---
title: 欢迎
icon: creative
category:
 - 导航页
 - 教程
---

欢迎来到无人机项目的wiki,这边汇总了入门需要的几乎所有知识点，并持续更新中

希望小伙伴们不要掉队哦

## 快速上手

想快速加入工作流的小伙伴，请自行学习`Git的使用`和`markdown语法`等基础知识。这是加入我们的第一步哦

一些[前置小知识](/guide/preknowledge/README.md)

## Git的使用

### Why Git ？

当别人给你一段代码的时候，你是喜欢一张用手机拍摄的不清楚的照片，一张截图，或者是直接通过聊天软件发送给你的未格式化的代码？

现在有更好的选择了，那就是Git

学会Git，加入我们，贡献代码吧！

### Learn Git

自行学习Git操作可以在哔哩哔哩网站上随意找一个视频跟着配置。可以拿这个网站做为[Cheatsheet](https://www.runoob.com/git/git-tutorial.html)

[Git官网下载地址](https://git-scm.com/)

[Git下载慢用这个](https://nas.dustella.net/s/wncP)

[Windows Git 安装步骤](/guide/guide-how-to-install-vscode.html#git-安装步骤)

## Markdown语法

本文档采用`Vuepress`编写，所有页面都是由Markdown语法编写的。

这边不需要你背出所有的操作，只需要认识有哪些功能并且知道如何使用就行了，可以使用这个[Cheatsheet](https://www.runoob.com/markdown/md-tutorial.html)，需要用到什么功能直接查询就行

这边推荐使用`vscode`的`Markdown Preview Enhanced`插件即时预览markdown渲染结果。

## Python

现在的视觉代码都是用的`Python`语言编写

参考这边的[Python Opencv 环境搭建](guide-python-opencv-env-config)

[OpenCV介绍](/opencv/intro-opencv.md)

## 硬件知识

如果不清楚一个无人机由哪些硬件组成，以及各种硬件分别有什么作用，请参考以下内容[硬件关键词介绍](/flight/intro-hardware-keywords.md)

## 教程

- [Keil MDK5 安装破解教程](guide-how-to-install-keil5.md)
- [Python Opencv 环境搭建](guide-python-opencv-env-config.md)
- [设置Path环境变量](guide-how-to-set-path-win.md)
- [Visual Studio Code 安装配置](guide-how-to-install-vscode.md)
- ...

## 飞控相关页面

@include(../flight/README.md{11-})

## 视觉相关页面

@include(../opencv/README.md{11-})
