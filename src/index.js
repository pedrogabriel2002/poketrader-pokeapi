const express = require('express')
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const ejs = require('ejs')
const Trade = require('./models/historyTrade.js')
const app = express()
dotenv.config()

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

const MONGODB_CNSTRING = 'mongodb+srv://pgsilva2002:tvzzmKF67uiLxQ4o@cluster0.nsscd.mongodb.net/tradeHistory?retryWrites=true&w=majority'
const port = process.env.PORT

mongoose.connect(MONGODB_CNSTRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',() => console.log("Error in Connecting to Database"));
db.once('open',() => console.log("Connected to Database"))

app.post("/pokemon", async (req,res)=>{
    const myPoke = req.body.myPoke;
    const yourPoke = req.body.yourPoke;

    if (!myPoke && !yourPoke) {
        return res.redirect('index.html')
    }

    const trade = new Trade ({
        "myPoke": myPoke,
        "yourPoke" : yourPoke,
    })

    try {
        await trade.save()
        res.redirect('index.html')
    } catch (e) {
        console.log('Error:', e)
    }
})

app.get('/historic', async (req,res) => {
    const results = await Trade.find({});
    res.render('historic', {results: results, n: 0})        
})

app.listen(port, () => {
    console.log('Server is up on ' + port)
})