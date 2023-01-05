import { Axios } from '../../../base/providers/Axios'
import { RequestWithPaginate } from '../../../base/types/RequestWithPaginate'
import { paginateElements } from '../../../base/utils/paginateElements'
import { retrieveCustomers } from '../services/retrieveCustomers'

async function handleRetrieveCustomers(request: RequestWithPaginate) {
  const { limit, offset } = request.query
  const customersApi = new Axios({
    baseURL: process.env.CUSTOMERS_API_URL,
  })
  const customers = await retrieveCustomers(customersApi)
  return paginateElements(customers, { limit, offset })
}

export { handleRetrieveCustomers }
