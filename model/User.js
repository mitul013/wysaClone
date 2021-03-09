const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    firstQue: [{ type: String }],
    secondQue: { type: String },
    thirdQue: { type: Date },
    fourthQue: { type: Date },
    fifthQue: { type: Number }
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