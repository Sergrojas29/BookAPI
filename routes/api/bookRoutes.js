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





// router.post('/', async (req, res) => {
//     try {
//         const IncomingData = await Book.create(req.body)
//         const updateData = await Book.findByIdAndUpdate(
//             {
//                 title: req.body.username
//             }
//         )

//     } catch (error) {

//     }
// })