// 超出1000时失败
// https://github.com/type-challenges/type-challenges/issues/2563

type MinusOne<T extends number, A extends number[] = []> = T extends A['length']
  ? A extends [infer _, ...infer R]
  ? R['length']
  : never
  : MinusOne<T, [...A, T]>

