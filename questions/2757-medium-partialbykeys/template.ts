type Copy<T> = {
  [P in keyof T]: T[P]
}

type PartialByKeys<T, K = keyof T> = Copy<Omit<T, K & keyof T> & {
  [P in K & keyof T]?: T[P]
}>

interface User {
  name: string
  age: number
  address: string
}

type result2757 = PartialByKeys<User, 'name'>
