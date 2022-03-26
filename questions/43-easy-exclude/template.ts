/**
 * keywords:
 * - Unions 类型彼此的比较
 * 
 * 假设 T = 'a' | 'b' | 'c', U = 'a'
 * T extends U 会遍历 T 类型与 U 进行对比
 * 因此以下最终返回 never | 'b' | 'c'，即 'b' | 'c'
 */

type MyExclude<T, U> = T extends U ? never : T

type result43 = MyExclude<"a" | "b" | "c", "a" | "b">