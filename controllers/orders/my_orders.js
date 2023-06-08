import Order from "../../models/Order.js";

async function myOrders(req, res, next) {
    try {
        let orders = await Order.find({ user_id: req.user.id })
        if (orders.length > 0) {
            return res.status(201).json({
                success: true,
                orders
            })
        }
        return res.status(404).json({
            success: false,
            message: {
                path: "notFound",
                message: "this user has no orders"
            }
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: "internal",
                message: "internal error server"
            }]
        })
    }
}
export default myOrders;