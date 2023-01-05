import Fastify from 'fastify'
import { setupCommonMiddlewares } from './configs/setupCommonMiddlewares'
import { createEndpoints } from './Users/routes/createEndpoints'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  setupCommonMiddlewares(fastify)
  createEndpoints(fastify)

  await fastify.listen({ port: 4000, host: '0.0.0.0' })
}

bootstrap()
