import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const usersServices = {
  sign_up: async function (email, password) {
    try {
      const newUser = new User({ email, password })
      const user = await newUser.save()
      const token = await this.jwt_sign(user)
      return { token, user }
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'create',
          message: 'Error while creating a user'
        }]
      }
    }
  },

  sign_in: async function (email) {
    try {
      const user = await User.findOneAndUpdate(
        { email },
        { is_online: true },
        { new: true }
      )
      const token = await this.jwt_sign(user)
      return { token, user }
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'Sign in',
          message: 'Failed to login'
        }]
      }
    }
  },

  sign_out: async function (email) {
    try {
      await User.findOneAndUpdate(
        { email },
        { is_online: false },
        { new: true }
      )
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'Sign out',
          message: 'Error while credential'
        }]
      }
    }
  },

  sign_in_token: async function (user) {
    try {
      const token = await this.jwt_sign({ user })
      return { user, token }
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'Sign in',
          message: 'Failed to login'
        }]
      }
    }
  },

  jwt_sign: async function (user) {
    try {
      const token = jwt.sign(
        { id: user._id },
        process.env.SECRET,
        { expiresIn: 60 * 60 * 24 }
      )
      return token
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'Token',
          message: 'Error no token'
        }]
      }
    }
  }
}

export default usersServices
