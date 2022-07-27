const express = require('express');
const app = express();
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors())

app.post('/contact', cors(), async (req, res) => {
    let {text} = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: 'test@test.com',
        subject: 'test email',
        html: `<div>
                    <h1>Here is your email!<h1>
                    <p>${text}</p>
                </div>`



    })

})

app.listen(
    (process.env.PORT || 4000,
        () => {
            console.log('Server is listening')
        })
)
