// In God We Trust

function checkEven(number, options = {multiple, round, min, max, include, includeBefore, includeAfter, evenDecimalSize, includeNumber, includeDecimal} = {}){
	number = Number(number);
	return number === setEvenNumber(number, options);
}

function setEven(number, options = {multiple, round, min, max, include, includeBefore, includeAfter, evenDecimalSize, includeNumber, includeDecimal} = {}){
	number = setEvenNumber(number, options);
	let loops = 1000;
	while(number !== setEvenNumber(number, options) && loops-- > 0){
		number = setEvenNumber(number, options);
		if(loops < 0){break;}
	}
	if(number !== setEvenNumber(number, options)){
		number = setEvenNumber(Math.round(number), options);
	}return number;
}

function isEven(number){
	return isNumberType(number, [0, 2, 4, 6, 8]);
}

function is5Multiple(number){
	return isNumberType(number, [0, 5]);
}


function setEvenNumber(number, options){

	if(typeof options !== 'object'){
		options = {multiple: options};
	}

	if((options['includeBefore'] || options['includeBefore'] === 0) && !Array.isArray(options['includeBefore'])){
		options['includeBefore'] = [options['includeBefore']];
	}else if(!options['includeBefore'] && options['include']){
		options['includeBefore'] = [];
	}
	if((options['includeAfter'] || options['includeAfter'] === 0) && !Array.isArray(options['includeAfter'])){
		options['includeAfter'] = [options['includeAfter']];
	}else if(!options['includeAfter'] && options['include']){
		options['includeAfter'] = [];
	}
	if(options['include'] || options['include'] === 0){
		if(!Array.isArray(options['include'])){
			options['include'] = [options['include']];
		}
		options['includeBefore'] = options['includeBefore'].concat(options['include']);
		options['includeAfter'] = options['includeAfter'].concat(options['include']);
	}

	if((options['includeNumber'] || options['includeNumber'] === 0) && !Array.isArray(options['includeNumber'])){
		options['includeNumber'] = [options['includeNumber']];
	}
	if((options['includeDecimal'] || options['includeDecimal'] === 0) && !Array.isArray(options['includeDecimal'])){
		options['includeDecimal'] = [options['includeDecimal']];
	}

	if(options['includeBefore'] && options['includeBefore'].includes(number)){
		return number;
	}

	if(options['round']){
		if(options['round'] > 0){
			let size = Math.pow(10, options['round']);
			number = Math.round(number*size)/size;
		}else{
			number = Math.round(number);
		}
	}

	if(options['includeBefore'] && options['includeBefore'].includes(number)){
		return number;
	}

	number = number.toString().split('.');
	if(!number[0] || number[0].trim() === ''){number[0] = undefined;}
	if(!number[1] || number[1].trim() === ''){number[1] = undefined;}

	let number1 = false;
	if(number[1] && options['includeDecimal'] && options['includeDecimal'].includes(Number(number[1]))){
		number1 = true;
	}
	let numberPart = undefined;
	if(number[1] && !number1){
		numberPart = number[1].split('');
	}
	if(number[1] && options['evenDecimalSize'] && !number1){
		let size = numberPart.length;
		while(!((options['evenDecimalSize'] === 2 && isNumberType(size, [0, 2, 4, 6, 8])) || (options['evenDecimalSize'] === 5 && isNumberType(size, [0, 5])) || isNumberType(size, [0, 2, 5, 8]))){
			let oldNumber = numberPart.pop();
			size--;
			if(size <= 0){
				if(oldNumber >= 5){
					if(number[0]){
						number[0] = (Number(number[0])+1).toString();
					}else{number[0] = '1';}
				}
				break;
			}
			if(oldNumber >= 5){
				numberPart[size-1] = (Number(numberPart[size-1])+1).toString();
				while(numberPart[size-1] === '10'){
					numberPart.pop();
					size--;
					if(size <= 0){
						if(number[0]){
							number[0] = (Number(number[0])+1).toString();
						}else{number[0] = '1';}
						break;
					}
					numberPart[size-1] - (Number(numberPart[size-1])+1).toString();
				}
			}
		}
		if(size <= 0){
			number[1] = undefined;
		}
	}
	if(number[1] && !number1 && options['includeDecimal'] && options['includeDecimal'].includes(Number(number[1]))){
		number1 = number[1];
	}
	if(number[1] && !number1){
		for(let i = numberPart.length-1; i >= 0; i--){
			if(i !== 0 && numberPart[i] === '9'){
				let rounded = Math.round(Number(numberPart[i-1]+'.'+numberPart[i])).toString().split('.');
				if(!rounded[0] || rounded[0].trim() === ''){rounded[0] = '0';}
				if(!rounded[1] || rounded[1].trim() === ''){rounded[1] = '0';}
				numberPart[i-1] = rounded[0]; numberPart[i] = rounded[1];
			}
			numberPart[i] = fixNumber(numberPart[i], options['multiple']);
			if(numberPart[i] === '10'){
				numberPart[i] = '0';
				if(i !== 0){
					numberPart[i-1] = (Number(numberPart[i-1])+1).toString();
				}else if(number[0]){
					number[0] = (Number(number[0])+1).toString();
				}else{number[0] = '1';}
			}
		}number[1] = numberPart.join('');
	}
	if(number[1] && !number1 && options['includeDecimal'] && options['includeDecimal'].includes(Number(number[1]))){
		number1 = number[1];
	}
	if(number[1] && !number1 && options['evenDecimalSize']){
		let size = numberPart.length;
		if(!((options['evenDecimalSize'] === 2 && isNumberType(size, [0, 2, 4, 6, 8])) || (options['evenDecimalSize'] === 5 && isNumberType(size, [0, 5])) || isNumberType(size, [0, 2, 5, 8]))){
			numberPart.pop();
			size--;
		}
		if(options['evenDecimalSize'] === 5 && isNumberType(numberPart[size-1], [0, 5])){
			numberPart[size-1] = '5';
		}else if((options['evenDecimalSize'] === 2 && isNumberType(numberPart[size-1], [0, 2, 4, 6, 8])) || isNumberType(numberPart[size-1], [0, 2, 5, 8])){
			if(numberPart[size-1] === '9'){
				numberPart[size-1] = '8';
			}else{
				numberPart[size-1] = (Number(numberPart[size-1])+1).toString();
			}
		}
	}
	if(number[1] && !number1){
		number[1] = numberPart.join('');
	}

	if(options['include']){
		let num0 = number[0];
		let num1 = number[1];
		if(!num0){num0 = '0';}
		if(!num1){num1 = '0';}
		let num = Number(num0+'.'+num1);
		if(options['include'].includes(num)){
			return num;
		}
	}

	let number0 = false;
	if(options['includeNumber'] && options['includeNumber'].includes(Number(number[0]))){
		number0 = true;
	}
	if(number[0] && !number0){
		let lNum = fixNumber(number[0].slice(-1), options['multiple']);
		if(Number(lNum) >= 10){
			number[0] = (Number(number[0].slice(0, -1)+'0') + Number(lNum)).toString();
		}else{number[0] = number[0].slice(0, -1)+lNum;}
	}

	if(number[0] || number[1]){
		if(!number[0]){number[0] = '0';}
		if(!number[1]){number[1] = '0';}
		let result = Number(number.join('.'));

		if((options['includeAfter'] && options['includeAfter'].includes(result)) || (options['includeNumber'] && options['includeNumber'].includes(Number(number[0])))){
			return result;
		}

		if(options['min'] && result < options['min']){
			return Number(options['min']);
		}else if(options['max'] && result > options['max']){
			return Number(options['max']);
		}

		return result;
	}return NaN;
}

