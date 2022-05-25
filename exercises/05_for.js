/*Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/
var strCinco=["uno ","dos ","tres ","cuatro ","cinco "];
for (var i=0;i<strCinco.length;i++) { 
   	alert(strCinco[i]);
}

/*Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar 
una alerta por cada palabra modificada.*/
for (var i=0;i<strCinco.length;i++) { 
    var letra = strCinco[i];
    var primeraLetra=letra[0].toUpperCase();
    primeraLetra=primeraLetra+letra.slice(1);   
    alert("Primera letra con mayuscula:   "+primeraLetra);
}

/*Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el 
número de la repetición, es decir que al final de la ejecución del bucle for debería 
haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por 
la consola del navegador el array final (utilizar console.log).*/
var vacio=new Array();

for (var i=0;i<10;i++) { 
    vacio[i]=i;   	
}
console.log(" ");
console.log(vacio);