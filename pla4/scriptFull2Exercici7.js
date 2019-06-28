/**
 * 
 */

function triangleSuperior(vector) {
	var vector = inputVector;
	var len = inputVector.length;
	var n = (Math.sqrt(len));
	var casella = 0;
	var comptador = 0;
	var totalZeros = [];
	var majorsZero = [];
	var menorsZero = [];
		
	if (n === parseInt(n, 10)) {
		return "Treballem amb una matriu de " + n + "*" + n + "."
		
		for (j = 1; j < n - 1; j++); {
			for (i = j; i < n - 1; i++);
			casella =  inputVector[j][i];
			console.log(casella);
				if (casella = 0) {
					comptador++;
				}
				totalZeros.push(comptador)
				}
				var comptador = 0;
				if (casella > 0) {
					comptador++;
				}
				majorsZero.push(comptador)
				}
				var comptador = 0;
				if (casella < 0) {
					comptador++;
				}
				menorsZero.push(comptador)
				}

	return [totalZeros] + "<br>" + [majorsZero] + "<br>" + [menorsZero]
	}  else {
		    return "FALSE" + "<br>" + "La matriu que has proporcionat no es quadrada. Proporciona una matriu de n*n.";
		    console.log(n);
		 } 
	}
