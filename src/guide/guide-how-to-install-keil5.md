---
title: Keil MDK5 安装破解教程
icon: info
category:
 - 教程
---

[[toc]]

## 下载

::: info
少数有超能力的同学可以尝试从官网下载，其他同学请使用国内备用下载。`国内备用下载1`使用又拍云存储。`国内备用下载2`使用Onedrive世纪互联存储。
:::

- [Keil MDK 5.37 官网下载](https://armkeil.blob.core.windows.net/eval/MDK537.EXE)
- [Keil MDK 5.37 国内备用下载1](https://nas.dustella.net/s/MBFW)
- [Keil MDK 5.29 国内备用下载1](https://nas.dustella.net/s/9Bi1)
- [Keil MDK 5.25 国内备用下载1](https://nas.dustella.net/s/8KUL)
- [Keil MDK 5.23 国内备用下载1](https://nas.dustella.net/s/p2sg)

> Keil下载其他版本只需要把链接`https://armkeil.blob.core.windows.net/eval/MDK537.EXE`最后的三个数字改成你想要的版本就行

- [Keil MDK 注册机 国内备用下载1](https://nas.dustella.net/s/qlT3)

下面是`STM32CubeMX`和`STM32CubeIDE`的下载链接，==注意需要先安装`Java`运行环境==

- [Java SE 11.0.17 官网下载](https://www.oracle.com/cn/java/technologies/downloads/#java11-windows) [Java SE 11.0.17 国内备用下载1](https://nas.dustella.net/s/QghZ)
- [STM32CubeMX 官网下载](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-configurators-and-code-generators/stm32cubemx.html#get-software) [STM32CubeMX v6.6.1 国内备用下载1](https://nas.dustella.net/s/brHg)
- [STM32CubeIDE 官网下载](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-ides/stm32cubeide.html#overview) [STM32CubeIDE v1.10.1 国内备用下载1](https://nas.dustella.net/s/jgVSL)

下面是几个可能用得到的设备驱动程序，用得到的话需要安装对应的驱动程序

- [CH340 驱动 官网下载](http://www.wch-ic.com/downloads/CH341SER_EXE.html) [CH340 驱动 国内备用下载1](https://nas.dustella.net/s/B8dIO)

- [STLink V2 驱动 官网下载](https://www.st.com/zh/development-tools/st-link-v2.html#tools-software) [STLink V2 驱动 国内备用下载1](https://nas.dustella.net/s/NMCe)

- [Jlink 驱动 官网下载](https://www.segger.com/downloads/jlink) [Jlink 驱动 V7.82a 国内备用下载1](https://nas.dustella.net/s/lNNc0)

下面是之前从不知道哪边得到的资料包，好像是从淘宝商家那边下载的，没啥用，有需要的自己下载

- [STM32F103RCT6 资料包 国内备用下载2](https://81.70.244.182/s/Lb3sq)

## 安装教程

### 安装之前的环境准备

首先你电脑里至少需要一种解压缩软件，如果你不知道的话，请看这个文章

[解压缩软件安装教程](/guide/guide-how-to-install-7-zip.md)

安装STM32CubeMX之前需要先安装Java运行时环境。因为STM32CubeMX是使用Java编写的软件，所以需要先装Java

首先下载Java [Java SE 11.0.17 官网下载](https://www.oracle.com/cn/java/technologies/downloads/#java11-windows) [Java SE 11.0.17 国内备用下载1](https://nas.dustella.net/s/QghZ)

点击下一步开始安装

![](/assets/pics/java11-install-1.png =x300)

这边可以选择你安装的位置，点击下一步

![](/assets/pics/java11-install-2.png =x300)

安装完成以后点击关闭就行

![](/assets/pics/java11-install-3.png =x300)

### 安装 Keil MDK 5

首先打开安装文件，这边以5.37版本为例，其他版本的安装破解流程基本一致

点击`Next>>`

![](/assets/pics/keil5-install-1.png =x300)

勾选`I agree to all ...`，点击`Next>>`

![](/assets/pics/keil5-install-2.png =x300)

这边是选择安装位置的，上面的是Keil本身安装的位置，下面的是对应的开发板的开发套件的安装位置，设置好以后点击`Next>>`

![](/assets/pics/keil5-install-3.png =x300)

这边的信息请随意填写，点击`Next>>`

![](/assets/pics/keil5-install-4.png =x300)

接下来的安装过程中可能会弹出类似的驱动软件安装窗口好几次，请一律同意安装

![](/assets/pics/keil5-install-5.png =x300)

安装结束后点击`Fnish`退出

![](/assets/pics/keil5-install-6.png =x300)

第一次运行会弹出这样一个窗口，点击一下`OK`，然后等待下方的进度条下载索引文件，如果太慢或者卡住说明你网络不好，请用实验室的网络

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/keil5-install-7.png" />
  <img src="/assets/pics/keil5-install-8.png" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

索引下载完成以后就可以关闭这个窗口了

### 注册 Keil MDK 5

右键桌面上的`Keil uVision`，以管理员身份运行

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/keil5-install-9.png" />
  <img src="/assets/pics/keil5-install-10.png" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

::: warning
确保关闭电脑上的杀毒软件
:::

打开 `File` - `License Management...`

![](/assets/pics/keil5-install-11.png =x300)

选中CID，然后右键复制

![](/assets/pics/keil5-install-12.png =x300)

打开`Keil注册机.zip`压缩包内的`keygen.exe`

::: warning
注册机是用来破解的软件，注意这个软件可能会被杀毒软件查杀，如果杀毒软件有提示请放行。==这个软件有点吵，戴耳机的同学注意一下==
:::

![](/assets/pics/keil5-install-13.png =x300)

然后将刚刚复制的CID粘贴到1位置，在2位置的下拉菜单里选择ARM，然后在3位置的下拉选单里选择`Prof.Developers Kit (Plus)`，然后点击4位置的`Generate`，然后复制5位置的一串密码

![](/assets/pics/keil5-install-14.png =x300)

然后回到刚刚Keil的证书界面，请确保你已经以管理员身份运行

将刚刚复制的密码粘贴到1位置，然后点击2位置的`Add LIC`，确认箭头部分显示的是`***LIC Added Successfully***`，然后上面的列表会有一行刚刚添加的证书，然后点击3位置的`Close`关闭界面

![](/assets/pics/keil5-install-15.png =x300)

至此，Keil的安装破解已经完成

### 安装 STM32CubeMX

首先需要按照[这边的步骤](/guide/guide-how-to-install-keil5.md#安装之前的环境准备)安装好Java运行时环境

解压并双击打开安装程序，等待安装程序自解压完成

![extract](/assets/pics/cubemx-install-1.png)

点击`Next`开始安装

![](/assets/pics/cubemx-install-2.png =x300)

勾选`I accept the...`，点击`Next`

![](/assets/pics/cubemx-install-3.png =x300)

勾选`I have read and understand...`，点击`Next`

![](/assets/pics/cubemx-install-4.png =x300)

选择安装位置，点击`Next`

![](/assets/pics/cubemx-install-5.png =x300)

点击`Next`

![](/assets/pics/cubemx-install-6.png =x300)

等待安装完成，点击`Next`

![](/assets/pics/cubemx-install-7.png =x300)

点击`Done`

![](/assets/pics/cubemx-install-8.png =x300)

然后`STM32CubeMX`就安装完成了

### 安装驱动程序

下面是几个可能用得到的设备驱动程序，用得到的话需要安装对应的驱动程序

下面是 `CH340 USB 转 TTL` 模块

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/ch340-front.jpg" />
  <img src="/assets/pics/ch340-back.jpg" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

- [CH340 驱动 官网下载](http://www.wch-ic.com/downloads/CH341SER_EXE.html) [CH340 驱动 国内备用下载1](https://nas.dustella.net/s/B8dIO)

::: tip

大家买的 `STM32F103RCT6` 有些是内置 `CH340 USB 转 TTL` 芯片的，比如图中这款，也需要安装这个驱动

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/stm32f103rct6-front.jpg" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

:::

下面是ST Link V2 仿真器的样子

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/stlinkv2-front.jpg" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

- [STLink V2 驱动 官网下载](https://www.st.com/zh/development-tools/st-link-v2.html#tools-software) [STLink V2 驱动 国内备用下载1](https://nas.dustella.net/s/NMCe)

还有一种 `DAP Link` 仿真器，这种是免驱动的

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/daplink-front.jpg" />
  <img src="/assets/pics/daplink-back.jpg" />
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
      width: 100% !important;
    }
  }

  @media (max-width: 419px){
    .image-preview > img {
      width: 100% !important;
    }
  }
</style>

<!-- markdownlint-restore -->

下面是Jlink仿真器的驱动，如果你有的话也需要安装驱动

- [Jlink 驱动 官网下载](https://www.segger.com/downloads/jlink) [Jlink 驱动 V7.82a 国内备用下载1](https://nas.dustella.net/s/lNNc0)