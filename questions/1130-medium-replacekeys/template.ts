type ReplaceKeys<U, T extends string, Y> = U extends U
  ? { 
    [P in keyof U]: P extends T 
      ? P extends keyof Y 
        ? Y[P]
        : never
      : U[P]
   }
  : never

type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}

type Nodes = NodeA | NodeB | NodeC;

type result1130 = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>

type result1130_2 = ReplaceKeys<Nodes, 'name', {aa: number}>
