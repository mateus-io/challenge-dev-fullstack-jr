import { FastifyInstance } from 'fastify'
import cors from '@fastify/cors'

async function setupCommonMiddlewares(fastify: FastifyInstance) {
  await fastify.register(cors, {
    origin: true,
  })
}

export { setupCommonMiddlewares }
