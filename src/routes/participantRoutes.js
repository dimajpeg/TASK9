const express = require('express');
const participantController = require('../controllers/participantController');

const router = express.Router();

router.get('/dashboard', participantController.dashboard);
router.get('/purchases', participantController.getPurchases);

module.exports = router;
