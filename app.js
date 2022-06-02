const dotenv = require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes')

const app = express()
const PORT = process.env.PORT || 8080
const MONGODB_URI = process.env.MONGODB_URI

// Middlewares.
app.use(cors())
app.use(morgan('tiny'))
app.use('/api', router)

// MongoDB Setup.
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Database Connection.
const conn = mongoose.connection

conn.on('error', console.error.bind('console', 'Failed To Connect To MongoDB'))
conn.once('open', () => {
    console.log('Successfully Connected To MongoDB')
})

app.listen(PORT, () => {
    console.log(`Server Started At Port: ${PORT}`)
})

module.exports = app
