import Product from '../../models/Product.js'

const create = async (req, res, next) => {
  try {
    const newProduct = await Product(req.body)
    const product = await newProduct.save()
    if (product) {
      return res.status(201).json({
        succes: true,
        message: 'Product Created!'
      })
    }else{
      return res.status(400).json({
        message: [{
          path: 'product',
          message: "A problem occurred while creating the product"
        }]
      })
    }
  } catch (error) {
    return res.status(500).json({
      message:[{
        path:'server',
        message: 'Error internal the server'
      }]
    })
  }
}
export default create
