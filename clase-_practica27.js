// ejercicio 1 

function range (variable1, variable2){
	var star = [];
	var end = [];
	return [star + end];
	}
	

function sum (array){
	total = 0
	for ( var i = 0 ; i < array.length; i++){
		total += range[i];	
	}
	return total;
}

console.log(sum(range(1,10)))

/* Ahora modifica la función de rango para tomar 
un tercer argumento opcional que indique el valor de "step" 
utilizado para construir el array. Si no se da ningún step, 
los elementos del array suben por incrementos de uno, 
correspondientes al comportamiento anterior. 
La llamada range(1, 10, 2) debe devolver [1, 3, 5, 7, 9]. 
Asegúrate que también funciona con valores de step negativos, 
de modo que range(5, 2, -1) produce [5, 4, 3, 2]. */



// ejercicio 2