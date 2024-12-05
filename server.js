const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDb = require('./db')

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

connectDb()

app.get('/', (req, res) => {
    res.send("Welcome to Cuttr")
    res.status(200)
})

app.use('/api/cut', require('./routes/link'))

app.listen(8000, () => {
    console.log("app running on http://localhost:8000")
})