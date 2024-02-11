const db = require('./connection')

const {Book} = require('../models')

db.once('open', async () => {
    const books = await Book.insertMany([
        {
            title: 'First Book',
            author: 'FirstName lastName',
            inventory: 15,
            price: 19.99,    
        },
        {
            title: 'Second Book',
            author: 'FirstName lastName',
            inventory: 30,
            price: 11.99,    
        },
        {
            title: 'Third Book',
            author: 'FirstName lastName',
            inventory: 60,
            price: 16.99,    
        },
        
    ])

    console.log('Books Created')
    process.exit()
})