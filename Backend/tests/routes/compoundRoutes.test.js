const request = require('supertest');
const app = require('../../index'); // Import your Express app

describe('Compound Routes', () => {
  // Test for GET /compounds
  it('should return all compounds with status 200', async () => {
    const res = await request(app).get('/compounds');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test for POST /compounds
  it('should create a new compound and return 201', async () => {
    const newCompound = { name: 'Water', age: 1, description: 'H2O' };
    const res = await request(app).post('/compounds').send(newCompound);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newCompound);
  });

  // Test for PUT /compounds/:id
  it('should update a compound and return 200', async () => {
    const updatedCompound = { name: 'Updated Water', age: 2, description: 'Updated H2O' };
    const res = await request(app).put('/compounds/1').send(updatedCompound);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(updatedCompound);
  });

  // Test for DELETE /compounds/:id
  it('should delete a compound and return 204', async () => {
    const res = await request(app).delete('/compounds/1');
    expect(res.statusCode).toBe(204);
  });
});
