import Fastify from 'fastify'
import cors from '@fastify/cors'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })
  await fastify.register(cors, {
    origin: true,
  })

  fastify.get('/users', async () => {
    const users = [
      { name: 'Mateus', age: 21 },
      { name: 'Henrique', age: 21 },
    ]
    return { users }
  })
  await fastify.listen({ port: 4000, host: '0.0.0.0' })
}

bootstrap()
