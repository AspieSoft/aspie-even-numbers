## Aspie Even Numbers

![npm](https://img.shields.io/npm/v/aspie-even-numbers)
![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/aspie-even-numbers)
![GitHub top language](https://img.shields.io/github/languages/top/aspiesoft/aspie-even-numbers)
![NPM](https://img.shields.io/npm/l/aspie-even-numbers)

![npm](https://img.shields.io/npm/dw/aspie-even-numbers)
![npm](https://img.shields.io/npm/dm/aspie-even-numbers)

[![paypal](https://img.shields.io/badge/buy%20me%20a%20coffee-paypal-blue)](https://buymeacoffee.aspiesoft.com/)

If you have Asperger's Syndrome (ASD), like I do, and you like even numbers, this module can help.

This module takes an odd number and sets it to what an aspie would consider even.
Multiples of 5 are also considered even by this module.

### Installation

```shell script
npm install @aspiesoft/aspie-even-numbers
```

### Setup

```js
const aspieEven = require('@aspiesoft/aspie-even-numbers');
```

### Usage

```js
// check if a number will be changed by .set()
aspieEven.check(2); // output: true
aspieEven.check(3.07); // output: false
aspieEven.check(4); // output: false (because 4 is set to 5)
aspieEven.check(5); // output: true (because 5 is a multiple of 5)

// set a number to the correct number (even or multiple of 5)
aspieEven.set(17); // output: 18
aspieEven.set(4.39); // output 5.5
aspieEven.set(4.89); // output 5
aspieEven.set(29); // output: 30

// check only if a number is even
aspieEven.isEven(4); // output: true
aspieEven.is5Multiple(5); // output: false

// check only if a number is a multiple of 5
aspieEven.is5Multiple(2); // output: false
aspieEven.is5Multiple(5); // output: true
aspieEven.is5Multiple(10); // output: true

// .checkEven() and .setEven() have another parameter (useMultiple: default = 'both')

// when useMultiple = 2
aspieEven.check(4, 2); // output: true
aspieEven.check(5, 2); // output: false

aspieEven.set(1, 2); // output: 2
aspieEven.set(3, 2); // output: 4

// when useMultiple = 5
aspieEven.check(4, 5); // output: false
aspieEven.check(5, 5); // output: true

aspieEven.set(2, 5); // output: 0
aspieEven.set(3, 5); // output: 5
aspieEven.set(7, 5); // output: 5
aspieEven.set(8, 5); // output: 10 (corrects to adding to number in front)

```
