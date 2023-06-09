import Joi from 'joi'

export const create_schema = Joi.object({
    name: Joi.string().min(3).required(),
    photo: Joi.string().uri().required(),
    description: Joi.string().min(3).required(),
    price: Joi.number().min(0.1).required(),
    ean13: Joi.number().required(),
    stock: Joi.number().min(1).required(),
    department_id: Joi.string().required(),
    category_id: Joi.string().required(),
    subcategory_id: Joi.string().required()
})
export const update_schema = Joi.object({
    name: Joi.string().min(3),
    photo: Joi.string().uri(),
    description: Joi.string().min(3),
    price: Joi.number().min(0.1),
    ean13: Joi.number(),
    stock: Joi.number().min(1),
    department_id: Joi.string(),
    category_id: Joi.string(),
    subcategory_id: Joi.string()
})
