const brandsCon = {};

import brandsModel from "../models/brands.js"

brandsCon.getBrands = async (req,res) =>{
    const brands= new brandsModel.find();
    res.json(brands);
};


brandsCon.postBrands = async(req,res) =>{
    const{name,countyOrigin,foundationDate,description,idModels} = req.body;
    const nuevaBrands= new brandsModel({name,countyOrigin,foundationDate,description,idModels});
     await nuevaBrands.save();
     res.json({message: "brands guardada"});
};

brandsCon.deleteBrands = async (req,res) =>{
    const deleteBrands = await brandsModel.findByIdAndDelete(req.params.id);
    if(!deleteBrands){
        return res.status(404).json({message : "brand no encontrada"});
    }
    res.json({message: "brand eliminada"});
};

brandsCon.putBrands = async (req,res) =>{
    const{name,countyOrigin,foundationDate,description,idModels} = req.body;
    await brandsModel.findByIdAndUpdate(
        req.params.id,{
            name,
            countyOrigin,
            foundationDate,
            description,
            idModels
        },{new : true}
    );
    res.json({message: "brands actualizado"});
};

export default brandsCon;