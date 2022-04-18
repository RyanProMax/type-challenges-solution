import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MediumCamecase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<MediumCamecase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<MediumCamecase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<MediumCamecase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<MediumCamecase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<MediumCamecase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<MediumCamecase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<MediumCamecase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<MediumCamecase<'ABC'>, 'ABC'>>,
  Expect<Equal<MediumCamecase<'-'>, '-'>>,
  Expect<Equal<MediumCamecase<''>, ''>>,
  Expect<Equal<MediumCamecase<'😎'>, '😎'>>,
]
