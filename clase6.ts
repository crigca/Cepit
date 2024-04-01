import * as rls from "readline-sync";



for(let i = 0; i = 9; i++){
let note = rls.questionInt("Ingrese una nota: ");
note = note + note;
let promedio = note/10;

}
console.log("El promedio de las 10 notas es: " + promedio);