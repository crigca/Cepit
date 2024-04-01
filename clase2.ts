 /*Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto despues de aplicarle un descuento.
 -El precio inicial del producto se ingresa por pantalla.
 -El descuento a aplicar es del 10%.
 -Precio final debe ser mostrado por pantalla.
  */
 
 const readlineSync = require ('readline-sync');

 let precio: number = readlineSync.questionInt ("Ingrese el precio del producto: ");

 let precioFinal: number = precio * 0.9 ;

 console.log("El precio del producto con descuento es: " + precioFinal);


 




 
