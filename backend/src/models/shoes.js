/* 
    campos:
        name
        description
        price
        size
        idModel
        idBrand
        stock
        gender
        releaseDate
        colors
        images
        sale
*/

import { Schema, model } from "mongoose";

const shoeSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    description: {
        type: String,
        required: [true, "La descripción es obligatoria"],
    },
    price: {
        type: Number,
        required: [true, "El precio es obligatorio"],
        min: [0, "El precio no puede ser negativo"],
    },
    size: [{
        type: Number, 
        required: [true, "Los tamaños son obligatorios"],
    }],
    idModel: {
        type: Schema.Types.ObjectId, 
        ref: "models",
        required: [true, "El ID del modelo es obligatorio"],
    },
    idBrand: {
        type: Schema.Types.ObjectId, 
        ref: "brands",
        required: [true, "El ID de la marca es obligatorio"],
    },
    stock: {
        type: Number,
        required: [true, "El stock es obligatorio"],
        min: [0, "El stock no puede ser negativo"],
    },
    gender: {
        type: String,
        required: [true, "El género es obligatorio"],
    },
    releaseDate: {
        type: Date,
        required: [true, "La fecha de lanzamiento es obligatoria"],
    },
    colors: {
        type: String, 
        required: [true, "El color es obligatorio"],
    },
    images: {
    type: String,
    required: [true, "La imagen es obligatoria"],
    },
    sale: {
        type: Number,
        default: 0
    },
}, {
    timestamps: true, 
});

export default model("Shoe", shoeSchema);