const auctionService = require('../../../src/services/auctionService');

test('Auction starts successfully', () => {
    auctionService.startAuction();
    expect(auctionService.getCurrentState().active).toBe(true);
});
