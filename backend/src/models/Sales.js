import { Schema, model,  } from "mongoose";

const salesSchema = new Schema(
    {
        paymentMethod: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        addres: {
            type: String,
            required: true,
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