import request from 'supertest'
import { app } from '../server'

describe('API routes', async() => {
  test('api should be locked down', async () => {
    let response = await request(app).get('/api')
    expect(response.statusCode).toBe(404)

    response = await request(app).get('/api/list')
    expect(response.statusCode).toBe(404)
  })
})

