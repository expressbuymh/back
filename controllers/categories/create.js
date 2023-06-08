import Category from '../../models/Category.js'

const create = async (req, res, next) => {
  try {
    const newCategory = await Category(req.body)
    await newCategory.save()
    return res.status(201).json({
      succes: true,
      message: 'Category Created!'
    })
  } catch (error) {
    return res.status(500).json({
      message: [{
        path: 'server',
        message: "Error internal the server"
      }]
    })
  }
}
export default create
