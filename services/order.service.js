import Order from "../models/Order.js";

const orderServices = {
    create: async function (body, user_id, products_unpopulate, products_populate, address_id) {
        try {
            body.address_id = address_id
            body.products = products_unpopulate
            body.user_id = user_id
            body.n_order = await this.get_last_order() + 1
            console.log(body.n_order)
            body.total_price = this.get_total_price(products_populate)
            let order = await Order.create(body)
            
            return {
                success: true,
                status_code: 201,
                order
            }
        } catch (error) {
            
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'create',
                    message: 'There was an error while creating the order'
                }]
            }
        }
    },
    get_last_order: async function () {
        try {
            let order = await Order.find().sort({ n_order: -1 }).limit(1)
            
            if (order.length > 0) {
                return order[0].n_order
            }
            return 0
        } catch (error) {

        }
    },
    get_total_price: function (products) {
        let total_price = 0
        if (products.length > 0) {
            for (let product of products) {
                total_price += product.product_id.price * product.quantity
            }
        }
        return total_price
    }
}
export default orderServices