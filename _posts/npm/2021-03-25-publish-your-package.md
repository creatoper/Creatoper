---
layout: post
title: "Publish your package to npm"
date: 2021-03-25 20:00:00 +0700
author: "Bui Quang Bao"
authorlink: https://buiquangbao.github.io/
tags: technology web npm
series: NPM101
preview: "How to publish packages to npm (the way the industry does things)."
---

<style>
.youtube {
    width: 100%; height: 46.87vw;
    border: none; background: transparent;
} @media only screen and (min-width: 768px) {
    .youtube {
        width: 42vw; height: 23.625vw;
    }
}

</style>

<iframe class="youtube"
src="https://www.youtube.com/embed/lxxndOskI1o" 
frameborder="0" 
allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe>



### 1. Open command line and navigate to your package's folder

```
cmd
```

### 2. Login your npm account

```
npm login
```

Note that when you input the password, there is no clue show that you are typing. This will be confused if this is the first time you use the command line.

### 3. Initialize npm package manager

```
npm init
```

If you have prepared your package like [this post](/prepare-your-package), all you need to do is just enter.

Finally, type

```
yes
```

### 4. Publish your package

```
npm publish
```

If you see the line

```
+ your-pkg-name@1.0.1
```

your package has been published on npm successfully!

If there is any error, you should:

* Check your package's name, it maybe used by other user (for example: you can't name your package `react` or `vue`). In this case, you should change your package's name, or publish your package under your name or organization's name.
* Check your folder's structure, or `package.json` file, see [this post](/prepare-your-package) again.
* Check your npm account.