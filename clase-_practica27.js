// ejercicio 1 

function range (variable1, variable2){
	var star = [];
	var end = [];
	
	return star + end ;
	}
	

function sum (array){
	total = 0
	for ( var i = 0 ; i < array.length; i++){
		total += result[i];	
	}
	return total;
}

console.log(sum(range(1,10)));

/* Ahora modifica la función de rango para tomar 
un tercer argumento opcional que indique el valor de "step" 
utilizado para construir el array. Si no se da ningún step, 
los elementos del array suben por incrementos de uno, 
correspondientes al comportamiento anterior. 
La llamada range(1, 10, 2) debe devolver [1, 3, 5, 7, 9]. 
Asegúrate que también funciona con valores de step negativos, 
de modo que range(5, 2, -1) produce [5, 4, 3, 2]. */



// ejercicio 2
/*Escribe una función que toma dos argumentos, el nombre de tu amiga 
y la cantidad de puntos nuevos que ha obtenido, y que actualice los puntos 
de la jugadora en el object scores. También escribe una función que imprima 
en la consola el total de los puntos. */

var scores = [['name','Marta']['points',0]];

var argument = function(array2d){
	var object = {};

	for ( var i = 0; i < array2d.length; i ++){
		object [array2d[i][0]] = array2d[i][1];
	}
	return object
}

console.log(argument(scores));



scores[1][1] = 1500;

console.log(argument(scores));
