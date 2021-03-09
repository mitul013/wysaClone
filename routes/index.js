const express = require('express');
const { ensureAuthenticated, forwardAuthenticated } = require('../middleware/auth');
const router = express.Router();
const cors =require('cors')

var corsOptions = {
    origin: 'http://localhost:5006/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.get('/',cors(corsOptions),(req,res)=>{
    console.log(req.header('Origin'))
    res.render('welcome');
})

router.get('/questions',ensureAuthenticated, (req, res) => {
    res.render('questions');
})

router.post('/questions',ensureAuthenticated, (req, res) => {
    const { first, second, thirdhour, thirdminute, fourthhour, fourthminute, fifthhour } = req.body
    const third = new Date()
    third.setHours(thirdhour,thirdminute)
    const fourth = new Date()
    fourth.setHours(fourthhour,fourthminute)
    const questions = {
        firstQue: first,
        secondQue : second,
        thirdQue : third,
        fouthQue : fourth,
        fifthQue : fifthhour
    }
     req.user.questions = questions
     req.user.result = Math.floor(Math.random()*100,2)
    req.user.save()
    .then((data)=>{
        res.status(200);
        res.redirect('/users/result')
    })
    .catch((err)=>{
        res.send(err).status('400')
    })

})

module.exports = router;