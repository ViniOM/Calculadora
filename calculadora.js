const prompt = require('prompt-sync')();
console.clear();

somar = (a, b) => {
    let soma = a + b
    return soma
}
menos = (a, b) => {
    let menos = a - b
    return menos
}
div = (a, b) => {
    let div = a / b
    return div
}
mult = (a, b) => {
    let mult = a * b
    return mult
}

let a = +prompt("Digite um numero: ");
let ope = prompt("Operador: ");
let b = +prompt("Digite outro numero: ");

if (ope == "+") {
    let resuMais = somar(a,b);
    console.log(resuMais);
    
}
else if (ope == "-") {
    let resuMenos = menos(a,b);
    console.log(resuMenos);
}
else if (ope == "/") {
    let resuDiv = div(a,b);
    console.log(resuDiv);
}
else if(ope == "*") {
    let resuMult = mult(a,b);
    console.log(resuMult);
}