/**
 * 
 */


function full1Exercici1(){
	var cadena = "alsdnpgaofbAnozxnfoiAasbagna";
	var comptador = 0;
	for (posicio = 0; posicio <= cadena.length; posicio++){
		if ((cadena.charAt(posicio) == "a") || (cadena.charAt(posicio) == "A")) {
			comptador++;
		}
		}
	return comptador
}