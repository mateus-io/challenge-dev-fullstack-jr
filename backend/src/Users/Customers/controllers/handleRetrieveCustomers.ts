import { Axios } from '../../../base/providers/Axios'
import { RequestWithPaginate } from '../../../base/types/RequestWithPaginate'
import { applyViewOnDataSet } from '../../../base/utils/applyViewOnDataSet'
import { paginateElements } from '../../../base/utils/paginateElements'
import { Customer } from '../../models/Customer'
import { retrieveCustomers } from '../services/retrieveCustomers'

async function handleRetrieveCustomers(request: RequestWithPaginate) {
  const { limit, offset } = request.query
  const customersApi = new Axios({
    baseURL: process.env.CUSTOMERS_API_URL,
  })

  const customers = await retrieveCustomers(customersApi)
  const customersPage = paginateElements(customers, { limit, offset })

  return applyViewOnDataSet<Customer>({
    dataset: customersPage,
    view: ['email', 'id', 'name', 'username'],
  })
}

export { handleRetrieveCustomers }
