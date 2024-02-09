---
id: '04'
title: 'NPM ask sudo for command for global install'
date: '2021-12-14'
excerpt: 'if you are trying to do npm global install and its asking for sudo command you may want to fix your permissions'
tags: ['npm', 'Node.js', 'macOS']
---

If npm global install return an access error (ACCESS error) asking for sudo command ?.
This happens due to the fact that permissions has been wrong setup.

This article applies for macOS and ZSH users.

#### npm default directory

The default directory for npm is _/usr/local/_ you can check in your terminal

```shell
  npm config get prefix
  # it should return /usr/local
```

#### node_modules permissions check

To check the permissions for node_modules use the following command:

```shell
  ls -la /usr/local/lib/node_modules
  # you should get something like this:

  # total 0
  # drwxr-xr-x   4 root  128 ...
  # drwxr-xr-x   4 root  128 ...
  # drwxr-xr-x   7 root  128 ... corepack
  # drwxr-xr-x  13 root  128 ... npm
```

This means that the only user that can read and write under the folder is _root_ that's why you need to use the _sudo_ command.

But you can install npm packages without sudo command by changing the default directory to a different one.

#### Change npm directory

Before change the current directory we need to create a new one under the home directory:

Go to your home directory and to double check in which directory you are, use the command

```shell
  pwd
  # return: /Users/cesargomez (home directory)
```

Create a new folder inside the home directory and you can named as you prefer, i will named as **npm-global**

```shell
  mkdir npm-global
```

Move to the new npm-global folder by using

```shell
  cd npm-global
```

Setup the new directory to be the npm directory with the following command:

```shell
  npm config set prefix /Users/user/new_folder

  # example: npm config set prefix /User/cesargomez/npm-global
```

Now we need to update the system $PATH in this case the zsh Path, so from you home directory open your zsh preferences with VScode

```shell
  code ~/.zshrc
```

And modify the one that start with **export PATH = ...** with you new path and add _/bin:$PATH_ at the end like this

```shell
  export PATH=/Users/your_user/your_new_directory/bin:$PATH
```

Then we need to update the zsh variables by typing:

```shell
  source ~/.zshrc
```

This will fix you permissions setup, now you will be able to install npm global packages without using the sudo command.
