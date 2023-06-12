import Address from "../../models/address.js";

const addressExists = async(req,res,next) => {
    const address = await Address.findOne({ user_id: req.user._id, address_line: req.body.address_line })
    console.log(req.user)
    if(address) {
        return res.status(400).json({
            success: false,
            message: [{
                path: 'addresExist_middle',
                message: `The address line "${address.address_line}" already exist`
            }]
        })
    }
    return next()
}

export default addressExists