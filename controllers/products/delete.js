import Product from '../../models/Product.js'

const destroy = async (req, res, next) => {
  try {
    const destroyProduct = await Product.findByIdAndDelete(req.params.id)
    if (destroyProduct) {
      return res.status(200).json({
        success: true,
        destroyProduct
      })
    } else {
      return res.status(400).json({
        success: false,
        message: [{
          path: 'product',
          message: 'The product was not found with the provided data'
        }]
      })
    }
  } catch (error) {
    return res.status(500).json({
      message:[{
        path:'server',
        message:'Error internal the server'
      }]
    })
  }
}
export default destroy
