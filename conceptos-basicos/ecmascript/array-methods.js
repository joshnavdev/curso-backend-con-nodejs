const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach metodo -> recorre el array y ejecuta una funcion por cada elemento
// Recorrer el array
// numbers.forEach((number) => {
//   console.log(number);
// });

// map metodo -> recorre el array y retorna un nuevo array con los resultados de la funcion
// Obtener el cuadrado de cada numero
// const cuadrados = numbers.map((number) => {
//   return number ** 2;
// });

// console.log(cuadrados);

// filter metodo -> recorre el array y retorna un nuevo array con los elementos que cumplan la condicion
// Obtener los numeros pares

// const pares = numbers.filter((number) => {
//   return number % 2 === 0;
// });

// console.log(pares);

// find metodo -> recorre el array y retorna el primer elemento que cumpla la condicion
const primerPar = numbers.find((number) => {
  console.log(number);
  return number % 2 === 0;
});

console.log(primerPar);
