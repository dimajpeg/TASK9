let currentAuction = {
    active: false,
    currentBid: 0,
    highestBidder: null,
};

exports.getAuctionState = () => currentAuction;

exports.startAuction = () => {
    currentAuction = { active: true, currentBid: 0, highestBidder: null };
};

exports.placeBid = (bid, participant) => {
    if (bid > currentAuction.currentBid) {
        currentAuction.currentBid = bid;
        currentAuction.highestBidder = participant;
        return true;
    }
    return false;
};
