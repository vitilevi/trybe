let nota = "peixe";
let estado;

if (nota >= 80){
  estado="aprovado";
} else if (nota < 80 && nota >= 60) {
  estado="espera";
} else {
  estado="reprovado";
}

switch(estado){
  case "aprovado":
    console.log("Você foi aprovado")
    break

  case "espera":
    console.log("Você está na lista de espera")
    break

  case "reprovado":
  console.log("Você foi reprovado")
  break

  default:
    console.log("Não se aplica")
    break
}

console.log(typeof estado);