import { FastifyRequest } from 'fastify'
import { PaginateParams } from './PaginateParams'

export type RequestWithPaginate = FastifyRequest<{
  Querystring: PaginateParams
}>
