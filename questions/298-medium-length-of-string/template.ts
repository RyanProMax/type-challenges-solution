type LengthOfString<S extends string, T extends string[] = []> = S extends ''
  ? T['length']
  : S extends `${infer F}${infer R}`
    ? LengthOfString<R, [...T, F]>
    : never

type result298 = LengthOfString<'kumiko'>;
