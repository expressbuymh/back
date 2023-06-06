import Products from '../../models/Products.js'

const read = async (req, res, next) => {
  try {
    const allProducts = await Products.find()
    return res.status(200).json({
      products: allProducts
    })
  } catch (error) {
    return res.status(400).json({
      error
    })
  }
}
export default read
