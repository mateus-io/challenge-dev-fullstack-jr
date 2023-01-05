import { describe, expect, test } from '@jest/globals'
import { getUsers } from './users'

describe('Users Module', () => {
  test('get users', () => {
    expect(getUsers().length).toBe(2)
  })
})
