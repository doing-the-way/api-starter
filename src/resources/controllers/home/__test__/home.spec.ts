import request from 'supertest'
import connectDB, { disconnectDB } from '../../../../config/db'
import { app } from '../../../../server'

describe('home', () => {
  test('get home', async (done) => {
    beforeAll( async () => {
      connectDB();
    });

    try{
        const res = await request(app)
        .post('/api')
        .send({
          fname: 'home',
        })
        
      
      expect(res.status).toEqual(200)
      expect(res.body).toHaveProperty('message', 'hola')
      // expect(res.body).toEqual({
      //   message:'hola'
      // })
    }catch(e){
      console.log('error')
    }

    afterAll(async(done) => {
      disconnectDB()
    });
    
  done()
  })
})
