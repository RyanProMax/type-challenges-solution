type MediumKebabcase<S extends string> = S extends `${infer S1}${infer S2}`
? S2 extends Uncapitalize<S2>
  ? `${Uncapitalize<S1>}${MediumKebabcase<S2>}`
  : `${Uncapitalize<S1>}-${MediumKebabcase<S2>}`
: S;


type result612_1 = MediumKebabcase<'FooBarBaz'>;
type result612_2 = MediumKebabcase<'Foo-Bar'>;
