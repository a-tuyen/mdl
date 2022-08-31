const express = require('express');
const router = express.Router();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
// const port = process.env.PORT || 8080;
const port = 5000;

const nodemailer = require('nodemailer');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/contact', router)

const contactEmail = nodemailer.createTransport({
    // service:'goDaddy',
    host: process.env.MAIL_HOST,
    // secure: true,
    // secureConnection: false, // TLS requires secureConnection to be false
    // tls: {
    //     ciphers: 'SSLv3'
    // },
    // requireTLS: true,
    port: process.env.MAIL_PORT,
    // debug: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});


contactEmail.verify((error) => {
    if (error) {
        console.log('error: ' + error)
    } else {
        console.log("Ready to Send");
    }
});

app.post("/contact", (req, res) => {
    console.log('BODY: ', req.body)
    const name = req.body.name;
    const company = req.body.company;
    const phone = req.body.phone;
    const email = req.body.email;
    const message = req.body.message;
    const mail = {
        from: name,
        to: process.env.MAIL_FROM,
        subject: "Contact Form Submission",
        html: `<p>Name: ${name}</p>
        <p>Company: ${company}</p>
            <p>Phone #: ${phone}<p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            // res.json({ status: "ERROR" });
            return console.log(error.message);
        } else {
            res.json({ status: "Message Sent" });
        }
    });
});

const welcomeMsg = 'Welcome to the contact page!!';

app.get('/contact', (req, res) => {
    res.json('welcome: ' + req.body);
})


app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});