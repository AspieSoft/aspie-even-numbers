// In God We Trust

const app = requireOr(['./src/index.min.js', './src/index.js']);

function requireOr(list){
	if(!Array.isArray(list)){list = [list];} list.push(undefined);
	for(let i = 0; i < list.length; i++){
		let listType = typeof list[i];
		if(list[i] && listType === 'string'){
			try{return require(list[i]);}catch(e){}
		}else if(['boolean', 'number', 'undefined'].includes(listType) || list[i] === null){return list[i];}
	}return undefined;
}

module.exports = app;
