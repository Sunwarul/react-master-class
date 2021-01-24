const monstersRoutes = require('./monster-rolodex.js');
const express = require('express');
const router = express.Router();

router.use('/monsters', monstersRoutes);

module.exports = router;