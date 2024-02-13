const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./login');

router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});


module.exports = router;