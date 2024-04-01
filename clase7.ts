/*Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico verdadero o falso según 
si el primer número que se indique como parámetro es múltiplo del segundo.
    Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero.
    Recuerde que la operación mod permite saber si el resto de una división es cero.
*/



let number1:number = 40;
let number2:number = 8;

const esMultiplo = (number1:number,number2:number):boolean =>{
    if(number1 % number2 == 0)
    return true

    else
    return false
}
console.log(esMultiplo(number1,number2));