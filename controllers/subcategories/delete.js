import SubCategory from "../../models/SubCategory.js";

let destroy = async (req, res, next) => {
    try {
        let destroy_subCategories = await SubCategory.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'SubCategory Destroyed!',
            destroy_subCategories
        })
    } catch (error) {
        next(error)
    }
}
export default destroy