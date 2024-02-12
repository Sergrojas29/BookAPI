const router = require('express').Router();
// const apiRoutes = require('./api');

// router.use('/api', apiRoutes);


router.use('/hello', async (req,res) => {
  try {
    res.json('hello')
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})

router.use((req, res) => {
  return res.send('Wrong route!');
});


module.exports = router;