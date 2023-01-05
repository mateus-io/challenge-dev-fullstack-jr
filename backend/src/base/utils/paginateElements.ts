import { PaginateParams } from '../types/PaginateParams'

function paginateElements<T>(
  elements: Array<T>,
  { limit, offset }: PaginateParams
): T[] {
  return elements.slice(Number(offset), Number(offset) + Number(limit))
}

export { paginateElements }
