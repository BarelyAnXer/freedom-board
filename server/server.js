const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./db')
const port = process.env.PORT || 5000
const messageRouter = require('./routes/messageRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/message', messageRouter)

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')))

  console.log(path.resolve(__dirname, '../', 'build', 'index.html'))

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'build', 'index.html'),
    ),
  )
} else {
  app.get('/', (req, res) => res.send('Please set to production'))
}

// app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))
