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
	var comptadorZeros = 0;
	var comptadorMajors = 0;
	var comptadorMenors = 0;
	var valorCasella = [];
	var iteracioDis = -1;
	var matriu = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
	
	
	
	for (rowNum = 1; rowNum < n; rowNum++) {
		var valorCasella = [];
		for (colNum = (rowNum + 1); colNum < n; colNum++) {
			valorCasella.push(matriu[colNum][rowNum]);
			
			console.log(colNum);
			console.log(rowNum);
			console.log(valorCasella);
		
			if (matriu[colNum][rowNum] > 0) {
				comptadorMajors++;
				
				
				} else if (matriu[colNum][rowNum] == 0) {
				comptadorZeros++;
					
				} else { (matriu[colNum][rowNum] < 0)
				comptadorMenors++;
				}
}
	}
return "En el triangle superior de la matriu hi apareix el numero 0 un total de " + comptadorZeros + " vegades." + "<br>" + "Un total de " + comptadorMajors + " nombres del triangle assenyalat son majors de 0 i un total de " + comptadorMenors + " son menors"
}
	