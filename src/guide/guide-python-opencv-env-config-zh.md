---
title: 中文用户名conda安装配置方法
icon: info
category:
- 教程
---

[[toc]]

## 需要了解的知识

[前置知识](intro-preknowledge)
<!-- 
[CV文档(没建好)]()

[如何搭建单片机编译环境(MDK)(没建好)]() -->

[【视频】关于Python、anaconda、pycharm、opencv的概念](https://cloud.lwqwq.com/s/vdoUQ/video?name=%E5%AD%A6%E9%95%BF%E8%AE%B2python%EF%BC%8Cpycharm%EF%BC%8Copencv%E6%A6%82%E5%BF%B5%E8%AE%B2%E8%A7%A3_x264.mp4&share_path=%2F%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90%2F%E5%AD%A6%E9%95%BF%E8%AE%B2python%EF%BC%8Cpycharm%EF%BC%8Copencv%E6%A6%82%E5%BF%B5%E8%AE%B2%E8%A7%A3_x264.mp4)

[【视频】如何搭建Python-OpenCV环境](https://cloud.lwqwq.com/s/vdoUQ/video?name=opencv%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95_x264.mp4&share_path=%2F%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90%2Fopencv%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95_x264.mp4)

## 中文用户名安装和配置conda

### 中文用户名安装anaconda

我们需要安装`Anaconda3`。前往[Anaconda的官网](https://www.anaconda.com/)下载安装包

![Anaconda 官网下载](/assets/pics/Anaconda-official-site.png =x300)

然后打开安装软件，点击`Next`

![Anaconda 官网下载](/assets/pics/Anaconda-install-1.png =x300)

点击`I Agree`

![Anaconda 官网下载](/assets/pics/Anaconda-install-2.png =x300)

这边请选择`Just me`仅为当前用户安装

![Anaconda 官网下载](/assets/pics/Anaconda-install-3.png =x300)

==必须选择一个不含中文的路径==

![](/assets/pics/Anaconda-install-5.png =x300)

2.配置conda环境变量，==按照你conda安装的位置来==

比如你安装在`D:\anaconda3\`则需要添加的path有下面四条

```commandline
D:\anaconda3\
D:\anaconda3\Scripts
D:\anaconda3\Library\bin
D:\anaconda3\Library\mingw-w64
```

什么？你说你不会设置环境变量？那就参考这个文章吧：[如何设置系统环境变量](guide-how-to-set-path-win)

2.然后需要开启Powershell运行PS脚本的限制

这边需要==选择你的系统版本==，windows10和windows11略有不同

::: tabs#OS

@tab win10#win10

按下`windows徽标键+R`组合键，在弹出的输入框内输入`powershell`，然后同时按下`Ctrl+Shift+回车`三个键，会弹出一个提示，点`是`就行

然后在黑窗口内输入下面的一行命令并回车

```commandline
set-executionpolicy remotesigned
```

会出现下面的信息

```commandline
执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”):
```

然后输入大写的`Y`，敲击回车

继续在powershell里输入

```commandline
Get-ExecutionPolicy
```

如果显示的是 `RemoteSigned`说明设置成功了

@tab win11#win11

按下`windows徽标键+R`组合键，在弹出的输入框内输入`wt`，然后同时按下`Ctrl+Shift+回车`三个键，会弹出一个提示，点`是`就行

然后在黑窗口内输入下面的一行命令并回车

```commandline
set-executionpolicy remotesigned
```

继续在powershell里输入

```commandline
Get-ExecutionPolicy
```

如果显示的是 `RemoteSigned`说明设置成功了

:::

3.接下来需要初始化conda环境

按下`windows徽标键+R`组合键，win10系统在弹出的输入框内输入`powershell`，win11系统输入`wt`，然后同时按下`Ctrl+Shift+回车`三个键，会弹出一个提示，点`是`就行

然后在黑窗口内输入下面的一行命令并回车

```commandline
conda init powershell
```

可能会出现这样的错误

![](/assets/pics/anaconda-zh-5.jpg =x300)

::: info

如果你的输出左侧显示need sudo，请参考[这边](/faq.md#conda-init-need-sudo)

:::

如果你的输出和这边一样，左侧显示的是no change和modified，并且最后一行用户名显示的是乱码，那就可以继续了

![](/assets/pics/anaconda-zh-3.jpg =x300)

还记得乱码的目录么，是确确实实创建了的，你找到那个位置，打开，里面会有一个文件夹

![](/assets/pics/anaconda-zh-11.jpg =x300)

把里面的documents文件夹直接复制到你的中文用户名文件夹下

![](/assets/pics/anaconda-zh-2.jpg =x300)

然后重新打开powershell窗口应该就正常了

![Conda base](/assets/pics/ps-conda-base.png =x250)

::: tip
到这边你已经完成了conda环境的初始化
:::

### 中文用户名配置conda环境

同时按下`windows徽标键`+`R`，在左下角弹出界面输入框内输入`powershell`

在powershell中输入`conda config --set show_channel_urls yes`

同时按下`windows徽标键`+`R`

在左下角弹出的窗口内输入`notepad %HOMEPATH%\.condarc`然后点击确定

在弹出的记事本中所有的文字删除，并以下面的文字替代

```text
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  menpo: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
envs_dirs:
  - D:\anaconda3\envs
pkgs_dirs:
  - D:\anaconda3\pkgs
```

主要是修改默认的环境安装位置和软件包缓存位置，要换成一个没有中文的目录（默认是用户目录下的所以会乱码）

就是最后两项，改成安装目录下的位置或者其他位置，需要确保用户有文件夹的读写权限

然后按`Ctrl`+`S`保存修改

首先创建一个conda环境,`<conda环境名称>`可以自定义，后面的python版本也可以自定义

```commandline
conda create -n <conda环境名称> python=<python版本>
```

比如我想创建一个环境名称是`opencv`，python版本是3.10的虚拟环境，我就输入

```commandline
conda create -n opencv python=3.10
```

安装环境的时候会提示是否确认安装，按照提示输入y并回车就可以了

接下来进入`opencv`环境

```commandline
conda activate opencv
```

这个时候你的终端最左侧应该会从`(base)`变成`(opencv)`或者`<conda环境名称>`

![](/assets/pics/ps-conda-opencv.png =x300)

配置完了以后，从这边继续 -> [配置IDE](/guide/guide-python-opencv-env-config.md#配置ide)
