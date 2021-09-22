const request = require('supertest');
const { readFile } = require('fs/promises');
const app = require('../lib/app.js');

describe('HTTP routes', () => {
    it('should return index.html from GET /', async () => {
        const [response, index] = await Promise.all([
            request(app).get('/'),
            readFile('./public/index.html', 'utf-8'),
        ]);

        expect(response.text).toEqual(index);
    });

    it('should return main.css from GET /css/main.css', async () => {
        const [response, index] = await Promise.all([
            request(app).get('/css/main.css'),
            readFile('./public/css/main.css', 'utf-8'),
        ]);

        expect(response.text).toEqual(index);
    });
});
