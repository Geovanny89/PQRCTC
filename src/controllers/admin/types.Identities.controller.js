const TypesIdentity = require('../../models/TipesIdentity');

const createTypeIdentity = async(req, res)=>{
    try {
        const {tipeDocument} = req.body;
        if( !tipeDocument){
            res.status(404).send("El tipo de documento no puede estar vacio")
            return
        }
        const newTipe= await TypesIdentity.create({tipeDocument})
        res.status(200).json(newTipe)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
}

module.exports={
     createTypeIdentity
};