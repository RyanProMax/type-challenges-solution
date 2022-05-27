type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  ACC extends any[] = [],
  F extends boolean = false,
  L = T['length']
  > = Start extends End
  ? T
  : ACC['length'] extends L
  ? ACC
  : T extends [infer First, ...infer Rest]
  ? F extends false
  ? ACC['length'] extends Start
  ? Fill<T, N, Start, End, ACC, true, L>
  : Fill<Rest, N, Start, End, [...ACC, First], F, L>
  : ACC['length'] extends End
  ? Fill<T, N, Start, End, ACC, false, L>
  : Fill<Rest, N, Start, End, [...ACC, N], F, L>
  : ACC
