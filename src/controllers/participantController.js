const participantModel = require('../models/participantsModel');
const paintingsModel = require('../models/paintingsModel');

exports.dashboard = (req, res) => {
    const participantData = participantModel.getById(1);  // Пример ID участника
    const currentPainting = paintingsModel.getCurrentPainting();

    res.render('participant/dashboard', {
        title: 'Participant Dashboard',
        balance: participantData.balance,
        currentPainting: currentPainting.title,
        currentPrice: currentPainting.currentBid,
        timeRemaining: '15 minutes'
    });
};

exports.getPurchases = (req, res) => {
    const purchases = participantModel.getPurchases(1);  // Пример ID участника

    res.render('participant/purchases', {
        title: 'My Purchases',
        purchases: purchases
    });
};

