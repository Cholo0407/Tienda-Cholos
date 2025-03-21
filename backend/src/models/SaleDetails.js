import { Schema, model,  } from "mongoose";

const saleDetailsSchema = new Schema(
    {
        idCustomer: {
            type: Schema.Types.ObjectId,
            ref: "Customers",
            required: [true, "El id del clientes es obligatorio"],
        },
        products: [
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
                },
                subtotal: {
                    type: Number,
                    min: [1, "La cantidad debe ser almenos 1"],
                    required: true,
                }

            }
        ],
        total: {
            type: Number,
            min: [1, "la cantidad debe ser almenos 1"],
            required:true,
        },
    },
    {
        timestamps: true,
        strict: false,
    }
)

export default model("SaleDetails", saleDetailsSchema)