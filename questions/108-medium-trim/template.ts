type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer R}` 
  ? Trim<R> 
  : S extends `${infer T}${' ' | '\n' | '\t'}`
    ? Trim<T>
    : S
