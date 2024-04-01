/* -Leer valores hasta que se introduzca un cero(0).
    -El usuario puede introducir valores positivos y negativos.
    -Encontrar el maximo de los elementos que se introdujeron.
    -Analizar como cambia el programa para hallar el minimo.
 */

    import  * as readlineSync from "readline-sync";

    let maxNumber = 0; 
    let number = readlineSync.questionInt("Introduzca un numero: ");
    
    while (number != 0) {
        if (number > maxNumber) {
            maxNumber = number;
        }
        number = readlineSync.questionInt("Introduzca otro numero: ");
    }
    
    if (maxNumber !== 0) {
        console.log("El numero maximo ingresado es: " + maxNumber);
    } 
    
    
    

        
        
        
    