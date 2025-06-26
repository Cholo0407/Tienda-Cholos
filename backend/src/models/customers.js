import { Schema, model } from "mongoose";

const customersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  mail: {
    type: String,
    minlength: 6,
    required: true,
    unique: true, // evitar correos repetidos
  },
  age: {
    type: Number,
    required: true,
    min: 14,
  },
  phone: {
    type: String,
    minlength: 8,
    required: true,
  }
}, {
  timestamps: true,
  strict: false
});

export default model("customers", customersSchema);