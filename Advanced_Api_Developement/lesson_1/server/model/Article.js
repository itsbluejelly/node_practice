const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title:{
        type: String,
        required: [true, "Title is Required"],
        minLength: [4, "minimum length of four characters"],
        maxLength: [150, "maximum length of 150 characters"]
    },
    body:{
        type: String,
        required: [true, "Body is Required"],
        minLength: [4, "minimum length of four characters"],
        maxLength: [2000, "maximum length of 2000 characters"]
    },
})

module.exports = mongoose.model('Article', articleSchema)
