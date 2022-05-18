type Flip<T> = {
  [P in keyof T as T[P] extends string | number | boolean ? `${T[P]}` : never]: P
}
