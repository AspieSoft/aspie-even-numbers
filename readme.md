## Aspie Even Numbers

![npm](https://img.shields.io/npm/v/aspie-even-numbers)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/aspie-even-numbers)
![GitHub top language](https://img.shields.io/github/languages/top/aspiesoft/aspie-even-numbers)
![NPM](https://img.shields.io/npm/l/packageName)

![npm](https://img.shields.io/npm/dw/aspie-even-numbers)
![npm](https://img.shields.io/npm/dm/aspie-even-numbers)
![GitHub last commit](https://img.shields.io/github/last-commit/aspiesoft/aspie-even-numbers)

[![paypal](https://img.shields.io/badge/buy%20me%20a%20coffee-paypal-blue)](http://buymeacoffee.aspiesoft.com/)

If you have Aspergers Syndrome (ASD), like I do, and you like even numbers, this module can help.

This module takes an odd number and sets it to what an aspie would consider even.
Multiples of 5 are also considered even by this module.

### Installation

```shell script
npm install aspie-even-numbers
```

### Setup

```js
const aspieEven = require('aspie-even-numbers');
```

### Usage

```js
aspieEven.check(2); // output: true
aspieEven.check(3.07); // output: false

aspieEven.set(17); // output: 18
aspieEven.set(4.39); // output 5.5
aspieEven.set(4.89); // output 5
```
