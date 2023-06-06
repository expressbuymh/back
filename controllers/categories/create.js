import Categories from '../../models/Categories.js'

let create = async (req, res, next) => {
    try {
        let new_category = await Categories(req.body)
        await new_category.save()
        return res.status(201).json({
            succes: true,
            message: 'Category Created!'
        })
    } catch (error) {
        return res.status(400).json({
            error: error
        })
    }
}
export default create