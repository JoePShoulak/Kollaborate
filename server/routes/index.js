const router = require('express').Router();
const shipRoutes = require('./shipRoutes');
const authRoutes = require('./authRoutes');

router.use('/ships', shipRoutes);
// router.use('/auth', authRoutes);

module.exports = router;