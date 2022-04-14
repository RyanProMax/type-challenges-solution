import { Equal } from '@type-challenges/utils'

type AppendToObject<T extends Record<string, any>, U extends string, V> = {
  [K in (keyof T | U)]: K extends keyof T ? T[K] : V
}

type test1 = {
  key: 'cat'
  value: 'green'
}

type result527 = AppendToObject<test1, 'home', boolean>
