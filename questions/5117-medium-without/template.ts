type GenerateArray<T> = T extends unknown[] ? T : [T]

type Without<T extends unknown[], U, R extends unknown[] = []> = T extends [infer TL, ...infer TR]
  ? TL extends GenerateArray<U>[number]
  ? Without<TR, U, R>
  : Without<TR, U, [...R, TL]>
  : R

type result5117 = Without<[1, 2], 1>;
