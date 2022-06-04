type LastIndexOf<T extends unknown[], U extends unknown> = T extends [...infer R, infer L]
  ? U extends L
    ? R['length']
    : LastIndexOf<R, U>
  : -1
