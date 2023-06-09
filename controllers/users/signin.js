import usersServices from '../../services/user.service.js'

const signIn = async (req, res, next) => {
  try {
    const user = await usersServices.sign_in(req.body.email)
    return res.status(200).json({
      success: true,
      user
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

export default signIn
