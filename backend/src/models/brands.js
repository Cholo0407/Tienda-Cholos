import { Schema,model } from "mongoose";

const brandsSChema= new Schema({
    name:{
        type:String,
        require:true
    },
    countyOrigin:{
        type:String,
        require:true
    },
    foundationDate:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    idModels:{
        type:Schema.Types.ObjectId,
        ref:"models",
        require:true
    }
},
{timestamps:true,
    strict:false
});

export default model("brands",brandsSChema);