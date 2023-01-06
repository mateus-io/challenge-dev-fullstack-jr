import { describe, expect, it, beforeAll } from '@jest/globals'
import { Axios } from '../../../base/providers/Axios'
import { retrieveCustomers } from '../services/retrieveCustomers'
import dotenv from 'dotenv'

describe('Customers SubModule', () => {
  beforeAll(() => {
    dotenv.config()
  })
  it('Can Retrieve Customers', async () => {
    const customersApi = new Axios({
      baseURL: process.env.CUSTOMERS_API_URL,
    })
    const customers = await retrieveCustomers(customersApi)
    expect(customers.length).toBe(10)
  })
})
