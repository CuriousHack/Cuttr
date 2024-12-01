const mongoose = require('mongoose')

const Schema = mongoose.Schema

const LinkSchema = new Schema ({
    long_url: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true,
        min: [7, "Not a valid key"],
        unique: true,
        index: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        required: false
    }

})

module.exports = mongoose.model('Link', LinkSchema)