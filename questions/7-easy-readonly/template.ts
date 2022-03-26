/**
 * keywords: 
 * - Readonly: https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
 */

// type MyReadonly<T> = Readonly<T>;

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
};
