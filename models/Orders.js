import mongoose from "mongoose";

let schema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    address_id: {
        type: mongoose.Types.ObjectId,
        ref: 'address',
        required: true
    },
    status_order: { type: String, required: true },
    products: [{ type: String, required: true }],
    number_of_order: { type: String, required: true },
},{
    timestamps: true
})
let collection = 'orders'

let Order = mongoose.model(collection,schema)
export default Order 