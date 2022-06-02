type IndexOf<T extends unknown[], U extends unknown, R extends unknown[] = []> = R['length'] extends T['length']
  ? -1
  : T[R['length']] extends U
  ? R['length']
  : IndexOf<T, U, [...R, any]>;
