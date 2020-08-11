var nodemailer = require('nodemailer');



var name  = "caroline"
var email  = "caroline@gmail.com"

//'"Our Code World " <team@katabi.co>',
var s = "\"" + `${name}`  + "\" <" + `${email}`+ ">"
//console.log("\"" + `${name}`  + "\" <" + `${email}`+ ">");
console.log(s)
//process.exit();


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

// setup e-mail data, even with unicode symbols //'"Our Code World " <team@katabi.co>',
var mailOptions = {
    from: `${name}` + ' <team@katabi.co>', // sender address (who sends)
    to: 'carolninganga@gmail.com, carolninganga@gmail.com', // list of receivers (who receives)
    replyTo: `${email}`,
    subject: 'Hello ', // Subject line
    text: 'Hello world ', // plaintext body
    html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});