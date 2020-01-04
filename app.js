const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const mongoose = require('mongoose');

const app = express();
// Db Cnfg
const db = require('./config/keys').MongoURI;

//connect to mongoose db

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('mongoDB connected'))
.catch(err => console.log('err'));

// ejs 
app.use(expressLayouts);
app.set('view engine', 'ejs');

//body parser to the data from the form 
app.use(express.urlencoded({ extended: false}));


//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// port to rub the app in case of deploy and local port 5000
const PORT = process.env.PORT || 5000;


// run the server 
app.listen(PORT, console.log(`Hey Phil the server started ${PORT}`)); 