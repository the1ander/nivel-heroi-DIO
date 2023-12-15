let nomeHeroi = "danilo"
let expHeroi = ""
let nivelHeroi = 5550

switch(true){
    case nivelHeroi <= 1000:
        nivelHeroi= "FERRO"
        break
    case nivelHeroi >1001 && nivelHeroi < 2000.99:
        nivelHeroi = "BRONZE"
        break
    case nivelHeroi >2001 && nivelHeroi <= 5000:
        nivelHeroi = "PRATA"
        break
    case nivelHeroi >5001 && nivelHeroi <= 7000:
        nivelHeroi = "OURO"
        break
    case nivelHeroi >7001 && nivelHeroi <= 8000:
        nivelHeroi = "PLATINA"
        break
    case nivelHeroi >8001 && nivelHeroi <= 9000:
        nivelHeroi = "ASCENDENTE"
        break

    case nivelHeroi >9001 && nivelHeroi <= 10000:
        nivelHeroi = "IMORTAL"
        break
    case nivelHeroi >= 10001:
        nivelHeroi = "RADIENTE"
        break

    default:
        nivelHeroi = "Sem elo"

    
}
      

console.log("O Herói chamado "+nomeHeroi+ " atualmente está no elo: "+ nivelHeroi);




