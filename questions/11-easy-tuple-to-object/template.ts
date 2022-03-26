/**
 * keywords: 
 * - Tuple destructuring: https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring
 * - 遍历数组: T[number]
 */

type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}
