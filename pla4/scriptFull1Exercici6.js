/**
 * 
 */

function full1Exercici6(){
	var cadena = "altafulla";
	var llistaA = [];
	for (posicio = 0; posicio <= cadena.length; posicio++) {
		if ((cadena.charAt(posicio) == "a") || (cadena.charAt(posicio) == "A")) {
		llistaA.push(posicio + 1);	
		}
	}
return llistaA
}

