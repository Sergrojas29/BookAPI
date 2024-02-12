const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//!debug
// const {Book} = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

//! test
// app.get('/', async (req, res) => {
//     try {
//         const allData = await Book.find({})
//         res.status(200).json(allData)
//     } catch (error) {
//         res.status(404).json(error)
        
//     }
// })




db.once('open', async () => {
    try {

        app.listen(PORT, () => {
            console.log(`API server running on port http://localhost:${PORT}`);
        });
    } catch (error) {

        console.log(error)

    }
    });

