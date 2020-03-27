const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Genareate Unique ID', () => {
  it('Should generate an unique ID', () => {
    const id = generateUniqueId();
    expect(id).toHaveLength(8);
  });
});
