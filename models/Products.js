import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  ean13: { type: Number, required: false },
  stock: { type: Number, required: true },
  photo_product: { type: String, required: true },
  discount: {
    active: { type: Boolean, required: true },
    percent: { type: Number }
  },
  category_id: { type: Types.ObjectId, ref: 'categories', required: true },
  subCategory_id: { type: Types.ObjectId, ref: 'subCategories', required: true },
  department_id: { type: Types.ObjectId, ref: 'departments', required: true }
})
const collection = 'products'
const Product = model(collection, schema)
export default Product
