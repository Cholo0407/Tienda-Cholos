const modelsController = {};
import modelsModel from "../models/models.js";

//select
modelsController.getmodels = async (req, res) => {
    const models = await modelsModel.find();
    res.json(models);
};

// Insert
modelsController.createmodels = async (req, res) => {
    const {name, category} = req.body;
    const newmodels = new modelsModel({name, category});
    await newmodels.save();
    res.json({message: "model save"});
}

//Delete
modelsController.deletemodels = async (req, res) => {
    const deletemodels = await modelsModel.findByIdAndDelete(req.params.id);
     if(!deletemodels) {
        return res.status(404).json({message: "model dont find"});
     }
     res.json({message: "model deleted"});
};

//Update
modelsController.updatemodels = async (req, res) => {
    const {name, category} = req.body;
    await modelsModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            category
        },
        {new: true}
    );
    res.json({message: "model update"})
}

