//Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

let salarioBruto = 4246.42;
let inss;
let ir;

if (salarioBruto <= 1556.94){
    inss = salarioBruto * 0.08; 
} else if (salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.110
} else {
    inss = 570
}

let primeiroDesconto = salarioBruto - inss;

if (primeiroDesconto <= 1903.98){
    ir = 0
} else if (primeiroDesconto <= 2826.65){
    ir = primeiroDesconto * 0.075
} else if (primeiroDesconto <= 3751.05){
    ir = primeiroDesconto * 0.15
} else if (primeiroDesconto <= 4664.68){
    ir = primeiroDesconto * 0.225
} else {
    ir = primeiroDesconto * 0.275
};

let salarioFinal = primeiroDesconto - ir;

console.log(salarioFinal);