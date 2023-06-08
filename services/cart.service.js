import Cart from '../models/Cart.js'

const cartServices = {
    create: async function (userId) {
        try {
            let data = {
                user_id: userId,
                address_id: null,
                products: [],
            }
            let newCart = await Cart.create(data)
            return {
                success: true,
                cart: newCart,
                status_code: 200
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'create',
                    message: 'There was an error while creating the cart'
                }]
            }
        }
    },
    add_product: async function () {
        try {
            let addCart = await Cart
        } catch (error) {

        }
    },
    get_by_id: async function (cart_id) {
        try {
            let cart = await Cart.findById(cart_id)
            if (cart) {
                return {
                    success: true,
                    cart,
                    status_code: 200
                }
            } else {
                return {
                    success: false,
                    status_code: 404,
                    message: [{
                        path: 'notFound',
                        message: 'No shopping cart found'
                    }]
                }
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'getcart',
                    message: 'There was an error while getting the cart'
                }]
            }
        }
    }
}