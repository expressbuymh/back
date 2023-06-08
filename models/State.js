import { Schema, model } from 'mongoose'

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: Number,
        required: true,
    }
})

const collection = 'status'

const State = model(collection, schema)
export default State