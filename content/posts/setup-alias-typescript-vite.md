---
id: '07'
title: 'Setup aliases in Vite with TypeScript or JavaScript'
author: 'Cesar Gomez'
date: '2023-03-14'
excerpt: 'How to setup aliases in Vite with TypeScript or JavaScript to use absolute imports in your react projects.'
tags: ['React', 'JavaScript', 'TypeScript', 'Vite']
---

Why use aliases?

We constantly need to import components, images, icons, etc. We usually do it by using relative imports meaning something like:

```ts
import GenericButton from '../../components/GenericButton';
```

And that's ok but a soon as our import portion of the file starts to grow it becomes a little bit messy and hard to read.  
Thats why we can use aliases to make our imports more readable and easier to maintain.

So we can pass from the previous example to something like this:

```ts
import GenericButton from '@components/GenericButton';
```

Let's see how to do it.

#### Setup your ts.config file

In the `tsconfig.json` file we need to add the following lines.

> If you are using JavaScript you can add the same lines to you `jsconfig.json` file inside the `compilerOptions` property.

```ts
"baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@styles/*": ["src/styles/*"]
    },
```

By setting the `baseUrl` property to `./` we are telling TypeScript to look for files starting at the same folder as the `tsconfig.json`, same case if you are using JavaScript but applied to the `jsconfig.json` file.

Then paths is just a series of entries that will reassign the imports that are relative to the `baseUrl`, in other words it will replace `src/` with `@/` in our imports, as well as `src/styles/` with `@styles/`.

#### Setup vite.config.ts

We're done with our `tsconfig.json` file but we still need to tell vite how to use the aliases we just created.

Before that, we need to install some modules from nodejs like path and his types if you are using TypeScript, otherwise just install path.

```bash
#path + types for typeScript

# yarn users
yarn add path @types/node
# npm users
npm i path @types/node

# just paths for javascript

#yarn users
yarn add path
#npm users
npn i path
```

With path and types done, open the `vite.config.ts` file and add the following code:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@styles',
        replacement: path.resolve(__dirname, 'src/styles/'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components/'),
      },
    ],
  },
});
```

Which is telling vite how to resolve the aliases you created in your `tsconfig.json` file, you can continue adding more aliases as you need (@assets, @layout, @constants, etc.).

We're done, now you can use aliases in your project!
