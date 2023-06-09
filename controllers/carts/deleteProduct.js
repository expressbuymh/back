import cartServices from "../../services/cart.service.js";

let deleteProduct = async (req, res, next) => {
    try {
        let response = await cartServices.delete_product(req.params.id, req.body)
        return res.status(response.status_code).json({
            succes: response.success,
            message: response.message,
            product_delete: response.product_delete
        })
    } catch (error) {

    }
}
export default deleteProduct