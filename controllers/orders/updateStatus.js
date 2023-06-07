import Order from "../../models/Orders.js";

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        let update = await Order.updateOne(
            {_id:  id },
            req.body
        )
        if (update.modifiedCount) {
            return res.status(200).json({
                success: true,
                message: 'update',
                update
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
};


export default update