import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  department_id: {
    type: mongoose.Types.ObjectId,
    ref: 'departments',
    required: true
  }
}, {
  timestamps: true
})
const collection = 'categories'

const Category = mongoose.model(collection, schema)
export default Category