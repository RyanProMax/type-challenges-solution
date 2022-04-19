import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MediumKebabcase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<MediumKebabcase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<MediumKebabcase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<MediumKebabcase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<MediumKebabcase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<MediumKebabcase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<MediumKebabcase<'-'>, '-'>>,
  Expect<Equal<MediumKebabcase<''>, ''>>,
  Expect<Equal<MediumKebabcase<'😎'>, '😎'>>,
]
