---
title: Visual Studio Code 安装配置
icon: info
---

# Visual Studio Code 安装配置

## 简介

`Visual Studio Code` 是一款文本编辑器软件。他有非常丰富的插件，大部分功能都由插件提供。但注意，`VScode`和`Visual Studio`之间的关系就像`Java script`和`Java`的关系一样。是完全不同的两个东西。由微软用`Electron`开发，得益于`Electron`框架，`VScode`具有很强大的跨平台特性。

你可以用`VS code`进行`C/C++`开发。在该项目早期，我们是采用`VScode`和`CMake`进行`C++`语言下的`OpenCV`开发。

后来转到`Python`语言开发`OpenCV`后我们继续采用`VS code`进行相关开发，当然也有成员使用`Pycharm`开发。

得益于`VS code`强大的插件生态，甚至可以使用`Platform IO`插件进行单片机开发和调试。

本文章主要是带你安装和配置`VS code`进行`C/C++`开发。其他功能可以自行探索。

## 安装过程

需要下载的东西：

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git官网下载地址【最新】](https://git-scm.com/) [Git 2.38.1 国内备用下载](https://nas.dustella.net/s/wncP)
- [CMake官网下载【最新】](https://cmake.org/download/) [CMake 3.25.0-rc3 国内备用下载](https://nas.dustella.net/s/RqIZ)
- [msys2官网下载【最新】](https://www.msys2.org/) [msys2 20221028 国内备用下载](https://nas.dustella.net/s/g5ur)

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/vscode-download.png" />
  <img src="/assets/pics/git-download.png" />
  <img src="/assets/pics/cmake-download.png" />
  <img src="/assets/pics/msys2-download.png" />
</div>

<style>
  .image-preview {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }

  .image-preview > img {
     box-sizing: border-box;
     width: 50% !important;
     padding: 9px;
     border-radius: 16px;
  }

  @media (max-width: 719px){
    .image-preview > img {
      width: 50% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->