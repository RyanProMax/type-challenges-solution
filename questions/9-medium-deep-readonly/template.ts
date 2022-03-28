type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> 
    ? DeepReadonly<T[P]> 
    : T[P]
}

type X9 = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type result9 = DeepReadonly<X9>