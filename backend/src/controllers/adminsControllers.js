const adminCon = {};

import adminsMOdel from "../models/admins.js";

adminCon.getAdmins = async (req,res) =>{
    const admins=await adminsMOdel.find();
    res.json(admins);
};



adminCon.postAdmins = async (req,res) =>{
    const{name,password,mail,age,phone} = req.body;
    const adminsNuevos= new adminsMOdel({name,password,mail,age,phone});
    await adminsNuevos.save();
    res.json({message : "admin agregado"});
};

adminCon.deleteAdmins = async (req,res) =>{
    const deletadmins= await adminsMOdel.findByIdAndDelete(req.params.id);
    if(!deletadmins){
        return res.status(404).json({message: "admin no encontrado"});
    }
    res.json({message : "admin eliminado"})
};

adminCon.putAdmins = async (req,res) =>{
    const{name,password,mail,age,phone} = req.body;

    await adminsMOdel.findByIdAndUpdate(
        req.params.id,{
            name,
            password,
            mail,
            age,
            phone
        },
        {new : true}
    );
    res.json({message:"admin actualizado"});
};

export default adminCon;
