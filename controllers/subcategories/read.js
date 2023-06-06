import SubCategory from "../../models/SubCategory.js";

let read = async (req, res, next) => {
    try {
        let all_subcategories = await SubCategory.find()
        return res.status(200).json({
            success: true,
            all_subcategories
        })
    } catch (error) {
        next()
    }
}
export default read