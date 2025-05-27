const shoessController = {};
import shoesModel from "../models/shoes.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

console.log("Cloudinary config:", config.cloudinary);

cloudinary.config({
  cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});



 
//select
shoessController.getshoes = async (req, res) => {
    const shoes = await shoesModel.find();
    res.json(shoes);
};


//insert
shoessController.createshoes = async (req, res) => {
    const { name, description, price, size, idModel, idBrand, stock, gender, releaseDate, colors, sale } = req.body;

     let img="";
     if(req.file){  
        const resul = await cloudinary.uploader.upload(req.file.path,{
            folder: "public",
            allowed_formats: ["png","jpg","jpeg"],
        });
        img = resul.secure_url;
     }
    const newshoes = new shoesModel({
        name,
        description,
        price,
        size,
        idModel,
        idBrand,
        stock,
        gender,
        releaseDate,
        colors,
        img,
        sale
    });

    await newshoes.save();
    res.json({ message: "shoe save" });
};

//delete
shoessController.deletedshoes = async (req, res) => {
    const deletedshoes = await shoesModel.findByIdAndDelete(req.params.id);
    if (!deletedshoes) {
        return res.status(404).json({ message: "shoe dont find" });
    }
    res.json({ message: "shoe deleted" });
};



//update
shoessController.updateshoes = async (req, res) => {
    const { name, description, price, size, idModel, idBrand, stock, gender, releaseDate, colors, sale } = req.body;

    let img="";
     if(req.file){  
        const resul = await cloudinary.uploader.upload(req.file.path,{
            folder: "public",
            allowed_formats: ["png","jpg","jpeg"],
        });
        img = resul.secure_url;
     }
    await shoesModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            description,
            price,
            size,
            idModel,
            idBrand,
            stock,
            gender,
            releaseDate,
            colors,
            img,
            sale
        },
        { new: true }
    );

    res.json({ message: "shoe update" });
};

export default shoessController;
