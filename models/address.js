import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: 'users',
      required: true
    },
    address: { type: String, required: true },
  }, {
    timestamps: true
  })
  const collection = 'addresses'
  
  const Address = mongoose.model(collection, schema)
  export default Address