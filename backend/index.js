import express from 'express'
import morgan from 'morgan'
import mercadopago from 'mercadopago'
import * as dotenv from 'dotenv'

const app = express()

dotenv.config()

app.use(express.json())
app.use(morgan('dev'))

mercadopago.configure({ access_token: process.env.MP_KEY })


app.post('/payment', (req, res) => {
    const product = req.body;
    let preference = {
        items: [{
            id: product.id,
            title: product.title,
            currency_id: "ARS",
            unit_price: product.price,
            quantity: 1,
            picture_url: product.image,
            description: product.description,
        }],
        back_urls: {
            success: "http://localhost:8080",
            failure: "",
            pending: "",
        },
        auto_return: "approved",
        binary_mode: true
    }

    mercadopago.preferences.create(preference).then((response) => res.status(200).send({ response }))
        .catch(error => res.status(400).send({ error: error.message })
        )

})


app.listen(8080, () => {
    console.log('Server Running...')
})