import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  payment_date: {
    type: Date,
    required: true
  },
  payment_method: {
    type: String,
    required: true
  },
  date_shipment: {
    type: Date,
    required: false
  },
  total_price: {
    type: Number,
    required: true
  },
  items: {
    type: Array,
    required: false
  },
  pdf_file: {
    type: String,
    required: false,
  },
  n_order: {
    type: Types.ObjectId,
    ref: 'orders',
    required: true
  }
})

const collection = 'invoices'
const Invoice = model(collection, schema)
export default Invoice
