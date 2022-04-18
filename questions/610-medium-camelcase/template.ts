type MediumCamecase<S extends string> = S extends `${infer First}-${infer Capital}${infer Rest}` 
? Capital extends Capitalize<Capital> ? `${First}-${MediumCamecase<`${Capital}${Rest}`>}` : `${First}${Capitalize<Capital>}${MediumCamecase<Rest>}`
: S;

type result610 = MediumCamecase<'foo-bar-baz'>
