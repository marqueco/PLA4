/**
 * 
 */

function full1Exercici8(inputCadena,inputLletra){
	var inputCadena = cadena;
	var inputLletra = lletra;
	var llista = [];
	var missatge = "";
	var llistaNumerics = [];
	var llistaPosicions = [];
	var ;
	
	for (posicio = 0; posicio <= cadena.length; posicio++) {
	if ((cadena.charAt(posicio)) == (0) || (cadena.charAt(posicio)) == 1 || (cadena.charAt(posicio)) == 2 || (cadena.charAt(posicio)) == 3 || (cadena.charAt(posicio)) == 4 || (cadena.charAt(posicio)) == 5 || (cadena.charAt(posicio)) == 6 || (cadena.charAt(posicio)) == 7 || (cadena.charAt(posicio)) == 8 || (cadena.charAt(posicio)) == 9){
		missatge = "S'han trobat caracters numerics a la cadena alfanumerica."
		console.log(missatge)
		llistaNumerics.push(cadena.charAt(posicio));
		llistaPosicions.push(posicio + 1);
			
	
		
	} else if (cadena.charAt(posicio) == lletra){
		llista.push(posicio);	
		}
	}

return llista
}