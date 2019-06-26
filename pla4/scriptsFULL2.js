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
	var llistes = [].concat(llista1, llista2, llista3, llista4, llista5);
	var sumaDiagonal = (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4]);
	console.log(llista1);
	console.log(llista2);
	console.log(llista3);
	console.log(llista4);
	console.log(llista5);
	console.log(sumaDiagonal);
return sumaDiagonal
}

function full2Exercici4 () {
	var matrix = [a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35];
	var vector1.length = 5;
	var vector2.length = 5;
	var vector3.length = 5;
	var vector4.length = 5;
	var vector5.length = 5;
}