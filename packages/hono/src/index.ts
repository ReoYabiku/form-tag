import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(
  '*',
  cors({
    origin: 'http://localhost:8000',
    allowMethods: ['POST'],
    exposeHeaders: ['Content-Length'],
    maxAge: 600,
    credentials: true,
  })
)

app.post('/users', async (c) => {
  const body = await c.req.parseBody()

  const name = body['name']
  const age = body['age']

  console.log(name, age)

  const resp = {
    id: 'generatedId',
    name: name,
    age: age,
  }

  return c.json(resp, 200, {
    'Content-Type': 'application/json',
  })
})

export default app
