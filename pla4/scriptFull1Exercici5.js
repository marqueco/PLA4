/**
 * 
 */


function full1Exercici5(inputCadena,inputLletra){
	var inputCadena = cadena;
	var inputLletra = lletra;
	var ubicacio = 0;
		for (posicio = 0; posicio <= inputCadena.length; posicio++) {
		if ((inputCadena.charAt(posicio) == inputLletra)  & (ubicacio == 0)){
		ubicacio = posicio + 1; 			
		}
	}
return ubicacio
}