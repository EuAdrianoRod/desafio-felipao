let nomeDoHeroi = "Dio Men"
let qtdeDeExperienca = 10001
let nivel = ""

if(QtdeDeExperienca <1000){
        nivel = "Ferro"
}   else if(qtdeDeExperiencatdeDeExperienca >=1001 && qtdeDeExperienca <=2000){
        nivel = "Bronze"
}   else if(qtdeDeExperienca >=2001 && qtdeDeExperienca <=5000){
        nivel = "Prata"
}   else if(qtdeDeExperienca >=5001 && qtdeDeExperienca <=7000){
        nivel = "Ouro"
}   else if(qtdeDeExperienca >=7001 && qtdeDeExperienca <=8000){
        nivel = "Platina"
}   else if(qtdeDeExperienca >=8001 && qtdeDeExperienca <=9000){
        nivel = "Ascendente"
}   else if(qtdeDeExperienca >=9001 && qtdeDeExperienca <=10000){
        nivel = "Imortal"
}   else if(qtdeDeExperienca >= 10001){
        nivel = "Radiante"
}

    console.log( "O Herói de nome " + nomeDoHeroi ,"está no nivel de " + nivel)