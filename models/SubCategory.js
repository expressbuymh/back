import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  _id: {
    type: Types.ObjectId,
    ref: '',
    requiered: true
  },
  Name: {
    type: String,
    required: true
  }
})

const collection = 'subCategories'

const SubCategory = model(collection, schema)
export default SubCategory
