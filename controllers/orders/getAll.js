import Order from "../../models/Orders.js"

let getOrders = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 8,
        page: 1
    }
    if (req.query.status_order) {
        queries.status_order = req.query.status_order
    }
    if (req.query.number_of_order) {
        queries.number_of_order = req.query.number_of_order
    }
    if (req.query.limit) {
        pagination.limit = Number(req.query.limit)
    }
    if (req.query.page) {
        pagination.page = Number(req.query.page) || 0
    }
    try {
        let all = await Order
            .find(queries)
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        return res.status(200).json({
            succes: true,
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

export default getOrders