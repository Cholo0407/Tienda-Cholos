const shoessController = {};
import shoesModel from "../models/shoes.js";

//select
shoessController.getshoes = async (req, res) => {
    const shoes = await shoesModel.find();
    res.json(shoes);
};


//insert
shoessController.createshoes = async (req, res) => {
    const { name, description, price, size, idModel, idBrand, stock, gender, releaseDate, colors, images, sale } = req.body;

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
        images,
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
    const { name, description, price, size, idModel, idBrand, stock, gender, releaseDate, colors, images, sale } = req.body;

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
            images,
            sale
        },
        { new: true }
    );

    res.json({ message: "shoe update" });
};

export default shoessController;
