type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false;

type result2693 = EndsWith<'abc', 'bc'>;
