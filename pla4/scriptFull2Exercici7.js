/**
 * 
 */


function triangleSuperior(matriu) {
	var n = 5;
	var comptadorZeros = 0;
	var comptadorMajors = 0;
	var comptadorMenors = 0;
	var triangle = [];
	var matriu = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
	
	for (rowNum = 1; rowNum < n; rowNum++) {
		var valorCasella = [];
		for (colNum = 0; colNum < n; colNum++) {
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
			
			rowNum += 1;
			colNum += rowNum + 1;
}
	}
return "hola"
}