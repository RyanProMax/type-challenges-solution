/**
 * https://github.com/ghaiklor/type-challenges-solutions/blob/main/zh/medium-chainable-options.md
 */
/* type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  get(): T
} */

type Chainable<T = {}> = {
  option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<T & Record<K, V>>
  get(): T
}