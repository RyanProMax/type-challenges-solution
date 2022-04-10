type Flatten<T extends unknown[]> = T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : [];

type result459 = Flatten<[1, 2, [3, 4], [[[5]]]]>

