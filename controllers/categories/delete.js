import Categories from '../../models/Categories.js'

let destroy = async (req, res, next) => {
    try {
        let destroy_category = await Categories.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            succes: true,
            message: 'Category Destroyed!',
            destroy_category
        })
    } catch (error) {
        next(error)
    }
}
export default destroy