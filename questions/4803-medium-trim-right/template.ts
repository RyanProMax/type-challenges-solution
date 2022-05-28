type TrimRight<S extends string> = S extends `${infer SL}${' ' | '\n' | '\t'}` ? TrimRight<SL> : S;

type result4803 = TrimRight<'   str '>
