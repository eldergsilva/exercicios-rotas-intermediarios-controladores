const get = (req,res)=>{
    return res.send(imoveis)

}

const getPorId =(req,res)=>{

    const{id} = req.params;

    const imovel = imoveis.find((item)=>{
        item.id === Number(id)

    }) 
    return  res.json(imovel)

}
module.exports={
    get,
    getPorId
}