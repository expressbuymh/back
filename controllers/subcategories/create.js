import SubCategory from '../../models/SubCategory.js';

let create = async (req, res, next) => {
    try {
        let new_Subcategory = await SubCategory(req.body)
        await new_Subcategory.save()
        return res.status(201).json({
            succes: true,
            message: 'SubCategory Created!'
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
export default create