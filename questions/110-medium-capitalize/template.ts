type MyCapitalize<S extends string> = S extends `${infer B}${infer R}` 
  ? `${Uppercase<B>}${R}` 
  : `${Uppercase<S>}`
