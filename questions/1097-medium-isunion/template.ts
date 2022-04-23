/**
 * example:
 * 
 * -> type T = number | string
 * -> T extends T2 = (number extends number | string) | (string extends number | string)
 * -> ([number | string] extends [number]) | ([number | string] extends [string])
 * 
 */

type IsUnion<T, T2 = T> = T extends T2 
  ? [T2] extends [T] 
    ? false 
    : true 
  : never;

// type result1097 = IsUnion<string>;
type result1097 = IsUnion<string|number>;
