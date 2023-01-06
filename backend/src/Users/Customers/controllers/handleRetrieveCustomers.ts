import { Axios } from '../../../base/providers/Axios'
import { RequestWithPaginate } from '../../../base/types/RequestWithPaginate'
import { paginateElements } from '../../../base/utils/paginateElements'
import { Customer } from '../../models/Customer'
import { retrieveCustomers } from '../services/retrieveCustomers'
import { pickSomeKeysOfObject } from './../../../base/utils/pickSomeKeysOfObject'

async function handleRetrieveCustomers(request: RequestWithPaginate) {
  const { limit, offset } = request.query
  const customersApi = new Axios({
    baseURL: process.env.CUSTOMERS_API_URL,
  })

  const customers = await retrieveCustomers(customersApi)
  const customersPage = paginateElements(customers, { limit, offset })

  return customersPage.map((customer) => {
    return pickSomeKeysOfObject<Customer>(
      customer,
      'email',
      'id',
      'name',
      'username'
    )
  })
}

export { handleRetrieveCustomers }
