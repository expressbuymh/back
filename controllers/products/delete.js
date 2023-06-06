import Product from '../../models/Products.js'

const destroy = async (req, res, next) => {
  try {
    const destroyProduct = await Product.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      succes: true,
      destroyProduct
    })
  } catch (error) {
    next(error)
  }
}
export default destroy
