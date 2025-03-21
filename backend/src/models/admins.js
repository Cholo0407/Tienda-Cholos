import {Schema,model} from "mongoose";

const adminsSchema = new Schema({
      name:{
        type:String,
        require:true
      },
      password:{
       type:String,
       require:true,
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
