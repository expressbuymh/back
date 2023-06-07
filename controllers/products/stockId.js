import Product from '../../models/Products.js'

const read = async (req, res) => {
  try {

    
    const productStock = await Product.findOne({_id: req.params.id})
    
    if(productStock.stock === 0){
        return res.status(200).json({
            message: "out of stock of product"
        })
    }  else  if(productStock){
        return res.status(200).json({
            stock: productStock.stock
        })
    } else {
        return res.status(404).json({
          message: [{
            path: 'exists',
            message: "The product doesn't exists"
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
export default read