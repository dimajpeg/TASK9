exports.getAuctionState = (req, res) => {
    res.json({
        active: true,
        currentBid: 100,
        participants: ['Dima', 'Olga'],
    });
};

exports.placeBid = (req, res) => {
    const { participant, bid } = req.body;

    if (!participant || !bid) {
        return res.status(400).json({ error: 'Invalid bid data' });
    }

    // Пример обновления состояния аукциона
    res.json({ success: true, currentBid: bid });
};
