import Product from "../../models/Product.js"

async function existsProduct(req, res, next) {
    const name = await Product.findOne({ name: req.body.name })
    if (name) {
        return res.status(400).json({
            succes: false,
            message: [{
                path: 'existProduct_middleware',
                message: 'The product already exist'
            }]
        })
    }
    return next()
}

export default existsProduct
