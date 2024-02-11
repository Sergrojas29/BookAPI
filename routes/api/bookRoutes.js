const router = require('express').Router()

const {Book} = require('../../models')

router.post('/', async (req, res) => {
    try {
        const IncomingData = await Book.create(req.body)
        const updateData = await Book.findByIdAndUpdate(
            {
                title: req.body.username
            }
        )

    } catch (error) {

    }
})