const express = require('express');
const auctionController = require('../controllers/auctionController');
const participantsModel = require('../models/participantsModel');
const paintingsModel = require('../models/paintingsModel');

const router = express.Router();

router.get('/auction/state', auctionController.getAuctionState);
router.post('/auction/bid', auctionController.placeBid);

router.get('/participants', (req, res) => res.json(participantsModel.getParticipants()));
router.get('/paintings', (req, res) => res.json(paintingsModel.getPaintings()));

module.exports = router;
