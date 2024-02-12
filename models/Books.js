const mongoose = require('mongoose')

const {Schema} = mongoose

const bookSchema = new Schema(
    {
        title: {
            type: String,
            require: true
        },
        author: {
            type: String,
            require: true
        },
        inventory: {
            type: Number,
            min: 0,
            default: 0
        },
        price: {
            type: Number,
            required: true,

        },
    }
);

const Book = mongoose.model('Book', bookSchema);




module.exports = Book