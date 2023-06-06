import Product from '../../models/Products.js'

const create = async (req, res, next) => {
  try {
    const newProduct = await Product(req.body)
    await newProduct.save()
    return res.status(201).json({
      succes: true,
      message: 'Product Created!'
    })
  } catch (error) {
    return res.status(400).json({
      error
    })
  }
}
export default create
