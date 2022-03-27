const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    myPoke: {
        type: String,
        required: true,
    },
    yourPoke: {
        type: String,  
        required: true,
    }

})

const Trade = mongoose.model('Trade', tradeSchema)

module.exports = Trade