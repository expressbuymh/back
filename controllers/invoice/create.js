import Invoice from '../../models/Invoice.js'
import User from '../../models/User.js'
import nodemailer from 'nodemailer'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }
})

let create = async (req, res, next) => {

    let name = 'facu'
    let email = 'cartolanofacundo@gmail.com' //Estos datos son para el email//
    try {
        await Invoice.create(req.body);
        const mailOptions = {
            from: 'expressbuymh@gmail.com',
            to: email,
            subject: 'Hello, we have successfully received your payment, thank you very much for your purchase.',
            html: `
            <html>
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>

<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
        style="font-family: 'Roboto', sans-serif;">
        <!-- header -->
        <tr>
            <td style="text-align: center;">
                <figure style="padding: 20px; border-bottom: 1px solid #4338CA;">
                    <img src=" "
                        alt=" ACA TIENE QUE IR EL NOMBRE DE LA EMPRESA O VEMOS">
                </figure>

            </td>
        </tr>
        <tr>
            <td style="padding:0 40px;">
                <img width="600"
                    src="https://img.freepik.com/vector-premium/colorido-logo-mercado-gradiente_23-2148472540.jpg"
                    alt="">
            </td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
        <tr>
            <td>
                <p style="font-weight: 300; color: #4338CA; text-align: center;">Hello, ${name}</p>
            </td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
        <tr>
            <td style="font-size: 14px; font-weight: 500; text-align: center;">We want to thank you for choosing us, we are here for whatever you need. Here you can download your invoice. Thank you very much.</td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
        <tr>
            <td>

            </td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
        <tr>
            <td style="text-align: center;">
                <a style="border:0; outline:0; text-decoration:none; padding: 10px; background-color: #4338CA; border-radius: 20px; color: #fff;"

                    target="_blank" href=" ">

                    Download Invoice
                </a>
            </td>
        </tr>
        <tr>
            <td height="20"></td>
        </tr>
    </table>

</body>

</html>
            `
        }
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error)
            } else {
                console.log("send email:", info.response)
            }
        })
        return res.status(201).json({
            success: true,
            message: "Invoice Created!"
        })
    } catch (error) {
        console.log(error);
    }
}

export default create



