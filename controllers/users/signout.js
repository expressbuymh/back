import usersServices from '../../services/user.service.js'

const signOut = async (req, res, next) => {
  const { email } = req.user
  try {
    await usersServices.sign_out(email)
    return res.status(200).json({
      success: true,
      message: 'Logout successful'
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: [{
        path: 'Error',
        message: 'Internal server error'
      }]
    })
  }
}

export default signOut
