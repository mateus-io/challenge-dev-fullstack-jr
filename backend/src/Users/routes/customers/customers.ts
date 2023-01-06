import { FastifyInstance } from 'fastify'
import { handleRetrieveCustomers } from '../../Customers/controllers/handleRetrieveCustomers'
import { getAllSwaggerSchema } from './docsSchemas'

function customersRoutes(fastify: FastifyInstance) {
  fastify.get('/customers', getAllSwaggerSchema, handleRetrieveCustomers)
}

export { customersRoutes }
