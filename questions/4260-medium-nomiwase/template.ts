type AllCombinations<S extends string, T extends string = StringToUnion<S>, U extends string = T> = [T] extends [never]
  ? ''
  : T extends U
  ? `${T}${AllCombinations<Exclude<U, T>>}` | `${AllCombinations<Exclude<U, T>>}` : ''

type result4260 = AllCombinations<'ABC'>;
