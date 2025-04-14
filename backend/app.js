const express = require('express');
const cors = require('cors');
const app = express();
const {db} = require('./db/db')
const transaction = require('./routes/transactions')
const Income = require('./models/incomeModel')
require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// routes
app.use('/transaction', transaction)

const server = () => {
    db();
    app.listen(PORT, ()=> {
        console.log(`server is listning to PORT : ${PORT}`);
    })
}


server();