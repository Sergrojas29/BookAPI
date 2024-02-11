const db = require('./connection')

const { Book } = require('../models')


sampleBooks = [
    { title: "To Kill a Mockingbird",author: "Harper Lee",inventory: 25,price: 12.99},
    { title: "1984", author: "George Orwell", inventory: 20, price: 10.99 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", inventory: 30, price: 11.50 },
    { title: "Pride and Prejudice", author: "Jane Austen", inventory: 18, price: 9.99 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", inventory: 22, price: 13.25 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", inventory: 25, price: 12.99 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", inventory: 27, price: 14.75 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", inventory: 22, price: 13.25 },
    { title: "Lord of the Flies", author: "William Golding", inventory: 15, price: 10.50 },
    { title: "Animal Farm", author: "George Orwell", inventory: 20, price: 9.75 },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", inventory: 28, price: 11.99 },
    { title: "Jane Eyre", author: "Charlotte Brontë", inventory: 17, price: 10.25 },
    { title: "Brave New World", author: "Aldous Huxley", inventory: 21, price: 12.50 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", inventory: 24, price: 15.99 },
    { title: "The Alchemist", author: "Paulo Coelho", inventory: 19, price: 11.75 }
]

db.once('open', async () => {
    try {
        
        const books = await Book.insertMany(sampleBooks)
        console.log('Books Created')
        process.exit()
        
    } catch (error) {
        console.log(error)
        process.exit()
    }

})


