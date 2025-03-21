import {Schema,model} from "mongoose";

const customersSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        minlenght: 8,
        require:true
    },
    mail:{
        type:String,
        minlenght: 6,
        require:true
    },
    age:{
        type:Number,
        require:true,
        min: 14,
    },
    phone:{
        type:Number,
        minlenght: 8,
        require:true
    }
},
{
    timestamps:true,
    strict:false
});


export default model("customers",customersSchema);
