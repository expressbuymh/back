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
  products: [{
    product_id: {
      type: Types.ObjectId,
      ref: 'products',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  n_order: {
    type: Number,
    required: true
  },
  total_price: {
    type: Number,
    required: true
  },
  state_id: {
    type: Types.ObjectId,
    ref: "status",
    required: true
  },
  invoice_id: {
    type: Types.ObjectId,
    ref: "invoices",
    required: false
  }
}, {
  timestamps: true
})
const collection = 'orders'

const Order = model(collection, schema)
export default Order
