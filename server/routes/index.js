const router = require('express').Router();
const shipRoutes = require('./shipRoutes');
const userRoutes = require('./userRoutes');

router.use('/ships', shipRoutes);
// router.use('/user', userRoutes);

module.exports = router;