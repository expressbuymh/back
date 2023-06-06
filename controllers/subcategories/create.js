import SubCategory from '../../models/SubCategory.js'

const create = async (req, res, next) => {
  try {
    const newSubcategory = await SubCategory(req.body)
    await newSubcategory.save()
    return res.status(201).json({
      succes: true,
      message: 'SubCategory Created!'
    })
  } catch (error) {
    return res.status(400).json({
      error
    })
  }
}
export default create
