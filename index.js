// In God We Trust

function checkEven(number, useMultiple){
	number = Number(number);
	return number === setEvenNumber(number, useMultiple);
}

function setEven(number, useMultiple){
	number = setEvenNumber(number, useMultiple);
	let loops = 1000;
	while(number !== setEvenNumber(number, useMultiple) && loops-- > 0){
		number = setEvenNumber(number, useMultiple);
		if(loops < 0){break;}
	}
	if(number !== setEvenNumber(number, useMultiple)){
		number = setEvenNumber(Math.round(number), useMultiple);
	}return number;
}

function isEven(number){
	return isNumberType(number, [0, 2, 4, 6, 8]);
}

function is5Multiple(number){
	return isNumberType(number, [0, 5]);
}


function setEvenNumber(number, useMultiple){
	number = number.toString().split('.');
	if(!number[0] || number[0].trim() === ''){number[0] = undefined;}
	if(!number[1] || number[1].trim() === ''){number[1] = undefined;}
	if(number[1]){
		number[1] = number[1].split('');
		for(let i = number[1].length-1; i >= 0; i--){
			if(i !== 0 && number[1][i] === '9'){
				let rounded = Math.round(Number(number[1][i-1]+'.'+number[1][i])).toString().split('.');
				if(!rounded[0] || rounded[0].trim() === ''){rounded[0] = '0';}
				if(!rounded[1] || rounded[1].trim() === ''){rounded[1] = '0';}
				number[1][i-1] = rounded[0]; number[1][i] = rounded[1];
			}
			number[1][i] = fixNumber(number[1][i], useMultiple);
			if(number[1][i] === '10'){
				number[1][i] = '0';
				if(i !== 0){
					number[1][i-1] = (Number(number[1][i-1])+1).toString();
				}else{number[0] = (Number(number[0])+1).toString();}
			}
		}number[1] = number[1].join('');
	}
	if(number[0]){
		let lNum = fixNumber(number[0].slice(-1), useMultiple);
		if(Number(lNum) >= 10){
			number[0] = (Number(number[0].slice(0, -1)+'0') + Number(lNum)).toString();
		}else{number[0] = number[0].slice(0, -1)+lNum;}
	}
	if(number[0] || number[1]){
		if(!number[0]){number[0] = '0';}
		if(!number[1]){number[1] = '0';}
		return Number(number.join('.'));
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
