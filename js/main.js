/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */


var numeros = [10,2,5,45,63,78,88];

$("#numeros").html(JSON.stringify(numeros, null, 4));

var numeros_pares = numeros.filter(function(numero){
  return numero%2===0;
});

$("#numeros_pares").html(JSON.stringify(numeros_pares, null, 4));

var numeros_cuadrado = numeros.map(function(numero){
  return numero * numero;
});

$("#numeros_cuadrados").html(JSON.stringify(numeros_cuadrado, null, 4));

var numeros_dobles = [10,2,5,45,63,78,88];

numeros_dobles.forEach(function (element, index, array){
  array[index] = element*2;
});

$("#numeros_dobles").html(JSON.stringify(numeros_dobles, null, 4));

var letras = ['H','o','l','a'];
var palabra = letras.reduce(function(valor_anterior_retornado, valor_actual, index, array){
  return valor_anterior_retornado + valor_actual
});

$("#array_palabra").html(JSON.stringify(letras, null, 4));
$("#palabra").html(palabra);
console.log(numeros);
var suma = numeros.reduce(function(valor_anterior_retornado, valor_actual, index, array){
  console.log(valor_anterior_retornado + valor_actual);
  return valor_anterior_retornado + valor_actual;
},5);

$("#suma_array").html(suma);
