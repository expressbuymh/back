import User from '../../models/User.js'
const token = async (req, res, next) => {
  const { email } = req.user
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { is_online: true },
      { new: true }
    )
    return res.status(200).json({
      success: true,
      user
    })
  } catch (error) {
    next(error)
  }
}

export default token
