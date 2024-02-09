---
id: '01'
title: 'How to install external ZSH themes in macOS'
date: '2020-03-27'
excerpt: 'install external themes in ZSH its a little different than the default themes'
tags: ['ZSH', 'macOS']
---

#### Install Cobalt 2 theme

First open the _~/.oh-my-zsh/themes/_ directory, this is a hidden directory.

> to show hidden directories press shift + cmd + .

To get the [Cobalt2 theme](https://github.com/wesbos/hyperterm-cobalt2-theme) go to the link drag the archive named as cobalt2.zshtheme and drop into the _.oh-my-zsh_ folder

![cobalt2 github](/images/blog/cobalt2-github.png)

Open `ZSH preferences` i use VSCode for that [how to here](https://cesargomez.io/blog/install-HyperJs) and change the line:

```shell
  ZSH_THEME='cobalt2'
```

Now you need to refresh your ZSH with following command:

```shell
  source ~/.zshrc
```

##### install ans setup power fonts

Cobalt2 uses power fonts for prompt, so power fonts need to be installed and cam be download from [here](https://github.com/powerline/fonts) and installed as you instal regular fonts.

Since i use Hyper i need to setup the power fonts in Hyper.js, so open hyper preferences

```shell
 code ~/.zshrc
```

And then add the font

![add power fonts](/images/blog/add-power-font.png)
