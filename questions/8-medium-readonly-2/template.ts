type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}

type result8 = MyReadonly2<Todo1>;