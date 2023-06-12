import Joi from 'joi'

export const createInvoice = Joi.object({
    payment_date: Joi.date().required(),
    payment_method: Joi.string().required(),
    date_shipment: Joi.date().optional(),
    total_price: Joi.number().required(),
    items: Joi.array().optional(),
    pdf_file: Joi.string().optional(),
    n_order: Joi.number().optional()
  })