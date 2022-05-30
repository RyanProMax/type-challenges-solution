type Trunc<S extends number | string> = `${S}` extends `${infer R}.${infer _}`
  ? R
  : `${S}`
