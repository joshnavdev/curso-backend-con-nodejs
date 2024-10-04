//// Exemplo 4
process.nextTick(() => console.log('nextTick 1'));

process.nextTick(() => {
  console.log('nextTick 2');
  process.nextTick(() => console.log('subnextTick 1 on nextTick 2'));
});

process.nextTick(() => console.log('nextTick 3'));

Promise.resolve().then(() => console.log('Promise 1'));

Promise.resolve().then(() => {
  console.log('Promise 2');
  process.nextTick(() => console.log('subnextTick 1 on Promise 2'));
});

Promise.resolve().then(() => console.log('Promise 3'));

//// Exemplo 3
Promise.resolve().then(() => {
  console.log('Promise 1');
});

process.nextTick(() => {
  console.log('nextTick 1');
});

//// Exemplo 2
console.log('console.log 1');

process.nextTick(() => {
  console.log('this is process.nextTick 1');
});

console.log('console.log 2');

//// Exemplo 1
console.log('console.log 1');
console.log('console.log 2');
console.log('console.log 3');
