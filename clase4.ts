import * as rls from "readline-sync";

let maxNumber = undefined;
let number = rls.questionInt("Ingrese un numero: ");

while (number != 0) {
    if (maxNumber == undefined || number > maxNumber) {
        maxNumber = number;
    }
    number = rls.questionInt("Ingrese otro numero: ");
}

if (maxNumber != undefined) {
    console.log("El numero maximo ingresado es: " + maxNumber);

}
