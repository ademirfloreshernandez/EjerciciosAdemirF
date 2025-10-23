const readline = require('readline-sync');

let N = parseInt(readline.question("Ingrese un número N: "));

for (let i = 1; i <= N; i += 2) {
  console.log(i);
}
