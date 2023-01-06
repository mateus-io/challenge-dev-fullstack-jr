export const getAllSwaggerSchema = {
  schema: {
    querystring: {
      type: 'object',
      required: ['offset', 'limit'],
      additionalProperties: false,
      properties: {
        offset: {
          type: 'number',
        },
        limit: {
          type: 'number',
        },
      },
    },
    description: 'Get Customers',
    tags: ['customers'],
    summary: 'Success Get Customers',
    response: {
      200: {
        description: 'Successful response',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
            },
            id: {
              type: 'number',
            },
            name: {
              type: 'string',
            },
            username: {
              type: 'string',
            },
          },
        },
        minItems: 1,
      },
    },
  },
}
