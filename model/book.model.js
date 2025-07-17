const mongoose = require('mongoose')

const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String, required: true},
    yop: {type: String, required: true},
    genre: {type: String, required: true},
    author: {type: String, required: true},
}, {timestamps: true,  toJSON: { virtuals: true }, toObject: { virtuals: true }})

bookSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'book'
});

const Book = mongoose.model("Book", bookSchema)

module.exports = Book