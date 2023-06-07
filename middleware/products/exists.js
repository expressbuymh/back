import Product from "../../models/Products.js"

async function existsProduct(req, res, next) {
    const titleManga = await Product.findOne({ title: req.body.title })
    if (titleManga) {
        return res.status(400).json({
            succes: false,
            statusCode: 400,
            message: "This product already exist"
        })
    }
    return next()
}

export default existsProduct
