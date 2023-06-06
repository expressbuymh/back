import Categories from "../../models/Categories.js";

let read = async (req, res, next) => {
    try {
        let all_categories = await Categories.find()
        return res.status(200).json({
            succes: true,
            all_categories
        })
    } catch (error) {
        next(error)
    }
}
export default read