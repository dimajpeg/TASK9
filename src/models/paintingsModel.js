const paintings = [
    { id: 1, title: 'Dima on Grove Street', image: '/assets/images/paintings/dima_on_grove_street.jpg', currentBid: 100, sold: false },
    { id: 2, title: 'Dollars Bikini Bottom', image: '/assets/images/paintings/dollars_bikini_botam.jpg', currentBid: 150, sold: false },
    { id: 3, title: 'Sharp Roses', image: '/assets/images/paintings/sharp_roses.jpg', currentBid: 500, sold: false },
    { id: 4, title: 'South Park', image: '/assets/images/paintings/south_park.jpg', currentBid: 300, sold: false },
    { id: 5, title: 'The Soprano Italy', image: '/assets/images/paintings/the_soprano_italy.jpg', currentBid: 200, sold: false },
    { id: 6, title: 'This House Is on Fire', image: '/assets/images/paintings/this_house_is_on_fire.jpg', currentBid: 400, sold: false }
];

exports.getAll = () => paintings;

exports.getCurrentPainting = () => {
    // Возвращаем картину, которая в данный момент продается
    return paintings.find(painting => !painting.sold);
};
