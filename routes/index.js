// expess router 
const express = require('express');

// calling the express router
const router = express.Router();

router.get('/', (req, res) => res.render('welcome'));


module.exports = router;