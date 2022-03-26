type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> 
  ? U extends Promise<any> 
    ? MyAwaited<U> 
    : U
  : never

type X = Promise<string>
type result189 = MyAwaited<X>