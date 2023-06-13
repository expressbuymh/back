import addressService from '../../services/address.service.js'

const addressExists = async (req, res, next) => {
    try {
        let response = await addressService.get_me(req.user._id)
        if (response.addressMe) {
            return res.status(400).json({
                success: false,
                message: [{
                    path: 'checkexists',
                    message: 'The address already exists'
                }]
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: 'Error',
                message: 'Error internal server'
            }]
        })
    }
}

export default addressExists