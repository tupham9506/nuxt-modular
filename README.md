# Nuxt Modular

[![NPM Version](https://img.shields.io/npm/v/@cknow/nuxt-modular.svg)](https://www.npmjs.com/package/@cknow/nuxt-modular)
[![Downloads](https://img.shields.io/npm/dt/@cknow/nuxt-modular.svg)](https://www.npmjs.com/package/@cknow/nuxt-modular)
[![MIT License](https://img.shields.io/npm/l/@cknow/nuxt-modular.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/nuxt-modular.svg?branch=master)](https://travis-ci.org/cknow/nuxt-modular)
[![Build status](https://ci.appveyor.com/api/projects/status/o2g6m42r70vdltlq/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/nuxt-modular/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/nuxt-modular/badge.svg?branch=master)](https://coveralls.io/github/cknow/nuxt-modular?branch=master)

[![Code Climate](https://codeclimate.com/github/cknow/nuxt-modular/badges/gpa.svg)](https://codeclimate.com/github/cknow/nuxt-modular)
[![Test Coverage](https://codeclimate.com/github/cknow/nuxt-modular/badges/coverage.svg)](https://codeclimate.com/github/cknow/nuxt-modular/coverage)
[![Issue Count](https://codeclimate.com/github/cknow/nuxt-modular/badges/issue_count.svg)](https://codeclimate.com/github/cknow/nuxt-modular)

[![Dependencies Status](https://david-dm.org/cknow/nuxt-modular/status.svg)](https://david-dm.org/cknow/nuxt-modular)
[![devDependencies Status](https://david-dm.org/cknow/nuxt-modular/dev-status.svg)](https://david-dm.org/cknow/nuxt-modular?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/nuxt-modular/peer-status.svg)](https://david-dm.org/cknow/nuxt-modular?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/nuxt-modular.svg)](http://isitmaintained.com/project/cknow/nuxt-modular)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/nuxt-modular.svg)](http://isitmaintained.com/project/cknow/nuxt-modular)
[![Gitter](https://badges.gitter.im/cknow/nuxt-modular.svg)](https://gitter.im/cknow/nuxt-modular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Nuxt modular management

## Install

```bash
npm install --save @cknow/nuxt-modular
```

Add `@cknow/nuxt-modular` to modules section of `nuxt.config.js`:

```js
{
    modules: [
        '@cknow/nuxt-modular'
    ]
}
```

## Usage

This module allows you to build your app in modules.
By default the folders within `modular` will be considered modules and within each module you can use the same root structure, that is, your module can contain
`layouts`, `middleware`, `plugins`, `pages`, `static`, `store`.

Ex:

```bash
modular
    example1
        pages
            index.vue
    example2
        pages
            index.vue
pages
    index.vue
```

You should be able to access this:

```bash
/ -> pages/index.vue
/example1 -> modular/example1/pages/index.vue
/example2 -> modular/example2/pages/index.vue
```
