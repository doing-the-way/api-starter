import request from 'supertest'
import { app } from '../server'

describe('API routes', () => {
  test('routes', async () => {
    let response ;

    response = await request(app).get('/')
    expect(response.status).toBe(200)

    response = await request(app).get('/api')
    expect(response.status).toBe(401)

    response = await request(app).get('/*')
    expect(response.status).toBe(404)

  })
})

