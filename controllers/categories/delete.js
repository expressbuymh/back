import Categories from '../../models/Categories.js'

const destroy = async (req, res, next) => {
  try {
    const destroyCategory = await Categories.findByIdAndDelete(req.params.id)
    return res.status(200).json({
      succes: true,
      message: 'Category Destroyed!',
      destroyCategory
    })
  } catch (error) {
    next(error)
  }
}
export default destroy
