import { Schema, model,  } from "mongoose";

const salesSchema = new Schema(
    {
        paymentMethod: {
            type: String,
            required: true,
        },
        state: {
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
        idCustomer:{
            type: Schema.Types.ObjectId,
            ref: "Customers",
            required: [true, "El id del cliente es obligatorio"]
        },
        saleDetail: [
            {
                idProduct: {
                    type: Schema.Types.ObjectId,
                    ref: "Shoes",
                    required: true,
                },
                quantity: {
                    type: Number,
                    min: [1, "La cantidad debe ser almenos 1"],
                    required: true,
                }
            }
        ],
        total: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        strict: false,
    }
)

export default model("Sales", salesSchema)