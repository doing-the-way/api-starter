import router from './admin.router'

describe('item router', () => {
  test('has crud routes', () => {
    const routes = [
      { path: '/', method: 'delete' },
    ]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      // toBeTruthy() : value == true
      expect(match).toBeTruthy()
    })
  })
})