function fixNumber(number, useMultiple = 'both'){
	number = Number(number);
	if(useMultiple == 2){
		if([1, 3, 5, 7, 9].includes(number)){
			number++;
		}
	}else if(useMultiple == 5){
		if(number < 3){
			number = 0;
		}else if(number <= 7){
			number = 5;
		}else{
			number = 10;
		}
	}else{
		if([1, 3, 6].includes(number)){
			number--;
		}else if([4, 7, 9].includes(number)){
			number++;
		}
	}return number.toString();
}

function isNumberType(number, allowedNumbers){
	number = number.toString().split('.');
	if(!Array.isArray(allowedNumbers)){allowedNumbers = [allowedNumbers.toString()];}
	for(let i = 0; i < allowedNumbers.length; i++){allowedNumbers[i] = allowedNumbers[i].toString();}
	if(!number[0] || number[0].trim() === ''){number[0] = undefined;}
	if(!number[1] || number[1].trim() === ''){number[1] = undefined;}
	if(number[1]){
		number[1] = number[1].split('');
		for(let i = number[1].length-1; i >= 0; i--){
			if(!allowedNumbers.includes(number[1][i])){
				return false;
			}
		}
	}
	if(number[0]){
		let lNum = number[0].slice(-1);
		if(!allowedNumbers.includes(lNum)){
			return false;
		}
	}return true;
}

module.exports = {check: checkEven, set: setEven, isEven, is5Multiple};
