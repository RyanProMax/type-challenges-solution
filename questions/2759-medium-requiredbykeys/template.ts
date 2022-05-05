type RequiredByKeys<T, K = keyof T> = Copy<Required<Pick<T, K & keyof T>> & Omit<T, K & keyof T>>;

interface User2759 {
  name?: string
  age?: number
  address: string
}

type result2759 = RequiredByKeys<User2759, 'name'>
