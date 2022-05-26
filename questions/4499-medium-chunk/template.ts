type Chunk<A extends unknown[], L extends number, R extends unknown[] = [], I extends unknown[] = []> = A extends [infer AL, ...infer AR]
  ? R[I['length']] extends unknown[] 
    ? R[I['length']]['length'] extends L
      ? Chunk<A, L, R, [...I, any]>
      : R extends [...infer RL, infer RR]
        ? RR extends unknown[]
            ? Chunk<AR, L, [...RL, [...RR, AL]], I>
            : never
        : never
    : Chunk<A, L, [...R, []], I>
  : R
