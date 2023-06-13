import subcategoryServices from "../../services/subcategory.service.js";

const subcategoryExists = async (req, res, next) => {
    try {
        let response = await subcategoryServices.subcategories_name(req.body)
        if (response.subcategory_name) {
            return res.status(400).json({
                success: false,
                message: 'The subcategory is already exists'
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: [{
                path: 'Error',
                message: 'Error internal server'
            }]
        })
    }
}
export default subcategoryExists