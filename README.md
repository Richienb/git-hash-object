# git-hash-object [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/git-hash-object/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/git-hash-object)

Compute an object ID as if from `git hash-object`.

[![NPM Badge](https://nodei.co/npm/git-hash-object.png)](https://npmjs.com/package/git-hash-object)

## Install

```sh
npm install git-hash-object
```

## Usage

```js
const gitHashObject = require("git-hash-object");

gitHashObject("Hello World");
//=> "5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689"
```

## API

### gitHashObject(input)

#### input

Type: `string | Buffer`

The input to compute.
