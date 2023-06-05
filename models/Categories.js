import mongoose from "mongoose";

let schema = new mongoose.Schema({
    name: { type: String, required: true },
    _id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    }
},{
    timestamps: true
})
let collection = 'categories'

let Category = mongoose.model(collection,schema)
export default Category