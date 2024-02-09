---
id: '06'
title: 'How to Setup ESLint and Prettier'
author: 'Cesar Gomez'
date: '2022-08-05'
excerpt: 'How to setup ESLint and Prettier in your VSCode project'
tags: ['Javascript', 'Vscode']
---

#### Install and setup ESLint

First we need to install eslint with one of these commands:

```shell
  # npm user's:
  npm install -D eslint

  # yarn user's
  yarn add eslint
```

After the install we need to setup ESLint, to do that we need to create a config file:

```shell
  # npm user's:
  npx eslint --init

  # yarn user's
  yarn eslint --init
```

This will use ESLint config assistance which will start doing some questions:

**How would you like to use ESLint?**

- To check syntax only
- To check syntax and find problems
- To check syntax, find problems, and enforce code style ✔️

**What type of module does your project use?**

- JavaScript modules (import/export) ✔️
- CommonJS (require/exports)
- None of these

**Which framework does your project use?**

- React ✔️
- Vue.js
- None of these

**Does your project use TypeScript?**

- No
- Yes ✔️

**Where does your code run?**  
_(Press space to select, a to toggle all, i to invert selection)_

- Browser ✔️
- Node ✔️

> this is due to im using Next.js for the project, otherwise if yo have a front-end project only use browser, and if its a back-end project use node

**Use a popular style guide or Answer questions about you style**

- Use a popular style guide ✔️
- Answer questions about your style

**Which style guide do you want to follow?**

- Airbnb: https://github.com/airbnb/javascript
- Standard: https://github.com/standard/standard ✔️
- Google: https://github.com/google/eslint-config-google
- XO: https://github.com/xojs/eslint-config-xo

**What format do you want your config file to be in?**

- JavaScript
- YAML
- JSON ✔️

After that our ESLint config file should be in the root of the project named as: **.eslint.json**
Now if you want to use it you can execute:

```shell
  # npm user's:
  npx eslint filename
  # npx eslint src/main.tsx

  # yarn user's
  yarn run eslint filename
  # yarn run eslint src/main.tsx
```

The command will run eslint to find problems in you code, and will give you the option to fix those problems by adding the flag _--fix_ at the end of the previous command

```shell
  # npm user's:
  npx eslint filename --fix
  # npx eslint src/main.tsx --fix

  # yarn user's
  yarn run eslint filename --fix
  # yarn run eslint src/main.tsx --fix
```

We can improve this by install the [ESLint extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), this extension will give you instant UI feedback in your VSCode editor instead of running the command every time you want to check a file.

If you are using the ESLint extension, it will start to highlight the errors in your code, in this case is because the _import React from 'react'_ is missing, but since im in next.js is no needed, even on Vite doesn't needed as well.

![eslint error](/images/blog/eslint.png)

In this cases we have to options:

- add the import.
- we can disable ESLint rules as you needed.

**Disable the rule for that line or document**

You just need to put the cursor on the error and it will show you a box dialog with an option called _Quick Fix_, this option will show you how to fix it

![eslint fix](/images/blog/eslint-scope.png)

**Modify the config file**

Each rules can take one of three values:

- **off:** which disable the rule
- **warn:** it will highlight the pice of code in orange and will display a warning message.
- **error:** it will highlight the pice of code in red and will display a warning message.

So you can add the following rules in the ESLint config `.eslintrc.json` file at it will fix the CamelCase error.

```json
  "rules": {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
```

The names of the rules you may want to disable or modify, will appear in the box dialog as you can see in the previous image.

But for this particular case we can use a better approach if you are using the _new JSX transform from React 17_ which is extending the _react/jsx-runtime_ rule in the ESLint config file.

The way you can do it is adding the plugin into the "extends" in the `.eslintrc.json` config file:

```json
  "extends": [
		"plugin:react/recommended",
		"standard",
		"plugin:react/jsx-runtime"
	],
```

Heres the list of rules for [Standard style guide](https://standardjs.com/rules)

#### Install and setup Prettier

To install prettier run:

```shell
  # npm user's:
  npm install --save-dev --save-exact prettier

  # yarn user's
  yarn add --dev --exact prettier
```

After install prettier you can the following command will show you in the console how the format should be

```shell
  # npm user's:
  npx prettier fileName
  # example: npx prettier pages/index.tsx

  # yarn user's
  yarn prettier fileName
  # example: yarn prettier pages/index.tsx
```

You can copy and overwrite the file or run the next command in order to re-write the file according to prettier format suggestion:

```shell
  # npm user's:
  npx prettier fileName --write
  # example: npx prettier pages/index.tsx --write

  # yarn user's
  yarn prettier fileName --write
  # example: yarn prettier pages/index.tsx --write
```

But this may cause errors due to ESLint will highlight the semicolons as errors and prettier don't, also ESLint will highlight singles quotes and prettier don't, an so on.  
For that reason we need to create a prettier config file

```shell
  echo {}> .prettierrc.json
```

[Prettier](https://prettier.io) already provide a list with all the options
you can customize.

What we can do is just add our rules in the _prettierrc.json_ according with prettier options

Here's my `.prettierrc.json` config file that can be used as guidance:

```json
{
  "useTabs": true,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```

After this it will be a conflict between ESLint and Prettier persist, but can be easily fix by installing a package:

```shell
  # npm user's:
  npm i -D eslint-config-prettier

  # yarn user's
  yarn add --dev eslint-config-prettier
```

And after that, we can added to the ESLint config file under the extends section, it will looks like this and this will preserve prettier rules instead of ESLint rules:

`.eslintrc.json`

```json
	"extends": [
		"plugin:react/recommended",
		"standard",
		"plugin:react/jsx-runtime",
		"eslint-config-prettier"
	],
```

One more extra tip you can do is enable the format on save option from VSCode, this allows you to apply in an automate way the proper format changes a soon as you save the file.

To do that go to _settings > search bar > format on save > enable the check box_

#### Setup script in package.json - (optional)

Not every person use VSCode, and if they use it not all the VSCode users have the same extensions installed, If that's the case, we can add some scripts to the package.json, so they just need to run the scripts in order to format the code or find errors.

The package.json will looks like this:

**with next.js**

`package.json`

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "format": "prettier --write .",
    "lint": "eslint --fix . --ext .js,.jsx,.ts,.tsx"
  },
```

**with vite**

`package.json`

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "prettier --write .",
    "lint": "eslint --fix . --ext .js,.jsx,.ts,.tsx"
  },
```

By default running the scripts it will overwrite the Dist folder, and we don't want that.
So we need to add 2 extra files named as: _.prettierignore_ , _.eslintignore_

So add a prettierignore file:

```shell
echo {}> .prettierignore
echo {}> .eslintignore
```

And add the following line in the `.prettierignore` file:

```json
  dist
  package-lock.json #if you use npm you should this line too
```

And add the following line in the `.eslintignore` file:

```json
  dist
```

After that if you try to run the script _yarn run lint_ or _npm run lint_, you will se a warning message saying:

_React version not specified in eslint-plugin-react_

To fix that, we can add in `eslintrc.json` file:

```json
  	"settings": {
		"react": {
      "version": "detect"
    },
	},
```

And that's all!
