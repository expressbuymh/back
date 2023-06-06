import Product from "../../models/Products.js";

let destroy = async (req, res, next) => {
    try {
        let destroy_product = await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes: true,
            destroy_product
        })
    } catch (error) {
        next(error)
    }
}
export default destroy