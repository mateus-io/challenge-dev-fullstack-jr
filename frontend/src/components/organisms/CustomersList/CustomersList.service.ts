/* eslint-disable import/prefer-default-export */
import { ApiQueryAble } from '../../../base/Api'
import { PaginateParams } from '../../../base/types/PaginateParams'
import { Customer } from '../../../models/Customer'

async function retrieveCustomers(
  api: ApiQueryAble,
  { limit, offset }: PaginateParams
): Promise<Customer[]> {
  const { error, data } = await api.get<Customer[]>({
    endpoint: '/customers',
    queryParams: {
      offset,
      limit,
    },
  })
  if (error) throw error
  if (!data) throw new Error('Response Empty')
  return data
}

export { retrieveCustomers }
