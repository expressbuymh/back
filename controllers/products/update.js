import Product from '../../models/Products.js'

const update = async (req, res, next) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id, req.body, { new: true })
    if (updateProduct) {
      return res.status(200).json({
        succes: true,
        updateProduct
      })
    } else {
      return res.status(404).json({
        succes: false,
        message: [{
          path: 'exists',
          message: "The products doesn't exists"
        }]
      })
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: [{
        path: 'internal',
        message: 'Internal server error'
      }]
    })
  }
}
export default update
