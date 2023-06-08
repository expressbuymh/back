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
            return {
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
    delete: async function (id) {
        try {
            let product = await Product.findByIdAndDelete(id)
            if (product) {
                return {
                    success: true,
                    product,
                    status_code: 200
                }
            }
            return {
                success: false,
                message: [{
                    path: "notFound",
                    message: "The product doesnt exists"
                }],
                status_code: 404
            }

        } catch (error) {
            return {
                success: false,
                status_code: 500,
                message: [{
                    path: "delete",
                    message: "an error ocurred while deleting product"
                }]
            }
        }

    }
}
export default productServices