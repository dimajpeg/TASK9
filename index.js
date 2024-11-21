const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);  // Создание HTTP сервера для Express
const io = socketIo(server);  // Инициализация WebSocket с использованием того же сервера

// Настройка WebSocket
io.on('connection', (socket) => {
    console.log('New client connected');

    // Отправить сообщение всем клиентам
    socket.emit('message', 'Добро пожаловать на аукцион!');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Настроить Pug как шаблонизатор
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));  // Папка с Pug-шаблонами

// Статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Основной маршрут
app.get('/', (req, res) => {
    res.render('index');  // Шаблон главной страницы
});

// Пример маршрута для аукциона
app.get('/auction', (req, res) => {
    res.render('auction');
});

// Запуск сервера на порту 3002
server.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});
