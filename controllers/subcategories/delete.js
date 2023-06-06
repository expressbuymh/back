import SubCategory from '../../models/SubCategory.js'

const destroy = async (req, res, next) => {
  try {
    const destroySubCategories = await SubCategory.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      success: true,
      message: 'SubCategory Destroyed!',
      destroySubCategories
    })
  } catch (error) {
    next(error)
  }
}
export default destroy
