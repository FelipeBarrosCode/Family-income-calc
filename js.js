
let family={

	income:[20,70,60,80],
	expenses: [100,29,56,90]
}

function sum(array){
	let total=0;
	for(let sumelements of array){
		total+=sumelements
	}
	return total
}

reveal=function(every1,every2){
	let variable = Number(every1-every2)
	if(variable<0){
		console.log(`NO MONEY AND A DEBT OF ${variable}$`)
	}else
	if(variable>=0){
		console.log('NOW U DO HAVE MONEY')
	}else
	if(variable=0){
		console.log('NOW U DO not HAVE MONEY')
	}else{}




}

reveal(sum(family.income),sum(family.expenses))



