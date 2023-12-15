let nomeHeroi = "exemploName"
let expHeroi = 5550
let nivelHeroi = ""

switch(true){
    case expHeroi <= 1000:
        nivelHeroi = "FERRO"
        break
    case expHeroi >1001 && expHeroi < 2000:
        nivelHeroi = "BRONZE"
        break
    case expHeroi >2001 && expHeroi <= 5000:
        nivelHeroi = "PRATA"
        break
    case expHeroi >5001 && expHeroi <= 7000:
        nivelHeroi = "OURO"
        break
    case expHeroii >7001 && expHeroi <= 8000:
        nivelHeroi = "PLATINA"
        break
    case expHeroi >8001 && expHeroi <= 9000:
        nivelHeroi = "ASCENDENTE"
        break

    case expHeroi >9001 && expHeroi <= 10000:
        nivelHeroi = "IMORTAL"
        break
    case expHeroi >= 10001:
        nivelHeroi = "RADIENTE"
        break

    default:
        nivelHeroi = "Sem elo"

    
}
      

console.log("O Herói chamado "+nomeHeroi+ " atualmente está no elo: "+ nivelHeroi);






