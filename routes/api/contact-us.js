const express = require('express');
const router = express.Router();


var nodemailer = require('nodemailer');

// Create the transporter with the required configuration for Gmail
// change the user and pass !
var transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'team@katabi.co',
        pass: 'BVHu9VyVnJSf'
    }
});

console.log("world")
router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

// setup e-mail data, even with unicode symbols
// var mailOptions = {
//     from: name, // sender address (who sends)
//     to: 'carolninganga@gmail.com', // list of receivers (who receives)
//     subject: 'Hello ', // Subject line
//     text: content, // plaintext body
//     html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
// };
console.log(`${name} <${email}>` )
var mailOptions = {
    from: `${name}` + ' <team@katabi.co>', // sender address (who sends)
    to: 'team@katabi.co', // list of receivers (who receives)
    replyTo: `${email}`,
    subject: 'Hello ', // Subject line
    text: `${content}`, // plaintext body
    // html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});











// var nodemailer = require('nodemailer');


// // var transporter = nodemailer.createTransport({
// //     service: 'gmail',
// //     auth: {
// //       user: "cindywhite29090@gmail.com",
// //       pass: "Madda2010"
// //     }
// //   });


//   var transporter = nodemailer.createTransport({
//     host: 'smtp.zoho.com',
//     port: 465,
//     secure: true, // use SSL
//     auth: {
//         user: 'team@katabi.co',
//         pass: 'BVHu9VyVnJSf'
//     }
// });

// console.log("world")
// router.post('/send', (req, res, next) => {
//   var name = req.body.name
//   var email = req.body.email
//   var message = req.body.message
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `
  

//   var mailOptions = {
//     from: name, // sender address (who sends)
//     to: 'team@katabi.co, team@katabi.co', // list of receivers (who receives)
//     subject: 'Hello ', // Subject line
//     text: content, // plaintext body
//     html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
// };

// // send mail with defined transport object
// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         return console.log(error);
//     }

//     console.log('Message sent: ' + info.response);
// });


// //   var mail = {
// //     from: name,
// //     to: 'cindywhite29090@gmail.com',
// //     subject: 'New Message from Contact Form',
// //     text: content
// //   }

// //   transporter.sendMail(mail, (err) => {
// //     if (err) {
// //       res.json({
// //         status: 'failure to send'
// //       })
// //       console.log(err);
// //     } else {
// //       res.json({
// //        status: 'success! message was sent to the Foodie Team!'
// //       })
// //     }
// //   });
// // });
})
module.exports = router;