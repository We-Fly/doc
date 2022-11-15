---
title: Visual Studio Code 安装配置
icon: info
category:
 - 教程
---

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
<!-- - [CMake官网下载【最新】](https://cmake.org/download/) [CMake 3.25.0-rc3 国内备用下载](https://nas.dustella.net/s/RqIZ) -->
- [msys2官网下载【最新】](https://www.msys2.org/) [msys2 Tuna镜像下载](https://mirrors.tuna.tsinghua.edu.cn/msys2/distrib/x86_64/)

::: details msys2 Tuna镜像下载提示
请访问该镜像目录，翻到最下面，找到名为 `msys2-x86_64-<日期>.exe` 的文件（如 `msys2-x86_64-20221028.exe`），下载安装即可。
:::

<!-- markdownlint-disable -->

<div class="image-preview">
  <img src="/assets/pics/vscode-download.png" />
  <img src="/assets/pics/git-download.png" />
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
     width: 33.3% !important;
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

然后根据网上的教程配置你的Git账号和邮箱，也可以自己研究如何SSH登录等等

<!-- ### CMake 安装步骤

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

::: -->

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

参考[这个文章](/guide/guide-how-to-set-path-win)，**修改环境变量**，添加一条`C:\msys64\mingw64\bin`如果你修改过安装位置需要修改成对应的位置

在`开始菜单`中找到`MSYS2`文件夹，然后点击`MSYS2 MINGW64`

![](/assets/pics/vscode/msys2-shell-0.png =x300)

::: warning
这个黑框框是==不能直接粘贴==的，需要右键，然后点击`Paste`，后面代码都不能直接用`ctrl+v`快捷键粘贴
:::

然后是换源，请参考[Tuna - MSYS2 镜像使用帮助](https://mirror.tuna.tsinghua.edu.cn/help/msys2/)

直接在 `MSYS2 MINGW64` 黑窗口内执行一行命令

```bash
sed -i "s#mirror.msys2.org/#mirrors.tuna.tsinghua.edu.cn/msys2/#g" /etc/pacman.d/mirrorlist*
```

![](/assets/pics/vscode/msys2-shell-1.png =x300)

然后在黑框框里输入`pacman -Syu`更新一下系统

中途会卡住，问你 `:: Proceed with installation? [Y/n]` 是提示你是否继续，直接按回车就行

::: details 黑框框应该会有类似的输出

```bash
Dustella@DESKTOP-VMFH9JG MINGW64 ~ 
# pacman -Syu
:: Synchronizing package databases...
 mingw32                        1732.9 KiB   622 KiB/s 00:03 [###############################] 100%
 mingw64                        1747.5 KiB   545 KiB/s 00:03 [###############################] 100%
 ucrt64                         1796.2 KiB   625 KiB/s 00:03 [###############################] 100%
 clang32                        1676.0 KiB   431 KiB/s 00:04 [###############################] 100%
 clang64                        1736.6 KiB   664 KiB/s 00:03 [###############################] 100%
 msys                            409.0 KiB   251 KiB/s 00:02 [###############################] 100%

:: Starting core system upgrade...
warning: terminate other MSYS2 programs before proceeding
resolving dependencies...
looking for conflicting packages...

Packages (2) filesystem-2022.01-6  pacman-6.0.1-24

Total Download Size:    5.62 MiB
Total Installed Size:  33.00 MiB
Net Upgrade Size:       0.16 MiB

:: Proceed with installation? [Y/n]
:: Retrieving packages...
 filesystem-2022.01-6-x86_64     107.7 KiB   139 KiB/s 00:01 [###############################] 100%
 pacman-6.0.1-24-x86_64            5.5 MiB  3.26 MiB/s 00:02 [###############################] 100%
 Total (2/2)                       5.6 MiB  3.24 MiB/s 00:02 [###############################] 100%
(2/2) checking keys in keyring                               [###############################] 100%
(2/2) checking package integrity                             [###############################] 100%
(2/2) loading package files                                  [###############################] 100%
(2/2) checking for file conflicts                            [###############################] 100%
(2/2) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/2) upgrading filesystem                                   [###############################] 100%
(2/2) upgrading pacman                                       [###############################] 100%
:: To complete this update all MSYS2 processes including this terminal will be closed. Confirm to proceed [Y/n]
```

:::

最后会有提示你会关闭窗口`:: To complete this update all MSYS2 processes including this terminal will be closed. Confirm to proceed [Y/n]`

直接回车确认就好

然后再次打开`MSYS2 MINGW64`窗口

输入`pacman -Syyu`

::: details 黑框框应该会有类似的输出

```bash
Dustella@DESKTOP-VMFH9JG MINGW64 ~
# pacman -Syyu
:: Synchronizing package databases...
 mingw32                        1732.9 KiB  1017 KiB/s 00:02 [###############################] 100%
 mingw64                        1747.5 KiB   746 KiB/s 00:02 [###############################] 100%
 ucrt64                         1796.2 KiB   361 KiB/s 00:05 [###############################] 100%
 clang32                        1676.0 KiB   471 KiB/s 00:04 [###############################] 100%
 clang64                        1736.6 KiB   663 KiB/s 00:03 [###############################] 100%
 msys                            409.0 KiB   611 KiB/s 00:01 [###############################] 100%
:: Starting core system upgrade...
 there is nothing to do
:: Starting full system upgrade...
resolving dependencies...
looking for conflicting packages...

Packages (5) libopenssl-1.1.1.s-1  libreadline-8.2.001-1  openssl-1.1.1.s-1  tzcode-2022f-1
             zlib-1.2.13-1

Total Download Size:   2.37 MiB
Total Installed Size:  5.86 MiB
Net Upgrade Size:      0.02 MiB

:: Proceed with installation? [Y/n]
:: Retrieving packages...
 libopenssl-1.1.1.s-1-x86_64    1200.5 KiB  1459 KiB/s 00:01 [###############################] 100%
 zlib-1.2.13-1-x86_64             49.4 KiB  50.6 KiB/s 00:01 [###############################] 100%
 openssl-1.1.1.s-1-x86_64        595.4 KiB   442 KiB/s 00:01 [###############################] 100%
 libreadline-8.2.001-1-x86_64    291.8 KiB   196 KiB/s 00:01 [###############################] 100%
 tzcode-2022f-1-x86_64           285.1 KiB   168 KiB/s 00:02 [###############################] 100%
 Total (5/5)                       2.4 MiB   934 KiB/s 00:03 [###############################] 100%
(5/5) checking keys in keyring                               [###############################] 100%
(5/5) checking package integrity                             [###############################] 100%
(5/5) loading package files                                  [###############################] 100%
(5/5) checking for file conflicts                            [###############################] 100%
(5/5) checking available disk space                          [###############################] 100%
:: Processing package changes...
(1/5) upgrading zlib                                         [###############################] 100%
(2/5) upgrading libopenssl                                   [###############################] 100%
(3/5) upgrading libreadline                                  [###############################] 100%
(4/5) upgrading openssl                                      [###############################] 100%
(5/5) upgrading tzcode                                       [###############################] 100%
:: Running post-transaction hooks...
(1/1) Updating the info directory file...
```

:::

这样就可以了

如果期间有错误什么的，确认一下你之前换源的时候，有没有添加到第一行

然后安装`MINGW工具链`

输入

```bash
pacman -S --needed base-devel mingw-w64-x86_64-toolchain mingw64/mingw-w64-x86_64-cmake mingw64/mingw-w64-x86_64-ninja
```

会安装整个工具链，也可以根据自己的需要自行选择

根据网络和电脑配置，这个过程会持续5~10分钟

::: details 黑框框应该会有类似的输出

```bash
Dustella@DESKTOP-VMFH9JG MINGW64 ~
# pacman -S --needed base-devel mingw-w64-x86_64-toolchain mingw64/mingw-w64-x86_64-cmake mingw64/mingw-w64-x86_64-ninja
:: There are 19 members in group mingw-w64-x86_64-toolchain:
:: Repository mingw64
   1) mingw-w64-x86_64-binutils  2) mingw-w64-x86_64-crt-git  3) mingw-w64-x86_64-gcc
   4) mingw-w64-x86_64-gcc-ada  5) mingw-w64-x86_64-gcc-fortran
   6) mingw-w64-x86_64-gcc-libgfortran  7) mingw-w64-x86_64-gcc-libs  8) mingw-w64-x86_64-gcc-objc
   9) mingw-w64-x86_64-gdb  10) mingw-w64-x86_64-gdb-multiarch  11) mingw-w64-x86_64-headers-git
   12) mingw-w64-x86_64-libgccjit  13) mingw-w64-x86_64-libmangle-git
   14) mingw-w64-x86_64-libwinpthread-git  15) mingw-w64-x86_64-make  16) mingw-w64-x86_64-pkgconf
   17) mingw-w64-x86_64-tools-git  18) mingw-w64-x86_64-winpthreads-git
   19) mingw-w64-x86_64-winstorecompat-git

Enter a selection (default=all):
resolving dependencies...
looking for conflicting packages...

Packages (79) binutils-2.39-2  bison-3.8.2-3  diffstat-1.65-1  diffutils-3.8-3  dos2unix-7.4.3-1
              flex-2.6.4-2  gperf-3.1-4  groff-1.22.4-3  m4-1.4.19-2  make-4.3-3
              mingw-w64-x86_64-brotli-1.0.9-5  mingw-w64-x86_64-bzip2-1.0.8-2
              mingw-w64-x86_64-c-ares-1.18.1-1  mingw-w64-x86_64-ca-certificates-20211016-3
              mingw-w64-x86_64-curl-7.86.0-5  mingw-w64-x86_64-expat-2.5.0-1
              mingw-w64-x86_64-gettext-0.21-3  mingw-w64-x86_64-gmp-6.2.1-3
              mingw-w64-x86_64-isl-0.25-1  mingw-w64-x86_64-jsoncpp-1.9.5-1
              mingw-w64-x86_64-libarchive-3.6.1-2  mingw-w64-x86_64-libb2-0.98.1-2
              mingw-w64-x86_64-libffi-3.4.4-1  mingw-w64-x86_64-libiconv-1.17-1
              mingw-w64-x86_64-libidn2-2.3.3-1  mingw-w64-x86_64-libpsl-0.21.1-4
              mingw-w64-x86_64-libssh2-1.10.0-1  mingw-w64-x86_64-libsystre-1.0.1-4
              mingw-w64-x86_64-libtasn1-4.19.0-1  mingw-w64-x86_64-libtre-git-r128.6fb7206-2
              mingw-w64-x86_64-libunistring-1.0-1  mingw-w64-x86_64-libuv-1.44.2-1
              mingw-w64-x86_64-lz4-1.9.4-1  mingw-w64-x86_64-mpc-1.2.1-1
              mingw-w64-x86_64-mpdecimal-2.5.1-1  mingw-w64-x86_64-mpfr-4.1.0.p13-1
              mingw-w64-x86_64-ncurses-6.3-5  mingw-w64-x86_64-nghttp2-1.50.0-3
              mingw-w64-x86_64-openssl-1.1.1.s-1  mingw-w64-x86_64-p11-kit-0.24.1-3
              mingw-w64-x86_64-python-3.10.8-2  mingw-w64-x86_64-readline-8.1.002-2
              mingw-w64-x86_64-rhash-1.4.3-1  mingw-w64-x86_64-sqlite3-3.39.2-1
              mingw-w64-x86_64-tcl-8.6.12-1  mingw-w64-x86_64-termcap-1.3.1-6
              mingw-w64-x86_64-tk-8.6.12-1  mingw-w64-x86_64-tzdata-2022e-1
              mingw-w64-x86_64-windows-default-manifest-6.4-4  mingw-w64-x86_64-xxhash-0.8.1-2
              mingw-w64-x86_64-xz-5.2.7-1  mingw-w64-x86_64-zlib-1.2.13-1
              mingw-w64-x86_64-zstd-1.5.2-2  patch-2.7.6-1  pkgconf-1.8.0-1  texinfo-6.8-6
              texinfo-tex-6.8-6  base-devel-2022.01-2  mingw-w64-x86_64-binutils-2.39-2
              mingw-w64-x86_64-cmake-3.24.3-1  mingw-w64-x86_64-crt-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-gcc-12.2.0-6  mingw-w64-x86_64-gcc-ada-12.2.0-6
              mingw-w64-x86_64-gcc-fortran-12.2.0-6  mingw-w64-x86_64-gcc-libgfortran-12.2.0-6
              mingw-w64-x86_64-gcc-libs-12.2.0-6  mingw-w64-x86_64-gcc-objc-12.2.0-6
              mingw-w64-x86_64-gdb-12.1-4  mingw-w64-x86_64-gdb-multiarch-12.1-4
              mingw-w64-x86_64-headers-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-libgccjit-12.2.0-6
              mingw-w64-x86_64-libmangle-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-libwinpthread-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-make-4.4-2  mingw-w64-x86_64-ninja-1.11.1-2
              mingw-w64-x86_64-pkgconf-1~1.8.0-2
              mingw-w64-x86_64-tools-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-winpthreads-git-10.0.0.r130.g13f9449c1-1
              mingw-w64-x86_64-winstorecompat-git-10.0.0.r130.g13f9449c1-1

Total Download Size:     59.75 MiB
Total Installed Size:  1166.88 MiB

:: Proceed with installation? [Y/n]
:: Retrieving packages...
 mingw-w64-x86_64-gcc-ada-12.2.0-6-any is up to date
 binutils-2.39-2-x86_64            5.2 MiB  2.33 MiB/s 00:02 [###############################] 100%
 mingw-w64-x86_64-gdb-12.1-...     4.3 MiB  3.44 MiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-gettext-0...     3.1 MiB  2.60 MiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-headers-g...     5.6 MiB  1208 KiB/s 00:05 [###############################] 100%
 mingw-w64-x86_64-crt-git-1...     3.3 MiB  1249 KiB/s 00:03 [###############################] 100%
 mingw-w64-x86_64-tcl-8.6.1...     2.6 MiB  1914 KiB/s 00:01 [###############################] 100%
 groff-1.22.4-3-x86_64          2023.3 KiB  2.09 MiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-tk-8.6.12...  1987.0 KiB  1255 KiB/s 00:02 [###############################] 100%
 mingw-w64-x86_64-sqlite3-3...  1433.3 KiB  1285 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-openssl-1...     4.8 MiB   611 KiB/s 00:08 [###############################] 100%
 mingw-w64-x86_64-ncurses-6...  1757.8 KiB   676 KiB/s 00:03 [###############################] 100%
 mingw-w64-x86_64-isl-0.25-...  1396.6 KiB  1162 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-curl-7.86...  1400.1 KiB   873 KiB/s 00:02 [###############################] 100%
 texinfo-6.8-6-x86_64           1206.8 KiB  1862 KiB/s 00:01 [###############################] 100%
 bison-3.8.2-3-x86_64            770.0 KiB  1450 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-gcc-libgf...   853.0 KiB   748 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libarchiv...   823.7 KiB   823 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-gcc-libs-...   876.7 KiB   475 KiB/s 00:02 [###############################] 100%
 mingw-w64-x86_64-libiconv-...   720.2 KiB   849 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libunistr...   754.0 KiB   497 KiB/s 00:02 [###############################] 100%
 make-4.3-3-x86_64               466.2 KiB  1302 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-zstd-1.5....   494.9 KiB   475 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-binutils-...     5.9 MiB   523 KiB/s 00:12 [###############################] 100%
 mingw-w64-x86_64-ninja-1.1...   449.2 KiB   435 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-readline-...   387.2 KiB   435 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-xz-5.2.7-...   433.2 KiB   360 KiB/s 00:01 [###############################] 100%
 dos2unix-7.4.3-1-x86_64         369.6 KiB  1181 KiB/s 00:00 [###############################] 100%
 diffutils-3.8-3-x86_64          362.2 KiB  1176 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-brotli-1....   385.4 KiB   353 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-ca-certif...   330.7 KiB   503 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-mpfr-4.1....   356.9 KiB   306 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-p11-kit-0...   345.2 KiB   349 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-mpdecimal...   321.9 KiB   360 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-gmp-6.2.1...   558.6 KiB   131 KiB/s 00:04 [###############################] 100%
 flex-2.6.4-2-x86_64             302.6 KiB   946 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-tools-git...   316.3 KiB   447 KiB/s 00:01 [###############################] 100%
 m4-1.4.19-2-x86_64              238.1 KiB   909 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libssh2-1...   255.0 KiB   355 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-jsoncpp-1...   228.6 KiB   342 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-rhash-1.4...   227.5 KiB   337 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-tzdata-20...   229.8 KiB   258 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-c-ares-1....   204.8 KiB   240 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-nghttp2-1...   200.8 KiB   340 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libtasn1-...   189.7 KiB   288 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libidn2-2...   163.0 KiB   289 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-expat-2.5...   155.8 KiB   249 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libuv-1.4...   192.0 KiB   179 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-lz4-1.9.4...   147.4 KiB   199 KiB/s 00:01 [###############################] 100%
 patch-2.7.6-1-x86_64            101.6 KiB   558 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-make-4.4-...   135.1 KiB   228 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-xxhash-0....   106.1 KiB   188 KiB/s 00:01 [###############################] 100%
 gperf-3.1-4-x86_64              101.4 KiB   409 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-zlib-1.2....   102.5 KiB   133 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-bzip2-1.0...    89.1 KiB   174 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libtre-gi...    84.2 KiB   144 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-pkgconf-1...    79.1 KiB   154 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libpsl-0....    73.0 KiB   150 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-libffi-3....    42.5 KiB  89.3 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-mpc-1.2.1...    72.7 KiB  86.9 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-winpthrea...    40.1 KiB  74.5 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libwinpth...    29.1 KiB  63.0 KiB/s 00:00 [###############################] 100%
 mingw-w64-x86_64-termcap-1...    28.0 KiB  48.1 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libsystre...    24.0 KiB  46.4 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libb2-0.9...    23.7 KiB  43.1 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-libmangle...    22.2 KiB  42.3 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-winstorec...    21.1 KiB  31.2 KiB/s 00:01 [###############################] 100%
 mingw-w64-x86_64-windows-d...     3.1 KiB  4.02 KiB/s 00:01 [###############################] 100%
 pkgconf-1.8.0-1-x86_64           58.4 KiB  7.23 KiB/s 00:08 [###############################] 100%
 diffstat-1.65-1-x86_64           29.2 KiB  3.93 KiB/s 00:07 [###############################] 100%
 texinfo-tex-6.8-6-x86_64         26.8 KiB  3.90 KiB/s 00:07 [###############################] 100%
 base-devel-2022.01-2-any          2.4 KiB   514   B/s 00:05 [###############################] 100%
 Total (72/72)                    59.8 MiB  2.27 MiB/s 00:26 [###############################] 100%
(79/79) checking keys in keyring                             [###############################] 100%
(79/79) checking package integrity                           [###############################] 100%
(79/79) loading package files                                [###############################] 100%
(79/79) checking for file conflicts                          [###############################] 100%
(79/79) checking available disk space                        [###############################] 100%
:: Processing package changes...
( 1/79) installing binutils                                  [###############################] 100%
( 2/79) installing m4                                        [###############################] 100%
( 3/79) installing bison                                     [###############################] 100%
( 4/79) installing diffstat                                  [###############################] 100%
( 5/79) installing diffutils                                 [###############################] 100%
( 6/79) installing dos2unix                                  [###############################] 100%
( 7/79) installing flex                                      [###############################] 100%
( 8/79) installing gperf                                     [###############################] 100%
( 9/79) installing groff                                     [###############################] 100%
(10/79) installing texinfo                                   [###############################] 100%
(11/79) installing texinfo-tex                               [###############################] 100%
(12/79) installing make                                      [###############################] 100%
(13/79) installing patch                                     [###############################] 100%
Optional dependencies for patch
    ed: for patch -e functionality
(14/79) installing pkgconf                                   [###############################] 100%
(15/79) installing base-devel                                [###############################] 100%
(16/79) installing mingw-w64-x86_64-libiconv                 [###############################] 100%
(17/79) installing mingw-w64-x86_64-zlib                     [###############################] 100%
(18/79) installing mingw-w64-x86_64-binutils                 [###############################] 100%
(19/79) installing mingw-w64-x86_64-headers-git              [###############################] 100%
(20/79) installing mingw-w64-x86_64-crt-git                  [###############################] 100%
(21/79) installing mingw-w64-x86_64-gmp                      [###############################] 100%
(22/79) installing mingw-w64-x86_64-isl                      [###############################] 100%
(23/79) installing mingw-w64-x86_64-mpfr                     [###############################] 100%
(24/79) installing mingw-w64-x86_64-mpc                      [###############################] 100%
(25/79) installing mingw-w64-x86_64-libwinpthread-git        [###############################] 100%
(26/79) installing mingw-w64-x86_64-gcc-libs                 [###############################] 100%
(27/79) installing mingw-w64-x86_64-windows-default-manifest [###############################] 100%
(28/79) installing mingw-w64-x86_64-winpthreads-git          [###############################] 100%
(29/79) installing mingw-w64-x86_64-zstd                     [###############################] 100%
(30/79) installing mingw-w64-x86_64-gcc                      [###############################] 100%
(31/79) installing mingw-w64-x86_64-gcc-ada                  [###############################] 100%
(32/79) installing mingw-w64-x86_64-gcc-libgfortran          [###############################] 100%
(33/79) installing mingw-w64-x86_64-gcc-fortran              [###############################] 100%
(34/79) installing mingw-w64-x86_64-gcc-objc                 [###############################] 100%
(35/79) installing mingw-w64-x86_64-expat                    [###############################] 100%
(36/79) installing mingw-w64-x86_64-gettext                  [###############################] 100%
(37/79) installing mingw-w64-x86_64-libtre-git               [###############################] 100%
(38/79) installing mingw-w64-x86_64-libsystre                [###############################] 100%
(39/79) installing mingw-w64-x86_64-ncurses                  [###############################] 100%
(40/79) installing mingw-w64-x86_64-bzip2                    [###############################] 100%
(41/79) installing mingw-w64-x86_64-libffi                   [###############################] 100%
(42/79) installing mingw-w64-x86_64-mpdecimal                [###############################] 100%
(43/79) installing mingw-w64-x86_64-libtasn1                 [###############################] 100%
(44/79) installing mingw-w64-x86_64-p11-kit                  [###############################] 100%
(45/79) installing mingw-w64-x86_64-ca-certificates          [###############################] 100%
(46/79) installing mingw-w64-x86_64-openssl                  [###############################] 100%
(47/79) installing mingw-w64-x86_64-termcap                  [###############################] 100%
(48/79) installing mingw-w64-x86_64-readline                 [###############################] 100%
(49/79) installing mingw-w64-x86_64-tcl                      [###############################] 100%
(50/79) installing mingw-w64-x86_64-sqlite3                  [###############################] 100%
(51/79) installing mingw-w64-x86_64-tk                       [###############################] 100%
(52/79) installing mingw-w64-x86_64-xz                       [###############################] 100%
(53/79) installing mingw-w64-x86_64-tzdata                   [###############################] 100%
(54/79) installing mingw-w64-x86_64-python                   [###############################] 100%
(55/79) installing mingw-w64-x86_64-xxhash                   [###############################] 100%
(56/79) installing mingw-w64-x86_64-gdb                      [###############################] 100%
Optional dependencies for mingw-w64-x86_64-gdb
    mingw-w64-x86_64-python-pygments: for syntax highlighting
(57/79) installing mingw-w64-x86_64-gdb-multiarch            [###############################] 100%
Optional dependencies for mingw-w64-x86_64-gdb-multiarch
    mingw-w64-x86_64-python-pygments: for syntax highlighting
(58/79) installing mingw-w64-x86_64-libgccjit                [###############################] 100%
(59/79) installing mingw-w64-x86_64-libmangle-git            [###############################] 100%
(60/79) installing mingw-w64-x86_64-make                     [###############################] 100%
(61/79) installing mingw-w64-x86_64-pkgconf                  [###############################] 100%
(62/79) installing mingw-w64-x86_64-tools-git                [###############################] 100%
(63/79) installing mingw-w64-x86_64-winstorecompat-git       [###############################] 100%
(64/79) installing mingw-w64-x86_64-c-ares                   [###############################] 100%
(65/79) installing mingw-w64-x86_64-brotli                   [###############################] 100%
(66/79) installing mingw-w64-x86_64-libunistring             [###############################] 100%
(67/79) installing mingw-w64-x86_64-libidn2                  [###############################] 100%
(68/79) installing mingw-w64-x86_64-libpsl                   [###############################] 100%
(69/79) installing mingw-w64-x86_64-libssh2                  [###############################] 100%
(70/79) installing mingw-w64-x86_64-nghttp2                  [###############################] 100%
(71/79) installing mingw-w64-x86_64-curl                     [###############################] 100%
(72/79) installing mingw-w64-x86_64-jsoncpp                  [###############################] 100%
(73/79) installing mingw-w64-x86_64-libb2                    [###############################] 100%
(74/79) installing mingw-w64-x86_64-lz4                      [###############################] 100%
(75/79) installing mingw-w64-x86_64-libarchive               [###############################] 100%
(76/79) installing mingw-w64-x86_64-libuv                    [###############################] 100%
(77/79) installing mingw-w64-x86_64-rhash                    [###############################] 100%
(78/79) installing mingw-w64-x86_64-ninja                    [###############################] 100%
(79/79) installing mingw-w64-x86_64-cmake                    [###############################] 100%
Optional dependencies for mingw-w64-x86_64-cmake
    mingw-w64-x86_64-qt6-base: CMake Qt GUI
    mingw-w64-x86_64-emacs: for cmake emacs mode
:: Running post-transaction hooks...
(1/1) Updating the info directory file...

Dustella@DESKTOP-VMFH9JG MINGW64 ~
#
```

:::

然后这边就OK啦，可以参考网上的其他教程继续探索强大的msys2哦(⊙o⊙)

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

弹出的窗口是存放克隆的仓库的位置，可以创建一个专案文件夹，比如`Projects`，专门放各种仓库。但由于项目类型的不同，最好不要有中文的目录。比如Python程序对中文不敏感，但是C或者其他语言就可能会有问题。

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

然后点击下方的`Build`或者`▷`编译运行我们的工程

![](/assets/pics/vscode/vscode-use-7.png =x300)

可以随便在某一行你感兴趣的代码处打一个断点，比如图中的第31行，然后点击下方的从🐞图标

![](/assets/pics/vscode/vscode-debug-1.png =x300)

会自动进入调试模式，程序会自动运行到你刚刚打的断点处然后暂停，你可以查看此时代码中内存里变量的数据，方便你查找错误

![](/assets/pics/vscode/vscode-debug-2.png =x300)

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
