---
title: Python Opencv 环境搭建
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

## 0. 安装python，并正确配置和安装环境

### 1. 安装和配置conda

我们需要安装`Anaconda3`。前往[Anaconda的官网](https://www.anaconda.com/)下载安装包

![Anaconda 官网下载](/assets/pics/Anaconda-official-site.png =x300)

::: details 过时的内容

1. 首先安装Python和Anaconda，参照上面的视频[如何搭建Python-OpenCV环境](https://cloud.lwqwq.com/s/vdoUQ/video?name=opencv%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95_x264.mp4&share_path=%2F%E8%A7%86%E9%A2%91%E8%B5%84%E6%BA%90%2Fopencv%E9%85%8D%E7%BD%AE%E6%96%B9%E6%B3%95_x264.mp4)

:::

1.配置conda环境变量，按照你conda安装的位置来，比如你安装在`D:\anaconda3\`则需要添加的path有下面四条

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

**右键**`开始菜单按钮`，点击`Windows PowerShell(管理员)(A)`

![](/assets/pics/win10-right-click.png =x300)

然后输入

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

**右键**`开始菜单按钮`，点击`Windows终端(管理员)`

![](/assets/pics/win11-right-click.jpg =x300)

然后输入

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

在上一步的powershell中，或者是新开的一个普通powershell中输入

```commandline
conda init powershell
```

然后关闭powershell

再次打开powershell的时候如果出现这个就说明你初始化成功了

![Conda base](/assets/pics/ps-conda-base.png =x250)

::: tip
到这边你已经完成了conda环境的初始化
:::

### 2. 配置conda环境

首先创建一个conda环境,`<你的conda环境名称>`可以自定义，我这边是`opencv`,后面的python版本我选择的是3.10,conda会自动搜索3.10最新版本

```commandline
conda create -n <你的conda环境名称> python=3.10
```

::: tip
如果遇到conda下载速度慢，请查看下面
:::

::: details conda下载速度慢的解决方法

有两种方法

1.如果你有代理服务器，在终端中输入

```commandline
$Env:http_proxy="http://127.0.0.1:7893";$Env:https_proxy="http://127.0.0.1:7893"
#改成你自己的端口号
```

2.如果你没有代理服务器，可以使用conda镜像

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
```

然后按`Ctrl`+`S`保存修改

:::

安装环境的时候可能会提示是否安装，按照提示输入y就可以了

接下来进入`opencv`环境

```commandline
conda activate <你的conda环境名称>
```

这个时候你的终端最左侧应该会从`(base)`变成`(opencv)`或者`<你的conda环境名称>`

![](/assets/pics/ps-conda-opencv.png =x300)

## 1. 克隆仓库

哦，你或许需要先配置一下git，自己去b站搜教程吧，我就不多讲了

拿着[这个](https://www.runoob.com/git/git-tutorial.html)吧，可以当作cheatsheet

## 2. 配置你的IDE

### Pycharm 配置

首先，我们安装的是社区版的Pycharm，当然你有专业版也没问题

然后看这个教程设置中文[[知乎]如何安装pycharm并设置为中文。](https://zhuanlan.zhihu.com/p/454935826)

然后点击左上方`文件-打开`，定位到`little-quadcopter`文件夹，点击**确定**

这个时候你已经打开了整个项目，main.py是整个程序的入口

点击下方的**终端**按钮，会打开一个熟悉的powershell窗口，输入 `conda activate <你的conda环境名称>` 来进入前面配置好的conda环境

接下来cd到项目文件夹，在终端输入`python .\setup.py`并回车运行，初始化环境

默认使用tuna镜像源下载，如果你有代理服务器可以加上代理服务器地址，例如`python .\setup.py --proxy http://127.0.0.1:7890`

这就准备完了，输入`python .\main.py -h` 查看帮助

### VS Code 配置方法

首先打开项目文件夹，然后右下角会提示安装推荐插件，就全部安装就行，插件的配置前面视频里有讲

然后按`ctrl`+`shift`+`p`调出命令窗口，输入`python`,选择python解释器一项，选择你自己配置的环境

然后点击上方终端，新建终端，会自动帮你激活你的conda环境

接下来cd到项目文件夹，在终端输入`python .\setup.py`并回车运行，初始化环境

默认使用tuna镜像源下载，如果你有代理服务器可以加上代理服务器地址，例如`python .\setup.py --proxy http://127.0.0.1:7890`

这就准备完了，输入`python .\main.py -h` 查看帮助
