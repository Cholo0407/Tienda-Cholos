import {Schema,model} from "mongoose";

const adminsSchema = new Schema({
      name:{
        type:String,
        require:true
      },
      password:{
       type:String,
       require:true,
       match:[
        /^[A-Z]{8}/,
        "La contraseña debe contener excatamente 8 digitos"
       ]
      },
      mail:{
        type:String,
        require:true
      },
      age:{
        type:Number,
        require:true,
       min:18
      },
      phone:{
       type:String,
       require:true
      }
},
{
  timestamps:true,
  strict:false
});


export default model("admins",adminsSchema);
