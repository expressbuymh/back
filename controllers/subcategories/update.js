import SubCategory from "../../models/SubCategory.js";

let update = async (req, res, next) => {
    try {
        let subCategoryUpdate = await SubCategory.findByIdAndUpdate(
            req.params.id, req.body, { new: true })
        if (subCategoryUpdate) {
            return res.status(200).json({
                succes: true,
                subCategoryUpdate
            })
        } else {
            return res.status(404).json({
                succes: false,
                message: [{
                    path: "exists",
                    message: "The SubCategory doesn't exists"
                }]
            })
        }
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message: [{
                path: "internal",
                message: "Internal server error"
            }]
        })
    }
}
export default update