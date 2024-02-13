const router = require('express').Router()

const jwt = require('jsonwebtoken')


const secret = 'shhhmysecertshhhhhhh'

const expiration = '2h'

const userData = [
    {
        user: 'name',
        password: 123
    }
]






router.get('/', async (req, res) => {
    try {
        
        const token = jwt.sign({data: userData}, secret, {expiresIn: expiration})

        res.status(200).json(token)
    } catch (error) {
        // res.status(404).json(error)
        res.status(404).json("here")
        
    }
})

module.exports = router;