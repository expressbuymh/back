import Order from '../../models/Orders.js'

const read = async (req, res) => {
  try {
  
    
    
    const seeOrders = await Order.findOne({_id: req.params.id})
    
   if(seeOrders){
        return res.status(200).json({
            seeOrders
        })
    } else {
        return res.status(404).json({
          message: [{
            path: 'exists',
            message: "The order doesn't exists"
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