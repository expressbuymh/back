import User from '../../models/User.js'
import crypto from 'crypto'
import bcryptjs from 'bcryptjs'
import nodemailer from 'nodemailer'
import { verifyCode } from '../html/userCreate.js'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
})

const newUser = async (req, res, next) => {
  req.body.password = bcryptjs.hashSync(req.body.password, 10)
  req.body.verify_code = crypto.randomBytes(10).toString('hex')
  req.body.is_online = false
  req.body.role = 0
  req.body.is_verified = true // hasta modificar
  try {
    const { name, email } = req.body
    await User.create(req.body)
    const mailOptions = {
      from: 'expressbuymh@gmail.com',
      to: email,
      subject: 'Hello, we have successfully received your payment, thank you very much for your purchase.',
      html: verifyCode({ name, messageText: 'To enjoy the content of ExpressBuy please verify your email', textButton: 'Verify Code', verifyCode: req.body.verify_code })
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('send email:', info.response)
      }
    })
    return res.status(201).json({
      success: true,
      message: 'User created successfully'
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

export default newUser
