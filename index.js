const squared = (value) => {
    return new Promise((resolve, reject) => {
      if (Number.isFinite(value)) {
        resolve(value * 2);
      } else {
        reject("The Value parameter is not a valid number");
      }
    });
  };
 
console.log(squared(10))

let result1 = squared(1)

// result1.then ((res) => {
//   let numero1 = res;
//   console.log(numero1)
//   return squared(numero1)
// } ).then ((res) => {
//   let numero2 = res;
//   console.log(numero2)
//   return squared(numero2)
// } ).then ((res) => {
//   let numero3 = res;
//   console.log(numero3)
//   return squared(numero3)
// } )

// const runPromises = async () => {
//   const valor1 = await result1;
//   console.log(valor1)
//   const valor2 = await squared(valor1);
//   console.log(valor2);
//   const valor3 = await squared(valor2);
//   console.log(valor3);
// }

// runPromises()
(async () => {
  const valor1 = await result1;
  console.log(valor1)
  const valor2 = await squared(valor1);
  console.log(valor2);
  const valor3 = await squared(valor2);
  console.log(valor3);
  const valor4 = await squared(valor3);
  console.log(valor4);
  const valor5 = await squared(valor4);
  console.log(valor5);
  const valor6 = await squared(valor5);
  console.log(valor6);
  const valor7 = await squared(valor6);
  console.log(valor7);
  const valor8 = await squared(valor7);
  console.log(valor8);
  const valor9 = await squared(valor8);
  console.log(valor9);
  const valor10 = await squared(valor9);
  console.log(valor10)
})();