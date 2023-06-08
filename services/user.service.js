import User from "../models/User.js";
import jwt from 'jsonwebtoken'

const usersServices = {
    sign_in: async function (email) {
        let user = await User.findByIdAndUpdate(
            { email: email, },
            { is_online: true },
            { new: true }
        )
        let token = this.jwt_sign(user)
        return {token, user}
    },
    sing_up: async function () {
        return null
    },
    sign_out: async function () {
        return null
    },
    sign_in_token: async function () {
        return null
    },
    jwt_sign: async function (user) {
        return jwt.sign(
            { id: user._id },
            process.env.SECRET,
            { expiresIn: 60 * 60 * 24 }
        )
    }


}

export default usersServices;