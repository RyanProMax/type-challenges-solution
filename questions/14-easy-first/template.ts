/**
 * keywords:
 * - infer
 */

// answer 1:
// type First<T extends any[]> = T extends [] ? never : T[0];

// answer 2: 
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0];

// answer 3:
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// answer 4:
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;
