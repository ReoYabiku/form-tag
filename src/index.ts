import { Hono } from 'hono'

const app = new Hono()

app.post('/users', async (c) => {
  const body = await c.req.parseBody()

  const resp = {
    id: 'generatedId',
    name: body['name'],
    age: body['age'],
  }

  return c.json(resp, 200, {
    'Content-Type': 'application/json',
  })
})

export default app
