/* 
    campos:
        name
        category
*/

import {Schema, model} from "mongoose";

const modelsSchema =  new Schema(
    {
        name: {
            type: String,
            require: true,
        },

        category: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
        strict: false,

    }
);

export default model('model', modelsSchema)