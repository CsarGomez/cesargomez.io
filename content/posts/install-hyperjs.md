---
id: '02'
title: 'How to install and setup Hyper.js (terminal) in macOS'
date: '2019-10-13'
excerpt: 'Hyper.js is a terminal emulator builded with web technologies like HTML, CSS and Javascript'
tags: ['Hyper.js', 'macOS']
---

#### Install

Go to the [Hyper.js](https://hyper.is/) website and download the app

#### setup

By default Hyper uses [bash](https://es.wikipedia.org/wiki/Bash) as a command interpreter, so i will replace bash with [zsh](https://es.wikipedia.org/wiki/Zsh), due to that we will be able to use [oh-my-zsh](https://ohmyz.sh) which will allow us to pimp our terminal.

#### install oh-my-zsh

Go to the website and follow the instructions or just install via curl with the following command:

```shell
  sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Or wget with the following command:

```shell
  sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"
```

Now since we are using oh-my-zsh it will allow us to use whatever theme that are available in [here](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) and you will be able to see a quick preview for each theme.

#### setup themes

I like to open Hyper preferences in VSCode, so i will setup this feature first by opening the VScode preferences

```shell
  cmd + shift + p
```

Once the command prompt line is open hit

```shell
  install code
```

After that you will be able to open Hyper preferences in your VSCode by typing:

```shell
  code ~/.hyper.js
```

And Zsh preferences in VSCode by typing in your terminal:

```shell
  code ~/.zshrc
```

Once you open the ZSH preferences you can add the theme you want by replace:

```shell
  ZSH_THEME='theme-you-like'
```
