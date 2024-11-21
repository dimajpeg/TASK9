const socket = io();

// Элементы DOM
const gallery = document.querySelector('.gallery');
const bidsList = document.getElementById('bidsList');
const bidForm = document.getElementById('bidForm');
const stopAuctionButton = document.getElementById('stopAuctionButton');
const highestBidDisplay = document.getElementById('highestBid');

// Получение данных при подключении
socket.on('init', ({ paintings, bids }) => {
    // Отображение картин
    gallery.innerHTML = paintings.map(painting => `
    <div class="gallery-item">
      <img src="/assets/images/paintings/${painting.title.toLowerCase().replace(/ /g, '_')}.jpg" alt="${painting.title}">
      <h3>${painting.title}</h3>
      <p>Автор: ${painting.author}</p>
      <p>Начальная цена: ${painting.startPrice} руб.</p>
      <button class="bid-button" data-id="${painting.id}">Сделать ставку</button>
    </div>
  `).join('');

    // Добавляем обработчики кликов на кнопки "Сделать ставку"
    document.querySelectorAll('.bid-button').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = prompt('Введите ваше имя:');
            const amount = prompt('Введите вашу ставку:');
            if (name && amount) {
                socket.emit('newBid', { id, name, amount: parseInt(amount, 10) });
            }
        });
    });

    // Обновление списка ставок
    updateBids(bids);
});

// Обновление списка ставок
socket.on('updateBids', (bids) => {
    updateBids(bids);
});

// Завершение аукциона
socket.on('auctionStopped', (highestBid) => {
    highestBidDisplay.textContent = `Аукцион завершён. Победитель: ${highestBid.name} с суммой ${highestBid.amount} руб.`;
});

// Функция обновления ставок
function updateBids(bids) {
    bidsList.innerHTML = bids.map(bid => `<li>${bid.name} поставил ${bid.amount} руб. на картину ID ${bid.id}</li>`).join('');
}

// Остановка аукциона
stopAuctionButton.addEventListener('click', () => {
    socket.emit('stopAuction');
});
