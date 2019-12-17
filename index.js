const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

//connection mongodb
// connect mongo
mongoose.connect('mongodb://localhost/dilo')
    .then(db => console.log('db_conected'))
    .catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
let corsOptions = {
    origin: '*',
    methods: ['*'],
    allowedHeaders: ['Content-Type', 'tokenshop']
}
app.use(cors(corsOptions))

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log('Berhasil menjalankan server pada port 8000')
})