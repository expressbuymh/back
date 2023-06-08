import cartServices from "../../services/cart.service.js";

let checkoutProduct = async (req, res, next) => {
    try {
        let response = await cartServices.checkout_product()

    } catch (error) {

    }
}
export default checkoutProduct