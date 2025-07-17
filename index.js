const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const { basePath, falsePath, createBook, fetchBooks, fetchBookById, deleteBook } = require('./controller/book.controller')
const { createUser, signupUser, loginUser } = require('./controller/user.controller')
const { createReview } = require('./controller/review.controller')
const { validateBookMiddleware } = require('./model/validators/book.validator')
const { validateSignupMiddleware, validateLoginMiddleware } = require('./model/validators/auth.validator')
const { isTokenValid, isAdmin, isUserAdmin } = require('./controller/middleware')
const api = express()

const PORT = 5454

api.use(express.json())
api.use(express.urlencoded({extended: true}))

api.post('/signup', validateSignupMiddleware, signupUser)
api.post('/login',validateLoginMiddleware, loginUser)

api.post('/review', createReview)
api.get('/book/:id', fetchBookById)
api.get('/book', isTokenValid, fetchBooks)
api.post('/book', isUserAdmin, validateBookMiddleware, createBook)
api.delete('/book/:id', deleteBook)
api.all('/', basePath)
api.use(falsePath)

api.listen(PORT, async () => {
    console.log(`Server live on ${PORT}`)
    await mongoose.connect('mongodb://127.0.0.1:27017/book-app')
     console.log("database connected")
})