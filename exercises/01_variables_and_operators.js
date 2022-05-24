/*1. Variables y Operadores

Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. (utilizar concat)

Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
guardando el resultado de la suma en una 3er variable (utilizar length).*/

var nombre="Juan";
var apellido="Gomez";
var nom_Apellido;
nom_Apellido=nombre+" "+apellido;
console.log("Nombre y Apellido: ",nom_Apellido);
console.log(" ");

var pais="argentina";
var provincia="córdoba";
var sumaLetras=pais.length+provincia.length;
console.log("suma de letras : ",sumaLetras);