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