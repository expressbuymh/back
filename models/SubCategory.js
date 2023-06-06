import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  category_id: {
    type: Types.ObjectId,
    ref: 'categories',
    requiered: true
  },
  name: {
    type: String,
    required: true
  }
})

const collection = 'subCategories'

const SubCategory = model(collection, schema)
export default SubCategory/*  */
