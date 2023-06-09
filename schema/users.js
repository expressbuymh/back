import Joi from 'joi'

export const createUser = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().required(),
  photo: Joi.string().uri().required()
})
export const userSignIn = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().min(8).max(25).required()
})
