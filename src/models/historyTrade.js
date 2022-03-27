const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    myPoke: {
        type: String,
        required: false,
    },
    yourPoke: {
        type: String,  
        required: false,
    }

})

const Trade = mongoose.model('Trade', tradeSchema)

module.exports = Trade