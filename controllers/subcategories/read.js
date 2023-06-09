import SubCategory from "../../models/SuCcategory.js"


const read = async (req, res, next) => {
  try {
    const allSubcategories = await SubCategory.find()
    return res.status(200).json({
      success: true,
      allSubcategories
    })
  } catch (error) {
    return res.status(400).json({
      message: [{
        path: 'categories',
        message: "No existing Subcategories"
      }]
    })
  }
}
export default read
