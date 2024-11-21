const participants = [
    { id: 1, name: 'John Doe', balance: 1000 },
    { id: 2, name: 'Jane Smith', balance: 500 },
];

exports.getAll = () => participants;

exports.getById = (id) => {
    return participants.find(participant => participant.id === id);
};

exports.getPurchases = (id) => {
    return [
        { painting: 'Sharp Roses', price: 500 },
        // Добавь другие покупки для теста
    ];
};
