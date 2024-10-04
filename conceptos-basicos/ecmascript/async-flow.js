// // Callback y Promesas
// // Estructuras
// function readFileCb(success, callback) {
//   // Simulamar un proceso asincrono
//   setTimeout(() => {
//     if (success) {
//       // callback(error, data)
//       callback(null, 'Existoso');
//     } else {
//       callback('Error', null);
//     }
//   }, 3000);
// }

// console.log('Inicio del programa');
// readFileCb(false, (error, data) => {
//   // if (error) {
//   //   console.error('Error: ', error);
//   // } else {
//   //   console.log('Resultado: ', data);
//   // }

//   if (error) {
//     console.error('Error: ', error);
//     return;
//   }

//   console.log('Resultado: ', data);
// });

// // Promesas
function readFilePromise(success) {
  // Promesa: un objecto que representa un eventual resultado
  // Sus estados son: pendiente, cumplida o rechazada
  return new Promise((resolve, reject) => {
    // resolve -> indica que se cumplio la promesa
    // reject -> indica que la promesa fue rechazada
    setTimeout(() => {
      if (success) {
        resolve('Existoso');
      } else {
        reject('Error');
      }
    }, 3000);
  });
}

// console.log('Inicio del programa');
// // then y catch
// readFilePromise(false)
//   .then((data) => {
//     console.log('Resultado: ', data);
//   })
//   .catch((error) => {
//     console.error('Error: ', error);
//   })
//   .finally(() => {
//     console.log('Proceso finalizado');
//   });

// // callback hell
// // readFileCb(() => {
// //   readFileCb(() => {
// //     readFileCb(() => {
// //       readFileCb(() => {
// //         readFileCb(() => {
// //           readFileCb(() => {
// //             readFileCb(() => {});
// //           });
// //         });
// //       });
// //     });
// //   });
// // });

// // Promesas hell

// // const result = readFilePromise(true).then((data) => {
// //   console.log(data);

// //   return data + ' + then +';
// // });

// // console.log(result);

// console.log('Concatenando promesas');
// readFilePromise(true)
//   .then((data) => {
//     console.log(data);
//     // Operaciones
//     return data + '-then'; // <- Puedo retornar una promesa
//   })
//   .then((data) => {
//     console.log(data);
//     return readFilePromise(true);
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Async / Await
// No funciona con callbacks
// Solo funciona con promesas

async function handlePromises() {
  try {
    const res1 = await readFilePromise(true);
    console.log({ res1 });

    const res2 = await readFilePromise(true);
    console.log({ res2 });

    // await solo retorna resultados exitoso
    const error = await readFilePromise(false);
    console.log({ error });
  } catch (error) {
    console.error('Error: ', error);
  }
}

console.log('Manejando promesas con async/await');
handlePromises();

// En la vida real tu no sabes si una promesa va a ser exitosa o no
// Y si usas varias promesas en una funcion, no sabes cual va a fallar
// eso complica el manejo de errores

// Explicar method de promesas
// Promise.all -> espera a que todas las promesas se cumplan exitosamente, se rechaza si una falla
// Promise.allSettle -> espera a que todas las promesas se finalizen, no se rechaza si una falla
// Promise.any -> lo contrario a Promise.all, se cumple si una promesa se cumple, falla si todas fallan
// Promise.race -> espera a que uan promesa se cumpla, falla si una falla
