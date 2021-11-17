const express = require('express')
const fileUpload = require('express-fileupload')
const connectDB = require('./config/db')
const app = express()
connectDB()

app.use(fileUpload())
app.use(express.json({ extended: false }))

// Upload Endpoint
app.use('/upload', require('./routes/file'))
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => console.log('Server Started...'))
