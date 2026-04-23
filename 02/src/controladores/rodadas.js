const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogadorDaVez = 0;

const vezJogar = (req, res) => {
    const nomeJogador = jogadores[jogadorDaVez];

    jogadorDaVez++;

    if (jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }

    return res.send(`É a vez de ${nomeJogador} jogar!`);
}

const consultar=(req,res)=>{
    return res.send(jogadores);
}

const remover=(req,res)=>{

   const indiceDoArray = Number(req.query.indice)
   
   if(indiceDoArray){

   }   
}







const adicionar=(req,res)=>{
}

module.exports = {
    vezJogar,
    consultar,
    remover,
    adicionar 
}