/**
 * 
 */


function full2Exercici1() {
	var inputNums = cadenaNums;
	var inputCerca = cercaNum;
	var comptador = 0;
	for (posicio = 0; posicio <= inputNums.length; posicio++) {
		if (inputNums.charAt(posicio) > inputCerca) {
			console.log(inputNums.charAt(posicio));
			comptador++;
		}
	}
	return comptador
}

function full2Exercici2() {
		var abecedari = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		var cadenaCar = "lkjndfiobisaospañnjb";
		var llistaCars = [];
		for (var posicio = 0; posicio <= cadenaCar.length; posicio++) {
			for (var comptador = 0; comptador < abecedari.length; comptador++) {	
			if (((cadenaCar.charAt(posicio)) == abecedari[comptador])) {
				llistaCars.push(comptador);
				console.log(comptador);
			}		
			}
	llistaCars.push(comptador);
			console.log(comptador);
		}
		return llistaCars;
		}