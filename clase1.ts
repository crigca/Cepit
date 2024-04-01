import * as readlineSync from 'readline-sync';

// Pregunta al usuario su nombre.
const nombre = readlineSync.question('¿Cuál es tu nombre? ');

// Imprime el nombre en la consola.
console.log(`Hola, ${nombre}!`);
