---
layout: post
title: "Prepare your package"
date: 2021-03-24 20:00:00 +0700
author: "Bui Quang Bao"
authorlink: https://buiquangbao.github.io/
tags: technology web npm
series: NPM101
preview: "How to publish packages to npm (the way the industry does things)."
---

### 1. Put all your package's files in 1 folder

```
📁your-pkg-name
├── 📁your-pkg-name-01
├── 📁your-pkg-name-02
└── 📁your-pkg-name-03
```

### 2. Create a `package.json` file

```
📁your-pkg-name
├── 📁your-pkg-name-01
├── 📁your-pkg-name-02
└── 📁your-pkg-name-03
└── package.json
```

### 3. Edit the `package.json` file

``` json
{
    "name": "your-pkg-name",
    "version": "1.0.1",
    "description": "Write your package's description here.",
    "main": "your-pkg-name.js",
    "scripts": 
    {
        "test": "echo \"Error\" && exit 1"
    },
    "keywords": 
    [
        "your-package-keyword"
    ],
    "author": "Your Name Here",
    "license": "MIT"
}
```