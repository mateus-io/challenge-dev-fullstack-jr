import { describe, expect, test } from '@jest/globals'
import { retrieveCustomers } from '../services/retrieveCustomers'

describe('Customers SubModule', () => {
  test('Retrieve Customers', () => {
    expect(retrieveCustomers().length).toBe(2)
  })
})
