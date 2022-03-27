/**
 * keywords: 
 * - as 的用法: 使用 “as” 语法重新映射键类型，可用于过滤指定键。
 * - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
 */

// answer 1:
// type MyOmit<T, U extends keyof T> = { [P in keyof T as P extends U ? never : P]: T[P] };

// answer 2:
type MyOmit<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

interface Todo {
  title: string
  description: string
  completed: boolean
}

type result3 = MyOmit<Todo, 'description' | 'completed'>