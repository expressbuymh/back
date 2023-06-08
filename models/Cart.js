import { Schema, model, Types } from 'mongoose'

const schema = new Schema({
  user_id: {
    type: Types.ObjectId,
    ref: "users",
    required: true
  },
  address_id: {
    type: Types.ObjectId,
    ref: "addresses",
    required: false
  },
  products:[{
    product_id: {
        type: Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
  }],
  //user_stock_id -> ver de agregar despues
},{
    timestamps: true
})

const collection = 'carts'

const Cart = model(collection, schema)

export default Cart
