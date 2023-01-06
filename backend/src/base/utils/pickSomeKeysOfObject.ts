export function pickSomeKeysOfObject<T>(obj: T, ...args: (keyof T)[]) {
  const reducer = (res: { [key: string]: any }, key: keyof T) => ({
    ...res,
    [key]: obj[key],
  })
  return {
    ...args.reduce(reducer, {}),
  }
}
