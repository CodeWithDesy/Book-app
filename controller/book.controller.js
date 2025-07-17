const Book = require('../model/book.model')

async function createBook(req, res) {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(201).json({message: 'Book created successfully', data: book})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

async function fetchBooks(req, res) {
    try {
        const books = await Book.find({}).populate('reviews')
        res.status(200).json({message: 'Books fetched successfully', data: books})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

async function fetchBookById(req, res) {
    try {
        const bookId = req.params.id
        const book = await Book.findById(bookId)
        res.status(201).json({message: 'Book fetched successfully', data: book})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'}) 
    }
}

async function deleteBook(req, res) {
    try {
        const bookId = req.params.id
        const book = await Book.findByIdAndDelete(bookId)
        res.status(201).json({message: 'Book deleted successfully', data: book})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'}) 
    }
}

const basePath = (req,res) => {
    try {
        res.status(200).json({message: "Welcome to our api"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'}) 
    }
}
const falsePath = (req, res) => {
    try {
        res.status(404).json({message: 'undefined route'})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}
module.exports = { basePath, falsePath, createBook, fetchBooks, fetchBookById, deleteBook }