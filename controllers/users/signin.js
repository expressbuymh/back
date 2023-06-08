import User from '../../models/User.js'
import jwt from 'jsonwebtoken'
import usersServices from '../../services/user.service.js'

const signIn = async (req, res, next) => {
  try {
    const user = usersServices.sign_in(req.body.email)
    
    return res.status(200).json({
      success: true,
      token,
      user
    })
  } catch (error) {
    next(error)
  }
}

export default signIn
