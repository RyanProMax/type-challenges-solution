type Fibonacci<T extends number, S extends never[][] = [[never], [never]]> = T extends 1 | 2
  ? 1
  : T extends S['length']
  ? S[0]['length']
  : Fibonacci<T, [[...S[0], ...S[1]], ...S]>
