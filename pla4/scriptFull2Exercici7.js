/**
 * 
 */


function vectorToMatrix(inputVector,n) {
	var vector = inputVector;
	var inputN = n;
	var matriu = new Array(n);
				
			for (j = 0; j < n; j++) {
				var matriuFila = [];
				for (i = j*n; i < (j+1)*n; i++) {
				matriuFila.push(inputVector[i]);
				console.log(matriuFila);
				}
				matriu.push(matriuFila);
				console.log(matriu);
				}
				
			}

function triangleSuperior(matriu) {
	var n = 5;
	var totalZeros = 0;
	var majorsZero = 0;
	var menorsZero = 0;
	for (colNum = 1; colNum < n - 2; colNum++) {
		for (rowNum = 0; rowNum < n - 1; rowNum++) {
			
			var comptador = 0;
			if (matriu[colNum][rowNum] = 0) {
			comptador++;
			
			totalZeros += comptador;
		
			} else if (matriu[colNum][rowNum] > 0) {
			comptador++;
			
			majorsZero += comptador;
			
			} else { (matriu[colNum][rowNum] < 0)
			comptador++;
			
			menorsZero += comptador;
			}
		
		console.log(totalZeros);
		console.log(majorsZero);
		console.log(menorsZero);
		}
	
}
return "En el triangle superior de la matriu hi apareix el numero 0 un total de " + totalZeros + "<br>" + ". Un total de " + majorsZero + " nombres del triangle assenyalat son majors que 0 i un total de " + menorsZero + " son menors"
}
	