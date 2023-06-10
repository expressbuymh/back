import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'

const usersServices = {
  sign_up: async function (body) {
    body.password = bcryptjs.hashSync(body.password, 10)
    const verify = body.verify_code = crypto.randomBytes(10).toString('hex')
    body.is_online = false
    body.role = 0
    body.is_verified = true
    console.log(body)
    try {
      let sign_up = await User.create(body)
      if (sign_up) {
        return {
          success: true,
          status_code: 201,
          sign_up,
          verify
        }
      } else {
        return {
          success: false,
          status_code: 404
        }
      }
    } catch (error) {
      return {
        success: false,
        status_code: 500,
        message: [{
          path: 'internal',
          message: 'Error internal server'
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
