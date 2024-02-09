---
id: '03'
title: 'How to Generate an SSH for GitHub'
author: 'Cesar Gomez'
date: '2020-08-16'
excerpt: 'SSH also known as Secure Shell or Secure Socket Shell and usually considered more secure, for basic usage of GitHub'
tags: ['GitHub', 'macOS']
---

#### Create an SSH key

you should be located in home (but is not required) and from there open your terminal and use the following command:

```shell
  ssh-keygen -t rsa -b 4096 -C "your_email_here"

  #or if you want an ed_25519, do:
  ssh-keygen -t ed25519 -C "your_email_here"
```

let's explain each flag:

- **T:** specifies the algorithm to create the key: which in this case will be _rsa_ but can be _ed25519_
- **b:** specifies the key complex which in this case we are using 4096.
- **C:** the letter C should be a Capital C and it tells to which email account the key will be connected

> your email should be wrapped into quotes

#### Check the SSH agent

Check if the SSH agent is running, and if is running you will receive a pid (Process id) back

```shell
  eval "$(ssh-agent -s)"
  # Agent pid 2794
```

#### Create config file

To create the config file we need to access to the _~/.ssh_ folder that should be located in your home directory.

```shell
  cd ~/.shh
```

Once you access to the folder we can create the config file with VIM, VSCode or any other you prefer:

```shell
  #with vim
  vim config

  #with vscode
  code config
```

Once the config file is create, add this lines into it, then you config file is ready.

```shell
  Host *
    AddKeyToAgent yes
    UserKeychain yes
    IdentifyFile ~/.ssh/id_rsa
```

#### Add the SSH key

To add the key simple type this in you command line:

```shell
  ssh-add -K ~/.ssh/id_rsa
```

- **K:** should be Capital K and means that macOS uses _Keychain_ as password admin to share with iCloud, but in case that this return an error you can execute the same command after remove the letter K from the parameters.

#### Add the public key into GitHub

First you need to copy the public key from the _~/.ssh_ folder, to do that, execute the following command:

```shell
  cat id_rsa.pub
  # if you are using ed25519, do
  cat id_ed25519.pub
```

now you can copy the public key and login into your GitHub account and go to:

- _settings_ > _SSH and GPG Keys_ >_New SSH key_

then you can go into the repository you want to clone and switch from HTP to SSH.

#### Change the url from an existing repository:

If you cannot do push, pull or any other from your local repository, you might be consider replace the URL

```shell
  git remote -v
  # to list all the origins with details
```

```shell
  git remote set-url origin <URL>
  # change the origin URL, replace <URL> for the URL without the <>
```
