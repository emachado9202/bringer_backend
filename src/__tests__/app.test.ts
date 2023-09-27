import request from 'supertest';
import app from '../app';

describe('API Routes', () => {
  it('should generate a JWT token', async () => {
    const response = await request(app).post('/generate_token').send({
      login: 'user',
      password: 'password',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('should return parcel tracking information', async () => {
    const response = await request(app).get('/tracking_parcel?tracking_number=BPS1EP58YI5SKBR');

    expect(response.status).toBe(200);
  });
});
