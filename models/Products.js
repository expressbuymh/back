import { Schema, model, Types } from "mongoose";

let schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    ean13: { type: Number, required: false },
    stock: { type: Number, required: true },
    photo_product: { type: String, required: true },
    disccount: {
        active: { type: Boolean, required: true },
        percent: { type: Number }
    }
})
let collection = 'products'
let Product = model(collection, schema)
export default Product  