const express = require('express');
const cors = require('cors')
const expressLayouts = require('express-ejs-layouts');
require('./db/connection');
const passport = require('passport');
//flash
const flash = require('connect-flash');

const path = require('path');

//express session
const session = require('express-session');
const app = express();
require('./config/passport-config')(passport);


//EJS
// app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))
app.use(session({
    secret: 'asdfg',
    resave: true,
    saveUninitialized: true
}))


//passport middleware
app.use(passport.initialize());
app.use(passport.session());


//flash middleware
app.use(flash());

var whitelist = ['http://wysaclone.com','http://localhost:5006','https://wysaclone.herokuapp.com/']
var corsOptions = {
  origin: function (origin, callback) {
      console.log(origin)
    if (whitelist.indexOf(origin) !== -1 || origin == undefined) { 
      callback(null, true)                                        
    } else {                                                      
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions))



//middleware for flash messages
app.use(function (req, res, next) {
    console.log("-- Outer app.js --");
    res.locals.data = req.flash('success_msg');
    res.locals.error = req.flash('error');
    res.locals.error_msg = req.flash('error_msg');
    next();
})



// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/user.js'));



const PORT = process.env.PORT || 5006;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})