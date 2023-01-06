interface SortOptions<T> {
  referenceField: keyof T
  order: 'asc' | 'desc'
}

const orderNumericalRepresentations = {
  asc: 1,
  desc: -1,
}

export function sortDataSetByStringField<T>(
  elements: Array<T>,
  { referenceField, order }: SortOptions<T>
): T[] {
  const orderNumericalRepresentation = orderNumericalRepresentations[order]
  return elements.sort((a, b) => {
    const first = String(a[referenceField]).toUpperCase()
    const second = String(b[referenceField]).toUpperCase()
    const result = first.localeCompare(second, undefined, {
      numeric: true,
    })
    return result * orderNumericalRepresentation
  })
}
