import { pickSomeKeysOfObject } from './pickSomeKeysOfObject'

interface applyViewOnDataSetParams<T> {
  dataset: T[]
  view: (keyof T)[]
}
export function applyViewOnDataSet<T>({
  dataset,
  view,
}: applyViewOnDataSetParams<T>) {
  return dataset.map((data) => {
    return pickSomeKeysOfObject<T>(data, ...view)
  })
}
