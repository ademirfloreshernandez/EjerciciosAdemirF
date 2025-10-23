const readline = require('readline-sync');

let num = parseInt(readline.question("Escriba un número: "));

for (let i = 1; i <= 10; i++) {
  let mul = num * i;
  console.log(num + " x " + i + " = " + mul);
}
