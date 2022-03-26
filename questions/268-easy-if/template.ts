type If<C extends boolean, T, F> = C extends true ? T : F;

type result268 = If<true, 'a', 'b'>