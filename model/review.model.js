const mongoose = require('mongoose')

const {Schema} = mongoose

const reviewSchema = new Schema({
    review: {type: String, required: true},
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {timestamps: true})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review