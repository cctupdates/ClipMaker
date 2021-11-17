const express = require('express')
const fileUpload = require('express-fileupload')
const connectDB = require('./config/db')
const app = express()
connectDB()

app.use(fileUpload())
app.use(express.json({ extended: false }))

// Upload Endpoint
app.use('/upload', require('./routes/file'))

app.listen(5000, () => console.log('Server Started...'))
