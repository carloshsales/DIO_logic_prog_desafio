//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

const Personagem = {
    nome: 'Karsus',
    xp: 0
}

const Categorias = {
    Ferro: 1000,
    Bronze: 2000,
    Prata: 5000,
    Ouro: 7000,
    Platina: 8000,
    Ascendente: 9000,
    Imortal: 10000,
    Radiante: 10001

}

let chave
const max = 1500
const min = 1
for(let i = 0; i < 10; i++){
    const fator = Math.random()
    const expoente = fator ** 8
    Personagem.xp += Math.floor(expoente * (max - min + 1) + min) 
}

const atribuirCategoria = (categorias, limite) => {
    return Object.keys(categorias).find(key => categorias[key] === limite)
}


if(Personagem.xp <= Categorias.Ferro){
    chave = atribuirCategoria(Categorias, Categorias.Ferro)
}else if(Personagem.xp > Categorias.Ferro && Personagem.xp <= Categorias.Bronze){
    chave = atribuirCategoria(Categorias, Categorias.Bronze)
}else if(Personagem.xp > Categorias.Bronze && Personagem.xp <= Categorias.Prata){
    chave = atribuirCategoria(Categorias, Categorias.Prata)
}else if(Personagem.xp > Categorias.Prata && Personagem.xp <= Categorias.Ouro){
    chave = atribuirCategoria(Categorias, Categorias.Ouro)
}else if(Personagem.xp > Categorias.Ouro && Personagem.xp <= Categorias.Platina){
    chave = atribuirCategoria(Categorias, Categorias.Platina)
}else if(Personagem.xp > Categorias.Platina && Personagem.xp <= Categorias.Ascendente){
    chave = atribuirCategoria(Categorias, Categorias.Ascendente)
}else if(Personagem.xp > Categorias.Ascendente && Personagem.xp <= Categorias.Imortal){
    chave = atribuirCategoria(Categorias, Categorias.Imortal)
}else{
    chave = atribuirCategoria(Categorias, Categorias.Radiante)
}

console.log(`O Herói de nome ${Personagem.nome} está no nível de ${chave}`)
