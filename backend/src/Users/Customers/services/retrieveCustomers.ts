import { ApiQueryAble } from '../../../base/Api'
import { Customer } from '../../models/Customer'

async function retrieveCustomers(api: ApiQueryAble): Promise<Customer[]> {
  const { error, data } = await api.get<Customer[]>({
    endpoint: '/users',
  })
  if (error) throw error
  if (!data) throw new Error('Response Empty')
  return data
}

export { retrieveCustomers }
