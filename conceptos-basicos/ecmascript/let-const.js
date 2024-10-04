//// let -> Permite declarar variables que pueden ser reasignadas
let name = 'Joshua';
console.log(name); // Joshua
name = 'Nicolas';
console.log(name); // Nicolas

//// const -> Permite declarar variables que no pueden ser reasignadas
const lastname = 'Navarro';
console.log(lastname);
lastname = 'Ruiz'; // TypeError: Assignment to constant variable.

//// var -> Antes de ES6 era la forma de declarar variables
console.log(address); // undefined
var address = 'Lima';
console.log(address); // address

//// output
var address;
console.log(address);
address = 'Lima';

//// Asinacion por valor y por referencia
// Por valor -> Tipos primitivos
let a = 10;
let b = a;
b = 12;
console.log(a, b);

//// Por referencia -> Objetos
const c = { name: 'Joshua' };
const d = c;
console.log(c, d);
d.name = 'Nicolas';
console.log(c, d);
d.name = 'Nicolas';
