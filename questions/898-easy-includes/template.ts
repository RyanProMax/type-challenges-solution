/**
 * keywords: 
 * - 如何对比两种类型是否相等
 * - 如何遍历数组
 */

type isEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer F, ...infer R]
  ? isEqual<F, U> extends true
    ? true
    : Includes<R, U>
  : false

type result898 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>
