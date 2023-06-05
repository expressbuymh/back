import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  data_user: { type: Types.ObjectId, ref: 'users', required: true },
  date_shipment: { type: Date, required: true },
  items: { type: String },
  total_price: { type: Number, required: true },
  photo_company: { type: String, required: true },
  mode_pay: { type: String, required: true },
  cuit: { type: Number }
})

const collection = 'invoices'
const Invoice = model(schema, collection)
export default Invoice
