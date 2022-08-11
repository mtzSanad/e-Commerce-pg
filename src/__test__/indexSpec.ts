import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test basic end point', () => {
  it('test1', async () => {
    const res = await request.get('/');
    expect(res.status).toEqual(200);
  });
});
