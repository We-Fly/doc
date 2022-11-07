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
- [Git官网下载地址【最新】](https://git-scm.com/) [Git Tuna镜像下载](https://mirror.tuna.tsinghua.edu.cn/github-release/git-for-windows/git/LatestRelease/)
- [CMake官网下载【最新】](https://cmake.org/download/) [CMake 3.25.0-rc3 国内备用下载](https://nas.dustella.net/s/RqIZ)
- [msys2官网下载【最新】](https://www.msys2.org/) [msys2 Tuna镜像下载](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/x86_64/)

::: details msys2 Tuna镜像下载提示
请访问该镜像目录，翻到最下面，找到名为 `msys2-x86_64-<日期>.exe` 的文件（如 `msys2-x86_64-20221028.exe`），下载安装即可。
:::

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

### Git 安装步骤

点击`Next`

![](/assets/pics/vscode/git-install-1.png =x300)

`1`处选择安装目录，路径不可以含有中文，然后点击`Next`

![](/assets/pics/vscode/git-install-2.png =x300)

根据自己的需要，可以取消勾选`Git Gui Here`右键菜单选项，然后点击`Next`

![](/assets/pics/vscode/git-install-3.png =x300)

然后这边是选择开始菜单目录，直接点击`Next`

![](/assets/pics/vscode/git-install-4.png =x300)

这边是设置Git默认配置文件编辑器，可以自由更改，后期可以通过命令修改

![](/assets/pics/vscode/git-install-5.png =x300)

后面的页面全部点击`Next`就可以了，一般不需要改，如果有需要可以自己查阅

![](/assets/pics/vscode/git-install-6.png =x300)

安装完成，取消勾选`View Release Notes`

![](/assets/pics/vscode/git-install-7.png =x300)

### CMake 安装步骤

点击`Next`

![](/assets/pics/vscode/cmake-install-1.png =x300)

勾选下方`I accept ...`，点击`Next`

![](/assets/pics/vscode/cmake-install-2.png =x300)

点击`Add CMake to the system PATH for the current user`，点击`Next`

![](/assets/pics/vscode/cmake-install-3.png =x300)

选择安装目录，路径不可以含有中文，然后点击`Next`

![](/assets/pics/vscode/cmake-install-4.png =x300)

点击`Install`

![](/assets/pics/vscode/cmake-install-5.png =x300)

等待安装结束

![](/assets/pics/vscode/cmake-install-6.png =x300)

:::

### msys2 安装步骤

点击`下一步`

![](/assets/pics/vscode/msys2-install-1.png =x300)

选择安装位置

::: warning
如果这边改了路径，后面所有`C:\msys64`都需要修改成你的安装位置  
由于后期会陆续安装很多软件包，文件夹会越来越大，如果C盘空间不足的请自行更改安装位置，但路径中==不要有中文字符==
:::

![](/assets/pics/vscode/msys2-install-2.png =x300)

这边是修改开始菜单的名称，保留默认，点击`下一步`就行

![](/assets/pics/vscode/msys2-install-3.png =x300)

安装过程可能会卡住，但一般在`5分钟左右`

![](/assets/pics/vscode/msys2-install-4.png =x300)

安装完成页面如图，点击`下一步`

![](/assets/pics/vscode/msys2-install-5.png =x300)

取消勾选`立即运行 MSYS2`,点击`完成`，退出安装程序

![](/assets/pics/vscode/msys2-install-6.png =x300)

然后是换源，请参考[Tuna - MSYS2 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/msys2/)

主要是要修改几个文件，注意用记事本或者VScode打开

::: details 命令方法

按`windows徽标键+R`组合键，输入：

```powershell
explorer C:\msys64\etc\pacman.d\
# 快速打开文件夹（前面的路径修改成你自己的安装位置）
```

拿其中一个文件做例子

```powershell
notepad C:\msys64\etc\pacman.d\mirrorlist.mingw32
# 后面的路径可以直接将要修改的文件拖入Powershell窗口
```

在==文件开头==添加：

`Server = https://mirrors.tuna.tsinghua.edu.cn/msys2/mingw/i686`

:::

参考[这个文章](/guide/guide-how-to-set-path-win)，修改环境变量

在`开始菜单`中找到`MSYS2`文件夹，然后点击`MSYS2 MINGW64`

<!-- ![](/assets/pics/vscode/msys2-shell-0.png =x300) -->
> 这边需要修改图片

::: warning
这个黑框框是==不能直接粘贴==的，需要右键，然后点击`Paste`，后面代码都不能直接用`ctrl+v`快捷键粘贴
:::

![](/assets/pics/vscode/msys2-shell-1.png =x300)
