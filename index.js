// In God We Trust

function checkEven(number){
	number = Number(number);
	return number === setEvenNumber(number);
}

function setEven(number){
	number = setEvenNumber(number);
	let loops = 1000;
	while(number !== setEvenNumber(number) && loops-- > 0){
		number = setEvenNumber(number);
		if(loops < 0){break;}
	}
	if(number !== setEvenNumber(number)){
		number = setEvenNumber(Math.round(number));
	}return number;
}


function setEvenNumber(number){
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
			number[1][i] = fixNumber(number[1][i]);
			if(number[1][i] === '10'){
				number[1][i] = '0';
				if(i !== 0){
					number[1][i-1] = (Number(number[1][i-1])+1).toString();
				}else{number[0] = (Number(number[0])+1).toString();}
			}
		}number[1] = number[1].join('');
	}
	if(number[0]){let lNum = fixNumber(number[0].slice(-1)); number[0] = number[0].slice(0, -1)+lNum;}
	if(number[0] || number[1]){
		if(!number[0]){number[0] = '0';}
		if(!number[1]){number[1] = '0';}
		return Number(number.join('.'));
	}return NaN;
}

function fixNumber(number){
	number = Number(number);
	if([1, 3, 6].includes(number)){
		number--;
	}else if([4, 7, 9].includes(number)){
		number++;
	}return number.toString();
}


module.exports = {check: checkEven, set: setEven};
