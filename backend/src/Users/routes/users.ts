import { FastifyInstance } from 'fastify'
import { PaginateParams } from '../../base/types/PaginateParams'
import { handleRetrieveCustomers } from '../Customers/controllers/handleRetrieveCustomers'

function usersRoutes(fastify: FastifyInstance) {
  fastify.get<{ Querystring: PaginateParams }>(
    '/users',
    handleRetrieveCustomers
  )
}

export { usersRoutes }
