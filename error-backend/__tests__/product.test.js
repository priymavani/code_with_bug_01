const request = require('supertest');
const app = require('../app');

describe('GET /products', () => {
    test('returns 200 and product list', async () => {
        const res = await request(app).get('/products');
        expect(res.statusCode).toBe(200);
        expect(res.body.products).toBeDefined();
    });
});

describe('GET /products/sum', () => {
    test('returns the correct sum of a and b', async () => {
        const res = await request(app).get('/products/sum?a=3&b=2');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(5);
    });
});
