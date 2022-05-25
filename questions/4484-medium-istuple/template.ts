/**
 * 元组的length是定长的，是明确的数字
 * 数组的length是number
 */
type IsTuple<T> = T extends readonly unknown[] ?
  number extends T['length']
  ? false
  : true
  : false
