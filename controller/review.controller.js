const Review = require('../model/review.model')

async function createReview(req, res) {
    try {
        const review = new Review(req.body)
        await review.save()
        res.status(201).json({message: 'review added successfully', data: review})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = {createReview}