const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./db')

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

connectDb()

app.get('/', (req, res) => {
    res.send("Welcome to Cuttr")
    res.status(200)
})

app.use('/api/cut', require('./routes/link'))

app.listen(3000, () => {
    console.log("app running on http://localhost:3000")
})