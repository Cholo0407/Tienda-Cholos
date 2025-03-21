import { Schema, model,  } from "mongoose";

const salesSchema = new Schema(
    {
        paymentMethod: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        addres: {
                adress: {
                    type: String,
                    required: true,
                    minLenght: 10
                },
                city: {
                    type: String,
                    required: true,
                    minLenght: 4
                },
                department: {
                    type: String,
                    required: true,
                },
                zipCode: {
                    type: String,
                    required: true,
                },
                additionalInformation:{
                    type: String,
                    required: false
                }
            },
        idSaleDetail: {
            type: Schema.Types.ObjectId,
            ref: "saleDetails",
            required: [true, "El id del carrito es obligatorio"] 
        },
        total: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        strict: false,
    }
)

export default model("Sales", salesSchema)