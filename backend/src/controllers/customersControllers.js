const customersCon={};

import customersModel from "../models/customers.js";

customersCon.getCustomers = async (req,res) =>{
    const customers = await customersModel.find();
    res.json(customers);
};

customersCon.postCustomers = async (req,res) =>{
    const{name,password,mail,age,phone}=req.body;
    const nuevoCustomer= new customersModel({name,password,mail,age,phone});
    await nuevoCustomer.save();
    res.json({message: "customer agregado"});
};


customersCon.deleteCustomer = async (req,res) =>{
    const deleteCustomers = await customersModel.findByIdAndDelete(req.params.id);
    if(!deleteCustomers){
        return res.status(404).json({message: "customer no encontrado"});
    }
    res.json({message :"customer eliminado"});
};

customersCon.putCustomer = async (req,res) =>{
    const{name,password,mail,age,phone} = req.body;
    await customersModel.findByIdAndUpdate(
        req.params.id,{
            name,
            password,
            mail,
            age,
            phone
        },
        {new : true}
    );
    res.json({message : "customer actualizado"});
};

export default customersCon;
