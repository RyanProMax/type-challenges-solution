/**
 * explanation: https://github.com/type-challenges/type-challenges/issues/614
 * 
 * K entends K 
 * -> ('A' extends 'A' | 'B' | 'C') | ('B' extends 'A' | 'B' | 'C') | ('C' extends 'A' | 'B' | 'C')
 * -> ['A', ...Permutation<Exclude<'A' | 'B' | 'C', 'A'>>] | ['B', ...Permutation<Exclude<'A' | 'B' | 'C', 'B'>>] | ['C', ...Permutation<Exclude<'A' | 'B' | 'C', 'C'>>]
 * -> ['A', ...Permutation<'B' | 'C'>] | ['B', ...Permutation<'A' | 'C'>] | ['C', ...Permutation<'A' | 'B'>]
 */

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
    ? [K, ...Permutation<Exclude<T, K>>]
    : never

type result296 = Permutation<'A' | 'B' | 'C'>;