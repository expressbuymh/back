import Address from "../../models/address.js"


const create = async (req,res,next)=> {
    try {
        const user = req.user
        req.body.user_id = user._id
        const newAddress = Address(req.body)
        await newAddress.save()
        return res.status(201).json({
            succes: true,
            message: 'Address created!'
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