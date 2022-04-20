type Diff<O, O1> = {
  [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
    ? O1[K]
    : never
}

type Foo645 = {
  name: string
  age: string
}
type Bar645 = {
  name: string
  age: string
  gender: number
}

type result645 = Diff<Foo645, Bar645>;
