// evaluation model
const mongoose = require('mongoose')

const Evaluationchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userCity: {
        type: String,
        required: true
    },
    rankLevel: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Evaluation', Evaluationchema)