// expess router 
const express = require('express');

// calling the express router
const router = express.Router();

//Login
router.get('/login', (req, res) => res.render('login'));

//Resgister
router.get('/register', (req, res) => res.render('register'));


//Register handle
router.post('/register', (req, res) =>{
   const {name, email, password, password2} = req.body;

   // validation 
   let errors = [];
//required fields
if(!name || !email || !password || !password2){
    errors.push({msg: 'Please fill all fields'});
}

if(password !== password2) {
    errors.push({msg: 'Password do not match'});
}
if(password.length < 6) {
    errors.push({msg: 'password should have more than 6 characters '});
}

if(errors.length > 0) {
    res.render('register', {
        errors,
        name,
        email,
        password,
        password2
    });
    
}else{
    res.send('you pass ')
}

// chech if the user is exsit with email
});


module.exports = router;