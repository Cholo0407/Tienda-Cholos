import {Schema,model} from "mongoose";

const adminsSchema = new Schema({
      name:{
        type:String,
        require:true
      },
      password:{
       type:String,
       minlenght: 8,
       require:true,
      },
      email:{
        type:String,
        minlenght: 6,
        require:true
      },
      phone:{
       type:String,
       minlenght: 8,
       require:true
      }
},
{
  timestamps:true,
  strict:false
});


export default model("admins",adminsSchema);
