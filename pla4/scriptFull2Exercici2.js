/**
 * 
 */


function full2Exercici2 (cadenaCar) {
	var abecedari = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var cadenaCar = text;
	var llistaCars = [];
	for (var indexLletraBuscada = 0; indexLletraBuscada < abecedari.length; indexLletraBuscada++) {
		var comptador = 0;
			for (var posicio = 0; posicio < cadenaCar.length; posicio++) {	
			if (((cadenaCar[posicio]) == (abecedari[indexLletraBuscada]))) {
				comptador++;
			}		
			}
	llistaCars.push(comptador);
		}
		return llistaCars;
		}