const mongoose = require('mongoose')

const tradeSchema = new mongoose.Schema({
    myPoke: {
        type: [],
        required: true,
    },
    yourPoke: {
        type: [],  
        required: true,
    }

})

const Trade = mongoose.model('Trade', tradeSchema)

module.exports = Trade