import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  _id: {
    type: Types.ObjectId,
    ref: '',
    requiered: true
  },
  User_id: {
    type: Types.ObjectId,
    ref: '',
    required: true
  },
  Products: [{
    _id: {
      type: Types.ObjectId,
      ref: '',
      requiered: true
    },
    cant: {
      type: Number,
      requiered: true
    }
  }]
})

const collection = 'stocks'

const Stock = model(collection, schema)
export default Stock
