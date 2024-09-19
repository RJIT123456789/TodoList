const express = require('express')
const path = require('path')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
connectdb();
const cors = require('cors');
app.use(cors());

// for data get in api
app.use(express.json());

// load route
app.use('/api',web)
// localhost:4000/api

// server create
app.listen(process.env.PORT,()=> {
    console.log(`server running on localhost : ${process.env.PORT}`)
})