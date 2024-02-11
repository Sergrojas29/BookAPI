const express = require('express')
const db = require('./config/connection')

const {Book} = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.once('connection', ()=> {
    app.listen(PORT, ()=> {
        console.log(`BookAPI Running on port ${PORT}`)
    })
})
