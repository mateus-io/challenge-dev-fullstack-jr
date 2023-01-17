import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import CustomerCard from '../components/molecules/CustomerCard/CustomerCard'

describe('CustomerCard Component', () => {
  it('should be able render a customer in screen', () => {
    const customer = {
      email: faker.internet.email(),
      id: faker.datatype.number(),
      username: faker.internet.userName(),
      name: faker.name.firstName(),
    }
    const { getByText } = render(<CustomerCard customer={customer} />)

    expect(getByText(customer.email)).toBeInTheDocument()
    expect(getByText(customer.id)).toBeInTheDocument()
    expect(getByText(customer.username)).toBeInTheDocument()
    expect(getByText(customer.name)).toBeInTheDocument()
  })
})
