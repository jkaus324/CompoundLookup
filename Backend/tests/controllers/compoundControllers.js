const compoundController = require('../../controllers/compoundController');
const Compound = require('../../models/Compound');

describe('Compound Controller', () => {
  // Mocking Compound model methods
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getCompounds', () => {
    it('should return an array of compounds', async () => {
      const compounds = [{ name: 'Water', age: 1, description: 'H2O' }];
      jest.spyOn(Compound, 'findAll').mockResolvedValue(compounds);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.getCompounds(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(compounds);
    });
  });

  describe('createCompound', () => {
    it('should create a compound and return 201', async () => {
      const newCompound = { name: 'Water', age: 1, description: 'H2O' };
      jest.spyOn(Compound, 'create').mockResolvedValue(newCompound);

      const req = { body: newCompound };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.createCompound(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(newCompound);
    });
  });

  describe('updateCompound', () => {
    it('should update a compound and return 200', async () => {
      const updatedCompound = { name: 'Updated Water', age: 2, description: 'Updated H2O' };
      const compoundId = 1;

      jest.spyOn(Compound, 'update').mockResolvedValue([1]); // Returns an array with the number of affected rows
      jest.spyOn(Compound, 'findByPk').mockResolvedValue(updatedCompound);

      const req = { params: { id: compoundId }, body: updatedCompound };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.updateCompound(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedCompound);
    });

    it('should return 404 if compound is not found', async () => {
      jest.spyOn(Compound, 'update').mockResolvedValue([0]); // No rows affected

      const req = { params: { id: 999 }, body: { name: 'Test' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.updateCompound(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound not found' });
    });
  });

  describe('deleteCompound', () => {
    it('should delete a compound and return 204', async () => {
      const compoundId = 1;

      jest.spyOn(Compound, 'destroy').mockResolvedValue(1); // 1 row affected

      const req = { params: { id: compoundId } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.deleteCompound(req, res);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.json).not.toHaveBeenCalled();
    });

    it('should return 404 if compound to delete is not found', async () => {
      jest.spyOn(Compound, 'destroy').mockResolvedValue(0); // No rows affected

      const req = { params: { id: 999 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await compoundController.deleteCompound(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: 'Compound not found' });
    });
  });
});
