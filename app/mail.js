/* eslint-disable */
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
// let urlencodedParser = bodyParser.urlencoded({extended: false});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use("/components", express.static(path.join(__dirname,  'components')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, response) => {
  response.render('contact');
});

app.post('/send', (req, res) => {
  const output = `
    <h3>Контактные данные:</h3>
    <ul>
      <li>Имя: ${req.body.name}</li>
      <li>Почта: ${req.body.email}</li>
      <li>Телефон: ${req.body.phone}</li>
    </ul>
    <h3>Сообщение</h3>
    <p>${req.body.message}</p>
  `;

// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'spqk1319@gmail.com', // generated ethereal user
            pass: '4285080gmail' // generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
      });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Сообщение от:" <spqk1319@gmail.com>', // sender address
        to: 'spqk1319@gmail.com', // list of receivers
        subject: 'Сообщение с сайта rezyltat.com', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        res.render('contact', {msg: 'Email hase been send'});
    });
    });

app.listen(3000, () => console.log('Server Started...'));
