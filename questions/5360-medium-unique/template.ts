type Unique<T extends unknown[], R extends unknown[] = []> = T extends [infer TL, ...infer TR]
  ? Includes<R, TL> extends true
    ? Unique<TR, R>
    : Unique<TR, [...R, TL]>
  : R

type result5360 = Unique<[1, 1, 2, 2, 3, 3]>;
