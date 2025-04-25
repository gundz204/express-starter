// import express
const express = require('express')
const app = express()
const connectDB = require('./config/db');

// import dan gunakan dotenv
require('dotenv').config();
const {PORT} = process.env

//import routes
const testRoute = require('./routes/testRoute')

app.use(express.json())

connectDB()

app.use('/api/v1/test', testRoute)

app.listen(PORT, ()=>{
    console.log(`app listen on: http://localhost:${PORT}`)
})