type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

interface Todo2793 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type result2793 = Mutable<Readonly<Todo2793>>
