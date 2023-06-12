import Category from "../../../models/Category.js";

const categoryExistsByName = async(req,res,next) => {
    const category = await Category.findOne({name: req.body.name})
    if(category) {
        return res.status(400).json({
            success: false,
            message: [{
                path: 'categoryExists Middle',
                message: `The categoty with the name "${category.name}" already exist`
            }]
        })
    }
    return next()
   
}

export default categoryExistsByName