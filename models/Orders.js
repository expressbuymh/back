import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  user_id: {
    type: Types.ObjectId,
    ref: 'users',
    required: true
  },
    address_id: {
      type: Types.ObjectId,
      ref: 'addresses',
      required: true
    }, 
  status_order: { type: String, required: true },
  Products: [{
    _id: {
      type: Types.ObjectId,
      ref: 'products',
      requiered: true
    },
    cant: {
      type: Number,
      requiered: true
    }
  }],
  number_of_order: { type: String, required: true }
}, {
  timestamps: true
})
const collection = 'orders'

const Order = model(collection, schema)
export default Order
