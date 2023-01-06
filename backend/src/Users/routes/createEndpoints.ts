import { FastifyInstance } from 'fastify'

import { customersRoutes } from './customers/customers'

function createEndpoints(fastify: FastifyInstance) {
  customersRoutes(fastify)
}

export { createEndpoints }
