---
id: '05'
title: 'Install NVM in macOS'
author: 'Cesar Gomez'
date: '2022-04-15'
excerpt: 'How to install NVM and manage Node.js versions in macOS with NVM'
tags: ['Node.js']
---

#### Install NVM

Visit the [NVM repository](https://github.com/nvm-sh/nvm) and instal via _curl_ or _wget_

After that you can run the following command to load NVM

```shell
  export NVM_DIR=»$([ -z «${XDG_CONFIG_HOME-}» ] && printf %s «${HOME}/.nvm» || printf %s «${XDG_CONFIG_HOME}/nvm»)»
[ -s «$NVM_DIR/nvm.sh» ] && \. «$NVM_DIR/nvm.sh» # This loads nvm
```

Now NVM should be installed, you can double check with:

```shell
  nvm -v
  # this will return the version
```

#### Install Node.js versions in NVM

To check all node.js versions available you can run:

```shell
  nvm ls-remote
  # this will list all node.js from version 0 to the most recent one
```

To install a node.js version run the command:

```shell
  nvm instal node_version
  # example nvm install 16.14.2
```

If you want to check which node.js versions have you already installed, run:

```shell
  nvm ls
```

#### Switch between node.js versions in NVM

If you want to change between node.js version in NVM run:

```shell
  nvm use node_version
  # example nvm use 16.14.2
```

You can change your node versions between projects as well, but you should know that switching between node versions will affect your npm versions as well
