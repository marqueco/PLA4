/**
 * 
 */

function columnMean(matriu) {
	var n = 5;
	var column = [];
	var suma = 0;
	var meanColumn = [];
	var matriu = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

	for (rowNum = 0; rowNum < n; rowNum++) {
		var column = [];
		var suma = 0;
		for (colNum = 0; colNum < n; colNum++) {
			column.push(matriu[colNum][rowNum]);
			suma += matriu[colNum][rowNum]
			
			
			
			console.log(colNum);
			console.log(rowNum);
			console.log(column);
			console.log(suma);
			
		
		}
		mean = suma / n;
		meanColumn.push(mean);
		console.log(mean);
	}
return meanColumn[0] + "<br>" + meanColumn[1] + "<br>" + meanColumn[2] + "<br>" + meanColumn[3] + "<br>" + meanColumn[4]; 
}



    