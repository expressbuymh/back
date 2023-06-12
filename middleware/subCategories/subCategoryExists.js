import Subcategory from "../../models/SubCategory.js";

const subcategoryExists = async(req,res,next) => {
    const subCategory = await Subcategory.findOne({ name: req.body.name })
    if(subCategory) {
        return res.status(400).json({
            success: false,
            message: [{
                path: 'subCategoryExists_middle',
                message: `The subcategory with the name "${subCategory.name}" already exists`
            }]
        })
    }
    return next()
} 

export default subcategoryExists