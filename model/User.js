const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    firstQue: [{ type: String }],
    secondQue: { type: String,require:true },
    thirdQue: { type: Date,require:true }, //set time using setHours(Hour,Minutes) and get housr and minute using 
    fourthQue: { type: Date,require:true }, //  getHours() & getMinutes() method
    fifthQue: { type: Number,require:true }
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    questions: questionSchema,
    date: {
        type: Date,
        default: Date.now()
    },
    result:{
        type:Number
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;