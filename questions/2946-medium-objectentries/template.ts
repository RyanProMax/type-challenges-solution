type ObjectEntries<T, U = keyof T> = U extends U 
  ? U extends keyof T
    ? [U, Required<T>[U]]
    : never
  : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type result2946 = ObjectEntries<Partial<Model>>;
