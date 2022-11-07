---
title: Visual Studio Code 安装配置
icon: info
---

:::: danger
本文章还在建设中，内容随时会有更改
::::

[[toc]]

## 简介

`Visual Studio Code` 是一款文本编辑器软件。他有非常丰富的插件，大部分功能都由插件提供。但注意，`VScode`和`Visual Studio`之间的关系就像`Java script`和`Java`的关系一样。是完全不同的两个东西。由微软用`Electron`开发，得益于`Electron`框架，`VScode`具有很强大的跨平台特性。

你可以用`VS code`进行`C/C++`开发。在该项目早期，我们是采用`VScode`和`CMake`进行`C++`语言下的`OpenCV`开发。

后来转到`Python`语言开发`OpenCV`后我们继续采用`VS code`进行相关开发，当然也有成员使用`Pycharm`开发。

得益于`VS code`强大的插件生态，甚至可以使用`Platform IO`插件进行单片机开发和调试。

本文章主要是带你安装和配置`VS code`进行`C/C++`开发。其他功能可以自行探索。

## 安装过程

### 需要下载的东西

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

:::: danger
<!-- ![](/assets/pics/vscode/msys2-shell-0.png =x300) -->
> 这边需要修改图片
::::

::: warning
这个黑框框是==不能直接粘贴==的，需要右键，然后点击`Paste`，后面代码都不能直接用`ctrl+v`快捷键粘贴
:::

![](/assets/pics/vscode/msys2-shell-1.png =x300)

:::: danger
这边还没写完
::::

### VScode 基础安装

首先，打开安装软件，勾选`我同意此协议`，然后点击`下一步`

![](/assets/pics/vscode/vscode-install-1.png =x300)

这里选择安装位置，建议默认就好，然后点击`下一步`

![](/assets/pics/vscode/vscode-install-2.png =x300)

这里是开始菜单的名字，默认就好，然后点击`下一步`

![](/assets/pics/vscode/vscode-install-3.png =x300)

这边建议勾选下面四个，然后点击`下一步`

![](/assets/pics/vscode/vscode-install-4.png =x300)

然后点击`安装`

![](/assets/pics/vscode/vscode-install-5.png =x300)

然后点击`完成`就ok了

![](/assets/pics/vscode/vscode-install-6.png =x300)

下面是`VScode`第一次启动的页面，右下角过一小会会提示你安装中文语言包，很贴心吧

你可以看主页上的提示，默认有四种主题可选，`VScode`是可以定制主题的，远不止这几种配色哦

![](/assets/pics/vscode/vscode-install-7.png =x300)

点击了右下角的安装并重启后，我们可以点击左侧的插件按钮，打开插件侧边栏。

不小心关掉了提示也没关系，后面会教你手动安装中文语言包

![](/assets/pics/vscode/vscode-install-8.png =x300)

### VSCode 插件安装

vscode本身几乎不包含任何功能，它的强大体现在插件的丰富上。我们这边推荐你安装以下这些插件

C++ 插件推荐列表

