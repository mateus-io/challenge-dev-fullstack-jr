import { FastifyInstance } from 'fastify'
import { handleRetrieveCustomers } from '../Customers/controllers/handleRetrieveCustomers'

function usersRoutes(fastify: FastifyInstance) {
  fastify.get('/users', handleRetrieveCustomers)
}

export { usersRoutes }
