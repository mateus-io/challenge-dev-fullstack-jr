import { FastifyInstance } from 'fastify'

import { usersRoutes } from './users'

function createEndpoints(fastify: FastifyInstance) {
  usersRoutes(fastify)
}

export { createEndpoints }
