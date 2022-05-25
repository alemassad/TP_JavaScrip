/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(),
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]*/

var numAleatorio=Math.random(0,1);

if (numAleatorio>= 0.5){
    window.alert("Greater than 0,5");
}else{
    window.alert("Lower than 0,5");
}

/*Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes 
mensajes de alerta:
“Menor” si la edad es menor a 18
“Mayor” si la edad es mayor o igual a 18 Y menor que 65
“Jubilado” si la edad es mayor o igual que 65. */
var age= Math.random()*101;
age=Math.round(age);
if (age==0){
    age=1;    
}
if (age<18){
    window.alert(age+" Menor");
}else if(age<65){
    window.alert(age+" Mayor");
}else{
    window.alert(age+" Juvilado");
}
