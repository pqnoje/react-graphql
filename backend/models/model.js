const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: String,
    genre: String,
    year: String,
    imageUrl: String
})

module.exports = new mongoose.model('Movie', movieSchema)