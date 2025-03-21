import {Schema,model} from "mongoose";

const customersSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    phone:{
        type:Number,
        require:true
    }
},
{
    timestamps:true,
    strict:false
});


export default model("customers",customersSchema);
