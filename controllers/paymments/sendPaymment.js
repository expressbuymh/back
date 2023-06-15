import mercadopago from 'mercadopago'

const sendPaymment = (req, res, next) => {
    try {
        const { title, picture_url, description, quantity, unit_price } = req.body[0]
        const preference = {
            items: [{
                id: 123,
                title: title,
                currency_id: 'ARS',
                picture_url: picture_url,
                description: description,
                category_id: 'art',
                quantity: quantity,
                unit_price: unit_price
            }],
            //el link es este "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=102965140-f8a87415-333a-4de0-bfeb-7b464d752da7"//
            back_urls: {
                success: '',
                failure: '',
                pending: '',
            },
            auto_return: 'approved',
            binary_mode: true
        }
        mercadopago.preferences.create(preference)
            .then(response => res.status(200).send({ response }))
            .catch(error => {
                console.log(error)
                res.status(400).send({ error: error.message })
            })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default sendPaymment
