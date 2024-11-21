const auctionModel = require('../models/auctionModel');

exports.startAuction = () => {
    auctionModel.startAuction();
    console.log('Auction started');
};

exports.placeBid = (bid, participant) => {
    const success = auctionModel.placeBid(bid, participant);
    if (success) {
        console.log(`New highest bid: ${bid} by ${participant}`);
    } else {
        console.log(`Bid of ${bid} rejected`);
    }
    return success;
};
