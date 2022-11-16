---
title: 常见问题
icon: question
category:
  - FAQ
---

## `conda init : need sudo`

输入下面的一行命令

```commandline
conda init powershell
```

可能会出现这样的错误

![](/assets/pics/anaconda-zh-5.jpg =x300)

::: info 可能的原因

当前用户无权限访问anaconda安装目录

:::

::: details 解决方法

找到你安装的文件夹，右键文件夹，打开属性页面

![](/assets/pics/anaconda-zh-1.jpg =x300)

切换到安全选项卡，选中Users，点击编辑

![](/assets/pics/Anaconda-install-6.png =x300)

选中Users，点击完全控制，确定

![](/assets/pics/anaconda-zh-10.jpg =x300)

然后再重新执行一次`conda init powershell`

:::

## command `pnpm install` failed

相关Issue：[Github Issue](https://github.com/npm/cli/issues/1201)

解决方法：

换一个硬盘克隆并运行仓库，貌似是因为 exfat 文件系统不支持符号链接导致的问题

## `无法将“xxx”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。`

如果你添加了相应软件的path但还是不能执行，请检查你是否已经确认并关闭了path设置窗口。

或请尝试重新开启当时的`命令行窗口`/`IDE`，如果还是没有生效，请重启后再次尝试

或请检查path路径是否拼写正确

## 无法克隆仓库

如果仓库是GitHub上的，很正常

或请检查是否有仓库的访问权限
