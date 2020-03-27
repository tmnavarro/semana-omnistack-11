const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'Teste',
        email: 'email@servidor.com',
        whatsapp: '553599999999',
        city: 'Carmo do Rio Claro',
        uf: 'MG'
      });
    expect(response.body).toHaveProperty('id');
    expect(response.status).toBe(200);
  });
});
