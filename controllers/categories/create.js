import Categories from '../../models/Categories.js'

const create = async (req, res, next) => {
  try {
    const newCategory = await Categories(req.body)
    await newCategory.save()
    return res.status(201).json({
      succes: true,
      message: 'Category Created!'
    })
  } catch (error) {
    return res.status(400).json({
      error
    })
  }
}
export default create
