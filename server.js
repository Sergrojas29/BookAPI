const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');



const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)


db.once('open', async () => {
    try {
        app.listen(PORT, () => {
            console.log(`API server running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error)
    }
    });

