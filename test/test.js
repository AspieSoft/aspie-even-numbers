function runTest(aspieEven){
	
	console.log(aspieEven.check(2)); // output: true
	console.log(aspieEven.check(3.07)); // output: false
	console.log(aspieEven.check(4)); // output: false (because 4 is set to 5)
	console.log(aspieEven.check(5)); // output: true (because 5 is a multiple of 5)

	console.log(aspieEven.set(17)); // output: 18
	console.log(aspieEven.set(4.39)); // output 5.5
	console.log(aspieEven.set(4.89)); // output 5
	console.log(aspieEven.set(29)); // output: 30

	console.log(aspieEven.isEven(4)); // output: true
	console.log(aspieEven.isEven(5)); // output: false
	
	console.log(aspieEven.is5Multiple(2)); // output: false
	console.log(aspieEven.is5Multiple(5)); // output: true
	console.log(aspieEven.is5Multiple(10)); // output: true

	console.log(aspieEven.check(4, 2)); // output: true
	console.log(aspieEven.check(5, 2)); // output: false

	console.log(aspieEven.set(1, 2)); // output: 2
	console.log(aspieEven.set(3, 2)); // output: 4

	console.log(aspieEven.check(4, 5)); // output: false
	console.log(aspieEven.check(5, 5)); // output: true

	console.log(aspieEven.set(2, 5)); // output: 0
	console.log(aspieEven.set(3, 5)); // output: 5
	console.log(aspieEven.set(7, 5)); // output: 5
	console.log(aspieEven.set(8, 5)); // output: 10

	
	console.log('$'+aspieEven.set(21.372, {round: 2, min: 1, include: 1, includeBefore: 0})); // output: $20.28
	console.log('$'+aspieEven.set(9.99, {round: 2, min: 1, include: 1, includeBefore: 0})); // output: $10
	console.log('$'+aspieEven.set(19.99, {round: 2, min: 1, include: 1, includeBefore: 0})); // output: $20
	console.log('$'+aspieEven.set(3.75, {round: 2, min: 1, include: 1, includeBefore: 0, includeDecimal: [25, 75]})); // output: $2.75
	console.log('$'+aspieEven.set(0.73, {round: 2, min: 1, include: 1, includeBefore: 0})); // output: $1
	console.log('$'+aspieEven.set(0, {round: 2, min: 1, include: 1, includeBefore: 0})); // output: $0

	console.log(aspieEven.set(3.141592, {round: 2, min: 1, include: [1, 3.14], includeBefore: 0})); // output: 3.14

}

module.exports = runTest;
