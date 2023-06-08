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
    add_product: async function (cart_id, product_id, quantity) {
        try {
            let cart = await Cart.findById(cart_id)
            const existingProduct = cart.products.find(product => product.product_id.toString() === product_id)
            if (existingProduct) {
                existingProduct.quantity = quantity
            } else {
                cart.products.push({
                    product_id: product_id,
                    quantity: quantity
                })
            }
            cart.save()
            return {
                success: true,
                status_code: 200,
                cart: cart
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'add',
                    message: 'There was an error while add the cart'
                }]
            }
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
    },
    clear_product: async function (cart_id) {
        try {
            let clear = await Cart.findById(cart_id)
            clear.products = []
            await clear.save()
            return {
                success: true,
                status_code: 200,
                clear: clear
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: 'clearcart',
                    message: 'There was an error while clear the cart'
                }]
            }
        }
    }
}
export default cartServices