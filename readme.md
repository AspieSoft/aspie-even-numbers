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
Multiples of 5 are also considered even by this module, but you don't have to use that feature.

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
aspieEven.isEven(5); // output: false

// check only if a number is a multiple of 5
aspieEven.is5Multiple(2); // output: false
aspieEven.is5Multiple(5); // output: true
aspieEven.is5Multiple(10); // output: true

// .check() and .set() have other options
{
  multiple: 2 || 5 || 'both', // round to the nearest 2 || 5 || 'both' (default: 'both')
  round: 0 || 1 || 2 || ..., // 0 = 2, 1 = 2.5, 2 = 2.58, ect.
  min: 1 || 2 || 5 || ..., // result cannot go below this number (note: a minimum of 1 allows a result of 1)
  max: 10 || 20 || 500 || ..., // result cannot go above this number
  evenDecimalSize: 2 || 5 || 'both' || false, // make sure a decimal always has an even number of characters (example: 2.452 = 2.45)
  include: [1, 25, 3.14], // a list of numbers to accept as a valid result (also accepts numbers after decimal is rounded to the nearest multiple)
  includeBefore: [3, 94, 48], // a list of numbers to accept, only before rounding to the multiple
  includeAfter: [0, 1000], // a list of numbers to accept, only after rounding to the multiple, but before min and max are set
  includeNumber: [3, 6, 9], // a list of numbers to accept, only checking the number before the decimal
  includeDecimal: [25, 75], // a list of numbers to accept, only checking the number after the decimal
}

// in version 1.0, you would pass the multiple option directly as one parameter
// the function will still accept this single parameter as a shortcut to {multiple: 2 || 5 || 'both'}

// when multiple = 2
aspieEven.check(4, 2); // output: true
aspieEven.check(5, 2); // output: false

aspieEven.set(1, 2); // output: 2
aspieEven.set(3, 2); // output: 4

// when multiple = 5
aspieEven.check(4, 5); // output: false
aspieEven.check(5, 5); // output: true

aspieEven.set(2, 5); // output: 0
aspieEven.set(3, 5); // output: 5
aspieEven.set(7, 5); // output: 5
aspieEven.set(8, 5); // output: 10


// another examples
'$'+aspieEven.set(21.372, {round: 2, min: 1, include: 1, includeBefore: 0}); // output: $20.28
'$'+aspieEven.set(9.99, {round: 2, min: 1, include: 1, includeBefore: 0}); // output: $10
'$'+aspieEven.set(19.99, {round: 2, min: 1, include: 1, includeBefore: 0}); // output: $20
'$'+aspieEven.set(3.75, {round: 2, min: 1, include: 1, includeBefore: 0, includeDecimal: [25, 75]}); // output: $2.75
'$'+aspieEven.set(0.73, {round: 2, min: 1, include: 1, includeBefore: 0}); // output: $1
'$'+aspieEven.set(0, {round: 2, min: 1, include: 1, includeBefore: 0}); // output: $0

aspieEven.set(3.141592, {round: 2, min: 1, include: [1, 3.14], includeBefore: 0}); // output: 3.14

```
