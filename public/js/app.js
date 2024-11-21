const socket = io();

// Элементы
const paintingsDiv = document.getElementById('paintings');
const bidForm = document.getElementById('bidForm');
const bidsList = document.getElementById('bids');
const stopAuctionBtn = document.getElementById('stopAuction');
const winnerDiv = document.getElementById('winner');

// Инициализация
socket.on('init', ({ paintings, bids }) => {
    // Отображаем картины
    paintings.forEach((painting) => {
        const paintingEl = document.createElement('div');
        paintingEl.innerHTML = `
            <h3>${painting.title}</h3>
            <p>Author: ${painting.author}</p>
            <p>Starting Price: $${painting.startPrice}</p>
        `;
        paintingsDiv.appendChild(paintingEl);
    });

    // Отображаем ставки
    updateBids(bids);
});

// Обновление списка ставок
socket.on('updateBids', (bids) => updateBids(bids));

// Обработка остановки торгов
socket.on('auctionStopped', (highestBid) => {
    winnerDiv.style.display = 'block';
    winnerDiv.textContent = `Winner: ${highestBid.name} with $${highestBid.amount}`;
});

// Обработка формы
bidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('bidAmount').value);

    socket.emit('newBid', { name, amount });
    bidForm.reset();
});

// Остановка торгов
stopAuctionBtn.addEventListener('click', () => {
    socket.emit('stopAuction');
});

// Функция обновления списка ставок
function updateBids(bids) {
    bidsList.innerHTML = '';
    bids.forEach((bid) => {
        const bidEl = document.createElement('li');
        bidEl.textContent = `${bid.name} bid $${bid.amount}`;
        bidsList.appendChild(bidEl);
    });
}
