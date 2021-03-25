let chess = "bIsPo";
let lowerChess = chess.toLocaleLowerCase();

switch(lowerChess){
  case "peao":
    console.log("Um campo para qualquer lado");
    break

  case "torre":
    console.log("Em todas as direções retas, em todos os campos");
    break
  
  case "cavalo":
    console.log("3 casas em direções retas e um para as direções laterais");
    break

  case "bispo":
    console.log("Em todas as diagonais, em todos os campos");
    break

  case "rainha":
    console.log("Em qualquer direção, em todos os capos");
    break

  case "rei":
    console.log("Em qualquer direção, em um campo")
}

