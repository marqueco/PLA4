/**
 * 
 */

function triangleSuperior(matriu) {
	var n = 5;
	var comptadorZeros = 0;
	var comptadorMajors = 0;
	var comptadorMenors = 0;
	var triangle = [];
	var matriu = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,0],[16,17,18,19,-20],[21,22,23,24,25]];
	
	for (colNum = 0; colNum < n; colNum++) {
		//var valorCasella = [];
		for (rowNum = 0; rowNum < colNum; rowNum++) {
			//valorCasella.push(matriu[colNum][rowNum]);
			
			console.log(matriu[rowNum][colNum]);
			//console.log(rowNum);
			//console.log(valorCasella);
			
			
			if (matriu[rowNum][colNum] > 0) {
				comptadorMajors++;
				
				
				} else if (matriu[rowNum][colNum] == 0) {
				comptadorZeros++;
					
				} else {
				comptadorMenors++;
		
		
				}
	
		}
	}
		console.log(comptadorZeros);
		console.log(comptadorMajors);
		console.log(comptadorMenors);
return "hola"
}