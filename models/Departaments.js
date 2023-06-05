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

const collection = 'departament'

const Departament = model(collection, schema)
export default Departament
