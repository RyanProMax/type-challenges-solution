type Merge<F, S> = {
  [P in (keyof F | keyof S)]: P extends keyof S ? S[P] : F[P]
};

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type result599 = Merge<Foo, Bar>
