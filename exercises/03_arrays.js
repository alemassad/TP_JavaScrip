/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.*/
console.log(" ");
var meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"];
console.log("El mes 5 es (",meses[4]+") y el mes 11 es(",meses[10]+") en el año");
console.log(" ");

/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
meses.sort((a, b) => {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
});
console.log("Meses ordenados alfabeticamente: "+meses);
console.log(" ");

/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
meses.push("oncember ")
console.log("Agregado al final, 13 meses: "+meses);
console.log(" ");
meses.unshift("emero");
console.log("Agregado al principio, 14 meses: "+meses);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log(" ");
meses.shift(meses);
console.log("Eliminado al principio, 13 meses: "+meses);
console.log(" ");
meses.pop(meses);
console.log("Eliminado al final, 12 meses: "+meses);
console.log(" ");

/*Invertir el orden del array (utilizar reverse).*/
meses.reverse(meses);
console.log("Meses ordenados descendente: "+meses);
console.log(" ");

/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/
var todosMeses=meses.join('- ')
console.log("Messes con guión: "+todosMeses);
console.log(" ");
/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */
meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"];
var recorteMeses=meses.slice(4,11);
console.log("De Mayo a Noviembre: "+recorteMeses);
