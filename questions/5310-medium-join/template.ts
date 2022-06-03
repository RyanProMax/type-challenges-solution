type Join<T extends unknown[], U extends string | number> = T extends [infer TL, ...infer TR]
  ? TR extends [infer _, ...infer __]
    ? `${TL extends string | number ? TL : ''}${U}${Join<TR, U> extends string | number ? Join<TR, U> : ''}`
    : TL
  : ''
