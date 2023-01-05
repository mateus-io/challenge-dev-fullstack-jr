import { retrieveCustomers } from '../services/retrieveCustomers'

function handleRetrieveCustomers() {
  return retrieveCustomers()
}

export { handleRetrieveCustomers }
