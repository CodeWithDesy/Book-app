const Joi = require('joi')

const bookSchema = Joi.object({
    title: Joi.string().required("Title is required"),
    yop: Joi.string().required("yop is required"),
    genre: Joi.string().required("genre is required"),
    author: Joi.string().required("author is required"), 
})

const updateBookSchema = Joi.object({
    title: Joi.string(),
    yop: Joi.string(),
    genre: Joi.string(),
    author: Joi.string(), 
})

const validateBookMiddleware = (req, res, next) => {
    try {
        let {error, value} = bookSchema.validate(req.body)
        if (error) {
            res.status(400).json({message: error.details[0].message})
        } else {
            next()
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'server error'})
    }
}

module.exports = {validateBookMiddleware}