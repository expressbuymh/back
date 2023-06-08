import Product from "../models/Product.js";

const productServices = {
    create: async function (body) {
        try {
            body.active = true
            body.sales = 0
            let product = await Product.create(body)
            return {
                success: true,
                status_code: 201,
                product
            }
        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: "create",
                    message: "Error while creating a product"
                }]
            }
        }
    },
    update: async function (id, body) {
        try {
            let product = await Product.findByIdAndUpdate(id, body, { new: true })
            return {
                success: true,
                status_code: 201,
                product
            }
        } catch (error) {
            return{
                success: false,
                status_code: 500,
                message: [{
                    path: "update",
                    message: "An error ocurred while updating product"
                }]
            }
        }

    },
    find: async function () {
        return null
    },
    bajarStock: async function () {
        return null
    }
}
export default productServices