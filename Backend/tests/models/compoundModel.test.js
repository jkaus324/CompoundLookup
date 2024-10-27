const Compound = require('../../models/Compound');

describe('Compound Model', () => {
  it('should create a compound successfully with valid data', async () => {
    const compoundData = { name: 'Water', age: 1, description: 'H2O' };
    const compound = await Compound.create(compoundData);
    expect(compound.name).toBe('Water');
    expect(compound.age).toBe(1);
    expect(compound.description).toBe('H2O');
  });

  it('should fail to create a compound without a name', async () => {
    expect.assertions(1);
    try {
      await Compound.create({ age: 1, description: 'H2O' });
    } catch (error) {
      expect(error.message).toMatch(/notNull Violation/);
    }
  });
});
