const request = require('supertest');
const app = require('../app');

describe('GET /users', () => {
    test('returns 200 and a list of users', async () => {
        const res = await request(app).get('/users');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

describe('POST /users', () => {
    test('adds a new user and returns 201', async () => {
        const res = await request(app)
            .post('/users')
            .send({ name: 'Alice', email: 'alice@example.com' });
        expect(res.statusCode).toBe(201);
        expect(res.body.user.name).toBe('Alice');
    });
});
