const request = require('supertest');
const app = require('../src/index');

describe('Health endpoint', () => {
  it('returns 200 with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('Root endpoint', () => {
  it('returns welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toContain('CI/CD');
  });
});
