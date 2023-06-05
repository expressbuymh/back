import { Schema, model } from 'mongoose'

const schema = new Schema({
  /*  _id: {
    type: Types.ObjectId,
    ref: '',
    requiered: true
  }, */
  Name: {
    type: String,
    required: true
  }
})

const collection = 'departaments'

const Departament = model(collection, schema)
export default Departament
