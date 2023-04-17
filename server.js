const express = require('express')
const app = express()
const port = 3000

// API
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//routes
const loanRoute = require('./routes/loanRoute')
app.use('/loan', loanRoute)

// UI
app.set('view engine', 'ejs') 
app.get('/loanUI', async (reg, res) => {
    const data =  await require('./controllers/loanController').getData()
    //const data =  loanRoute.
    //console.log("Data: " + data)   
    res.render('index', {data: data})
})  

app.listen(port, ()=> console.log(`Loan app listening on port ${port}!`))

const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://jh:UdJSuvfxvgQzIFIN@cluster0.txcchdp.mongodb.net/loanDB',{useNewUrlParser: true})
    .then(()=> console.log("MongoDB connection successful"))
    .catch((err) => console.log(err))
 