/**
 * 
 */

function full2Exercici3 () {
	var llista1 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista2 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista3 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista4 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	var llista5 = [ Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
		Math.floor(Math.random() * 10), Math.floor(Math.random() * 10) ];
	
	var sumaDiagonal = (llista1[0] + llista2[1] + llista3[2] + llista4[3] + llista5[4]);
	
return [llista1] + "<br>" + [llista2] + "<br>" + [llista3] + "<br>" + [llista4] + "<br>" + [llista5] + "<br>" + (sumaDiagonal)
}