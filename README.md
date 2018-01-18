# js-combinations 数学计算排列组合

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

calculate combinations of Math, find the amount of possible combinations of n elements 

计算 n 个元素中，选出 k 个元素所有可能的组合数量 

数学公式：
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/0dc6d688ec5856145cd926466b4c454ecb215a18)
![](https://wikimedia.org/api/rest_v1/media/math/render/svg/84f83ebcfa90586f2ee3215c74688388c2ff63e5)

but, if _k_ > _n_, return `0`;

## install

```js
yarn add js-combinations
// or
npm install js-combinations --save
```
## usage

```js
import combinations from 'js-combinations';
const result = combinations(6, 4);
// =>  15
```

## cache 关于缓存

use cache by default in factorial function for high performance, if you dont want to use cache, you can import `combinationsWithoutCache`, eg:

默认在阶乘函数中使用缓存，以提高重复计算的性能表现，但会减加少许内存。
如果不想使用缓存版本，可以 import 无缓存版本 ：`combinationsWithoutCache`

```js
import { combinationsWithoutCache } from 'js-combinations'
// ... what you want to do
```

[build-badge]: https://img.shields.io/travis/Robin-front/js-combinations/master.png?style=flat-square
[build]: https://travis-ci.org/Robin-front/js-combinations

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/Robin-front/js-combinations/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/Robin-front/js-combinations
