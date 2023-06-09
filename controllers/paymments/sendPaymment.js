import mercadopago from 'mercadopago'

const sendPaymment = (req, res, next) => {
    try {
        const prod = req.body
        console.log(prod)
        const preference = {
            items: [{
                id: 123,
                title: prod.title,
                currency_id: 'ARS',
                picture_url: prod.image,
                description: prod.description,
                category_id: 'art',
                quantity: 1,
                unit_price: prod.price
            }],
            //el link es este "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=102965140-f8a87415-333a-4de0-bfeb-7b464d752da7"//
            back_urls: {
                success: 'http://localhost:5173',
                failure: '',
                pending: ''
            },
            auto_return: 'approved',
            binary_mode: true
        }
        mercadopago.preferences.create(preference)
            .then(response => res.status(200).send({ response }))
            .catch(error => res.status(400).send({ error: error.message }))
    } catch (error) {
        next(error)
    }
}

export default sendPaymment
