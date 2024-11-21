const paintingsModel = require('../../../src/models/paintingsModel');

test('getPaintings should return paintings', () => {
    const paintings = paintingsModel.getPaintings();
    expect(paintings).toBeInstanceOf(Array);
});
