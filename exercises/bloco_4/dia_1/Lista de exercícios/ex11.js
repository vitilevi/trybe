let salarioBruto = 3001;
let salarioLiquido;
let inss;
let ir;

if (salarioBruto <= 1556.94){
  inss = salarioBruto*(8/100);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  inss = salarioBruto*(9/100);
} else if (salarioBruto >= 2594.96 && salarioBruto <= 5189.82){
  inss = salarioBruto*(11/100);
} else if (salarioBruto > 5189,82){
  inss = 570.88;
}

if (salarioBruto <= 1903.98){
  ir = 0;
} else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.85) {
  ir = salarioBruto*(7.5/100) - 142.8;
} else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
  ir = salarioBruto*(15/100) - 354.8;
} else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
  ir = salarioBruto*(22.5/100) - 636.13;
} else if (salarioBruto >= 4664.68) {
  ir = salarioBruto*(27.5/100) - 869.36;
}


salarioLiquido = salarioBruto - ir - inss;
console.log("Seu salário bruto é de", salarioBruto, "seu salário após deduções é de", salarioLiquido)
