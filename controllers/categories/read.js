import Category from "../../models/Category.js"

const read = async (req, res, next) => {
  try {
    const allCategories = await Category.find()
    return res.status(200).json({
      success: true,
      allCategories
    })
  } catch (error) {
    return res.status(400).json({
      message: [{
        path: 'categories',
        message: "No existing categories"
      }]
    })
  }
}
export default read
