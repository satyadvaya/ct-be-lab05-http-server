import request from 'supertest';
import { readFile } from 'fs/promises';
import app from './lib/app.js';

describe('HTTP routes', () => {
  it('should return index.html from GET /', async () => {
    const [response, index] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8'),
    ]);

    expect(response.text).toEqual(index);
  });
});
