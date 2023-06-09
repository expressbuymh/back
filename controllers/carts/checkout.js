import cartServices from "../../services/cart.service.js";
import orderServices from "../../services/order.service.js";

let checkoutProduct = async (req, res, next) => {
    try {
        let { products_unpopulate, products_populate, address_id } = await cartServices.get_cart_order(req.user.id)
        let { order } = await orderServices.create(req.body, req.user.id, products_unpopulate, products_populate, address_id)
        let response = await cartServices.checkout(req.params.id)
        return res.status(response.status_code).json({
            succes: response.success,
            message: response.message,
            order: order,
            cart: response.cart
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
export default checkoutProduct