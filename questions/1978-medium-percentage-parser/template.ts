type PercentageParser<A extends string, T extends [string, string, string] = ['', '', '']> = A extends `${infer L}${infer R}`
  ? L extends '+' | '-'
    ? PercentageParser<R, [L, '', '']>
    : R extends '%'
      ? [T[0], `${T[1]}${L}`, R]
      : PercentageParser<R, [T[0], `${T[1]}${L}`, R]>
  : T

type result1978 = PercentageParser<'+100%'>
