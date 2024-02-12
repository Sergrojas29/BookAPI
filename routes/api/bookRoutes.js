const router = require('express').Router()

const {Book} = require('../../models')


//!get all books
router.get('/', async (req, res) => {
    try {
        const allData = await Book.find({})
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json(error)
        
    }
})

//create new book
router.post('/', async (req, res) => {
    try {
        const data = await Book.create(req.body)
        res.status(200).json(data)
        
    } catch (error) {
        res.status(404).json(error)
    }
})


//get one book
router.get('/title', async (req, res) => {
    try {
        const {title, id} = req.body
        const dataTitle = await Book.findOne({title: title})
        res.status(200).json(dataTitle)
        
    } catch (error) {
        res.status(404).json(`No book under that id ${title}`)
    }
})

//Update book by id
router.put('/', async (req, res) => {
    try {
        const {_id, title, author, inventory, price} = req.body
        const UpdateData = await Book.findOneAndUpdate({_id:_id}, {title:title, author: author, inventory: inventory, price: price}, {new: true})
        res.status(200).json(UpdateData)
        
    } catch (error) {
        res.status(404).json(error)
    }
})

//delete book by id
router.delete('/', async (req, res) => {
    try {
        const {_id} = req.body
        const UpdateData = await Book.findOneAndDelete({_id:_id})
        res.status(200).json(UpdateData)
        
    } catch (error) {
        res.status(404).json(error)
    }
})




module.exports = router;