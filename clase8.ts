//-Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario).
//-Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay.

import * as rls from "readline-sync";

let sizeArray:number = rls.questionInt("Cuantos numeros desea ingresar?: ");
let numberArray:number[] = new Array (sizeArray);

let negativeNumbers:number = 0;
let positiveNumbers:number = 0;
let zeroNumbers:number = 0;

for(let i:number = 0; i < numberArray.length; i++ ){
    numberArray[i] = rls.questionInt("ingrese los numeros: ");
    if(numberArray[i] < 0)
    negativeNumbers++
    else if(numberArray[i] > 0)
    positiveNumbers++
    else
    zeroNumbers++
    }
    console.log("Numero negativos ingresados: " + negativeNumbers); 
    console.log("Numeros positivos ingresados: " +positiveNumbers);
    console.log("Numeros ceros ingresados: " + zeroNumbers);
