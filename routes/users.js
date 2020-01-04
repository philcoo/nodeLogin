// expess router 
const express = require('express');

// calling the express router
const router = express.Router();

//Login
router.get('/login', (req, res) => res.render('login'));

//Resgister
router.get('/register', (req, res) => res.render('register'));


module.exports = router;