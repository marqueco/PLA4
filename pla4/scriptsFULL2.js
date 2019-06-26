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

function full2Exercici2 () {
	var abecedari = ["a", "b", "c", "ç", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var cadenaCar = "lkjndfiobisaospañnjb";
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




function full2Exercici3 () {
	var llista1 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista2 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista3 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista4 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista5 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	
	var sumaDiagonal = (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4]);
	
return [llista1] + "<br>" + [llista2] + "<br>" + [llista3] + "<br>" + [llista4] + "<br>" + [llista5] + "<br>" + (sumaDiagonal)
}

