import Category from "../../models/Category.js"

const update = async (req, res, next) => {
  try {
    const categoryUpdate = await Category.findByIdAndUpdate(
      req.params.id, req.body, { new: true })
    if (categoryUpdate) {
      return res.status(200).json({
        succes: true,
        categoryUpdate
      })
    } else {
      return res.status(400).json({
        succes: false,
        message: [{
          path: 'categories',
          message: "The Category doesn't exists"
        }]
      })
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: [{
        path: 'server',
        message: 'Error internal the server'
      }]
    })
  }
}
export default update
