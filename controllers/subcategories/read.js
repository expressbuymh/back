import SubCategory from '../../models/SubCategory.js'

const read = async (req, res, next) => {
  try {
    const allSubcategories = await SubCategory.find()
    return res.status(200).json({
      success: true,
      allSubcategories
    })
  } catch (error) {
    next()
  }
}
export default read
