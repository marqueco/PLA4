/**
 * 
 */

function sumaDiagonal(inputVector) {
	var vector = inputVector;
	var len = inputVector.length;
	var n = (Math.sqrt(len));
	var casella = 0;
	var suma = 0;
		if (n === parseInt(n, 10)) {
			for (var i = 0; i < n; i++) {
				suma += inputVector[casella];
				console.log(suma);
				console.log(casella);
				casella = casella + n + 1;
			}				
	
		return "TRUE" + "<br>" + "Treballem sobre una matriu de " + n + "*" + n +". El resultat de la suma dels elements sobre la diagonal de la matriu es " + suma + "."
	
		} else {
	
		return "FALSE" + "<br>" + "La matriu que has proporcionat no es quadrada. Proporciona una matriu de n*n.";
		    console.log(n);
		 } 
	}

