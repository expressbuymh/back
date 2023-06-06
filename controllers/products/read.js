import Products from '../../models/Products.js'

let read = async (req, res, next) => {
    try {
        let all_products = await Products.find()
        return res.status(200).json({
            products: all_products
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
export default read