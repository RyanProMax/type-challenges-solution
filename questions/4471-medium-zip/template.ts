type Zip<T extends unknown[], S extends unknown[], R extends unknown[] = []> = T extends [infer TL, ...infer TR]
  ? S extends [infer SL, ...infer SR]
  ? Zip<TR, SR, [...R, [TL, SL]]>
  : R
  : R
