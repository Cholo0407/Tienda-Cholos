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


shoessController.getshoes = async (req, res) => {
    try {
      const { gender, color, order } = req.query;
  
      let query = {};
  
      if (gender) {
        const genders = Array.isArray(gender) ? gender : gender.split(",");
        query.gender = { $in: genders };
      }
  
      if (color) {
        const colors = Array.isArray(color) ? color : color.split(",");
        query.colors = { $in: colors };
      }
  
      let shoesQuery = shoesModel.find(query)
        .populate("idBrand", "name")  // aquí el modelo se llama 'brands'
        .populate("idModel", "name category");  // modelo 'models'
  
      if (order === "MAYOR A MENOR") {
        shoesQuery = shoesQuery.sort({ price: -1 });
      } else if (order === "MENOR A MAYOR") {
        shoesQuery = shoesQuery.sort({ price: 1 });
      }
  
      const shoes = await shoesQuery.exec();
  
      res.json(shoes);
    } catch (error) {
      console.error("Error fetching shoes:", error);
      res.status(500).json({ error: "Error fetching shoes" });
    }
  };
  


//insert
shoessController.createshoes = async (req, res) => {
    const { name, description, price, size, idModel, idBrand, stock, gender, releaseDate, colors, sale } = req.body;

     let img="";

     try {
        
     
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
        images:img,
        sale
    });

    await newshoes.save();
    res.json({ message: "shoe save" });
    } catch (error) {
        console.error("Error al crear zapato:", error.message);
        console.error("Stack:", error.stack);
        res.status(500).json({ message: "Error interno del servidor" });    }
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
            images:img,
            sale
        },
        { new: true }
    );

    res.json({ message: "shoe update" });
};

export default shoessController;
