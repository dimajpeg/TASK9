const paintingsModel = require('../models/paintingsModel');
const participantsModel = require('../models/participantsModel');

exports.dashboard = (req, res) => {
    const participants = participantsModel.getAll();
    const paintings = paintingsModel.getAll();

    res.render('admin/dashboard', {
        title: 'Admin Dashboard',
        participants: participants,
        paintings: paintings
    });
};

exports.auction = (req, res) => {
    const auctionData = {
        painting: 'Sharp Roses',
        currentBid: 500,
        timeRemaining: '30 minutes'
    };

    res.render('admin/auction', {
        title: 'Auction Status',
        auctionData: auctionData
    });
};
