/**
 * 1. keywords: 
 * - Mapped Types: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
 * - Indexed Access Types: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html#handbook-content
 * - Keyof Type Operator: https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#handbook-content
 * 
 * 2. explain:
 * T 为 Todo，即 
 * interface Todo {
 *  title: string
 *  description: string
 *  completed: boolean
 * }
 * 让 K 继承 T 的键 keys 进行类型约束
 * 再使用 P 遍历 K 即可: 
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
};
