/**
 * 
 */

function full1Exercici7 () {
	var cadenaNum = "012344198";
	var llistaNums = [];
	for (var numeroBuscat = 0; numeroBuscat <= 9; numeroBuscat++) {
	var comptador = 0;
		for (var posicio = 0; posicio < cadenaNum.length; posicio++) {	
		if (((cadenaNum.charAt(posicio)) == numeroBuscat)) {
			comptador++;
			console.log(comptador);
		}		
		}
llistaNums.push(comptador);
		console.log(numeroBuscat);
	}
	return llistaNums;
	}