import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'users',
    required: true
  },
  /*  address_id: {
      type: mongoose.Types.ObjectId,
      ref: 'address',
      required: true
    }, */
  status_order: { type: String, required: true },
  products: [{ type: String, required: true }],
  number_of_order: { type: String, required: true }
}, {
  timestamps: true
})
const collection = 'orders'

const Order = mongoose.model(collection, schema)
export default Order
