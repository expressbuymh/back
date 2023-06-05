import {Schema, model, Types} from "mongoose";

let schema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required: true},
    direction: {
        type: String,
        ref: 'directions',
        required: true,
    },
    role: {type: String, required: true},
    is_online: {type: Boolean, required: true},
    is_verified: {type: Boolean, required: true},
    verify_code: {type: String, required: true},
    photo: {type: String, required: true},
    stock_id: {
        type: Types.ObjectId,
        ref: 'stocks',
        required: true
     }
},{
    timestamps: true
})

let collection = 'users'
let User = model(collection, schema)
export default User