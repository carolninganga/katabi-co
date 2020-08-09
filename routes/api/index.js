const path = require('path');
const router = require('express').Router();
const contactUs = require('./contact-us')

router.use('/contact-us', contactUs);



router.use(function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'))
});

module.exports = router;