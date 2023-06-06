import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'

const newUser = async (req, res, next) => {
  req.body.password = bcryptjs.hashSync(req.body.password, 10)
  req.body.verify_code = crypto.randomBytes(10).toString('hex')
  req.body.is_online = false
  req.body.role = 0
  req.body.is_verified = true // hasta modificar
  try {
    await User.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'User created successfully'
    })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default newUser
