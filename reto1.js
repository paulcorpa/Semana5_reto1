
var litros_leche = +prompt("Ingrese la cantidad de litros de leche entregados en el día");

var precio_galon = 5;

var cantidad_galones = litros_leche / 3.785;
var ganancia = cantidad_galones * precio_galon;

console.log("Usted a producido: "+ cantidad_galones + " galones de leche");

console.log("Su ganancia es de : " + ganancia + " nuevos soles");



