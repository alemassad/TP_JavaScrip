/*Crear una función suma que reciba dos valores numéricos y retorne el resultado.*/

var numUno=5;
var numDos=10.7;
var suma,vale;
function sumaNum(numUno,numDos){
    
     suma =numUno+numDos
    
    return suma;    
}
sumaNum(numUno,numDos);
console.log("Resultado 6.A de la primer suma:  "+(suma));
alert("Resultado 6.A de la primer suma:  "+(suma));
/*Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
dicha variable en la consola del navegador.*/

var entero2;//variable para la funcion VALORENTERO()
function sumaNum2(numUno,numDos){    
    
    suma = +(numUno+numDos);     
    //llamo a F(Valor numericos)    
    
    validarSuma(suma); 
    if(isNaN(suma)){
        return "null";
    } else{
        valorEntero(suma);   
    suma=entero2;
    return suma;    
    }
}
  
//LLamo a la funcion suma
console.log("Resultado 6.B de la segunda suma: "+sumaNum2(numUno,numDos));//Resultado

/*A la función suma anterior, agregarle una validación para controlar si alguno de 
los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/
function validarSuma(vale){
  
    vale = parseInt(vale);
    //SI no es numérico?    
    if (isNaN(vale)) {       
          alert("Error, ingrese valores numéricos "+vale);
          console.log("Error, ingrese valores numéricos "+vale);
          return vale;//Resultado NaN
    }else{          
        //Si es numérico ENTONCES  
        alert("Válido, es valor Numérico "+vale);
        console.log("Válido, es valor Numérico "+vale)
        return vale;
    }
}

/*A la función suma del ejercicio 6b) agregarle una llamada que valide que los números 
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el 
número convertido a entero (redondeado). */
function valorEntero(entero){
    entero2=entero;
    if(entero=Number.isInteger(entero)){
        alert("Numero entero Validado:  "+ entero2);
        console.log("Numero entero Validado:  "+ entero2);
        return entero2;//Resultado entero
    }else if(entero=!Number.isInteger(entero)){
        alert("Numero decimal "+ entero2 +"  es transformado a entero  "+Math.round(entero2));
        console.log("Numero decimal "+ entero2 +"  es transformado a entero  "+Math.round(entero2));
        entero2=Math.round(entero2);
        return entero2;//Resultado transformado a entero
    }
}
