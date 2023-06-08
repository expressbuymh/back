import Orders from '../../models/Order.js'

const create = async (req,res,next)=> {
    try {
      
        req.body.user_id = req.user._id
        
        const newOrders = Orders(req.body)
        
        await newOrders.save()
        return res.status(201).json({
            succes: true,
            response: newOrders,
            message: 'Order created!'
        })
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

export default create