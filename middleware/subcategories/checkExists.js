import subcategoryServices from "../../services/subcategory.service.js";

const subcategoryExists = async (req, res, next) => {
    try {
        let subcategory_name = await subcategoryServices.subcategories_name(req.body.name)
        if (subcategory_name) {
            return res.status(400).json({
                success: false,
                message: [{
                    path: 'exist',
                    message: 'The subcategory alredy exist'
                }]
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