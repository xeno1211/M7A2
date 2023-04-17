const express = require('express')
const app = express()

const data = require('./data.json')

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.get('/', (reg, res) => {
    res.render('index', {data: data})
})