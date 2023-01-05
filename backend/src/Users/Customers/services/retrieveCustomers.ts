import { Customer } from '../../models/Customer'

function retrieveCustomers(): Customer[] {
  const customers: Customer[] = [
    {
      name: 'Mateus',
      username: 'mateuss_ioo',
      email: 'mateus@gmail.com',
      id: 1,
    },
    {
      name: 'Henrique',
      username: 'henriquee_ioo',
      email: 'henrique@gmail.com',
      id: 2,
    },
  ]
  return customers
}

export { retrieveCustomers }