|插件名称|作用|备注|
| --- | --- | --- |
|[C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)|C/C++语法提示，调试等||
|[C/C++ Themes](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools-themes)|C++主题||
|[Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans)|汉化包|需要重启vscode生效|
|[CMake](https://marketplace.visualstudio.com/items?itemName=twxs.cmake)|CMake工具||
|[CMake Tools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools)|CMake工具||
|[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)|Markdown预览工具|打开方式有ctrl+shift+P搜索markdown或者先按ctrl+k松手再按v,注意vscode底部会有提示|
|[Workspace Sidebar](https://marketplace.visualstudio.com/items?itemName=sketchbuch.vsc-workspace-sidebar)|快速切换工作区|看[这边的配置](/guide/guide-how-to-install-vscode.html#workspace-sidebar-工作区侧边栏插件)|
|[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)|一键运行代码|看[这边的配置](/guide/guide-how-to-install-vscode.html#code-runner-插件)|
|[Doxygen Documentation Generator](https://marketplace.visualstudio.com/items?itemName=cschlosser.doxdocgen)|生成代码注释的小工具|自行百度如何使用|
|[vscode-icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons)|图标美化||
|[Better C++ Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-cpp-syntax)|不知道干啥的，装一下||

上面的表格里列出了一些写C++用得到的插件和简要描述，有些可以自行选择安装

直接点击表格里的链接，会跳转一个网页，点击一下`Install`按钮，就可以唤起VScode跳转到插件安装页面了

出现下面的弹窗点击`Continue`

![](/assets/pics/vscode/vscode-install-9.png =x300)

然后浏览器上方的弹窗记得允许打开`VScode`哦，这里是用edge浏览器演示的，其他浏览器可能会有所不同

![](/assets/pics/vscode/vscode-install-10.png =x300)

`VScode`会弹出相应插件的页面，然后点击`安装`就可以了

![](/assets/pics/vscode/vscode-install-12.png =x300)

这是安装完的插件列表，你也可以手动搜索相应的插件，或者安装你喜欢的插件哦。

![](/assets/pics/vscode/vscode-install-11.png =x300)

## VScode 使用方法

这边教你如何从网上克隆一个仓库，然后编译运行

前面你已经安装好了`Git`，你可以直接使用VScode里集成的Git图形化界面，不需要记住复杂的命令

点击左上角`文件` - `新建窗口`

`VScode`会提示你克隆一个仓库或者打开一个文件夹

这边我们选择克隆仓库，上方会弹出一个窗口，我们可以选择从github账户克隆，也可以直接粘贴仓库地址

我们这边使用第二种方法，直接粘贴仓库地址然后敲击回车

`https://gitlab.dustella.net/discodyer/nytd-cpp-class-student-score.git`

![](/assets/pics/vscode/vscode-use-1.png =x300)

弹出的窗口是存放克隆的仓库的位置，可以创建一个专案文件夹，比如`Projects`，专门放各自仓库。但由于项目类型的不同，最好不要有中文的目录。比如Python程序对中文不敏感，但是C或者其他语言就可能会有问题。

这边就选择桌面作为存放的位置

![](/assets/pics/vscode/vscode-use-2.png =x300)

弹出的窗口会询问你是否信任此文件夹，是为了安全考虑，默认会禁用插件。如果你信得过仓库内容的话,就信任文件夹吧。

![](/assets/pics/vscode/vscode-use-3.png =x300)

右下角的提示是来自`CMake Tools`扩展的提示，询问你是否配置当前工程，根据你自己的情况来选择。

![](/assets/pics/vscode/vscode-use-4.png =x300)

右上角的这个按钮是打开一个实时预览`markdown`文件的窗口，挺有用的。

![](/assets/pics/vscode/vscode-use-5.png =x300)

我们点击下方的这个位置，会提示我们找一个编译器，先点击一下`[Scan for kits]`找一下我们系统里存在的编译器，我们这里就选择前面通过`msys2`安装的`GNU GCC`编译器。

![](/assets/pics/vscode/vscode-use-6.png =x300)

然后会让你选择编译的选项，我们开发时期可以选择使用`Debug`模式，方便我们的调试。等程序需要发布的时候，或者有其他需要的时候，可以使用`Release`模式编译

![](/assets/pics/vscode/vscode-use-7.png =x300)

然后点击下方的`Build`或者`▷`编译运行我们的工程

## 插件配置补充说明

### Workspace Sidebar 工作区侧边栏插件

这个插件用于快速切换工作区，在VScode中，工作区是可以保存成一个单独的文件的。工作区是用于记录你当前窗口的所有状态的一个文件。

这个插件是用来快速切换不同的工作区，让你事半功倍哦

当然，也可以通过`文件` - `打开最近的文件`或者`文件` - `从文件打开工作区`代替该插件的功能

这个插件需要设置一个`workspace文件夹`，用于存放你的工作区，插件会列出该文件夹下存放的所有工作区文件。

这边建议在`Onedrive`中创建这个文件夹，这样可以通过`Onedrive`同步你的工作区，很有用哦

打开`VScode`的`文件` - `首选项` - `设置`，或者使用快捷键`Ctrl+,`快速打开设置

搜索`workspaceSidebar.folder`，然后填上你设置的`workspace文件夹`

这时候，你每次打开一个工程，切换到这个插件的侧边栏的时候，都会提示你`Save as new Workspace`

你点击一下，然后选择保存到你设置的`workspace文件夹`中，下次就能快速切换过去了

### Code runner 插件

这个插件可以快速运行代码，通过插件侧边栏，搜索`formulahendry.code-runner`

打开`VScode`的`文件` - `首选项` - `设置`，或者使用快捷键`Ctrl+,`快速打开设置

搜索`code-runner.runInTerminal`,将这一项打上勾就行

然后你就可以使用编辑窗口右上角的`▷`按钮快速运行了，或者使用快捷键

运行文件:

- 使用快捷键 `Ctrl+Alt+N`
- 或者按 `F1` 然后选择/输入 `Run Code`
- 或者右键文本编辑窗口然后点击 `Run Code`
- 或者在文本编辑窗口的标题栏侧边点击`▷`按钮
- 或者在文件浏览侧边栏右键文件，然后点击 `Run Code`

停止运行文件:

- 使用快捷键 `Ctrl+Alt+M`
- 或者按 `F1` 然后选择/输入 `Stop Code Run`
- 或者在文本编辑窗口的标题栏侧边点击 `Stop Code Run` 按钮
- 或右键单击输出通道，然后单击上下文菜单中的停止代码运行
