import cartServices from "../../services/cart.service.js";

let deleteProduct = async (req, res, next) => {
    try {
        let response = await cartServices.delete_product(req.params.id)
        return res.status(response.status_code).json({
            succes: response.success,
            message: response.message,
            delete_product: de
        })
    } catch (error) {

    }
}
export default deleteProduct