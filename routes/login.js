const router = require('express').Router()
const auth = require('../utils/auth')



router.get('/password/:pass', async (req, res) => {
    try {
        if(req.params.pass = '123'){
            res.status(200).json(auth.signToken('usertest', 156532))
            // res.status(201).json('here')
        }else{

            res.status(202).json(req.params)
        }
        res.status(202).json('incorrect password')

    } catch (error) {
        res.status(404).json(error)

    }
})

module.exports = router;