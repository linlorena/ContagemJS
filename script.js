let N = parseInt(prompt("Digite a quantidade de números de entrada:"));
let primeiroDado = parseInt(prompt("Digite o primeiro dado:"));
let contador = 0;

for (let i = primeiroDado; i <= N; i++) {
    contador++;
}

document.write("Quantidade de valores inteiros entre ", primeiroDado, " e ", N, " é ", contador);