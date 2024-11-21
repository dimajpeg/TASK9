const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/dashboard', adminController.dashboard);
router.get('/auction', adminController.auction);

module.exports = router;
