import Joi from 'joi'

export const newProduct = Joi.object({
    title: Joi.string()
        .required()
        .messages({
            'any.required': 'Title Required',
            'string.empty': 'Title Required'
        }),
    price: Joi.number()
        .required()
        .messages({
            'any.required': 'Price Required',
            'number.base': 'Price must be a number'
        }),
    description: Joi.string()
        .required()
        .messages({
            'any.required': 'Description Required',
            'string.empty': 'Description Required'
        }),
    photo_product: Joi.string()
        .uri()
        .required()
        .messages({
            'any.required': 'Product Photo Required',
            'string.empty': 'Product Photo Required',
            'string.uri': 'Invalid Url'
        }),
    ean13: Joi.number()
        .required()
        .messages({
            'any.required': 'Ean13 Required',
            'number.base': 'Ean13 must be a number'
        }),
    stock: Joi.number()
        .required()
        .messages({
            'any.required': 'Stock Required',
            'number.base': 'Stock must be a number'
        }),
    pages: Joi.array()
        .items(
            Joi.string()
                .uri())
        .required()
        .messages({
            'any.required': 'Pages Required',
        }),
    order: Joi.number()
        .required()
        .messages({
            'number.base': 'Order must be a number'
        })
})
