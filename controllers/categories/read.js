import Categories from '../../models/Categories.js'

const read = async (req, res, next) => {
  try {
    const allCategories = await Categories.find()
    return res.status(200).json({
      succes: true,
      allCategories
    })
  } catch (error) {
    next(error)
  }
}
export default read
