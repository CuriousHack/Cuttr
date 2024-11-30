const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL

function connectDb() {
    mongoose.connect(CONNECTION_URL)
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully')
    })

    mongoose.connection.on('error', (err) => {
        console.log(err)
        console.log("Error: Unable to connect to mongo db")
    })
}

module.exports = connectDb