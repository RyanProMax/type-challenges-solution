type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer S}` ? S : never]: T[K]
}
