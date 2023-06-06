import Product from "../../models/Products.js";

let create = async (req, res, next) => {

    try {
        let new_Product = await Product(req.body)
        await new_Product.save()
        return res.status(201).json({
            succes: true,
            message: 'Product Created!'
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
export default create