type FlattenDepth<T extends any[], D extends number = 1, A extends number[] = []> = A['length'] extends D
  ? T
  : T extends [infer F, ...infer R]
    ? F extends any[]
      ? [...FlattenDepth<F, D, [...A, 1]>, ...FlattenDepth<R, D, A>]
      : [F, ...FlattenDepth<R, D, A>]
    : T

type result3243 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>

